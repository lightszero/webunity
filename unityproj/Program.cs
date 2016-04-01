using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace tc
{
    public class t
    {
        public t()
        {
            a = 4;
        }
        int a = 0;
    }
}
namespace WindowsFormsApplication1
{
    static class Program
    {
        static Jint.Engine jsengine;
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            jsengine = new Jint.Engine((op) =>
             {
                 op.AllowClr(typeof(Program).Assembly);
             });
            //加入wi 命名空间
            jsengine.Global.FastAddProperty("tc", new Jint.Runtime.Interop.NamespaceReference(jsengine, "tc"), false, false, false);

            //增加函数
            System.Action<string> onc = (string txt) => { Debug.WriteLine("<J>" + txt); };
            jsengine.SetValue("log", onc);
            var obj = jsengine.Execute("new tc.t();").GetCompletionValue();
            var _obj = obj.AsObject();


            test01();
        }
        static void test01()
        {
            string coded = "var ab = (function () {\n" +
"function ab() {" +
"        this.aa2 = \"33\";" +
"        this.a1 = 5;" +
"        }" +
"       ab.prototype.start = function() {" +
"new tc.t();" +
"return \"fuck\"" +
"       };" +
"       ab._wi_export = { \"a1\": \"int\", \"a2\": \"string\" };" +
"       return ab;" +
"   }());";
            jsengine.Execute(coded);
            var env = jsengine.ExecutionContext.LexicalEnvironment;
            var obj = jsengine.Execute("new ab();").GetCompletionValue();
            var _obj = obj.AsObject();
            _obj.GetProperty("a1").Value = new Jint.Native.JsValue(5);
            //_obj.FastSetProperty("a1", new Jint.Runtime.Descriptors.PropertyDescriptor(new Jint.Native.JsValue(5),true,true,true));
            string code = "var _ab=new ab()";
            jsengine.Execute(code);

            var _ab = jsengine.GetValue("_ab");
            var func = _obj.Prototype.GetProperty("start");
            var __obj = func.Value.Value.AsObject() as Jint.Native.Function.ScriptFunctionInstance;


            var oo = jsengine.GetValue("ab").AsObject() as Jint.Native.Function.ScriptFunctionInstance;
            var _nobj = __obj.Call(Jint.Native.JsValue.Null, new Jint.Native.JsValue[] { });
            var r = __obj.Call(_ab, new Jint.Native.JsValue[] { });
            string code2 = "_ab.start()";
            jsengine.Execute(code2);

            //Application.EnableVisualStyles();
            //Application.SetCompatibleTextRenderingDefault(false);
            //Application.Run(new Form1());

        }
    }
}
