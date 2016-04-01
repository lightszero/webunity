using UnityEngine;
using System.Collections;
using Jint.Native;
using System;

public class com_javascript : MonoBehaviour
{
    public string classname;// javascript 函数名
    public string jsoninfo; // 保存的序列化数据

    Jint.Native.Object.ObjectInstance inst = null;//绑定的js对象
    Jint.Native.Object.ObjectInstance instjson = null;//中转用的数据对象，临时对象，考虑是否弃用临时对象
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
        if (instjson.HasProperty(name) == false)
            instjson.FastAddProperty(name, v, true, true, true);
        instjson.Put(name, v, true);
        jsoninfo = webunity.JSCenter.Instance.ToJsonString(instjson);
    }
    public void SetProp(string name, bool obj)
    {
        SetProp(name, new JsValue(obj));
    }
    public void SetProp(string name, double obj)
    {
        SetProp(name, new JsValue(obj));
    }
    public void SetProp(string name, string obj)
    {
        SetProp(name, new JsValue(obj));
    }
    void Start()
    {
        inst = webunity.JSCenter.Instance.NewObj(classname);
        webunity.JSCenter.Instance.Call(inst, "start", new JsValue[] { });
        var go = new wi.GameObject(this.gameObject);
        var obj = new Jint.Runtime.Interop.ObjectWrapper(webunity.JSCenter.Instance.jsengine, go);
        inst.Put("obj", new JsValue(obj), true);

        //然后要把instjson里面的值一个个丢进去，这里还是弄个myjson方便
    }

    // Update is called once per frame
    void Update()
    {
        webunity.JSCenter.Instance.Call(inst, "update", new JsValue[] { new JsValue(Time.deltaTime) });

    }
}
