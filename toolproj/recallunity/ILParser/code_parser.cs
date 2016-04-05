using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace recallunity
{
    public class NameSpace
    {
        public string name;
        public Dictionary<string, Type> types = new Dictionary<string, Type>();

    }
    public class Type//所有的type都是 public的
    {
        public string name;
        public TypeInfo.Typetype type;

        //类型属性，只用来导入交互处理
        public Dictionary<string, List<string>> attr = new Dictionary<string, List<string>>();

        public Dictionary<string, Func> methods = new Dictionary<string, Func>();
        public Dictionary<string, FuncGetSet> props = new Dictionary<string, FuncGetSet>();
        public Dictionary<string, Field> fields = new Dictionary<string, Field>();
    }
    public class Field
    {
        public string type;
        public string defvalue = null;
    }
    public class Func
    {
        public string returntype;
        public List<string> paramstring;
        public string funccode;//函数代码，如果有要保留的代码，就不改写函数
        public int funcgenmode;//函数生成模式
    }
    public class FuncGetSet
    {
        public Func getter;
        public Func setter=null;//setter can be null       
    }

}
