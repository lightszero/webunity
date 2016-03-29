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
        if (Application.isPlaying)
        {
            base.OnInspectorGUI();
            return;
        }
        if (this.target == null) return;
        //base.OnInspectorGUI();
        var js = target as com_javascript;
        GUILayout.BeginHorizontal();
        GUILayout.Label("JsClass=" + js.classname);
        if (GUILayout.Button("pick"))
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
                    var pp = obj.GetProperty("_wi_export").Value.Value;
                    var serializer = new JsonSerializer(webunity.JSCenter.Instance.jsengine);
                    var tjson = serializer.Serialize(pp, Jint.Native.Undefined.Instance, Jint.Native.Undefined.Instance);
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

        GUILayout.EndHorizontal();
        //遍历JInt中的JS代码，如果想在这里看到JS代码，先Build

    }
}