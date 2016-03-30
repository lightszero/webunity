using UnityEngine;
using System.Collections;
namespace wi//web interface
{

}

namespace webunity
{
    public class JSCenter
    {
        public Jint.Engine jsengine
        {
            get; private set;
        }
        protected JSCenter()
        {
            jsengine = new Jint.Engine((op) =>
            {
                op.AllowClr(typeof(JSCenter).Assembly);//搜索当前符号
            });
            //加入wi 命名空间
            jsengine.Global.FastAddProperty("wi", new Jint.Runtime.Interop.NamespaceReference(jsengine, "wi"), false, false, false);
            jsengine.Global.FastAddProperty("BABYLON", new Jint.Runtime.Interop.NamespaceReference(jsengine, "BABYLON"), false, false, false);

            //增加函数
            System.Action<string> onc = (string txt) => { Debug.Log("<J>" + txt); };
            jsengine.SetValue("log", onc);


            LoadJS();
        }
        static JSCenter g_this;
        public static JSCenter Instance
        {
            get
            {
                if (g_this == null)
                    g_this = new JSCenter();
                return g_this;
            }
        }
        string buildjs = Application.dataPath + "/.html/game.js";

        public Jint.Native.Object.ObjectInstance NewObj(string name)
        {

             this.jsengine.Execute("new " + name + "();");
            return this.jsengine.GetCompletionValue().AsObject();
        }
        public void LoadJS()

        {
            using (var s = System.IO.File.OpenRead(buildjs))
            {
                byte[] b = new byte[(int)s.Length];
                s.Read(b, 0, b.Length);
                string code = System.Text.Encoding.UTF8.GetString(b);
                jsengine.Execute(code);
            }
        }

    }
}
