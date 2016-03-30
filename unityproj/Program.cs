using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Windows.Forms;

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
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Jint.Engine jsengine = new Jint.Engine((op) =>
             {
                 op.AllowClr(typeof(Program).Assembly);
             });
            //加入wi 命名空间
            jsengine.Global.FastAddProperty("tc", new Jint.Runtime.Interop.NamespaceReference(jsengine, "tc"), false, false, false);

            //增加函数
            System.Action<string> onc = (string txt) => { Debug.WriteLine("<J>" + txt); };
            jsengine.SetValue("log", onc);
            string coded = "var ab = (function () {\n" +
    "function ab() {" +
    "        this.aa2 = \"33\";" +
    "        this.a1 = 5;" +
    "        }" +
     "       ab.prototype.start = function() {" +
      "new tc.t();" +
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
            string code2 = "_ab.start()";
            jsengine.Execute(code2);

            //Application.EnableVisualStyles();
            //Application.SetCompatibleTextRenderingDefault(false);
            //Application.Run(new Form1());
        }
    }
}
