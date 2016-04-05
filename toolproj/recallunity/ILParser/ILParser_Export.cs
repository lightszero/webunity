using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace recallunity
{
    public partial class ILParser
    {
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
                NewStr();
                AppendLine("namespace " + _namespace);
                AppendLine("{");
                {
                    AddSpace();
                    AppendLine("public enum " + name);
                    AppendLine("{");
                    {
                        AddSpace();
                        for (int i = 1; i < def.Fields.Count; i++)
                        {
                            AppendLine(def.Fields[i].Name + " = " + def.Fields[i].Constant + ",");
                        }
                        DecSpace();
                    }
                    AppendLine("}");
                    DecSpace();
                }
                AppendLine("}");
                var outcs = GetStr();
                System.IO.File.Delete(csfilepath);
                System.IO.File.WriteAllText(csfilepath, outcs);
            }

            {//outts
                NewStr();
                AppendLine("module " + _namespace);
                AppendLine("{");
                {
                    AddSpace();
                    AppendLine("export enum " + name);
                    AppendLine("{");
                    {
                        AddSpace();
                        for (int i = 1; i < def.Fields.Count; i++)
                        {
                            AppendLine(def.Fields[i].Name + " = " + def.Fields[i].Constant + ",");
                        }
                        DecSpace();
                    }
                    AppendLine("}");
                    DecSpace();
                }
                AppendLine("}");
                var outts = GetStr();
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
            //交互导出
            if (loader.isFail == false && loader._namespace.name == _namespace && loader._namespace.types.ContainsKey(name))
            {
                var t = loader._namespace.types[name];
                if (t.attr.ContainsKey("NotExport"))
                {
                    return;
                }
            }

            string outtype = "";
            if (type == TypeInfo.Typetype.type_interface)
                outtype = "interface";
            else if (type == TypeInfo.Typetype.type_struct || type == TypeInfo.Typetype.type_class)
                outtype = "class";
            {//outcs


                NewStr();
                AppendLine("namespace " + _namespace);
                AppendLine("{");
                {
                    AddSpace();
                    AppendLine("public " + outtype + " " + name);
                    AppendLine("{");
                    {
                        AddSpace();
                        //addcon
                        int constcount = 0;
                        for (int i = 0; i < def.Methods.Count; i++)
                        {
                            var m = def.Methods[i];
                            if (m.IsPublic == false) continue;

                            //if (exportname.Contains(m.Name)) continue;
                            //exportname.Add(m.Name);
                            if (m.IsConstructor)
                            {
                                constcount++;
                                string call = "public " + name + "(";
                                for (int j = 0; j < m.Parameters.Count; j++)
                                {
                                    if (j != 0) call += ",";
                                    call += getFullName(m.Parameters[j].ParameterType) + " " + m.Parameters[j].Name;
                                }
                                AppendLine(call + ")");
                                AppendLine("{");
                                AppendLine("}");


                            }
                        }
                        if (constcount > 1)
                        {
                            System.Diagnostics.Debugger.Break();
                        }
                        //AddField
                        for (int i = 0; i < def.Fields.Count; i++)
                        {
                            var f = def.Fields[i];

                            if (f.IsPublic == false) continue;
                            if (exportname.Contains(f.Name)) continue;
                            exportname.Add(f.Name);
                            string type_name = getFullName(f.FieldType) + " " + f.Name;

                            if (f.HasConstant)
                            {
                                type_name += " = " + f.Constant;
                            }
                            else
                            {
                                AppendLine("public " + type_name + ";");
                            }
                        }
                        //AddProp
                        for (int i = 0; i < def.Properties.Count; i++)
                        {
                            PropertyDefinition p = def.Properties[i];
                            if (p.GetMethod.IsPublic == false) continue;
                            if (exportname.Contains(p.Name)) continue;
                            exportname.Add(p.Name);
                            string type_name = getFullName(p.GetMethod.ReturnType) + " " + p.Name;
                            if ((type == TypeInfo.Typetype.type_interface))
                            {
                                AppendLine(type_name);
                            }
                            else
                            {
                                AppendLine("public " + type_name);
                            }
                            AppendLine("{");
                            {
                                AddSpace();

                                AppendLine("get;");
                                //{
                                //    AppendLine("{");
                                //    {
                                //        AddSpace();

                                //        DecSpace();
                                //    }
                                //    AppendLine("}");
                                //}
                                if ((type == TypeInfo.Typetype.type_interface))
                                {

                                }
                                else
                                {
                                    if (p.SetMethod != null && p.SetMethod.IsPublic)
                                        AppendLine("set;");
                                    else
                                        AppendLine("private set;");
                                }
                                DecSpace();
                            }
                            AppendLine("}");
                        }
                        //add func
                        for (int i = 0; i < def.Methods.Count; i++)
                        {
                            var m = def.Methods[i];
                            if (m.IsPublic == false) continue;

                            //if (exportname.Contains(m.Name)) continue;
                            //exportname.Add(m.Name);
                            if (m.IsConstructor)
                            {

                            }
                            else
                            {

                            }
                        }
                        if (constcount > 1)
                        {
                            System.Diagnostics.Debugger.Break();
                        }
                        DecSpace();
                    }
                    AppendLine("}");
                    DecSpace();
                }
                AppendLine("}");
                var outcs = GetStr();
                System.IO.File.Delete(csfilepath);
                System.IO.File.WriteAllText(csfilepath, outcs);
            }
        }




    }

}
