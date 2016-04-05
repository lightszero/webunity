using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace recallunity
{
    interface ILogger
    {
        void Log(string log);
    }
    class ILParser
    {
        ILogger logger;
        public ILParser(ILogger log)
        {
            this.logger = log;
        }
        ModuleDefinition module;
        Dictionary<string, TypeInfo> infos = new Dictionary<string, TypeInfo>();

        public void LoadDll(string filename)
        {
            logger.Log("==>Call LoadDll");
            module = Mono.Cecil.ModuleDefinition.ReadModule(filename);
            foreach (TypeDefinition t in module.GetTypes())
            {
                if (t.IsPublic == false) continue;
                //if (t.Namespace.Contains("UnityEngine") == false) continue;
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
                    TypeInfo _nt = new TypeInfo(nt);
                    infos[nt.FullName] = _nt;

                    TestNest(nt);
                }
            }
        }

        Dictionary<string, BuildInfo> buildinfo = new Dictionary<string, BuildInfo>();

        public void ExportProj(NameSpaceFilter filter, string csprojpath, string tsprojpath)
        {
            logger.Log("==>Call ExportProj");
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
                    string tsfilename = System.IO.Path.Combine(cspath, filename.Substring(si + 1) + ".cs");
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
                        bool br = TestTypeReady(t.Substring(0, t.Length - 2));
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
                        || t == "System.Text.Encoding"
                        || t == "System.IntPtr"
                        || t == "System.Type"
                        || t == "System.Uri"
                        || t == "System.Net.EndPoint"
                        || t == "System.DateTime"
                        || t == "System.Exception"
                        || t == "System.Collections.IEnumerator"
                        || t == "System.Collections.Hashtable"
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
        void TryExport(string type, string csfilepath, string tsfilepath)
        {

            var br = TypeReady(type);

            if (br)//ready to export
            {
                buildinfo[type].hasBuild = true;
            }

            DoExport(type, csfilepath, tsfilepath);
        }
        void DoExport(string type, string csfilepath, string tsfilepath)
        {

        }

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
            else if(td.type== TypeInfo.Typetype.type_enum)
            {

            }
            else if(td.type== TypeInfo.Typetype.type_delegate)
            {
                foreach(var md in td.def.Methods)
                {
                    if(md.Name=="Invoke")
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
    public class BuildInfo
    {

        public bool hasBuild;
    }
    public class NameSpaceFilter
    {
        public NameSpaceFilter()
        {

        }
        public NameSpaceFilter(string src, string dest)
        {
            this.srcname = src;
            this.destname = dest;
        }
        public string srcname;
        public string destname;
    }
    public class TypeInfo
    {
        public enum Typetype
        {
            type_unknown,
            type_interface,
            type_class,
            type_struct,
            type_delegate,
            type_enum,
        }
        public TypeInfo(TypeDefinition def)
        {
            this.def = def;
            var t = def;
            type = Typetype.type_unknown;
            if (t.IsInterface)
                type = Typetype.type_interface;
            if (t.IsClass)
            {
                type = Typetype.type_class;
                if (t.BaseType.Name == "Delegate" || t.BaseType.Name == "MulticastDelegate")
                {
                    type = Typetype.type_delegate;
                }
            }
            if (t.IsValueType)
                type = Typetype.type_struct;
            if (t.IsEnum)
                type = Typetype.type_enum;
        }
        public TypeDefinition def;
        public Typetype type;
        public override string ToString()
        {
            string basetype = "<nobase>";
            if (def.BaseType != null)
                basetype = def.BaseType.Name;
            return type + "||" + def.FullName + ":" + basetype;
        }
    }

}
