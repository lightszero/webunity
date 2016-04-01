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
    static bool isjsbuild;
    static bool jsNeedBuild;
    static System.DateTime lastBuild;

    static void SetJsNeedBuild()
    {
        isjsbuild = false;
        webunity.JSCenter.Instance.SetJsNeedLoad();
        jsNeedBuild = true;
    }
    static string codepath = Application.dataPath + "/tscode";
    static string buildjs = Application.dataPath + "/.html/game.js";

    bool BuildJS()
    {
        Process p = new Process();
        //调用一个bat，可以免去我们寻找tsc的麻烦
        p.StartInfo = new ProcessStartInfo(codepath + "/build.bat");
        p.StartInfo.WorkingDirectory = codepath;
        p.StartInfo.CreateNoWindow = true;
        p.StartInfo.UseShellExecute = false;
        p.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
        p.StartInfo.RedirectStandardOutput = true;
        p.Start();
        p.WaitForExit();
        string txt = p.StandardOutput.ReadToEnd();
        var info = txt.Split(new char[] { '\n' }, System.StringSplitOptions.None);
        if (info.Length == 3 && string.IsNullOrEmpty(info[2]))
        {
            webunity.JSCenter.Log("<Build>Build OK.");
            lastBuild = System.DateTime.Now;
            webunity.JSCenter.Instance.LoadJS();
            isjsbuild = true;
            jsNeedBuild = false;
            return true;

            if (System.IO.Directory.Exists(Application.dataPath + "/resources/html") == false)
            {
                System.IO.Directory.CreateDirectory(Application.dataPath + "/resources/html");
            }
            System.IO.File.Delete(Application.dataPath + "/resources/" + webunity.JSCenter.loadjsfile + ".txt");
            System.IO.File.Copy(buildjs, Application.dataPath + "/resources/" + webunity.JSCenter.loadjsfile + ".txt");
            try
            {
                System.IO.File.Delete(Application.dataPath + "/resources/" + webunity.JSCenter.loadjsfile + ".map.txt");
                System.IO.File.Copy(buildjs + ".map", Application.dataPath + "/resources/" + webunity.JSCenter.loadjsfile + ".map.txt");
            }
            catch
            {
            }
            AssetDatabase.Refresh();
        }
        else
        {
            for (int i = 2; i < info.Length; i++)
            {
                if (info[i] == "") continue;
                webunity.JSCenter.LogWarn("<Build>" + info[i]);
            }
            return false;
        }
    }

    void RunHtml()
    {
        string path = Application.dataPath + "/.html/index.html";
        //UnityEngine.Debug.LogWarning("html path=" + path);
        EditorUtility.OpenWithDefaultApp(path);
    }
    Vector2 outlinepos = Vector2.zero;
    Vector2 codepos = Vector2.zero;
    bool autobuild = false;
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
            if (jsNeedBuild || isjsbuild == false)
            {
                var oldc = GUI.color;
                GUI.color = Color.yellow;
                GUILayout.TextField("need Build");
                GUI.color = oldc;
                if(autobuild)
                {
                    BuildJS();
                    this.Repaint();
                    //rern;
                }
            }
            else
            {
                var oldc = GUI.color;

                GUI.color = Color.green;
                var time = lastBuild;
                GUILayout.TextField("last Build at " + time.Hour + ":" + time.Minute + ":" + time.Second);
                GUI.color = oldc;

            }
            GUILayout.BeginHorizontal();
            {

                if (GUILayout.Button("Build JS",GUILayout.Width(100)))
                {
                    webunity.JSCenter.jslog.Clear();
                    bool b = BuildJS();
                }
                autobuild = GUILayout.Toggle(autobuild, "AutoBuild", GUILayout.Width(100));

                if (GUILayout.Button("Run Html", GUILayout.Width(100)))
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

        var files = System.IO.Directory.GetFiles(codepath, "*.ts");
        GUILayout.BeginHorizontal();
        {
            GUILayout.Space(50);
            codepos = GUILayout.BeginScrollView(codepos);
            foreach (var f in files)
            {
                GUILayout.BeginHorizontal();
                GUILayout.Label(f.Substring(codepath.Length + 1));
                if (GUILayout.Button("edit(def tool)", GUILayout.Width(100)))
                {
                    EditorUtility.OpenWithDefaultApp(f);
                }
                if (GUILayout.Button("edit(lowb)", GUILayout.Width(80)))
                {
                    QuickEditorWindow.Show(f);
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

        fwatcher = new System.IO.FileSystemWatcher(codepath);
        fwatcher.IncludeSubdirectories = true;
        fwatcher.EnableRaisingEvents = true;
        FileSystemEventHandler eh = (s, e) =>
         {
             SetJsNeedBuild();
         };
        fwatcher.Changed += eh;
        fwatcher.Created += eh;
        fwatcher.Deleted += eh;

        bInit = true;

    }
}