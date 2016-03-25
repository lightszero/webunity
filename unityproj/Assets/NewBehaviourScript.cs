using UnityEngine;
using System.Collections;
using Jint.Runtime.Interop;

public class NewBehaviourScript : MonoBehaviour
{

    Jint.Engine jint;

    // Use this for initialization
    void Start()
    {
        this.txt = "print(\"hello world\");";
        result = "";
        jint = new Jint.Engine((op)=>
        {
            op.AllowClr(typeof(tt.Log).Assembly);
        });

        
        System.Action<string> onc = (string txt) => { Debug.Log(txt); };

        jint.SetValue("print", onc);
        jint.Global.FastAddProperty("tt", new NamespaceReference(jint, "tt"), false, false, false);

    }
    string txt;
    string result;
    void OnGUI()
    {
        this.txt = GUILayout.TextArea(txt);
        if (GUILayout.Button("run"))
        {
            jint.Execute(txt);
        }
        GUILayout.Label("result=" + result);
    }
    // Update is called once per frame
    void Update()
    {

    }
}
namespace tt
{
    public class Log
    {
        public Log()
        {
        }
        public void Log2(string txt)
        {
            Debug.Log(txt);
        }
        public static void Log1(string txt)
        {
            Debug.Log(txt);
        }
    }
}