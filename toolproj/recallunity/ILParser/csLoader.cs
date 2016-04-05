using ICSharpCode.NRefactory.CSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace recallunity
{
    //加载已导出的cs文件中的属性，方便分析
    public class csLoader
    {
        public bool isFail
        {
            get;
            private set;
        }
        public csLoader(string file)
        {
            if (System.IO.File.Exists(file) == false)
            {
                isFail = true;
                return;
            }
            ICSharpCode.NRefactory.CSharp.SyntaxTree tree = ICSharpCode.NRefactory.CSharp.SyntaxTree.Parse(System.IO.File.ReadAllText(file), file);
            _namespace = new NameSpace();
            _namespace.Parse(tree.Children.First() as ICSharpCode.NRefactory.CSharp.NamespaceDeclaration);
        }

        public NameSpace _namespace
        {
            get;
            private set;
        }

        public class NameSpace
        {
            public string name;
            public Dictionary<string, Type> types = new Dictionary<string, Type>();

            public void Parse(ICSharpCode.NRefactory.CSharp.NamespaceDeclaration _namespace)
            {

                this.name = _namespace.NamespaceName.ToString();
                foreach (TypeDeclaration m in _namespace.Members)
                {
                    if (m != null)
                    {
                        types[m.Name] = new Type();
                        types[m.Name].Parse(m);
                    }
                }
            }
        }
        public class Type
        {
            public string name;
            public TypeInfo.Typetype type;
            public Dictionary<string, List<string>> attr = new Dictionary<string, List<string>>();
            public void Parse(TypeDeclaration _type)
            {
                if (_type.ClassType == ClassType.Class)
                    this.type = TypeInfo.Typetype.type_class;
                else if (_type.ClassType == ClassType.Enum)
                    this.type = TypeInfo.Typetype.type_enum;
                else if (_type.ClassType == ClassType.Interface)
                    this.type = TypeInfo.Typetype.type_interface;
                else if (_type.ClassType == ClassType.Struct)
                    this.type = TypeInfo.Typetype.type_struct;

                foreach (AttributeSection _a in _type.Attributes)
                {
                    foreach (ICSharpCode.NRefactory.CSharp.Attribute aa in _a.Attributes)
                    {
                        attr[aa.Type.ToString()] = new List<string>();
                        foreach (var a in aa.Arguments)
                        {
                            attr[aa.Type.ToString()].Add(a.ToString());
                        }
                    }

                }
            }
        }
    }
}
