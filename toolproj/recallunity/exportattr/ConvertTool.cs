using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


class ConvertTool
{
    public static RT[] ConvertArray<RT, T>(T[] src)
    {
        RT[] outarray = new RT[src.Length];
        for (int i = 0; i < src.Length; i++)
        {
            var field = typeof(T).GetField("__warpValue");
            if (field != null)
            {
                outarray[i] = (RT)field.GetValue(src[i]);
            }
            else
            {
                var conr = typeof(RT).GetConstructor(new Type[] { typeof(T) });
                var newobj = conr.Invoke(new object[] { src[i] });
                outarray[i] = (RT)newobj;
            }
        }
        return outarray;
    }
}

