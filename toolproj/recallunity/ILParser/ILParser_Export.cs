using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace recallunity
{
    public partial class ILParser
    {
        //enum 相对简单，直接手写之
        private void Export_Enum(TypeDefinition def, string csfilepath, string tsfilepath)
        {

            string _namespace = def.Namespace.Replace(filter.srcname, filter.destname);
            string name = def.Name;
            if (def.Namespace == "")
            {
                _namespace = def.DeclaringType.Namespace.Replace(filter.srcname, filter.destname);
                name = def.DeclaringType.Name + "_" + def.Name;
            }
            if (_namespace == "")
                _namespace = filter.destname;
            csLoader loader = new csLoader(csfilepath);
            //交互导出
            if (loader.isFail == false && loader._namespace.name == _namespace && loader._namespace.types.ContainsKey(name))
            {
                var t = loader._namespace.types[name];
                if (t.attr.ContainsKey("NotExport"))
                {
                    return;
                }
            }
            {//outcs
                StringTool.NewStr();
                StringTool.AppendLine("namespace " + _namespace);
                StringTool.AppendLine("{");
                {
                    StringTool.AddSpace();
                    StringTool.AppendLine("public enum " + name);
                    StringTool.AppendLine("{");
                    {
                        StringTool.AddSpace();
                        for (int i = 1; i < def.Fields.Count; i++)
                        {
                            StringTool.AppendLine(def.Fields[i].Name + " = " + def.Fields[i].Constant + ",");
                        }
                        StringTool.DecSpace();
                    }
                    StringTool.AppendLine("}");
                    StringTool.DecSpace();
                }
                StringTool.AppendLine("}");
                var outcs = StringTool.GetStr();
                System.IO.File.Delete(csfilepath);
                System.IO.File.WriteAllText(csfilepath, outcs);
            }

            {//outts
                StringTool.NewStr();
                StringTool.AppendLine("module " + _namespace);
                StringTool.AppendLine("{");
                {
                    StringTool.AddSpace();
                    StringTool.AppendLine("export enum " + name);
                    StringTool.AppendLine("{");
                    {
                        StringTool.AddSpace();
                        for (int i = 1; i < def.Fields.Count; i++)
                        {
                            StringTool.AppendLine(def.Fields[i].Name + " = " + def.Fields[i].Constant + ",");
                        }
                        StringTool.DecSpace();
                    }
                    StringTool.AppendLine("}");
                    StringTool.DecSpace();
                }
                StringTool.AppendLine("}");
                var outts = StringTool.GetStr();
                System.IO.File.Delete(tsfilepath);
                System.IO.File.WriteAllText(tsfilepath, outts);
            }

        }

        private void Export_Def(TypeDefinition def, TypeInfo.Typetype type, string csfilepath, string tsfilepath)
        {
            List<string> exportname = new List<string>();
            string _namespace = def.Namespace.Replace(filter.srcname, filter.destname);
            string name = def.Name;
            if (def.Namespace == "")
            {
                _namespace = def.DeclaringType.Namespace.Replace(filter.srcname, filter.destname);
                name = def.DeclaringType.Name + "_" + def.Name;
            }
            if (_namespace == "")
                _namespace = filter.destname;
            csLoader loader = new csLoader(csfilepath);
            NameSpace _export = null;
            //交互导出
            if (loader.isFail == false && loader._namespace.name == _namespace && loader._namespace.types.ContainsKey(name))
            {
                var t = loader._namespace.types[name];
                if (t.attr.ContainsKey("NotExport"))
                {
                    return;
                }
                _export = loader._namespace;
            }
            else
            {
                _export = new NameSpace(_namespace);
                _export.types[name] = new Type(name);
            }
            var _exporttype = _export.types[name];
            _exporttype.desttypefullname = getFullName(def);
            _exporttype.srctypefullname = _exporttype.desttypefullname.Replace(filter.destname, filter.srcname);
            _exporttype.destnamespace = filter.destname;
            _exporttype.srcnamespace = filter.srcname;
            if (type == TypeInfo.Typetype.type_interface)
            {
                _export.types[name].type = TypeInfo.Typetype.type_interface;
            }
            else if (type == TypeInfo.Typetype.type_struct)
            {
                _export.types[name].type = TypeInfo.Typetype.type_class;
                _export.types[name].attr["ExportAsStruct"] = new List<string>();//增加导出属性
            }
            else if (type == TypeInfo.Typetype.type_class)
            {
                _export.types[name].type = TypeInfo.Typetype.type_class;
                _export.types[name].attr["ExportAsClassWarp"] = new List<string>();//增加导出属性
            }
            //重整代码结构
            {
                //增加一个warpfunc

                if (type != TypeInfo.Typetype.type_interface)
                {
                    Method func = new Method(name);
                    _exporttype.constructor = func;
                    func.returntype = "void";
                    var _fulltype = getFullName(def).Replace(filter.destname, filter.srcname);

                    func.paramstring["native"] = new Method.ParamInfo(_fulltype);
                    //if (this.infos[_fulltype].type == TypeInfo.Typetype.type_enum)
                    //{

                    //}
                    func.genmode = MethodGenMode.ConstructorFromNative;
                }
                //增加要给clonefunc
                if (type == TypeInfo.Typetype.type_struct)
                {
                    Method func = new Method("Clone");
                    _exporttype.methods[func.name] = func;
                    func.returntype = getFullName(def);

                    func.genmode = MethodGenMode.CloneWarp;

                }
                //扫描函数
                foreach (MethodDefinition md in def.Methods)
                {
                    if (md.IsPublic)
                    {
                        if (md.HasGenericParameters) continue;
                        if (md.ReturnType.IsGenericInstance) continue;
                        if (md.Name.IndexOf("set_") == 0) continue;
                        if (md.Name.IndexOf("get_") == 0) continue;
                        bool bskip = false;

                        foreach (var a in md.CustomAttributes)
                        {
                            if (a.AttributeType.Name == "ObsoleteAttribute")
                            {
                                if (a.ConstructorArguments.Count > 1)
                                {
                                    if (((bool)a.ConstructorArguments[1].Value) == true)
                                    {
                                        bskip = true;//已经废弃的接口
                                    }
                                }
                            }
                        }

                        foreach (var p in md.Parameters)
                        {
                            if (p.ParameterType.IsGenericParameter)//带模板的不要了
                            {
                                bskip = true;
                                break;
                            }

                        }
                        if (bskip) continue;
                        string funcname = md.Name;
                        if (md.IsConstructor)
                        {
                            if (md.IsStatic)
                                continue;
                            else
                            {
                                funcname = "CreateInstance";
                                if (_exporttype.methods.ContainsKey(funcname))
                                {
                                    for (int i = 2; i < 1000; i++)
                                    {
                                        funcname = "CreateInstance_" + i.ToString();
                                        if (_exporttype.methods.ContainsKey(funcname) == false) break;
                                    }
                                }
                            }
                        }
                        string oldname = funcname;
                        if (_exporttype.methods.ContainsKey(funcname))
                        {
                            if (char.IsNumber(funcname.Last()))
                            {
                                int clipi = funcname.LastIndexOf("_");
                                if (clipi > 0)
                                {
                                    funcname = funcname.Substring(0, clipi);
                                }
                            }
                            for (int i = 2; i < 1000; i++)
                            {
                                string outf = funcname + "_" + i;
                                if (_exporttype.methods.ContainsKey(outf) == false)
                                {
                                    funcname = outf;
                                    break;
                                }
                            }

                        }
                        Method func = new Method(funcname);
                        func.oldname = oldname;
                        _exporttype.methods[func.name] = func;
                        if (md.IsConstructor)
                        {//构造函数warp全部改为静态函数
                            func.returntype = name;
                            func.isstatic = true;
                            func.genmode = MethodGenMode.Constructor_Warp;
                            //func.warptype = getFullName(def).Replace(filter.destname, filter.srcname);
                        }
                        else if (type == TypeInfo.Typetype.type_interface)
                        {
                            func.isstatic = md.IsStatic;
                            func.genmode = MethodGenMode.Interface;
                            func.returntype = getFullName(md.ReturnType);
                        }
                        else
                        {
                            func.isstatic = md.IsStatic;
                            func.genmode = MethodGenMode.ClassWarp;
                            func.returntype = getFullName(md.ReturnType);
                        }
                        foreach (var p in md.Parameters)
                        {
                            string ptype = getFullName(p.ParameterType);
                            string pname = p.Name;
                            if (p.ParameterType.IsByReference)
                            {
                                if (p.IsOut)
                                {
                                    ptype += "&";
                                }
                            }
                            func.paramstring[pname] = new Method.ParamInfo(ptype);
                            string _fulltype = ptype.Replace(filter.destname, filter.srcname);
                            if (p.ParameterType.IsArray)
                                func.paramstring[pname].isarray = true;
                            if (this.infos.ContainsKey(_fulltype))
                            {
                                if (this.infos[_fulltype].type == TypeInfo.Typetype.type_enum)
                                    func.paramstring[pname].isenum = true;
                                else if (this.infos[_fulltype].type == TypeInfo.Typetype.type_delegate)
                                    func.paramstring[pname].isdelegate = true;

                            }

                        }

                    }
                }

                //增加一个warp attr
                if (type != TypeInfo.Typetype.type_interface)
                {
                    var f = new Field("__warpValue");
                    _exporttype.fields[f.name] = f;
                    f.type = getFullName(def).Replace(filter.destname, filter.srcname);
                    f.isstatic = false;
                    f.genmode = FieldGenMode.WarpKeeper;
                }
                //Field直接加上去
                foreach (FieldDefinition attr in def.Fields)
                {

                    if (attr.IsPublic == false) continue;

                    _exporttype.fields[attr.Name] = new Field(attr.Name);
                    _exporttype.fields[attr.Name].type = getFullName(attr.FieldType);
                    _exporttype.fields[attr.Name].isstatic = attr.IsStatic;
                    _exporttype.fields[attr.Name].isconst = attr.IsLiteral;

                    if (attr.HasConstant)
                        _exporttype.fields[attr.Name].defvalue = attr.Constant.ToString();

                    _exporttype.fields[attr.Name].genmode = FieldGenMode.PropWarp;


                }

                //prop 加上去
                foreach (PropertyDefinition prop in def.Properties)
                {
                    bool bskip = false;
                    foreach (var tt in prop.CustomAttributes)
                    {
                        if (tt.AttributeType.Name == "ObsoleteAttribute")
                        {
                            if (tt.ConstructorArguments.Count > 1)
                            {
                                if (((bool)tt.ConstructorArguments[1].Value) == true)
                                {
                                    bskip = true;//已经废弃的接口
                                }
                            }
                        }
                    }
                    if (bskip) continue;

                    if (prop.HasParameters)//有参数的属性，多半是index访问器
                    { 
                        continue;
                    }
                    if (prop.GetMethod.IsPublic == false) continue;
                    _exporttype.props[prop.Name] = new Property(prop.Name);
                    _exporttype.props[prop.Name].isstatic = prop.GetMethod.IsStatic;
                    _exporttype.props[prop.Name].getter = new Method("getter");
                    _exporttype.props[prop.Name].getter.returntype = getFullName(prop.GetMethod.ReturnType);
                    if (prop.SetMethod != null && prop.SetMethod.IsPublic == true)
                    {
                        _exporttype.props[prop.Name].setter = new Method("setter");
                    }
                    else
                    {
                        _exporttype.props[prop.Name].setter = null;
                    }
                }
            }
            var outcs = _export.GenCsCode();
            System.IO.File.Delete(csfilepath);
            System.IO.File.WriteAllText(csfilepath, outcs);

            var outts = _export.GenTsCode();
            System.IO.File.Delete(tsfilepath);
            System.IO.File.WriteAllText(tsfilepath, outts);

        }




    }

}
