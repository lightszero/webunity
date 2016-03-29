using UnityEngine;
using System.Collections;
using Jint.Native;

public class com_javascript : MonoBehaviour
{
    public string classname;
    JsValue inst = JsValue.Null;
    // Use this for initialization
    void Start()
    {
        var proto = webunity.JSCenter.Instance.jsengine.Global.GetProperty(classname).Value.Value.AsObject() as Jint.Native.Function.FunctionInstance;
        //Debug.Log("ps:"+proto.FormalParameters[0]);
        inst = proto.Call(JsValue.Null,new JsValue[] { });
        Debug.Log("type" + inst);
    }

    // Update is called once per frame
    void Update()
    {

    }
}
