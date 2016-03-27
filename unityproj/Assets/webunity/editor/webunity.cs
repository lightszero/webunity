using UnityEngine;
using System.Collections;
using UnityEditor;
using System.Diagnostics;
using System.Collections.Generic;

public class WebUnityWindow : EditorWindow
{
    [MenuItem("WebUnity/ShowToolBar", false, 13)]
    private static void ShowWin()
    {
        var window = (WebUnityWindow)EditorWindow.GetWindow(typeof(WebUnityWindow), false, "Web ToolBar");
        window.Init();
    }
    List<string> outline =new List<string>();
    string codepath = Application.dataPath + "/tscode";
    string buildjs = Application.dataPath + "/.html/game.js";
    void Build()
    {
        Process p = new Process();
        p.StartInfo = new ProcessStartInfo(codepath +"/build.bat");
        p.StartInfo.WorkingDirectory = codepath;
        p.StartInfo.CreateNoWindow = true;
        p.StartInfo.UseShellExecute = false;
        p.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
        p.StartInfo.RedirectStandardOutput = true;
        p.Start();
        p.WaitForExit();
        string txt = p.StandardOutput.ReadToEnd();
        var info = txt.Split(new char[] { '\n' }, System.StringSplitOptions.None);
        if(info.Length==3&& string.IsNullOrEmpty(info[2]))
        {
            outline.Add("Build OK.");
        }
        else
        {
            outline.AddRange(info);
        }
        string code = System.IO.File.ReadAllText(buildjs);
        webunity.JSCenter.Instance.jsengine.Execute(code);
    }
    
    void RunHtml()
    {
        string path = Application.dataPath + "/.html/index.html";
        //UnityEngine.Debug.LogWarning("html path=" + path);
        EditorUtility.OpenWithDefaultApp(path);
    }
    Vector2 outlinepos = Vector2.zero;
    Vector2 codepos = Vector2.zero;
    public void OnGUI()
    {
        GUILayout.BeginHorizontal();
        {
            if (GUILayout.Button("Build Html"))
            {
                outline.Clear();

                Build();
            }
            if (GUILayout.Button("Run Html"))
            {
                outline.Clear();
                RunHtml();
            }
        }
        GUILayout.EndHorizontal();

        GUILayout.Space(4);
        GUILayout.Label("CodeFile Here.");

        var files = System.IO.Directory.GetFiles(codepath, "*.ts");

        codepos = GUILayout.BeginScrollView(codepos);
        foreach (var f in files)
        {
            GUILayout.BeginHorizontal();
            GUILayout.Label(f.Substring(codepath.Length+1));
            if (GUILayout.Button("edit"))
            {
                EditorUtility.OpenWithDefaultApp(f);
            }
            GUILayout.EndHorizontal();
        }
        GUILayout.EndScrollView();

        GUILayout.Space(4);
        GUILayout.Label("LogInfo Here.");
        outlinepos = GUILayout.BeginScrollView(outlinepos);
        if (outline != null)
        {
            for (int i = 0; i < outline.Count; i++)
            {
                GUILayout.Label("out:" + outline[i]);
            }
        }
        GUILayout.EndScrollView();
    }
    public void Init()
    {

    }
}