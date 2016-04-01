using UnityEngine;
using System.Collections;
using UnityEditor;
using System.Diagnostics;
using System.Collections.Generic;
using System.IO;

public class WebUnityWindow : EditorWindow
{
    [MenuItem("WebUnity/ShowToolBar", false, 13)]
    private static void ShowWin()
    {
        var window = (WebUnityWindow)EditorWindow.GetWindow(typeof(WebUnityWindow), false, "Web ToolBar");
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

        SureInitStatic();

        if (Application.isPlaying)
        {
            GUILayout.Label("in Player Mode.");
        }
        else
        //head ui
        {
            if (webunity.JSCenter.Instance.jsNeedBuild || webunity.JSCenter.Instance.isjsbuild == false)
            {
                var oldc = GUI.color;
                GUI.color = Color.yellow;
                GUILayout.TextField("need Build");
                GUI.color = oldc;
            }
            else
            {
                var oldc = GUI.color;

                GUI.color = Color.green;
                var time = webunity.JSCenter.Instance.lastBuild;
                GUILayout.TextField("last Build at " + time.Hour + ":" + time.Minute + ":" + time.Second);
                GUI.color = oldc;

            }
            GUILayout.BeginHorizontal();
            {

                if (GUILayout.Button("Build JS"))
                {
                    webunity.JSCenter.jslog.Clear();
                    bool b = webunity.JSCenter.Instance.BuildJS();
                }
                if (GUILayout.Button("Run Html"))
                {
                    webunity.JSCenter.jslog.Clear();
                    RunHtml();
                }
            }
            GUILayout.EndHorizontal();
        }

        GUILayout.Space(4);

        GUI_TSCODE();

        GUILayout.Space(4);

        GUI_Log();
    }

    private void GUI_Log()
    {
        GUILayout.Label("LogInfo Here.");
        GUILayout.BeginHorizontal();
        {
            GUILayout.Space(50);

            outlinepos = GUILayout.BeginScrollView(outlinepos);
            if (webunity.JSCenter.jslog != null)
            {
                foreach (var l in webunity.JSCenter.jslog)
                {

                    if (l.Length > 0 && l[0] == '!')
                    {
                        var oldc = GUI.color;
                        GUI.color = Color.red;
                        string line = l.Substring(1);
                        GUILayout.TextField(line);
                        GUI.color = oldc;
                    }
                    else if (l.Length > 0 && l[0] == '?')
                    {
                        var oldc = GUI.color;
                        GUI.color = Color.yellow;
                        string line = l.Substring(1);
                        GUILayout.TextField(line);
                        GUI.color = oldc;
                    }
                    else
                    {
                        GUILayout.TextField(l);
                    }
                }
            }
            GUILayout.EndScrollView();
            GUILayout.Space(50);

        }
        GUILayout.EndHorizontal();

    }

    private void GUI_TSCODE()
    {
        GUILayout.Label("CodeFile Here.");

        var files = System.IO.Directory.GetFiles(webunity.JSCenter.codepath, "*.ts");
        GUILayout.BeginHorizontal();
        {
            GUILayout.Space(50);
            codepos = GUILayout.BeginScrollView(codepos);
            foreach (var f in files)
            {
                GUILayout.BeginHorizontal();
                GUILayout.Label(f.Substring(webunity.JSCenter.codepath.Length + 1));
                if (GUILayout.Button("edit", GUILayout.Width(150)))
                {
                    EditorUtility.OpenWithDefaultApp(f);
                }
                GUILayout.EndHorizontal();
            }

            GUILayout.EndScrollView();
            GUILayout.Space(50);

        }
        GUILayout.EndHorizontal();
    }

    static System.IO.FileSystemWatcher fwatcher;
    public static bool bInit = false;
    public static void SureInitStatic()
    {
        if (bInit) return;
        UnityEngine.Debug.LogWarning("init tscode filewatcher"); //监控 tscode 文件夹

        fwatcher = new System.IO.FileSystemWatcher(webunity.JSCenter.codepath);
        fwatcher.IncludeSubdirectories = true;
        fwatcher.EnableRaisingEvents = true;
        FileSystemEventHandler eh = (s, e) =>
         {
             webunity.JSCenter.Instance.SetJsNeedBuild();
         };
        fwatcher.Changed += eh;
        fwatcher.Created += eh;
        fwatcher.Deleted += eh;

        bInit = true;

    }
}