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
            try
            {
                ICSharpCode.NRefactory.CSharp.SyntaxTree tree = ICSharpCode.NRefactory.CSharp.SyntaxTree.Parse(System.IO.File.ReadAllText(file), file);
                _namespace = new NameSpace();
                NameSpace_Parse(_namespace, tree.Children.First() as ICSharpCode.NRefactory.CSharp.NamespaceDeclaration);
            }
            catch
            {
                isFail = true;
            }
        }

        public NameSpace _namespace
        {
            get;
            private set;
        }


        static void NameSpace_Parse(NameSpace _this, ICSharpCode.NRefactory.CSharp.NamespaceDeclaration _namespace)
        {

            _this.name = _namespace.NamespaceName.ToString();
            foreach (TypeDeclaration m in _namespace.Members)
            {
                if (m != null)
                {
                    _this.types[m.Name] = new Type();
                }
            }
        }
        public void Type_Parse(Type _this, TypeDeclaration _type)
        {
            if (_type.ClassType == ClassType.Class)
                _this.type = TypeInfo.Typetype.type_class;
            else if (_type.ClassType == ClassType.Enum)
                _this.type = TypeInfo.Typetype.type_enum;
            else if (_type.ClassType == ClassType.Interface)
                _this.type = TypeInfo.Typetype.type_interface;
            else if (_type.ClassType == ClassType.Struct)
                _this.type = TypeInfo.Typetype.type_struct;

            foreach (AttributeSection _a in _type.Attributes)
            {
                foreach (ICSharpCode.NRefactory.CSharp.Attribute aa in _a.Attributes)
                {
                    _this.attr[aa.Type.ToString()] = new List<string>();
                    foreach (var a in aa.Arguments)
                    {
                        _this.attr[aa.Type.ToString()].Add(a.ToString());
                    }
                }

            }
        }

    }
}
