using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace recallunity
{

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
