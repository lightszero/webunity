namespace WebUnity
{
    public class Vector4
    {
        public Vector4(UnityEngine.Vector4 native)
        {
            this.__warpValue = native;
        }
        public WebUnity.Vector4 Clone()
        {
            return new WebUnity.Vector4(__warpValue);
        }
        static public Vector4 CreateInstance(float x,float y,float z,float w)
        {
            return new Vector4(new UnityEngine.Vector4(x,y,z,w));
        }
        static public Vector4 CreateInstance_2(float x,float y,float z)
        {
            return new Vector4(new UnityEngine.Vector4(x,y,z));
        }
        static public Vector4 CreateInstance_3(float x,float y)
        {
            return new Vector4(new UnityEngine.Vector4(x,y));
        }
        public UnityEngine.Vector4 __warpValue;
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
        //from field
        public float w
        {
            get
            {
                return __warpValue.w;
            }
            set
            {
                __warpValue.w=value;
            }
        }
        public WebUnity.Vector4 normalized
        {
            get
            {
                return new WebUnity.Vector4(__warpValue.normalized);
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
        public static WebUnity.Vector4 zero
        {
            get
            {
                return new WebUnity.Vector4(UnityEngine.Vector4.zero);
            }
        }
        public static WebUnity.Vector4 one
        {
            get
            {
                return new WebUnity.Vector4(UnityEngine.Vector4.one);
            }
        }
        public void Set(float new_x,float new_y,float new_z,float new_w)
        {
            __warpValue.Set(new_x,new_y,new_z,new_w);
        }
        static public WebUnity.Vector4 Lerp(WebUnity.Vector4 a,WebUnity.Vector4 b,float t)
        {
            var _out = UnityEngine.Vector4.Lerp(a.__warpValue,b.__warpValue,t);
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector4 LerpUnclamped(WebUnity.Vector4 a,WebUnity.Vector4 b,float t)
        {
            var _out = UnityEngine.Vector4.LerpUnclamped(a.__warpValue,b.__warpValue,t);
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector4 MoveTowards(WebUnity.Vector4 current,WebUnity.Vector4 target,float maxDistanceDelta)
        {
            var _out = UnityEngine.Vector4.MoveTowards(current.__warpValue,target.__warpValue,maxDistanceDelta);
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector4 Scale(WebUnity.Vector4 a,WebUnity.Vector4 b)
        {
            var _out = UnityEngine.Vector4.Scale(a.__warpValue,b.__warpValue);
            return new WebUnity.Vector4(_out);
        }
        public void Scale_2(WebUnity.Vector4 scale)
        {
            __warpValue.Scale(scale.__warpValue);
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
        static public WebUnity.Vector4 Normalize(WebUnity.Vector4 a)
        {
            var _out = UnityEngine.Vector4.Normalize(a.__warpValue);
            return new WebUnity.Vector4(_out);
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
        static public float Dot(WebUnity.Vector4 a,WebUnity.Vector4 b)
        {
            var _out = UnityEngine.Vector4.Dot(a.__warpValue,b.__warpValue);
            return _out;
        }
        static public WebUnity.Vector4 Project(WebUnity.Vector4 a,WebUnity.Vector4 b)
        {
            var _out = UnityEngine.Vector4.Project(a.__warpValue,b.__warpValue);
            return new WebUnity.Vector4(_out);
        }
        static public float Distance(WebUnity.Vector4 a,WebUnity.Vector4 b)
        {
            var _out = UnityEngine.Vector4.Distance(a.__warpValue,b.__warpValue);
            return _out;
        }
        static public float Magnitude(WebUnity.Vector4 a)
        {
            var _out = UnityEngine.Vector4.Magnitude(a.__warpValue);
            return _out;
        }
        static public float SqrMagnitude(WebUnity.Vector4 a)
        {
            var _out = UnityEngine.Vector4.SqrMagnitude(a.__warpValue);
            return _out;
        }
        public float SqrMagnitude_2()
        {
            var _out = __warpValue.SqrMagnitude();
            return _out;
        }
        static public WebUnity.Vector4 Min(WebUnity.Vector4 lhs,WebUnity.Vector4 rhs)
        {
            var _out = UnityEngine.Vector4.Min(lhs.__warpValue,rhs.__warpValue);
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector4 Max(WebUnity.Vector4 lhs,WebUnity.Vector4 rhs)
        {
            var _out = UnityEngine.Vector4.Max(lhs.__warpValue,rhs.__warpValue);
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector4 op_Addition(WebUnity.Vector4 a,WebUnity.Vector4 b)
        {
            var _out = a.__warpValue + b.__warpValue;
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector4 op_Subtraction(WebUnity.Vector4 a,WebUnity.Vector4 b)
        {
            var _out = a.__warpValue - b.__warpValue;
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector4 op_UnaryNegation(WebUnity.Vector4 a)
        {
            var _out = -a.__warpValue;
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector4 op_Multiply(WebUnity.Vector4 a,float d)
        {
            var _out = a.__warpValue * d;
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector4 op_Multiply_2(float d,WebUnity.Vector4 a)
        {
            var _out = d * a.__warpValue;
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector4 op_Division(WebUnity.Vector4 a,float d)
        {
            var _out = a.__warpValue / d;
            return new WebUnity.Vector4(_out);
        }
        static public System.Boolean op_Equality(WebUnity.Vector4 lhs,WebUnity.Vector4 rhs)
        {
            var _out = lhs.__warpValue == rhs.__warpValue;
            return _out;
        }
        static public System.Boolean op_Inequality(WebUnity.Vector4 lhs,WebUnity.Vector4 rhs)
        {
            var _out = lhs.__warpValue != rhs.__warpValue;
            return _out;
        }
        static public WebUnity.Vector4 op_Implicit(WebUnity.Vector3 v)
        {
            var _out = v.__warpValue;
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector3 op_Implicit_2(WebUnity.Vector4 v)
        {
            var _out = v.__warpValue;
            return new WebUnity.Vector3(_out);
        }
        static public WebUnity.Vector4 op_Implicit_3(WebUnity.Vector2 v)
        {
            var _out = v.__warpValue;
            return new WebUnity.Vector4(_out);
        }
        static public WebUnity.Vector2 op_Implicit_4(WebUnity.Vector4 v)
        {
            var _out = v.__warpValue;
            return new WebUnity.Vector2(_out);
        }
    }
}
