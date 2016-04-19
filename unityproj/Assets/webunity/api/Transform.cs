namespace WebUnity
{
    public class Transform
    {
        public Transform(UnityEngine.Transform native)
        {
            this.__warpValue = native;
        }
        public UnityEngine.Transform __warpValue;
        public WebUnity.Vector3 position
        {
            get
            {
                return new WebUnity.Vector3(__warpValue.position);
            }
            set
            {
                __warpValue.position=value.__warpValue;
            }
        }
        public WebUnity.Vector3 localPosition
        {
            get
            {
                return new WebUnity.Vector3(__warpValue.localPosition);
            }
            set
            {
                __warpValue.localPosition=value.__warpValue;
            }
        }
        public WebUnity.Vector3 eulerAngles
        {
            get
            {
                return new WebUnity.Vector3(__warpValue.eulerAngles);
            }
            set
            {
                __warpValue.eulerAngles=value.__warpValue;
            }
        }
        public WebUnity.Vector3 localEulerAngles
        {
            get
            {
                return new WebUnity.Vector3(__warpValue.localEulerAngles);
            }
            set
            {
                __warpValue.localEulerAngles=value.__warpValue;
            }
        }
        public WebUnity.Vector3 right
        {
            get
            {
                return new WebUnity.Vector3(__warpValue.right);
            }
            set
            {
                __warpValue.right=value.__warpValue;
            }
        }
        public WebUnity.Vector3 up
        {
            get
            {
                return new WebUnity.Vector3(__warpValue.up);
            }
            set
            {
                __warpValue.up=value.__warpValue;
            }
        }
        public WebUnity.Vector3 forward
        {
            get
            {
                return new WebUnity.Vector3(__warpValue.forward);
            }
            set
            {
                __warpValue.forward=value.__warpValue;
            }
        }
        public WebUnity.Quaternion rotation
        {
            get
            {
                return new WebUnity.Quaternion(__warpValue.rotation);
            }
            set
            {
                __warpValue.rotation=value.__warpValue;
            }
        }
        public WebUnity.Quaternion localRotation
        {
            get
            {
                return new WebUnity.Quaternion(__warpValue.localRotation);
            }
            set
            {
                __warpValue.localRotation=value.__warpValue;
            }
        }
        public WebUnity.Vector3 localScale
        {
            get
            {
                return new WebUnity.Vector3(__warpValue.localScale);
            }
            set
            {
                __warpValue.localScale=value.__warpValue;
            }
        }
        public WebUnity.Transform parent
        {
            get
            {
                return new WebUnity.Transform(__warpValue.parent);
            }
            set
            {
                __warpValue.parent=value.__warpValue;
            }
        }
        public WebUnity.Matrix4x4 worldToLocalMatrix
        {
            get
            {
                return new WebUnity.Matrix4x4(__warpValue.worldToLocalMatrix);
            }
        }
        public WebUnity.Matrix4x4 localToWorldMatrix
        {
            get
            {
                return new WebUnity.Matrix4x4(__warpValue.localToWorldMatrix);
            }
        }
        public WebUnity.Transform root
        {
            get
            {
                return new WebUnity.Transform(__warpValue.root);
            }
        }
        public System.Int32 childCount
        {
            get
            {
                return __warpValue.childCount;
            }
        }
        public WebUnity.Vector3 lossyScale
        {
            get
            {
                return new WebUnity.Vector3(__warpValue.lossyScale);
            }
        }
        public System.Boolean hasChanged
        {
            get
            {
                return __warpValue.hasChanged;
            }
            set
            {
                __warpValue.hasChanged=value;
            }
        }
        public void SetParent(WebUnity.Transform parent)
        {
            __warpValue.SetParent(parent.__warpValue);
        }
        public void SetParent_2(WebUnity.Transform parent,System.Boolean worldPositionStays)
        {
            __warpValue.SetParent(parent.__warpValue,worldPositionStays);
        }
        public void Translate(WebUnity.Vector3 translation)
        {
            __warpValue.Translate(translation.__warpValue);
        }
        public void Translate_2(WebUnity.Vector3 translation,WebUnity.Space relativeTo)
        {
            __warpValue.Translate(translation.__warpValue,(UnityEngine.Space)(int)relativeTo);
        }
        public void Translate_3(float x,float y,float z)
        {
            __warpValue.Translate(x,y,z);
        }
        public void Translate_4(float x,float y,float z,WebUnity.Space relativeTo)
        {
            __warpValue.Translate(x,y,z,(UnityEngine.Space)(int)relativeTo);
        }
        public void Translate_5(WebUnity.Vector3 translation,WebUnity.Transform relativeTo)
        {
            __warpValue.Translate(translation.__warpValue,relativeTo.__warpValue);
        }
        public void Translate_6(float x,float y,float z,WebUnity.Transform relativeTo)
        {
            __warpValue.Translate(x,y,z,relativeTo.__warpValue);
        }
        public void Rotate(WebUnity.Vector3 eulerAngles)
        {
            __warpValue.Rotate(eulerAngles.__warpValue);
        }
        public void Rotate_2(WebUnity.Vector3 eulerAngles,WebUnity.Space relativeTo)
        {
            __warpValue.Rotate(eulerAngles.__warpValue,(UnityEngine.Space)(int)relativeTo);
        }
        public void Rotate_3(float xAngle,float yAngle,float zAngle)
        {
            __warpValue.Rotate(xAngle,yAngle,zAngle);
        }
        public void Rotate_4(float xAngle,float yAngle,float zAngle,WebUnity.Space relativeTo)
        {
            __warpValue.Rotate(xAngle,yAngle,zAngle,(UnityEngine.Space)(int)relativeTo);
        }
        public void Rotate_5(WebUnity.Vector3 axis,float angle)
        {
            __warpValue.Rotate(axis.__warpValue,angle);
        }
        public void Rotate_6(WebUnity.Vector3 axis,float angle,WebUnity.Space relativeTo)
        {
            __warpValue.Rotate(axis.__warpValue,angle,(UnityEngine.Space)(int)relativeTo);
        }
        public void RotateAround(WebUnity.Vector3 point,WebUnity.Vector3 axis,float angle)
        {
            __warpValue.RotateAround(point.__warpValue,axis.__warpValue,angle);
        }
        public void LookAt(WebUnity.Transform target)
        {
            __warpValue.LookAt(target.__warpValue);
        }
        public void LookAt_2(WebUnity.Transform target,WebUnity.Vector3 worldUp)
        {
            __warpValue.LookAt(target.__warpValue,worldUp.__warpValue);
        }
        public void LookAt_3(WebUnity.Vector3 worldPosition,WebUnity.Vector3 worldUp)
        {
            __warpValue.LookAt(worldPosition.__warpValue,worldUp.__warpValue);
        }
        public void LookAt_4(WebUnity.Vector3 worldPosition)
        {
            __warpValue.LookAt(worldPosition.__warpValue);
        }
        public WebUnity.Vector3 TransformDirection(WebUnity.Vector3 direction)
        {
            var _out = __warpValue.TransformDirection(direction.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 TransformDirection_2(float x,float y,float z)
        {
            var _out = __warpValue.TransformDirection(x,y,z);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 InverseTransformDirection(WebUnity.Vector3 direction)
        {
            var _out = __warpValue.InverseTransformDirection(direction.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 InverseTransformDirection_2(float x,float y,float z)
        {
            var _out = __warpValue.InverseTransformDirection(x,y,z);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 TransformVector(WebUnity.Vector3 vector)
        {
            var _out = __warpValue.TransformVector(vector.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 TransformVector_2(float x,float y,float z)
        {
            var _out = __warpValue.TransformVector(x,y,z);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 InverseTransformVector(WebUnity.Vector3 vector)
        {
            var _out = __warpValue.InverseTransformVector(vector.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 InverseTransformVector_2(float x,float y,float z)
        {
            var _out = __warpValue.InverseTransformVector(x,y,z);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 TransformPoint(WebUnity.Vector3 position)
        {
            var _out = __warpValue.TransformPoint(position.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 TransformPoint_2(float x,float y,float z)
        {
            var _out = __warpValue.TransformPoint(x,y,z);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 InverseTransformPoint(WebUnity.Vector3 position)
        {
            var _out = __warpValue.InverseTransformPoint(position.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        public WebUnity.Vector3 InverseTransformPoint_2(float x,float y,float z)
        {
            var _out = __warpValue.InverseTransformPoint(x,y,z);
            return new WebUnity.Vector3(_out);
        }
        public void DetachChildren()
        {
            __warpValue.DetachChildren();
        }
        public void SetAsFirstSibling()
        {
            __warpValue.SetAsFirstSibling();
        }
        public void SetAsLastSibling()
        {
            __warpValue.SetAsLastSibling();
        }
        public void SetSiblingIndex(System.Int32 index)
        {
            __warpValue.SetSiblingIndex(index);
        }
        public System.Int32 GetSiblingIndex()
        {
            var _out = __warpValue.GetSiblingIndex();
            return _out;
        }
        public WebUnity.Transform Find(string name)
        {
            var _out = __warpValue.Find(name);
            return new WebUnity.Transform(_out);
        }
        public System.Boolean IsChildOf(WebUnity.Transform parent)
        {
            var _out = __warpValue.IsChildOf(parent.__warpValue);
            return _out;
        }
        public WebUnity.Transform FindChild(string name)
        {
            var _out = __warpValue.FindChild(name);
            return new WebUnity.Transform(_out);
        }
        public System.Collections.IEnumerator GetEnumerator()
        {
            var _out = __warpValue.GetEnumerator();
            return _out;
        }
        public void RotateAround_2(WebUnity.Vector3 axis,float angle)
        {
            __warpValue.RotateAround(axis.__warpValue,angle);
        }
        public void RotateAroundLocal(WebUnity.Vector3 axis,float angle)
        {
            __warpValue.RotateAroundLocal(axis.__warpValue,angle);
        }
        public WebUnity.Transform GetChild(System.Int32 index)
        {
            var _out = __warpValue.GetChild(index);
            return new WebUnity.Transform(_out);
        }
        public System.Int32 GetChildCount()
        {
            var _out = __warpValue.GetChildCount();
            return _out;
        }
    }
}
