using UnityEngine;
using System.Collections;
using UnityEditor;

public class QuickEditorWindow : EditorWindow
{
    static string filename = null;
    public static void Show(string _filename)
    {
        var window = (QuickEditorWindow)EditorWindow.GetWindow(typeof(QuickEditorWindow), true, "QuickEdit:" + filename);
        filename = _filename;
        code = System.IO.File.ReadAllText(filename);
    }
    static string code = null;
    Vector2 pos = Vector2.zero;
    public void OnGUI()
    {
        GUILayout.BeginHorizontal();
        if(GUILayout.Button("Save", GUILayout.Width(100)))
        {
            System.IO.File.WriteAllText(filename, code);
        }
        if (GUILayout.Button("Save&Close", GUILayout.Width(150)))
        {
            System.IO.File.WriteAllText(filename, code);
            this.Close();
        }
        GUILayout.EndHorizontal();
        pos=GUILayout.BeginScrollView(pos);
        {
            code = EditorGUILayout.TextArea(code);
        }
        GUILayout.EndScrollView();
    }
}
