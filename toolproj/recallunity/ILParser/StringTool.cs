using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace recallunity
{
    public class StringTool
    {
        /// <summary>
        /// 字符串拼接帮助类
        /// </summary>
        static StringBuilder sbuilder;
        public static void NewStr()
        {
            sbuilder = new StringBuilder();
            space = 0;
        }
        public static string GetStr()
        {
            return sbuilder.ToString();
        }
        static int space = 0;
        public static void AddSpace()
        {
            space += 4;
        }
        public static void DecSpace()
        {
            space -= 4;
        }
        public static void AppendLine(string text)
        {
            for (int i = 0; i < space; i++)
            {
                sbuilder.Append(" ");
            }
            sbuilder.Append(text);
            sbuilder.AppendLine();
        }
    }
}
