using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace recallunity
{
    public interface ILogger
    {
        void Log(string log);
    }
    public partial class ILParser
    {
        ILogger logger;
        public ILParser(ILogger log)
        {
            this.logger = log;
        }
        ModuleDefinition module;
        Dictionary<string, TypeInfo> infos = new Dictionary<string, TypeInfo>();
        Dictionary<string, BuildInfo> buildinfo = new Dictionary<string, BuildInfo>();

        public void LoadDll(string filename)
        {
            logger.Log("==>Call LoadDll");
            module = Mono.Cecil.ModuleDefinition.ReadModule(filename);
            foreach (TypeDefinition t in module.GetTypes())
            {
                if (t.IsAbstract && t.IsClass) continue;
                if (t.Name.Contains("Assert"))
                {

                }
                if (t.IsPublic == false) continue;
                if (t.Name.Contains("`")) continue;
                TypeInfo _t = new TypeInfo(t);
                infos[t.FullName] = _t;

                TestNest(t);
            }
            logger.Log("findtype:" + infos.Count);
        }

        private void TestNest(TypeDefinition t)
        {
            if (t.HasNestedTypes)
            {
                foreach (var nt in t.NestedTypes)
                {
                    if (nt.Name.Contains("`")) continue;

                    TypeInfo _nt = new TypeInfo(nt);
                    infos[nt.FullName] = _nt;

                    TestNest(nt);
                }
            }
        }


        public NameSpaceFilter filter;
        public void ExportProj(NameSpaceFilter filter, string csprojpath, string tsprojpath)
        {
            logger.Log("==>Call ExportProj");
            this.filter = filter;
            string cspath = System.IO.Path.GetFullPath(csprojpath);
            if (System.IO.Directory.Exists(cspath) == false)
                System.IO.Directory.CreateDirectory(cspath);


            string tspath = System.IO.Path.GetFullPath(tsprojpath);
            if (System.IO.Directory.Exists(tspath) == false)
                System.IO.Directory.CreateDirectory(tspath);

            buildinfo.Clear();
            foreach (var t in this.infos)
            {
                if (t.Key.Contains(filter.srcname) == false)
                {
                    logger.Log("except:" + t.Key);
                    continue;
                }
                buildinfo[t.Key] = new BuildInfo();
            }

            logger.Log("Try Export:" + buildinfo.Count);

            for (int i = 0; i < 2; i++)
            {
                logger.Log("Try Export Time:" + i + "begin");

                int needbuildcount = 0;
                for (int j = 0; j < buildinfo.Count; j++)
                //foreach (var t in buildinfo)
                {
                    var t = buildinfo.ToArray()[j];
                    if (t.Value.hasBuild) continue;
                    needbuildcount++;
                    int si = t.Key.IndexOf('.');
                    string filename = t.Key;
                    if (filename.Contains("/"))
                    {
                        filename = filename.Replace('/', '_');
                    }
                    if (filename.Contains("<"))
                    {
                        continue;
                    }
                    string csfilename = System.IO.Path.Combine(cspath, filename.Substring(si + 1) + ".cs");
                    string tsfilename = System.IO.Path.Combine(tspath, filename.Substring(si + 1) + ".ts");
                    if (i == 0)
                        TryExport(t.Key, csfilename, tsfilename);
                    else
                        DoExport(t.Key, csfilename, tsfilename);
                }
                logger.Log("Try Export Time:" + i + " still have:" + needbuildcount);
                if (needbuildcount == 0)
                    break;
            }
            logger.Log("Export Done");
        }
        bool TestTypeReady(params string[] needtype)
        {
            foreach (var t in needtype)
            {
                if (buildinfo.ContainsKey(t))
                {
                    if (buildinfo[t].hasBuild == false)
                        return false;
                }
                else
                {
                    if (t == "System.Void" || t == "System.Object"
                        || t == "System.String" || t == "System.Single" || t == "System.Double"
                        || t == "System.Boolean"
                        || t == "System.Char" || t == "System.Byte" || t == "System.SByte"
                        || t == "System.Int16" || t == "System.Int32" || t == "System.Int64"
                        || t == "System.UInt16" || t == "System.UInt32" || t == "System.UInt64")
                    {
                        continue;
                    }
                    else if (t.Last() == '&')
                    {
                        bool br = TestTypeReady(t.Substring(0, t.Length - 1));
                        if (!br) return false;
                        else continue;
                    }
                    else if (t.Last() == ']')
                    {
                        int i = t.LastIndexOf('[');
                        bool br = TestTypeReady(t.Substring(0, i));
                        if (!br) return false;
                        else continue;
                    }
                    else if (t.Last() == '>')//a t type
                    {
                        continue;
                    }
                    else if (t == "System.Runtime.CompilerServices.IsVolatile"
                        || t == "System.Single modreq(System.Runtime.CompilerServices.IsVolatile)"
                        || t == "System.Runtime.Serialization.ISerializationSurrogate"
                        || t == "System.Runtime.Serialization.StreamingContext"
                        || t == "System.Runtime.Serialization.ISurrogateSelector"
                        || t == "System.Reflection.Assembly"
                        || t == "System.Reflection.MethodInfo"
                        || t == "System.Text.Encoding"
                        || t == "System.IntPtr"
                        || t == "System.Type"
                        || t == "System.Uri"
                        || t == "System.Net.EndPoint"
                        || t == "System.DateTime"
                        || t == "System.Exception"
                        || t == "System.Collections.IEnumerator"
                        || t == "System.Collections.Hashtable"
                        || t == "System.Collections.IDictionary"
                        )

                    {
                        continue;
                    }
                    else if (t == "ReturnType" || t == "FieldType")
                    {
                        continue;
                    }
                    else
                    {
                        throw new Exception("not find type:" + t);
                    }
                }
            }
            return true;
        }

        //先检查，再导出
        void TryExport(string type, string csfilepath, string tsfilepath)
        {

            var br = TypeReady(type);

            if (br)//ready to export
            {
                buildinfo[type].hasBuild = true;
            }

            DoExport(type, csfilepath, tsfilepath);
        }
        //核心方法
        void DoExport(string type, string csfilepath, string tsfilepath)
        {
            var def = infos[type].def;

            if (infos[type].type == TypeInfo.Typetype.type_enum)
            {
                Export_Enum(def, csfilepath, tsfilepath);
                buildinfo[type].hasBuild = true;
            }
            else if (infos[type].type == TypeInfo.Typetype.type_interface || infos[type].type == TypeInfo.Typetype.type_struct || infos[type].type == TypeInfo.Typetype.type_class)
            {

                Export_Def(def, infos[type].type, csfilepath, tsfilepath);
                buildinfo[type].hasBuild = true;
            }

        }
        string getFullName(TypeReference def)
        {

            var t = def as TypeDefinition;
            if (t != null && t.BaseType != null && (t.BaseType.Name == "Delegate" || t.BaseType.Name == "MulticastDelegate"))
            {
                foreach (var md in t.Methods)
                {
                    if (md.Name == "Invoke")
                    {
                        if (md.Parameters.Count == 0)
                        {
                            return "System.Action";
                        }
                        else
                        {
                            string outaction = "System.Action<";
                            foreach (var mdp in md.Parameters)
                            {
                                string pname = getFullName(mdp.ParameterType);
                                if (outaction.Last() == '<')
                                    outaction += pname;
                                else
                                    outaction += "," + pname;
                            }
                            return outaction + ">";

                        }
                    }
                }
                System.Diagnostics.Debugger.Break();
            }
            else if (def.IsGenericInstance)
            {
                GenericInstanceType gt = def as GenericInstanceType;
                if (def.Name == "Dictionary`2")
                {
                    string t0 = getFullName(gt.GenericArguments[0]);
                    string t1 = getFullName(gt.GenericArguments[1]);
                    return "System.Collections.Generic.Dictionary<" + t0 + "," + t1 + ">";

                }
                if (def.Name == "List`1" || def.Name == "IList`1")
                {
                    string t0 = getFullName(gt.GenericArguments[0]);
                    return "System.Collections.Generic.List<" + t0 + ">";

                }
                if (def.Name == "Func`1" )
                {
                    string tr = getFullName(gt.GenericArguments[0]);
                    return "System.Func<" + tr + ">";
                }
                if (def.Name == "Func`1" || def.Name == "Action`1")
                {
                    string t0 = getFullName(gt.GenericArguments[0]);
                    return "System.Action<" + t0 + ">";
                }
            }
            string _namespace = def.Namespace.Replace(filter.srcname, filter.destname);
            string name = def.Name;
            if (def.Namespace == "" && def.DeclaringType != null)
            {
                _namespace = def.DeclaringType.Namespace.Replace(filter.srcname, filter.destname);
                name = def.DeclaringType.Name + "_" + def.Name;

            }
            if (_namespace == "")
                _namespace = filter.destname;
            string outname = _namespace + "." + name;
            if (outname == "System.Single modreq(System.Runtime.CompilerServices.IsVolatile)")
            {
                outname = "float";
            }
            if (outname == "System.Single")
            {
                outname = "float";
            }
            if (outname == "System.String")
            {
                outname = "string";
            }
            if (outname == "System.Void")
            {
                outname = "void";
            }
            return outname;
        }


        //检查一个类型是否所有依赖类型均已导出
        private bool TypeReady(string type)
        {
            var td = infos[type];
            if (td.type == TypeInfo.Typetype.type_class || td.type == TypeInfo.Typetype.type_struct || td.type == TypeInfo.Typetype.type_interface)
            {
                //收集涉及的类型
                List<string> needtypecoll = new List<string>();
                int constructorcount = 0;
                foreach (MethodDefinition md in td.def.Methods)
                {
                    if (md.IsPublic == false)
                        continue;

                    if (md.IsConstructor)
                        constructorcount++;

                    if (md.ReturnType.IsGenericParameter == false)
                    {
                        if (needtypecoll.Contains(md.ReturnType.FullName) == false)
                            needtypecoll.Add(md.ReturnType.FullName);
                    }
                    foreach (var mdp in md.Parameters)
                    {
                        if (mdp.ParameterType.IsGenericParameter == false)
                        {
                            if (needtypecoll.Contains(mdp.ParameterType.FullName) == false)
                                needtypecoll.Add(mdp.ParameterType.FullName);
                        }
                    }
                }
                foreach (PropertyDefinition pd in td.def.Properties)
                {
                    if (pd.GetMethod.IsPublic == false)
                        continue;
                    if (needtypecoll.Contains(pd.GetMethod.ReturnType.FullName) == false)
                        needtypecoll.Add(pd.GetMethod.ReturnType.FullName);
                }
                foreach (FieldDefinition fd in td.def.Fields)
                {
                    if (fd.IsPublic == false)
                        continue;

                    if (needtypecoll.Contains(fd.FieldType.FullName) == false)
                        needtypecoll.Add(fd.FieldType.FullName);

                }
                //td.def.Methods.Count;
                //td.def.Fields
                bool br = TestTypeReady(needtypecoll.ToArray());
                return br;
            }
            else if (td.type == TypeInfo.Typetype.type_enum)
            {

            }
            else if (td.type == TypeInfo.Typetype.type_delegate)
            {
                foreach (var md in td.def.Methods)
                {
                    if (md.Name == "Invoke")
                    {
                        List<string> needtypecoll = new List<string>();

                        foreach (var mdp in md.Parameters)
                        {
                            if (mdp.ParameterType.IsGenericParameter == false)
                            {
                                if (needtypecoll.Contains(mdp.ParameterType.FullName) == false)
                                    needtypecoll.Add(mdp.ParameterType.FullName);
                            }
                        }
                        bool br = TestTypeReady(needtypecoll.ToArray());
                        return br;
                    }
                }
            }
            return false;
        }
    }

}
