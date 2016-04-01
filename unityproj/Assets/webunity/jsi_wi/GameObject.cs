using UnityEngine;
using System.Collections;

namespace wi
{
    public class GameObject
    {
        public GameObject(UnityEngine.GameObject realobj)
        {
            this.realobj = realobj;
        }
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
