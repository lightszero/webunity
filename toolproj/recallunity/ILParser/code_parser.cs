using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace recallunity
{
    public class NameSpace
    {
        public NameSpace(string name)
        {
            this.name = name;
        }
        public string name;
        public Dictionary<string, Type> types = new Dictionary<string, Type>();
        public string GenCsCode()
        {
            StringTool.NewStr();
            StringTool.AppendLine("namespace " + name);
            StringTool.AppendLine("{");
            {
                StringTool.AddSpace();
                foreach (var t in types)
                {
                    t.Value.GenCsCode(this);
                }
                StringTool.DecSpace();
            }
            StringTool.AppendLine("}");
            return StringTool.GetStr();
        }
        public string GenTsCode()
        {
            StringTool.NewStr();
            StringTool.AppendLine("module " + name);
            StringTool.AppendLine("{");
            {
                StringTool.AddSpace();
                foreach (var t in types)
                {
                    t.Value.GenTsCode(this);
                }
                StringTool.DecSpace();
            }
            StringTool.AppendLine("}");
            return StringTool.GetStr();
        }
    }
    public class Type//所有的type都是 public的
    {
        public Type(string name)
        {
            this.name = name;
        }
        public string name;
        public TypeInfo.Typetype type;
        public string srctypefullname;
        public string desttypefullname;
        public string destnamespace;
        public string srcnamespace;
        //类型属性，只用来导入交互处理
        public Dictionary<string, List<string>> attr = new Dictionary<string, List<string>>();

        public Dictionary<string, Method> methods = new Dictionary<string, Method>();
        public Method constructor = null;
        public Dictionary<string, Property> props = new Dictionary<string, Property>();
        public Dictionary<string, Field> fields = new Dictionary<string, Field>();
        public void GenCsCode(NameSpace _namespace)
        {

            string outtype = "class";
            if (type == TypeInfo.Typetype.type_interface)
                outtype = "interface";
            else if (type == TypeInfo.Typetype.type_class)
                outtype = "class";
            else
            {
                throw new Exception("not support gen");
            }
            StringTool.AppendLine("public " + outtype + " " + name);
            StringTool.AppendLine("{");
            {
                StringTool.AddSpace();
                //addcon
                if (constructor != null)
                {
                    constructor.GenCsCode(_namespace, this);
                }
                foreach (var m in methods)
                {
                    if (m.Value.genmode == MethodGenMode.Constructor_Warp||m.Value.genmode== MethodGenMode.CloneWarp)
                        m.Value.GenCsCode(_namespace, this);
                }
                //AddField
                foreach (var f in fields)
                {
                    f.Value.GenCsCode(_namespace, this);
                }

                //AddProp
                foreach (var p in props)
                {
                    p.Value.GenCsCode(_namespace, this);
                }
                //add func
                foreach (var m in methods)
                {
                    if (m.Value.genmode == MethodGenMode.ClassWarp || m.Value.genmode == MethodGenMode.Empty || m.Value.genmode == MethodGenMode.Interface)
                        m.Value.GenCsCode(_namespace, this);
                }
                StringTool.DecSpace();
            }
            StringTool.AppendLine("}");

        }
        public void GenTsCode(NameSpace _namespace)
        {

        }
    }
    public enum FieldGenMode
    {
        Normal,
        PropWarp,
        WarpKeeper,
    }
    public class Field
    {
        public Field(string name)
        {
            this.name = name;
        }
        public bool isstatic;
        public string name;
        public string type;
        public string defvalue = null;
        public FieldGenMode genmode = FieldGenMode.Normal;
        public virtual void GenCsCode(NameSpace names, Type type)
        {
            //{
            //    var f = def.Fields[i];

            //    if (f.IsPublic == false) continue;
            //    if (exportname.Contains(f.Name)) continue;
            //    exportname.Add(f.Name);
            //    string type_name = getFullName(f.FieldType) + " " + f.Name;
            string outstr = "public ";
            if (this.isstatic)
                outstr += "static ";
            if (defvalue == null)
                StringTool.AppendLine(outstr + this.type + " " + name + ";");
            else
            {
                if (defvalue == "∞")
                {
                    outstr += this.type + " " + name + " = " + "float.PositiveInfinity";
                }
                else if (defvalue == "-∞")
                {
                    outstr += this.type + " " + name + " = " + "float.NegativeInfinity";
                }
                else if (this.type == "string")
                {
                    outstr += this.type + " " + name + " = \"" + defvalue + "\"";
                }
                else
                {
                    outstr += this.type + " " + name + " = " + defvalue;
                    if (this.type == "float" && defvalue.Last() != 'f')
                        outstr += "f";
                }

                StringTool.AppendLine(outstr + ";");
            }
            //    {
            //        type_name += " = " + f.Constant;
            //    }
            //    else
            //    {
            //    }
            //}
        }
    }
    public enum MethodGenMode
    {
        Empty,
        Constructor_Warp,
        ConstructorFromNative,
        ClassWarp,
        Interface,
        CloneWarp,
    }

    public class Method
    {
        public Method(string name)
        {
            this.name = name;
        }

        public string name;
        public string oldname;
        public string returntype;
        public bool isstatic;
        public class ParamInfo
        {
            public string type;
            public bool isenum;
            public bool isdelegate;
            public bool isarray;
            public ParamInfo(string type)
            {
                this.type = type;
            }
        }
        public Dictionary<string, ParamInfo> paramstring = new Dictionary<string, ParamInfo>();
        public string funccode;//函数代码，如果有要保留的代码，就不改写函数
        public MethodGenMode genmode = MethodGenMode.Empty;//函数生成模式
        //public string warptype;
        public virtual void GenCsCode(NameSpace names, Type type)
        {

            if (genmode == MethodGenMode.ConstructorFromNative)
            {
                string head = "";
                if (isstatic) head = "static ";
                head += "public " + name + "(";
                for (int i = 0; i < paramstring.Count; i++)
                {
                    if (i > 0) head += ",";
                    head += paramstring.ToArray()[i].Value.type + " " + paramstring.ToArray()[i].Key;
                }
                head += ")";
                StringTool.AppendLine(head);
                StringTool.AppendLine("{");
                {
                    StringTool.AddSpace();
                    StringTool.AppendLine("this.__warpValue = native;");
                    StringTool.DecSpace();
                }
                StringTool.AppendLine("}");
            }
            else if (genmode == MethodGenMode.Empty)
            {
                string head = "";
                if (isstatic) head = "static ";
                head += "public " + returntype + " " + name + "(";
                for (int i = 0; i < paramstring.Count; i++)
                {
                    if (i > 0) head += ",";
                    head += paramstring.ToArray()[i].Value.type + " " + paramstring.ToArray()[i].Key;
                }
                head += ")";
                StringTool.AppendLine(head);
                StringTool.AppendLine("{");

                StringTool.AppendLine("}");
            }
            else if (genmode == MethodGenMode.Constructor_Warp)
            {
                string head = "";
                if (isstatic) head = "static ";
                head += "public " + returntype + " " + name + "(";
                for (int i = 0; i < paramstring.Count; i++)
                {
                    if (i > 0) head += ",";
                    head += paramstring.ToArray()[i].Value.type + " " + paramstring.ToArray()[i].Key;
                }
                head += ")";
                StringTool.AppendLine(head);
                StringTool.AppendLine("{");
                {
                    StringTool.AddSpace();
                    string newline = "return new " + this.returntype + "("
                        + "new " + type.srctypefullname + "(";
                    for (int i = 0; i < paramstring.Count; i++)
                    {
                        if (i > 0) newline += ",";
                        var p = paramstring.ToArray()[i];
                        newline += GetParamCall(type, p.Value, p.Key);
                    }
                    StringTool.AppendLine(newline + "));");
                    StringTool.DecSpace();
                }
                StringTool.AppendLine("}");
            }
            else if (genmode == MethodGenMode.ClassWarp)
            {
                string head = "";
                if (isstatic) head = "static ";
                head += "public " + returntype + " " + name + "(";
                for (int i = 0; i < paramstring.Count; i++)
                {
                    if (i > 0) head += ",";
                    head += GetParamType(paramstring.ToArray()[i].Value) + " " + paramstring.ToArray()[i].Key;
                }
                head += ")";
                StringTool.AppendLine(head);
                StringTool.AppendLine("{");
                {
                    StringTool.AddSpace();

                    string newline = null;
                    if (name.IndexOf("op_") == 0)
                    {
                        string code = GetOpCode(name);
                        if (paramstring.Count == 1)//一元
                        {
                            var p = paramstring.ToArray()[0];
                            newline = code + GetParamCall(type, p.Value, p.Key);
                        }
                        else if (paramstring.Count == 2)//二元
                        {
                            var p = paramstring.ToArray()[0];
                            var p2 = paramstring.ToArray()[1];
                            newline = GetParamCall(type, p.Value, p.Key) + " " + code + " " + GetParamCall(type, p2.Value, p2.Key);

                        }
                        else
                        {
                            throw new Exception("not support opcode" + name);

                        }

                    }
                    else
                    {
                        newline = (isstatic ? (type.srctypefullname + ".") : ("__warpValue.")) + oldname + "(";
                        for (int i = 0; i < paramstring.Count; i++)
                        {
                            if (i > 0) newline += ",";
                            var p = paramstring.ToArray()[i];
                            newline += GetParamCall(type, p.Value, p.Key);
                        }
                        newline += ")";
                    }
                    if (returntype != null && returntype != "void")
                    {
                        StringTool.AppendLine("var _out = " + newline + ";");
                        StringTool.AppendLine("return " + GetReturnCall(type, returntype, "_out") + ";");
                    }
                    else
                    {
                        StringTool.AppendLine(newline + ";");
                    }
                    StringTool.DecSpace();
                }
                StringTool.AppendLine("}");
            }
            else if (genmode == MethodGenMode.Interface)
            {
                string head = "";
                if (isstatic) head = "static ";
                head += returntype + " " + name + "(";
                for (int i = 0; i < paramstring.Count; i++)
                {
                    if (i > 0) head += ",";
                    head += GetParamType(paramstring.ToArray()[i].Value) + " " + paramstring.ToArray()[i].Key;
                }
                head += ")";
                StringTool.AppendLine(head + ";");

            }
            else if (genmode == MethodGenMode.CloneWarp)
            {
                string head = "public " + returntype + " " + name + "()";
                StringTool.AppendLine(head);
                StringTool.AppendLine("{");
                StringTool.AddSpace();
                StringTool.AppendLine("return new " + returntype + "(__warpValue);");
                StringTool.DecSpace();
                StringTool.AppendLine("}");
            }
        }
        string GetOpCode(string name)
        {
            if (name.Contains("op_Addition"))
            {
                return "+";
            }
            else if (name.Contains("op_Subtraction"))
            {
                return "-";
            }
            else if (name.Contains("op_UnaryNegation"))
            {
                return "-";
            }
            else if (name.Contains("op_Multiply"))
            {
                return "*";
            }
            else if (name.Contains("op_Division"))
            {
                return "/";
            }
            else if (name.Contains("op_Equality"))
            {
                return "==";
            }
            else if (name.Contains("op_Inequality"))
            {
                return "!=";
            }
            else if (name.Contains("op_Implicit"))
            {
                return "";
            }
            else
            {
                throw new Exception("not support opcode" + name);
            }
        }
        string GetParamType(Method.ParamInfo paramtype)
        {
            if (paramtype.type.Contains("&&"))
            {
                return paramtype.type.Replace("&&", "");
            }
            else if (paramtype.type.Contains("&"))
            {
                return paramtype.type.Replace("&", "");

            }
            return paramtype.type;
        }
        //string GetReturnCall(Type type, Method.ParamInfo paramtype, string paramname)
        //{
        //    if (paramtype.type.Contains(type.destnamespace))
        //    {
        //        return "new " + paramtype + "(" + paramname + ")";
        //    }
        //    return paramname;
        //}
        string GetReturnCall(Type type, string paramtype, string paramname)
        {
            if (paramtype.Last() == ']')//isarray
            {
                string lasttype = paramtype.Replace(type.destnamespace, type.srcnamespace);
                if (lasttype == paramtype)
                    return paramname;
                else
                    return "ConvertTool.ConvertArray<" + paramtype.Substring(0, paramtype.Length - 2) + "," + lasttype.Substring(0, lasttype.Length - 2) + ">(" + paramname + ")";

            }
            if (paramtype.Contains(type.destnamespace))
            {
                return "new " + paramtype + "(" + paramname + ")";
            }
            return paramname;
        }
        string GetParamCall(Type type, Method.ParamInfo paramtype, string paramname)
        {
            if (paramtype.isarray)
            {
                string lasttype = paramtype.type.Replace(type.destnamespace, type.srcnamespace);
                if (lasttype == paramtype.type)
                    return paramname;
                else
                    return "ConvertTool.ConvertArray<" + lasttype.Substring(0, lasttype.Length - 2) + "," + paramtype.type.Substring(0, paramtype.type.Length - 2) + ">(" + paramname + ")";

            }
            if (paramtype.isenum)
            {
                return "(" + paramtype.type.Replace(type.destnamespace, type.srcnamespace) + ")(int)" + paramname;
            }
            if (paramtype.type.Contains(type.destnamespace))
            {
                if (paramtype.type.Contains("&&"))
                {
                    return "out " + paramname + ".__warpValue";
                }
                else if (paramtype.type.Contains("&"))
                {
                    return "ref " + paramname + ".__warpValue";
                }
                else
                    return paramname + ".__warpValue";
            }
            return paramname;
        }
    }

    public class Property
    {
        public Property(string name)
        {
            this.name = name;
        }
        public string name;
        public Method getter;
        public Method setter = null;//setter can be null      
        public virtual void GenCsCode(NameSpace names, Type type)
        {
            if ((type.type == TypeInfo.Typetype.type_interface))
            {
                StringTool.AppendLine(getter.returntype + " " + this.name);
            }
            else
            {
                StringTool.AppendLine("public " + getter.returntype + " " + this.name);
            }
            StringTool.AppendLine("{");
            {
                StringTool.AddSpace();

                StringTool.AppendLine("get;");
                //{
                //    AppendLine("{");
                //    {
                //        AddSpace();

                //        DecSpace();
                //    }
                //    AppendLine("}");
                //}
                if ((type.type == TypeInfo.Typetype.type_interface))
                {

                }
                else
                {
                    if (setter != null)
                        StringTool.AppendLine("set;");
                    else
                        StringTool.AppendLine("private set;");
                }
                StringTool.DecSpace();
            }
            StringTool.AppendLine("}");
        }
    }

}
