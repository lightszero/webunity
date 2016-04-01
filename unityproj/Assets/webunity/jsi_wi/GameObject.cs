using UnityEngine;
using System.Collections;
using System;

namespace WebUnity
{
    //附加一些标记，自动生成.d.ts 文件，方便使用
    public class NotExport:Attribute
    {

    }
}
namespace wi//web interface
            //来自unity 内部接口转换为适合调用的版本，得自动生成
            //C# to C# 转译,将Unity的接口重新翻成适合JInt调用的版本
            //并且可以由此再生成.d.ts

            //另外还会开发工具，从babylon.js 往c#提供接口
{
    public class GameObject//能从ts端访问的对象
    {
        [WebUnity.NotExport]//标记为不要导出，自己留着玩
        public GameObject(UnityEngine.GameObject realobj)
        {
            this.realobj = realobj;
        }
        [WebUnity.NotExport]//标记为不要到处，自己留着玩
        UnityEngine.GameObject realobj;
        public void SetPos(BABYLON.Vector3 vec)
        {
            //Debug.Log("SetPos");
            realobj.transform.position = new UnityEngine.Vector3(vec.x, vec.y, vec.z);
        }
        public void SetRotate(BABYLON.Vector3 vec)
        {
            //Debug.Log("SetRotate");

            realobj.transform.rotation = Quaternion.Euler(vec.x, vec.y, vec.z);
        }
        public BABYLON.Vector3 GetRotate()
        {
            //Debug.Log("_getr");
            var e3 = realobj.transform.rotation.eulerAngles;
            BABYLON.Vector3 vec = new BABYLON.Vector3(e3.x, e3.y, e3.z);
            return vec;
        }
    }
}
