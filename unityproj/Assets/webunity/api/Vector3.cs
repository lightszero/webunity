namespace WebUnity
{
    public class Vector3
    {
        public Vector3(UnityEngine.Vector3 native)
        {
            this.__warpValue = native;
        }
        public WebUnity.Vector3 Clone()
        {
            return new WebUnity.Vector3(__warpValue);
        }
        static public Vector3 CreateInstance(float x,float y,float z)
        {
            return new Vector3(new UnityEngine.Vector3(x,y,z));
        }
        static public Vector3 CreateInstance_2(float x,float y)
        {
            return new Vector3(new UnityEngine.Vector3(x,y));
        }
        public UnityEngine.Vector3 __warpValue;
        public const float kEpsilon = 1E-05f;
        //from field
        public float x
        {
            get
            {
                return __warpValue.x;
            }
            set
            {
                __warpValue.x=value;
            }
        }
        //from field
        public float y
        {
            get
            {
                return __warpValue.y;
            }
            set
            {
                __warpValue.y=value;
            }
        }
        //from field
        public float z
        {
            get
            {
                return __warpValue.z;
            }
            set
            {
                __warpValue.z=value;
            }
        }
        public WebUnity.Vector3 normalized
        {
            get
            {
                return new WebUnity.Vector3(__warpValue.normalized);
            }
        }
        public float magnitude
        {
            get
            {
                return __warpValue.magnitude;
            }
        }
        public float sqrMagnitude
        {
            get
            {
                return __warpValue.sqrMagnitude;
            }
        }
        public static WebUnity.Vector3 zero
        {
            get
            {
                return new WebUnity.Vector3(UnityEngine.Vector3.zero);
            }
        }
        public static WebUnity.Vector3 one
        {
            get
            {
                return new WebUnity.Vector3(UnityEngine.Vector3.one);
            }
        }
        public static WebUnity.Vector3 forward
        {
            get
            {
                return new WebUnity.Vector3(UnityEngine.Vector3.forward);
            }
        }
        public static WebUnity.Vector3 back
        {
            get
            {
                return new WebUnity.Vector3(UnityEngine.Vector3.back);
            }
        }
        public static WebUnity.Vector3 up
        {
            get
            {
                return new WebUnity.Vector3(UnityEngine.Vector3.up);
            }
        }
        public static WebUnity.Vector3 down
        {
            get
            {
                return new WebUnity.Vector3(UnityEngine.Vector3.down);
            }
        }
        public static WebUnity.Vector3 left
        {
            get
            {
                return new WebUnity.Vector3(UnityEngine.Vector3.left);
            }
        }
        public static WebUnity.Vector3 right
        {
            get
            {
                return new WebUnity.Vector3(UnityEngine.Vector3.right);
            }
        }
        public static WebUnity.Vector3 fwd
        {
            get
            {
                return new WebUnity.Vector3(UnityEngine.Vector3.fwd);
            }
        }
        static public WebUnity.Vector3 Lerp(WebUnity.Vector3 a,WebUnity.Vector3 b,float t)
        {
            var _out = UnityEngine.Vector3.Lerp(a.__warpValue,b.__warpValue,t);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 LerpUnclamped(WebUnity.Vector3 a,WebUnity.Vector3 b,float t)
        {
            var _out = UnityEngine.Vector3.LerpUnclamped(a.__warpValue,b.__warpValue,t);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 Slerp(WebUnity.Vector3 a,WebUnity.Vector3 b,float t)
        {
            var _out = UnityEngine.Vector3.Slerp(a.__warpValue,b.__warpValue,t);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 SlerpUnclamped(WebUnity.Vector3 a,WebUnity.Vector3 b,float t)
        {
            var _out = UnityEngine.Vector3.SlerpUnclamped(a.__warpValue,b.__warpValue,t);
            return new WebUnity.Vector3(_out);
        }
        static public void OrthoNormalize(WebUnity.Vector3 normal,WebUnity.Vector3 tangent)
        {
            UnityEngine.Vector3.OrthoNormalize(ref normal.__warpValue,ref tangent.__warpValue);
        }
        static public void OrthoNormalize_2(WebUnity.Vector3 normal,WebUnity.Vector3 tangent,WebUnity.Vector3 binormal)
        {
            UnityEngine.Vector3.OrthoNormalize(ref normal.__warpValue,ref tangent.__warpValue,ref binormal.__warpValue);
        }
        static public WebUnity.Vector3 MoveTowards(WebUnity.Vector3 current,WebUnity.Vector3 target,float maxDistanceDelta)
        {
            var _out = UnityEngine.Vector3.MoveTowards(current.__warpValue,target.__warpValue,maxDistanceDelta);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 RotateTowards(WebUnity.Vector3 current,WebUnity.Vector3 target,float maxRadiansDelta,float maxMagnitudeDelta)
        {
            var _out = UnityEngine.Vector3.RotateTowards(current.__warpValue,target.__warpValue,maxRadiansDelta,maxMagnitudeDelta);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 SmoothDamp(WebUnity.Vector3 current,WebUnity.Vector3 target,WebUnity.Vector3 currentVelocity,float smoothTime,float maxSpeed)
        {
            var _out = UnityEngine.Vector3.SmoothDamp(current.__warpValue,target.__warpValue,ref currentVelocity.__warpValue,smoothTime,maxSpeed);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 SmoothDamp_2(WebUnity.Vector3 current,WebUnity.Vector3 target,WebUnity.Vector3 currentVelocity,float smoothTime)
        {
            var _out = UnityEngine.Vector3.SmoothDamp(current.__warpValue,target.__warpValue,ref currentVelocity.__warpValue,smoothTime);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 SmoothDamp_3(WebUnity.Vector3 current,WebUnity.Vector3 target,WebUnity.Vector3 currentVelocity,float smoothTime,float maxSpeed,float deltaTime)
        {
            var _out = UnityEngine.Vector3.SmoothDamp(current.__warpValue,target.__warpValue,ref currentVelocity.__warpValue,smoothTime,maxSpeed,deltaTime);
            return new WebUnity.Vector3(_out);
        }
        public void Set(float new_x,float new_y,float new_z)
        {
            __warpValue.Set(new_x,new_y,new_z);
        }
        static public WebUnity.Vector3 Scale(WebUnity.Vector3 a,WebUnity.Vector3 b)
        {
            var _out = UnityEngine.Vector3.Scale(a.__warpValue,b.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        public void Scale_2(WebUnity.Vector3 scale)
        {
            __warpValue.Scale(scale.__warpValue);
        }
        static public WebUnity.Vector3 Cross(WebUnity.Vector3 lhs,WebUnity.Vector3 rhs)
        {
            var _out = UnityEngine.Vector3.Cross(lhs.__warpValue,rhs.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        public System.Int32 GetHashCode()
        {
            var _out = __warpValue.GetHashCode();
            return _out;
        }
        public System.Boolean Equals(System.Object other)
        {
            var _out = __warpValue.Equals(other);
            return _out;
        }
        static public WebUnity.Vector3 Reflect(WebUnity.Vector3 inDirection,WebUnity.Vector3 inNormal)
        {
            var _out = UnityEngine.Vector3.Reflect(inDirection.__warpValue,inNormal.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 Normalize(WebUnity.Vector3 value)
        {
            var _out = UnityEngine.Vector3.Normalize(value.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        public void Normalize_2()
        {
            __warpValue.Normalize();
        }
        public string ToString()
        {
            var _out = __warpValue.ToString();
            return _out;
        }
        public string ToString_2(string format)
        {
            var _out = __warpValue.ToString(format);
            return _out;
        }
        static public float Dot(WebUnity.Vector3 lhs,WebUnity.Vector3 rhs)
        {
            var _out = UnityEngine.Vector3.Dot(lhs.__warpValue,rhs.__warpValue);
            return _out;
        }
        static public WebUnity.Vector3 Project(WebUnity.Vector3 vector,WebUnity.Vector3 onNormal)
        {
            var _out = UnityEngine.Vector3.Project(vector.__warpValue,onNormal.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 ProjectOnPlane(WebUnity.Vector3 vector,WebUnity.Vector3 planeNormal)
        {
            var _out = UnityEngine.Vector3.ProjectOnPlane(vector.__warpValue,planeNormal.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 Exclude(WebUnity.Vector3 excludeThis,WebUnity.Vector3 fromThat)
        {
            var _out = UnityEngine.Vector3.Exclude(excludeThis.__warpValue,fromThat.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        static public float Angle(WebUnity.Vector3 from,WebUnity.Vector3 to)
        {
            var _out = UnityEngine.Vector3.Angle(from.__warpValue,to.__warpValue);
            return _out;
        }
        static public float Distance(WebUnity.Vector3 a,WebUnity.Vector3 b)
        {
            var _out = UnityEngine.Vector3.Distance(a.__warpValue,b.__warpValue);
            return _out;
        }
        static public WebUnity.Vector3 ClampMagnitude(WebUnity.Vector3 vector,float maxLength)
        {
            var _out = UnityEngine.Vector3.ClampMagnitude(vector.__warpValue,maxLength);
            return new WebUnity.Vector3(_out);
        }
        static public float Magnitude(WebUnity.Vector3 a)
        {
            var _out = UnityEngine.Vector3.Magnitude(a.__warpValue);
            return _out;
        }
        static public float SqrMagnitude(WebUnity.Vector3 a)
        {
            var _out = UnityEngine.Vector3.SqrMagnitude(a.__warpValue);
            return _out;
        }
        static public WebUnity.Vector3 Min(WebUnity.Vector3 lhs,WebUnity.Vector3 rhs)
        {
            var _out = UnityEngine.Vector3.Min(lhs.__warpValue,rhs.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 Max(WebUnity.Vector3 lhs,WebUnity.Vector3 rhs)
        {
            var _out = UnityEngine.Vector3.Max(lhs.__warpValue,rhs.__warpValue);
            return new WebUnity.Vector3(_out);
        }
        static public float AngleBetween(WebUnity.Vector3 from,WebUnity.Vector3 to)
        {
            var _out = UnityEngine.Vector3.AngleBetween(from.__warpValue,to.__warpValue);
            return _out;
        }
        static public WebUnity.Vector3 op_Addition(WebUnity.Vector3 a,WebUnity.Vector3 b)
        {
            var _out = a.__warpValue + b.__warpValue;
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 op_Subtraction(WebUnity.Vector3 a,WebUnity.Vector3 b)
        {
            var _out = a.__warpValue - b.__warpValue;
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 op_UnaryNegation(WebUnity.Vector3 a)
        {
            var _out = -a.__warpValue;
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 op_Multiply(WebUnity.Vector3 a,float d)
        {
            var _out = a.__warpValue * d;
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 op_Multiply_2(float d,WebUnity.Vector3 a)
        {
            var _out = d * a.__warpValue;
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector3 op_Division(WebUnity.Vector3 a,float d)
        {
            var _out = a.__warpValue / d;
            return new WebUnity.Vector3(_out);
        }
        static public System.Boolean op_Equality(WebUnity.Vector3 lhs,WebUnity.Vector3 rhs)
        {
            var _out = lhs.__warpValue == rhs.__warpValue;
            return _out;
        }
        static public System.Boolean op_Inequality(WebUnity.Vector3 lhs,WebUnity.Vector3 rhs)
        {
            var _out = lhs.__warpValue != rhs.__warpValue;
            return _out;
        }
    }
}
