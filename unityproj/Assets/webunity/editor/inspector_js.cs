using UnityEngine;
using System.Collections;
using UnityEditor;
using Jint.Native.Json;
using System.Collections.Generic;

[CustomEditor(typeof(com_javascript))]
public class Animator_Inspector : Editor
{
    public override void OnInspectorGUI()
    {

        if (this.target == null) return;
        //base.OnInspectorGUI();
        var js = target as com_javascript;
        GUILayout.BeginHorizontal();
        bool btypegood = true;
        if (webunity.JSCenter.Instance.jsengine.Global.HasProperty(js.classname) == false)
        {
            btypegood = false;
        }

        var oldc = GUI.color;
        GUI.color = btypegood ? Color.green : Color.red;
        GUILayout.TextField((btypegood ? "JsClass=" : "<Fail>JsClass=") + js.classname);
        GUI.color = oldc;
        if (Application.isPlaying)//运行时不能改
        {

        }
        else
        {
            if (GUILayout.Button("pick"))
            {
                pickJsClass(js);
            }

        }
        GUILayout.EndHorizontal();

        if (btypegood)
        {
            gui_FillParam(js);
        }
        //遍历JInt中的JS代码，如果想在这里看到JS代码，先Build

    }

    private static void gui_FillParam(com_javascript js)
    {
        var jsvalue = webunity.JSCenter.Instance.GetStaticValue(js.classname, "_wi_export");
        if (jsvalue != null)
        {
            string json = webunity.JSCenter.Instance.ToJsonString(jsvalue.Value);
            GUILayout.TextField("param:" + json);
        }
        GUILayout.TextField("saveddata:" + js.jsoninfo);
        foreach (var p in jsvalue.Value.AsObject().GetOwnProperties())
        {
            string type = p.Value.Value.Value.AsString();
            if (type == "int")
            {
                int i = 0;
                var pp = js.GetProp(p.Key);
                if (pp != null)
                {
                    i = (int)pp.Value.AsNumber();
                }
                int i2 = EditorGUILayout.IntField("(" + type + ")" + p.Key, i);
                js.SetProp(p.Key, i2);

            }
            else if (type == "string")
            {
                string s = "";
                var pp = js.GetProp(p.Key);
                if (pp != null)
                {
                    s = pp.Value.AsString();
                }
                string s2 = EditorGUILayout.TextField("(" + type + ")" + p.Key, s);
                js.SetProp(p.Key, s2);
            }
            else if (type == "bool")
            {
                bool i = false;
                var pp = js.GetProp(p.Key);
                if (pp != null)
                {
                    i = pp.Value.AsBoolean();
                }
                bool i2 = EditorGUILayout.Toggle("(" + type + ")" + p.Key, i);
                js.SetProp(p.Key, i2);

            }
            else
            {
                GUILayout.Label("<unknown>(" + type + ")" + p.Key);

            }
        }
    }

    private static void pickJsClass(com_javascript js)
    {
        List<string> listClass = new List<string>();
        var ps = webunity.JSCenter.Instance.jsengine.Global.GetOwnProperties();
        foreach (var p in ps)
        {
            Jint.Native.JsValue? v = p.Value.Value;
            if (v == null || v.Value.Type != Jint.Runtime.Types.Object) continue;
            var obj = v.Value.AsObject();
            if (obj.HasProperty("_wi_export") == false) continue;
            try
            {
                string comp = p.Key;
                //var pp = obj.GetProperty("_wi_export").Value.Value;
                //var serializer = new JsonSerializer(webunity.JSCenter.Instance.jsengine);
                //var tjson = serializer.Serialize(pp, Jint.Native.Undefined.Instance, Jint.Native.Undefined.Instance);
                //GUILayout.Label(p.Key + "|" + tjson.AsString());
                listClass.Add(p.Key);
            }
            catch
            {
                Debug.LogWarning("Error _wi_export format in js Class:" + p.Key);
            }
        }
        PickerWindow.Show(listClass.ToArray(), (b, str) =>
        {
            if (b) js.classname = str;
        });
    }
}