using UnityEngine;
using System.Collections;
using System.Diagnostics;
using System.Collections.Generic;
using Jint.Native.Json;

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
            System.Action<string> onc = JSLog;
            jsengine.SetValue("print", onc);
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
#if UNITY_EDITOR

        public static List<string> jslog = new List<string>();
#endif

        public static void JSLog(string log)
        {
            UnityEngine.Debug.Log("<J>" + log);
#if UNITY_EDITOR
            jslog.Add("<J>" + log);
#endif
        }

        public static void Log(string log)
        {
            UnityEngine.Debug.Log(log);
            jslog.Add(log);
        }
        public static void LogWarn(string log)
        {
            UnityEngine.Debug.LogWarning(log);
            jslog.Add("!" + log);
        }
        public Jint.Native.Object.ObjectInstance NewObj(string name)
        {

            this.jsengine.Execute("new " + name + "();");
            var r = this.jsengine.GetCompletionValue().AsObject();
            return r;
        }
        public Jint.Native.JsValue? GetStaticValue(string classname,string valuename)
        {
            var jsvalue = jsengine.Global.GetProperty(classname).Value.Value;
            if (jsvalue.IsObject() == false)
                return null;
            else if (jsvalue.AsObject().HasProperty(valuename))
            {
                return jsvalue.AsObject().GetProperty(valuename).Value;
            }

            return null;
        }
        public string ToJsonString(Jint.Native.JsValue value)
        {
            var serializer = new JsonSerializer(jsengine);
            var tjson = serializer.Serialize(value, Jint.Native.Undefined.Instance, Jint.Native.Undefined.Instance);
            return tjson.AsString();
        }
        public Jint.Native.JsValue Call(Jint.Native.Object.ObjectInstance _this, string func, Jint.Native.JsValue[] args)
        {
            var _func = _this.Prototype.GetProperty(func).Value.Value.AsObject() as Jint.Native.ICallable;
            try
            {
                return _func.Call(_this, args);
            }
            catch (Jint.Runtime.JavaScriptException exr)
            {
                UnityEngine.Debug.LogError("jserror in is pos:" + exr.Location.Source + "(" + exr.Location.Start.Line + "," + exr.Location.Start.Column + "-" + exr.Location.End.Line + "," + exr.Location.End.Column + ")");
                throw exr;
            }

        }

        public bool isjsbuild
        {
            get;
            private set;
        }
        public bool isjsload
        {
            get;
            private set;
        }
        public bool jsNeedBuild
        {
            get;
            private set;
        }
        public System.DateTime lastBuild
        {
            get;
            private set;
        }
        public void SetJsNeedBuild()
        {
            isjsbuild = false;
            isjsload = false;
            jsNeedBuild = true;
        }
        public static string codepath = Application.dataPath + "/tscode";
        public static string buildjs = Application.dataPath + "/.html/game.js";

        public bool BuildJS()
        {
            Process p = new Process();
            //调用一个bat，可以免去我们寻找tsc的麻烦
            p.StartInfo = new ProcessStartInfo(codepath + "/build.bat");
            p.StartInfo.WorkingDirectory = codepath;
            p.StartInfo.CreateNoWindow = true;
            p.StartInfo.UseShellExecute = false;
            p.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
            p.StartInfo.RedirectStandardOutput = true;
            p.Start();
            p.WaitForExit();
            string txt = p.StandardOutput.ReadToEnd();
            var info = txt.Split(new char[] { '\n' }, System.StringSplitOptions.None);
            if (info.Length == 3 && string.IsNullOrEmpty(info[2]))
            {
                Log("<Build>Build OK.");
                lastBuild = System.DateTime.Now;
                LoadJS();
                isjsbuild = true;
                jsNeedBuild = false;
                return true;
            }
            else
            {
                for (int i = 2; i < info.Length; i++)
                {
                    if (info[i] == "") continue;
                    LogWarn("<Build>" + info[i]);
                }
                return false;
            }
        }

        public void LoadJS()
        {
            using (var s = System.IO.File.OpenRead(buildjs))
            {
                byte[] b = new byte[(int)s.Length];
                s.Read(b, 0, b.Length);
                string code = System.Text.Encoding.UTF8.GetString(b);
                jsengine.Execute(code);
                isjsload = true;
            }
        }

    }
}
