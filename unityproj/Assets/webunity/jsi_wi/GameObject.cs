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
            realobj.transform.position = new UnityEngine.Vector3(vec.x, vec.y, vec.z);
        }
        public void SetRotate(BABYLON.Vector3 vec)
        {
            realobj.transform.rotation = Quaternion.Euler(vec.x, vec.y, vec.z);
        }
    }
}
