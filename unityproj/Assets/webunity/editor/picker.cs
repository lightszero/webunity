using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEditor;
using UnityEngine;

public class PickerWindow : EditorWindow
{
    public static void Show(string[] pickitems, Action<bool, string> pickcallback)
    {
        PickerWindow.pickitem = null;
        var window = (PickerWindow)EditorWindow.GetWindow(typeof(PickerWindow), true, "Pick");
        window.pickitems = pickitems;
        window.pickcallback = pickcallback;
        window.ShowPopup();
    }
    Action<bool, string> pickcallback;
    string[] pickitems;
    static string pickitem = null;

    Vector2 pos = Vector2.zero;
    public void OnGUI()
    {
        GUILayout.BeginScrollView(pos);
        foreach (string i in pickitems)
        {
            if (GUILayout.Button(i))
            {
                pickcallback(true, i);
                this.Close();
            }
        }
        GUILayout.EndScrollView();
        GUILayout.Space(5);
        if (GUILayout.Button("Close"))
        {
            pickcallback(false, null);
            this.Close();
        }
    }
}