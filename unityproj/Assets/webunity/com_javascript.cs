using UnityEngine;
using System.Collections;
using Jint.Native;
using System;

public class com_javascript : MonoBehaviour
{
    public string classname;
    Jint.Native.Object.ObjectInstance inst = null;
    // Use this for initialization
    public string jsoninfo;
    Jint.Native.Object.ObjectInstance instjson = null;
    public Jint.Native.JsValue? GetProp(string name)
    {
        if (instjson == null)
            instjson = new Jint.Native.Object.ObjectInstance(webunity.JSCenter.Instance.jsengine);
        if (instjson.HasProperty(name) == false) return null;
        return instjson.Get(name);
    }
    public void SetProp(string name, Jint.Native.JsValue v)
    {
        if (instjson == null)
            instjson = new Jint.Native.Object.ObjectInstance(webunity.JSCenter.Instance.jsengine);
        instjson.Put(name, v, true);
    }
    public void SetProp(string name, bool obj)
    {
        if (instjson == null)
            instjson = new Jint.Native.Object.ObjectInstance(webunity.JSCenter.Instance.jsengine);

        Jint.Native.JsValue v = new JsValue(obj);
        instjson.Put(name, v, true);
    }
    public void SetProp(string name, double obj)
    {
        Jint.Native.JsValue v = new JsValue(obj);
        inst.Put(name, v, true);

    }
    public void SetProp(string name, string obj)
    {

        Jint.Native.JsValue v = new JsValue(obj);
        inst.Put(name, v, true);

    }
    void Start()
    {
        inst = webunity.JSCenter.Instance.NewObj(classname);
        webunity.JSCenter.Instance.Call(inst, "start", new JsValue[] { });
        var go = new wi.GameObject(this.gameObject);
        var obj = new Jint.Runtime.Interop.ObjectWrapper(webunity.JSCenter.Instance.jsengine, go);
        inst.Put("obj", new JsValue(obj), true);
        //js 需要对应的脚本有一个obj属性
    }

    // Update is called once per frame
    void Update()
    {
        webunity.JSCenter.Instance.Call(inst, "update", new JsValue[] { new JsValue(Time.deltaTime) });

    }
}
