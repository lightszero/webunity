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
                    if (m.Value.genmode == MethodGenMode.Constructor_Warp)
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
                    if (m.Value.genmode == MethodGenMode.ClassWarp || m.Value.genmode == MethodGenMode.Empty)
                        m.Value.GenCsCode(_namespace, this);
                }
                StringTool.DecSpace();
            }
            StringTool.AppendLine("}");

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
    }

    public class Method
    {
        public Method(string name)
        {
            this.name = name;
        }

        public string name;
        public string returntype;
        public bool isstatic;
        public Dictionary<string, string> paramstring = new Dictionary<string, string>();
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
                    head += paramstring.ToArray()[i].Value + " " + paramstring.ToArray()[i].Key;
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
                    head += paramstring.ToArray()[i].Value + " " + paramstring.ToArray()[i].Key;
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
                    head += paramstring.ToArray()[i].Value + " " + paramstring.ToArray()[i].Key;
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
                    head += paramstring.ToArray()[i].Value + " " + paramstring.ToArray()[i].Key;
                }
                head += ")";
                StringTool.AppendLine(head);
                StringTool.AppendLine("{");
                {
                    StringTool.AddSpace();
                    string newline = (isstatic? (type.srctypefullname+"."): ("__warpValue.")) + name + "(";
                    for (int i = 0; i < paramstring.Count; i++)
                    {
                        if (i > 0) newline += ",";
                        var p = paramstring.ToArray()[i];
                        newline += GetParamCall(type, p.Value, p.Key);
                    }
                    newline += ")";
                    if (returntype != null && returntype != "void")
                    {
                        StringTool.AppendLine("var _out = " + newline + ";");
                        StringTool.AppendLine("return " + GetReturnCall(type, returntype, "_out")+";");
                    }
                    else
                    {
                        StringTool.AppendLine(newline + ";");
                    }
                    StringTool.DecSpace();
                }
                StringTool.AppendLine("}");
            }
        }
        string GetReturnCall(Type type, string paramtype, string paramname)
        {
            if(paramtype.Contains(type.destnamespace))
            {
                return "new " + paramtype + "(" + paramname + ")";
            }
            return paramname;
        }
        string GetParamCall(Type type, string paramtype, string paramname)
        {
            if (paramtype.Contains(type.destnamespace))
            {
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
