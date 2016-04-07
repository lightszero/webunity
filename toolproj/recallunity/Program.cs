using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

namespace recallunity
{
    class ConsoleLogger : ILogger
    {
        public void Log(string log)
        {
            Console.WriteLine(log);
        }
    }
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            //代码辅助生成工具，cs2cs 就酱紫了。
            //接下来辅助生成ts端代码
            ILParser parser = new ILParser(new ConsoleLogger());
            parser.LoadDll("UnityEngine.dll");
            parser.ExportProj(new NameSpaceFilter("UnityEngine", "WebUnity"), "csproj", "tsproj");
            //Console.WriteLine("Press Enter to quit.");
            //Console.ReadLine();
        }
    }
}
