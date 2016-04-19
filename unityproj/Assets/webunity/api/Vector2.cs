namespace WebUnity
{
    public class Vector2
    {
        public Vector2(UnityEngine.Vector2 native)
        {
            this.__warpValue = native;
        }
        public WebUnity.Vector2 Clone()
        {
            return new WebUnity.Vector2(__warpValue);
        }
        static public Vector2 CreateInstance(float x, float y)
        {
            return new Vector2(new UnityEngine.Vector2(x, y));
        }
        public UnityEngine.Vector2 __warpValue;
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
                __warpValue.x = value;
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
                __warpValue.y = value;
            }
        }
        public WebUnity.Vector2 normalized
        {
            get
            {
                return new WebUnity.Vector2(__warpValue.normalized);
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
        public static WebUnity.Vector2 zero
        {
            get
            {
                return new WebUnity.Vector2(UnityEngine.Vector2.zero);
            }
        }
        public static WebUnity.Vector2 one
        {
            get
            {
                return new WebUnity.Vector2(UnityEngine.Vector2.one);
            }
        }
        public static WebUnity.Vector2 up
        {
            get
            {
                return new WebUnity.Vector2(UnityEngine.Vector2.up);
            }
        }
        public static WebUnity.Vector2 down
        {
            get
            {
                return new WebUnity.Vector2(UnityEngine.Vector2.down);
            }
        }
        public static WebUnity.Vector2 left
        {
            get
            {
                return new WebUnity.Vector2(UnityEngine.Vector2.left);
            }
        }
        public static WebUnity.Vector2 right
        {
            get
            {
                return new WebUnity.Vector2(UnityEngine.Vector2.right);
            }
        }
        public void Set(float new_x, float new_y)
        {
            __warpValue.Set(new_x, new_y);
        }
        static public WebUnity.Vector2 Lerp(WebUnity.Vector2 a, WebUnity.Vector2 b, float t)
        {
            var _out = UnityEngine.Vector2.Lerp(a.__warpValue, b.__warpValue, t);
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 LerpUnclamped(WebUnity.Vector2 a, WebUnity.Vector2 b, float t)
        {
            var _out = UnityEngine.Vector2.LerpUnclamped(a.__warpValue, b.__warpValue, t);
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 MoveTowards(WebUnity.Vector2 current, WebUnity.Vector2 target, float maxDistanceDelta)
        {
            var _out = UnityEngine.Vector2.MoveTowards(current.__warpValue, target.__warpValue, maxDistanceDelta);
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 Scale(WebUnity.Vector2 a, WebUnity.Vector2 b)
        {
            var _out = UnityEngine.Vector2.Scale(a.__warpValue, b.__warpValue);
            return new WebUnity.Vector2(_out);
        }
        public void Scale_2(WebUnity.Vector2 scale)
        {
            __warpValue.Scale(scale.__warpValue);
        }
        public void Normalize()
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
        static public WebUnity.Vector2 Reflect(WebUnity.Vector2 inDirection, WebUnity.Vector2 inNormal)
        {
            var _out = UnityEngine.Vector2.Reflect(inDirection.__warpValue, inNormal.__warpValue);
            return new WebUnity.Vector2(_out);
        }
        static public float Dot(WebUnity.Vector2 lhs, WebUnity.Vector2 rhs)
        {
            var _out = UnityEngine.Vector2.Dot(lhs.__warpValue, rhs.__warpValue);
            return _out;
        }
        static public float Angle(WebUnity.Vector2 from, WebUnity.Vector2 to)
        {
            var _out = UnityEngine.Vector2.Angle(from.__warpValue, to.__warpValue);
            return _out;
        }
        static public float Distance(WebUnity.Vector2 a, WebUnity.Vector2 b)
        {
            var _out = UnityEngine.Vector2.Distance(a.__warpValue, b.__warpValue);
            return _out;
        }
        static public WebUnity.Vector2 ClampMagnitude(WebUnity.Vector2 vector, float maxLength)
        {
            var _out = UnityEngine.Vector2.ClampMagnitude(vector.__warpValue, maxLength);
            return new WebUnity.Vector2(_out);
        }
        static public float SqrMagnitude(WebUnity.Vector2 a)
        {
            var _out = UnityEngine.Vector2.SqrMagnitude(a.__warpValue);
            return _out;
        }
        public float SqrMagnitude_2()
        {
            var _out = __warpValue.SqrMagnitude();
            return _out;
        }
        static public WebUnity.Vector2 Min(WebUnity.Vector2 lhs, WebUnity.Vector2 rhs)
        {
            var _out = UnityEngine.Vector2.Min(lhs.__warpValue, rhs.__warpValue);
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 Max(WebUnity.Vector2 lhs, WebUnity.Vector2 rhs)
        {
            var _out = UnityEngine.Vector2.Max(lhs.__warpValue, rhs.__warpValue);
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 SmoothDamp(WebUnity.Vector2 current, WebUnity.Vector2 target, WebUnity.Vector2 currentVelocity, float smoothTime, float maxSpeed)
        {
            var _out = UnityEngine.Vector2.SmoothDamp(current.__warpValue, target.__warpValue, ref currentVelocity.__warpValue, smoothTime, maxSpeed);
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 SmoothDamp_2(WebUnity.Vector2 current, WebUnity.Vector2 target, WebUnity.Vector2 currentVelocity, float smoothTime)
        {
            var _out = UnityEngine.Vector2.SmoothDamp(current.__warpValue, target.__warpValue, ref currentVelocity.__warpValue, smoothTime);
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 SmoothDamp_3(WebUnity.Vector2 current, WebUnity.Vector2 target, WebUnity.Vector2 currentVelocity, float smoothTime, float maxSpeed, float deltaTime)
        {
            var _out = UnityEngine.Vector2.SmoothDamp(current.__warpValue, target.__warpValue, ref currentVelocity.__warpValue, smoothTime, maxSpeed, deltaTime);
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 op_Addition(WebUnity.Vector2 a, WebUnity.Vector2 b)
        {
            var _out = a.__warpValue + b.__warpValue;
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 op_Subtraction(WebUnity.Vector2 a, WebUnity.Vector2 b)
        {
            var _out = a.__warpValue - b.__warpValue;
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 op_UnaryNegation(WebUnity.Vector2 a)
        {
            var _out = -a.__warpValue;
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 op_Multiply(WebUnity.Vector2 a, float d)
        {
            var _out = a.__warpValue * d;
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 op_Multiply_2(float d, WebUnity.Vector2 a)
        {
            var _out = d * a.__warpValue;
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector2 op_Division(WebUnity.Vector2 a, float d)
        {
            var _out = a.__warpValue / d;
            return new WebUnity.Vector2(_out);
        }
        static public System.Boolean op_Equality(WebUnity.Vector2 lhs, WebUnity.Vector2 rhs)
        {
            var _out = lhs.__warpValue == rhs.__warpValue;
            return _out;
        }
        static public System.Boolean op_Inequality(WebUnity.Vector2 lhs, WebUnity.Vector2 rhs)
        {
            var _out = lhs.__warpValue != rhs.__warpValue;
            return _out;
        }
        static public WebUnity.Vector2 op_Implicit(WebUnity.Vector3 v)
        {
            var _out = v.__warpValue;
            return new WebUnity.Vector2(_out);
        }
        static public WebUnity.Vector3 op_Implicit_2(WebUnity.Vector2 v)
        {
            var _out = v.__warpValue;
            return new WebUnity.Vector3(_out);
        }
    }
}
