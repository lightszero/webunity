declare module WebUnity {
    enum AnimationBlendMode {
        Blend = 0,
        Additive = 1,
    }
}
declare module WebUnity {
    enum AnimationCullingType {
        AlwaysAnimate = 0,
        BasedOnRenderers = 1,
        BasedOnClipBounds = 2,
        BasedOnUserBounds = 3,
    }
}
declare module WebUnity {
    enum AnimationPlayMode {
        Stop = 0,
        Queue = 1,
        Mix = 2,
    }
}
declare module WebUnity {
    enum AnimatorControllerParameterType {
        Float = 1,
        Int = 3,
        Bool = 4,
        Trigger = 9,
    }
}
declare module WebUnity {
    enum AnimatorCullingMode {
        AlwaysAnimate = 0,
        CullUpdateTransforms = 1,
        CullCompletely = 2,
        BasedOnRenderers = 1,
    }
}
declare module WebUnity {
    enum AnimatorRecorderMode {
        Offline = 0,
        Playback = 1,
        Record = 2,
    }
}
declare module WebUnity {
    enum AnimatorUpdateMode {
        Normal = 0,
        AnimatePhysics = 1,
        UnscaledTime = 2,
    }
}
declare module WebUnity {
    enum AnisotropicFiltering {
        Disable = 0,
        Enable = 1,
        ForceEnable = 2,
    }
}
declare module WebUnity {
    enum ApplicationInstallMode {
        Unknown = 0,
        Store = 1,
        DeveloperBuild = 2,
        Adhoc = 3,
        Enterprise = 4,
        Editor = 5,
    }
}
declare module WebUnity {
    enum ApplicationSandboxType {
        Unknown = 0,
        NotSandboxed = 1,
        Sandboxed = 2,
        SandboxBroken = 3,
    }
}
declare module WebUnity {
    enum AudioClipLoadType {
        DecompressOnLoad = 0,
        CompressedInMemory = 1,
        Streaming = 2,
    }
}
declare module WebUnity {
    enum AudioCompressionFormat {
        PCM = 0,
        Vorbis = 1,
        ADPCM = 2,
        MP3 = 3,
        VAG = 4,
        HEVAG = 5,
        XMA = 6,
        AAC = 7,
        GCADPCM = 8,
    }
}
declare module WebUnity {
    enum AudioDataLoadState {
        Unloaded = 0,
        Loading = 1,
        Loaded = 2,
        Failed = 3,
    }
}
declare module WebUnity {
    enum AudioReverbPreset {
        Off = 0,
        Generic = 1,
        PaddedCell = 2,
        Room = 3,
        Bathroom = 4,
        Livingroom = 5,
        Stoneroom = 6,
        Auditorium = 7,
        Concerthall = 8,
        Cave = 9,
        Arena = 10,
        Hangar = 11,
        CarpetedHallway = 12,
        Hallway = 13,
        StoneCorridor = 14,
        Alley = 15,
        Forest = 16,
        City = 17,
        Mountains = 18,
        Quarry = 19,
        Plain = 20,
        ParkingLot = 21,
        SewerPipe = 22,
        Underwater = 23,
        Drugged = 24,
        Dizzy = 25,
        Psychotic = 26,
        User = 27,
    }
}
declare module WebUnity {
    enum AudioRolloffMode {
        Logarithmic = 0,
        Linear = 1,
        Custom = 2,
    }
}
declare module WebUnity {
    enum AudioSourceCurveType {
        CustomRolloff = 0,
        SpatialBlend = 1,
        ReverbZoneMix = 2,
        Spread = 3,
    }
}
declare module WebUnity {
    enum AudioSpeakerMode {
        Raw = 0,
        Mono = 1,
        Stereo = 2,
        Quad = 3,
        Surround = 4,
        Mode5point1 = 5,
        Mode7point1 = 6,
        Prologic = 7,
    }
}
declare module WebUnity {
    enum AudioType {
        UNKNOWN = 0,
        ACC = 1,
        AIFF = 2,
        IT = 10,
        MOD = 12,
        MPEG = 13,
        OGGVORBIS = 14,
        S3M = 17,
        WAV = 20,
        XM = 21,
        XMA = 22,
        VAG = 23,
        AUDIOQUEUE = 24,
    }
}
declare module WebUnity {
    enum AudioVelocityUpdateMode {
        Auto = 0,
        Fixed = 1,
        Dynamic = 2,
    }
}
declare module WebUnity {
    enum AvatarIKGoal {
        LeftFoot = 0,
        RightFoot = 1,
        LeftHand = 2,
        RightHand = 3,
    }
}
declare module WebUnity {
    enum AvatarIKHint {
        LeftKnee = 0,
        RightKnee = 1,
        LeftElbow = 2,
        RightElbow = 3,
    }
}
declare module WebUnity {
    enum AvatarTarget {
        Root = 0,
        Body = 1,
        LeftFoot = 2,
        RightFoot = 3,
        LeftHand = 4,
        RightHand = 5,
    }
}
declare module WebUnity {
    enum BlendWeights {
        OneBone = 1,
        TwoBones = 2,
        FourBones = 4,
    }
}
declare module WebUnity {
    enum CameraClearFlags {
        Skybox = 1,
        Color = 2,
        SolidColor = 2,
        Depth = 3,
        Nothing = 4,
    }
}
declare module WebUnity {
    enum CameraType {
        Game = 1,
        SceneView = 2,
        Preview = 4,
    }
}
declare module WebUnity {
    enum CollisionDetectionMode {
        Discrete = 0,
        Continuous = 1,
        ContinuousDynamic = 2,
    }
}
declare module WebUnity {
    enum CollisionDetectionMode2D {
        None = 0,
        Discrete = 0,
        Continuous = 1,
    }
}
declare module WebUnity {
    enum CollisionFlags {
        None = 0,
        Sides = 1,
        Above = 2,
        Below = 4,
        CollidedSides = 1,
        CollidedAbove = 2,
        CollidedBelow = 4,
    }
}
declare module WebUnity {
    enum ColorSpace {
        Uninitialized = -1,
        Gamma = 0,
        Linear = 1,
    }
}
declare module WebUnity {
    enum ComputeBufferType {
        Default = 0,
        Raw = 1,
        Append = 2,
        Counter = 4,
        DrawIndirect = 256,
    }
}
declare module WebUnity {
    enum ConfigurableJointMotion {
        Locked = 0,
        Limited = 1,
        Free = 2,
    }
}
declare module WebUnity {
    enum ConnectionTesterStatus {
        Error = -2,
        Undetermined = -1,
        PrivateIPNoNATPunchthrough = 0,
        PrivateIPHasNATPunchThrough = 1,
        PublicIPIsConnectable = 2,
        PublicIPPortBlocked = 3,
        PublicIPNoServerStarted = 4,
        LimitedNATPunchthroughPortRestricted = 5,
        LimitedNATPunchthroughSymmetric = 6,
        NATpunchthroughFullCone = 7,
        NATpunchthroughAddressRestrictedCone = 8,
    }
}
declare module WebUnity {
    enum CubemapFace {
        Unknown = -1,
        PositiveX = 0,
        NegativeX = 1,
        PositiveY = 2,
        NegativeY = 3,
        PositiveZ = 4,
        NegativeZ = 5,
    }
}
declare module WebUnity {
    enum CursorLockMode {
        None = 0,
        Locked = 1,
        Confined = 2,
    }
}
declare module WebUnity {
    enum CursorMode {
        Auto = 0,
        ForceSoftware = 1,
    }
}
declare module WebUnity {
    enum DepthTextureMode {
        None = 0,
        Depth = 1,
        DepthNormals = 2,
    }
}
declare module WebUnity {
    enum DetailRenderMode {
        GrassBillboard = 0,
        VertexLit = 1,
        Grass = 2,
    }
}
declare module WebUnity {
    enum DeviceOrientation {
        Unknown = 0,
        Portrait = 1,
        PortraitUpsideDown = 2,
        LandscapeLeft = 3,
        LandscapeRight = 4,
        FaceUp = 5,
        FaceDown = 6,
    }
}
declare module WebUnity {
    enum DeviceType {
        Unknown = 0,
        Handheld = 1,
        Console = 2,
        Desktop = 3,
    }
}
declare module WebUnity {
    enum DrivenTransformProperties {
        None = 0,
        All = -1,
        AnchoredPositionX = 2,
        AnchoredPositionY = 4,
        AnchoredPositionZ = 8,
        Rotation = 16,
        ScaleX = 32,
        ScaleY = 64,
        ScaleZ = 128,
        AnchorMinX = 256,
        AnchorMinY = 512,
        AnchorMaxX = 1024,
        AnchorMaxY = 2048,
        SizeDeltaX = 4096,
        SizeDeltaY = 8192,
        PivotX = 16384,
        PivotY = 32768,
        AnchoredPosition = 6,
        AnchoredPosition3D = 14,
        Scale = 224,
        AnchorMin = 768,
        AnchorMax = 3072,
        Anchors = 3840,
        SizeDelta = 12288,
        Pivot = 49152,
    }
}
declare module WebUnity {
    enum EffectorForceMode2D {
        Constant = 0,
        InverseLinear = 1,
        InverseSquared = 2,
    }
}
declare module WebUnity {
    enum EffectorSelection2D {
        Rigidbody = 0,
        Collider = 1,
    }
}
declare module WebUnity {
    enum EventModifiers {
        None = 0,
        Shift = 1,
        Control = 2,
        Alt = 4,
        Command = 8,
        Numeric = 16,
        CapsLock = 32,
        FunctionKey = 64,
    }
}
declare module WebUnity.Events {
    enum PersistentListenerMode {
        EventDefined = 0,
        Void = 1,
        Object = 2,
        Int = 3,
        Float = 4,
        String = 5,
        Bool = 6,
    }
}
declare module WebUnity.Events {
    enum UnityEventCallState {
        Off = 0,
        EditorAndRuntime = 1,
        RuntimeOnly = 2,
    }
}
declare module WebUnity {
    enum EventType {
        MouseDown = 0,
        MouseUp = 1,
        MouseMove = 2,
        MouseDrag = 3,
        KeyDown = 4,
        KeyUp = 5,
        ScrollWheel = 6,
        Repaint = 7,
        Layout = 8,
        DragUpdated = 9,
        DragPerform = 10,
        DragExited = 15,
        Ignore = 11,
        Used = 12,
        ValidateCommand = 13,
        ExecuteCommand = 14,
        ContextClick = 16,
        mouseDown = 0,
        mouseUp = 1,
        mouseMove = 2,
        mouseDrag = 3,
        keyDown = 4,
        keyUp = 5,
        scrollWheel = 6,
        repaint = 7,
        layout = 8,
        dragUpdated = 9,
        dragPerform = 10,
        ignore = 11,
        used = 12,
    }
}
declare module WebUnity.Experimental.Director {
    enum DirectorUpdateMode {
        DSPClock = 0,
        GameTime = 1,
        UnscaledGameTime = 2,
        Manual = 3,
    }
}
declare module WebUnity.Experimental.Director {
    enum PlayState {
        Paused = 0,
        Playing = 1,
    }
}
declare module UnityEngine.Experimental.Networking {
    enum UnityWebRequest_UnityWebRequestError {
        OK = 0,
        Unknown = 1,
        SDKError = 2,
        UnsupportedProtocol = 3,
        MalformattedUrl = 4,
        CannotResolveProxy = 5,
        CannotResolveHost = 6,
        CannotConnectToHost = 7,
        AccessDenied = 8,
        GenericHTTPError = 9,
        WriteError = 10,
        ReadError = 11,
        OutOfMemory = 12,
        Timeout = 13,
        HTTPPostError = 14,
        SSLCannotConnect = 15,
        Aborted = 16,
        TooManyRedirects = 17,
        ReceivedNoData = 18,
        SSLNotSupported = 19,
        FailedToSendData = 20,
        FailedToReceiveData = 21,
        SSLCertificateError = 22,
        SSLCipherNotAvailable = 23,
        SSLCACertError = 24,
        UnrecognizedContentEncoding = 25,
        LoginFailed = 26,
        SSLShutdownFailed = 27,
    }
}
declare module UnityEngine.Experimental.Networking {
    enum UnityWebRequest_UnityWebRequestMethod {
        Get = 0,
        Post = 1,
        Put = 2,
        Head = 3,
        Custom = 4,
    }
}
declare module WebUnity {
    enum FFTWindow {
        Rectangular = 0,
        Triangle = 1,
        Hamming = 2,
        Hanning = 3,
        Blackman = 4,
        BlackmanHarris = 5,
    }
}
declare module WebUnity {
    enum FilterMode {
        Point = 0,
        Bilinear = 1,
        Trilinear = 2,
    }
}
declare module WebUnity {
    enum FocusType {
        Native = 0,
        Keyboard = 1,
        Passive = 2,
    }
}
declare module WebUnity {
    enum FogMode {
        Linear = 1,
        Exponential = 2,
        ExponentialSquared = 3,
    }
}
declare module WebUnity {
    enum FontStyle {
        Normal = 0,
        Bold = 1,
        Italic = 2,
        BoldAndItalic = 3,
    }
}
declare module WebUnity {
    enum ForceMode {
        Force = 0,
        Acceleration = 5,
        Impulse = 1,
        VelocityChange = 2,
    }
}
declare module WebUnity {
    enum ForceMode2D {
        Force = 0,
        Impulse = 1,
    }
}
declare module WebUnityInternal {
    enum GITextureType {
        Charting = 0,
        Albedo = 1,
        Emissive = 2,
        Irradiance = 3,
        Directionality = 4,
        Baked = 5,
        BakedDirectional = 6,
        InputWorkspace = 7,
    }
}
declare module UnityEngine {
    enum GUILayoutOption_Type {
        fixedWidth = 0,
        fixedHeight = 1,
        minWidth = 2,
        maxWidth = 3,
        minHeight = 4,
        maxHeight = 5,
        stretchWidth = 6,
        stretchHeight = 7,
        alignStart = 8,
        alignMiddle = 9,
        alignEnd = 10,
        alignJustify = 11,
        equalSize = 12,
        spacing = 13,
    }
}
declare module WebUnity {
    enum HideFlags {
        None = 0,
        HideInHierarchy = 1,
        HideInInspector = 2,
        DontSaveInEditor = 4,
        NotEditable = 8,
        DontSaveInBuild = 16,
        DontUnloadUnusedAsset = 32,
        DontSave = 52,
        HideAndDontSave = 61,
    }
}
declare module WebUnity {
    enum HorizontalWrapMode {
        Wrap = 0,
        Overflow = 1,
    }
}
declare module WebUnity {
    enum HumanBodyBones {
        Hips = 0,
        LeftUpperLeg = 1,
        RightUpperLeg = 2,
        LeftLowerLeg = 3,
        RightLowerLeg = 4,
        LeftFoot = 5,
        RightFoot = 6,
        Spine = 7,
        Chest = 8,
        Neck = 9,
        Head = 10,
        LeftShoulder = 11,
        RightShoulder = 12,
        LeftUpperArm = 13,
        RightUpperArm = 14,
        LeftLowerArm = 15,
        RightLowerArm = 16,
        LeftHand = 17,
        RightHand = 18,
        LeftToes = 19,
        RightToes = 20,
        LeftEye = 21,
        RightEye = 22,
        Jaw = 23,
        LeftThumbProximal = 24,
        LeftThumbIntermediate = 25,
        LeftThumbDistal = 26,
        LeftIndexProximal = 27,
        LeftIndexIntermediate = 28,
        LeftIndexDistal = 29,
        LeftMiddleProximal = 30,
        LeftMiddleIntermediate = 31,
        LeftMiddleDistal = 32,
        LeftRingProximal = 33,
        LeftRingIntermediate = 34,
        LeftRingDistal = 35,
        LeftLittleProximal = 36,
        LeftLittleIntermediate = 37,
        LeftLittleDistal = 38,
        RightThumbProximal = 39,
        RightThumbIntermediate = 40,
        RightThumbDistal = 41,
        RightIndexProximal = 42,
        RightIndexIntermediate = 43,
        RightIndexDistal = 44,
        RightMiddleProximal = 45,
        RightMiddleIntermediate = 46,
        RightMiddleDistal = 47,
        RightRingProximal = 48,
        RightRingIntermediate = 49,
        RightRingDistal = 50,
        RightLittleProximal = 51,
        RightLittleIntermediate = 52,
        RightLittleDistal = 53,
        LastBone = 54,
    }
}
declare module WebUnity {
    enum ImagePosition {
        ImageLeft = 0,
        ImageAbove = 1,
        ImageOnly = 2,
        TextOnly = 3,
    }
}
declare module WebUnity {
    enum IMECompositionMode {
        Auto = 0,
        On = 1,
        Off = 2,
    }
}
declare module WebUnity {
    enum JointDriveMode {
        None = 0,
        Position = 1,
        Velocity = 2,
        PositionAndVelocity = 3,
    }
}
declare module WebUnity {
    enum JointLimitState2D {
        Inactive = 0,
        LowerLimit = 1,
        UpperLimit = 2,
        EqualLimits = 3,
    }
}
declare module WebUnity {
    enum JointProjectionMode {
        None = 0,
        PositionAndRotation = 1,
        PositionOnly = 2,
    }
}
declare module WebUnity {
    enum KeyCode {
        None = 0,
        Backspace = 8,
        Delete = 127,
        Tab = 9,
        Clear = 12,
        Return = 13,
        Pause = 19,
        Escape = 27,
        Space = 32,
        Keypad0 = 256,
        Keypad1 = 257,
        Keypad2 = 258,
        Keypad3 = 259,
        Keypad4 = 260,
        Keypad5 = 261,
        Keypad6 = 262,
        Keypad7 = 263,
        Keypad8 = 264,
        Keypad9 = 265,
        KeypadPeriod = 266,
        KeypadDivide = 267,
        KeypadMultiply = 268,
        KeypadMinus = 269,
        KeypadPlus = 270,
        KeypadEnter = 271,
        KeypadEquals = 272,
        UpArrow = 273,
        DownArrow = 274,
        RightArrow = 275,
        LeftArrow = 276,
        Insert = 277,
        Home = 278,
        End = 279,
        PageUp = 280,
        PageDown = 281,
        F1 = 282,
        F2 = 283,
        F3 = 284,
        F4 = 285,
        F5 = 286,
        F6 = 287,
        F7 = 288,
        F8 = 289,
        F9 = 290,
        F10 = 291,
        F11 = 292,
        F12 = 293,
        F13 = 294,
        F14 = 295,
        F15 = 296,
        Alpha0 = 48,
        Alpha1 = 49,
        Alpha2 = 50,
        Alpha3 = 51,
        Alpha4 = 52,
        Alpha5 = 53,
        Alpha6 = 54,
        Alpha7 = 55,
        Alpha8 = 56,
        Alpha9 = 57,
        Exclaim = 33,
        DoubleQuote = 34,
        Hash = 35,
        Dollar = 36,
        Ampersand = 38,
        Quote = 39,
        LeftParen = 40,
        RightParen = 41,
        Asterisk = 42,
        Plus = 43,
        Comma = 44,
        Minus = 45,
        Period = 46,
        Slash = 47,
        Colon = 58,
        Semicolon = 59,
        Less = 60,
        Equals = 61,
        Greater = 62,
        Question = 63,
        At = 64,
        LeftBracket = 91,
        Backslash = 92,
        RightBracket = 93,
        Caret = 94,
        Underscore = 95,
        BackQuote = 96,
        A = 97,
        B = 98,
        C = 99,
        D = 100,
        E = 101,
        F = 102,
        G = 103,
        H = 104,
        I = 105,
        J = 106,
        K = 107,
        L = 108,
        M = 109,
        N = 110,
        O = 111,
        P = 112,
        Q = 113,
        R = 114,
        S = 115,
        T = 116,
        U = 117,
        V = 118,
        W = 119,
        X = 120,
        Y = 121,
        Z = 122,
        Numlock = 300,
        CapsLock = 301,
        ScrollLock = 302,
        RightShift = 303,
        LeftShift = 304,
        RightControl = 305,
        LeftControl = 306,
        RightAlt = 307,
        LeftAlt = 308,
        LeftCommand = 310,
        LeftApple = 310,
        LeftWindows = 311,
        RightCommand = 309,
        RightApple = 309,
        RightWindows = 312,
        AltGr = 313,
        Help = 315,
        Print = 316,
        SysReq = 317,
        Break = 318,
        Menu = 319,
        Mouse0 = 323,
        Mouse1 = 324,
        Mouse2 = 325,
        Mouse3 = 326,
        Mouse4 = 327,
        Mouse5 = 328,
        Mouse6 = 329,
        JoystickButton0 = 330,
        JoystickButton1 = 331,
        JoystickButton2 = 332,
        JoystickButton3 = 333,
        JoystickButton4 = 334,
        JoystickButton5 = 335,
        JoystickButton6 = 336,
        JoystickButton7 = 337,
        JoystickButton8 = 338,
        JoystickButton9 = 339,
        JoystickButton10 = 340,
        JoystickButton11 = 341,
        JoystickButton12 = 342,
        JoystickButton13 = 343,
        JoystickButton14 = 344,
        JoystickButton15 = 345,
        JoystickButton16 = 346,
        JoystickButton17 = 347,
        JoystickButton18 = 348,
        JoystickButton19 = 349,
        Joystick1Button0 = 350,
        Joystick1Button1 = 351,
        Joystick1Button2 = 352,
        Joystick1Button3 = 353,
        Joystick1Button4 = 354,
        Joystick1Button5 = 355,
        Joystick1Button6 = 356,
        Joystick1Button7 = 357,
        Joystick1Button8 = 358,
        Joystick1Button9 = 359,
        Joystick1Button10 = 360,
        Joystick1Button11 = 361,
        Joystick1Button12 = 362,
        Joystick1Button13 = 363,
        Joystick1Button14 = 364,
        Joystick1Button15 = 365,
        Joystick1Button16 = 366,
        Joystick1Button17 = 367,
        Joystick1Button18 = 368,
        Joystick1Button19 = 369,
        Joystick2Button0 = 370,
        Joystick2Button1 = 371,
        Joystick2Button2 = 372,
        Joystick2Button3 = 373,
        Joystick2Button4 = 374,
        Joystick2Button5 = 375,
        Joystick2Button6 = 376,
        Joystick2Button7 = 377,
        Joystick2Button8 = 378,
        Joystick2Button9 = 379,
        Joystick2Button10 = 380,
        Joystick2Button11 = 381,
        Joystick2Button12 = 382,
        Joystick2Button13 = 383,
        Joystick2Button14 = 384,
        Joystick2Button15 = 385,
        Joystick2Button16 = 386,
        Joystick2Button17 = 387,
        Joystick2Button18 = 388,
        Joystick2Button19 = 389,
        Joystick3Button0 = 390,
        Joystick3Button1 = 391,
        Joystick3Button2 = 392,
        Joystick3Button3 = 393,
        Joystick3Button4 = 394,
        Joystick3Button5 = 395,
        Joystick3Button6 = 396,
        Joystick3Button7 = 397,
        Joystick3Button8 = 398,
        Joystick3Button9 = 399,
        Joystick3Button10 = 400,
        Joystick3Button11 = 401,
        Joystick3Button12 = 402,
        Joystick3Button13 = 403,
        Joystick3Button14 = 404,
        Joystick3Button15 = 405,
        Joystick3Button16 = 406,
        Joystick3Button17 = 407,
        Joystick3Button18 = 408,
        Joystick3Button19 = 409,
        Joystick4Button0 = 410,
        Joystick4Button1 = 411,
        Joystick4Button2 = 412,
        Joystick4Button3 = 413,
        Joystick4Button4 = 414,
        Joystick4Button5 = 415,
        Joystick4Button6 = 416,
        Joystick4Button7 = 417,
        Joystick4Button8 = 418,
        Joystick4Button9 = 419,
        Joystick4Button10 = 420,
        Joystick4Button11 = 421,
        Joystick4Button12 = 422,
        Joystick4Button13 = 423,
        Joystick4Button14 = 424,
        Joystick4Button15 = 425,
        Joystick4Button16 = 426,
        Joystick4Button17 = 427,
        Joystick4Button18 = 428,
        Joystick4Button19 = 429,
        Joystick5Button0 = 430,
        Joystick5Button1 = 431,
        Joystick5Button2 = 432,
        Joystick5Button3 = 433,
        Joystick5Button4 = 434,
        Joystick5Button5 = 435,
        Joystick5Button6 = 436,
        Joystick5Button7 = 437,
        Joystick5Button8 = 438,
        Joystick5Button9 = 439,
        Joystick5Button10 = 440,
        Joystick5Button11 = 441,
        Joystick5Button12 = 442,
        Joystick5Button13 = 443,
        Joystick5Button14 = 444,
        Joystick5Button15 = 445,
        Joystick5Button16 = 446,
        Joystick5Button17 = 447,
        Joystick5Button18 = 448,
        Joystick5Button19 = 449,
        Joystick6Button0 = 450,
        Joystick6Button1 = 451,
        Joystick6Button2 = 452,
        Joystick6Button3 = 453,
        Joystick6Button4 = 454,
        Joystick6Button5 = 455,
        Joystick6Button6 = 456,
        Joystick6Button7 = 457,
        Joystick6Button8 = 458,
        Joystick6Button9 = 459,
        Joystick6Button10 = 460,
        Joystick6Button11 = 461,
        Joystick6Button12 = 462,
        Joystick6Button13 = 463,
        Joystick6Button14 = 464,
        Joystick6Button15 = 465,
        Joystick6Button16 = 466,
        Joystick6Button17 = 467,
        Joystick6Button18 = 468,
        Joystick6Button19 = 469,
        Joystick7Button0 = 470,
        Joystick7Button1 = 471,
        Joystick7Button2 = 472,
        Joystick7Button3 = 473,
        Joystick7Button4 = 474,
        Joystick7Button5 = 475,
        Joystick7Button6 = 476,
        Joystick7Button7 = 477,
        Joystick7Button8 = 478,
        Joystick7Button9 = 479,
        Joystick7Button10 = 480,
        Joystick7Button11 = 481,
        Joystick7Button12 = 482,
        Joystick7Button13 = 483,
        Joystick7Button14 = 484,
        Joystick7Button15 = 485,
        Joystick7Button16 = 486,
        Joystick7Button17 = 487,
        Joystick7Button18 = 488,
        Joystick7Button19 = 489,
        Joystick8Button0 = 490,
        Joystick8Button1 = 491,
        Joystick8Button2 = 492,
        Joystick8Button3 = 493,
        Joystick8Button4 = 494,
        Joystick8Button5 = 495,
        Joystick8Button6 = 496,
        Joystick8Button7 = 497,
        Joystick8Button8 = 498,
        Joystick8Button9 = 499,
        Joystick8Button10 = 500,
        Joystick8Button11 = 501,
        Joystick8Button12 = 502,
        Joystick8Button13 = 503,
        Joystick8Button14 = 504,
        Joystick8Button15 = 505,
        Joystick8Button16 = 506,
        Joystick8Button17 = 507,
        Joystick8Button18 = 508,
        Joystick8Button19 = 509,
    }
}
declare module WebUnity {
    enum LightmapsMode {
        NonDirectional = 0,
        CombinedDirectional = 1,
        SeparateDirectional = 2,
        Single = 0,
        Dual = 1,
        Directional = 2,
    }
}
declare module WebUnity {
    enum LightmapsModeLegacy {
        Single = 0,
        Dual = 1,
        Directional = 2,
    }
}
declare module WebUnityInternal {
    enum LightmapType {
        NoLightmap = -1,
        StaticLightmap = 0,
        DynamicLightmap = 1,
    }
}
declare module WebUnity {
    enum LightRenderMode {
        Auto = 0,
        ForcePixel = 1,
        ForceVertex = 2,
    }
}
declare module WebUnity {
    enum LightShadows {
        None = 0,
        Hard = 1,
        Soft = 2,
    }
}
declare module WebUnity {
    enum LightType {
        Spot = 0,
        Directional = 1,
        Point = 2,
        Area = 3,
    }
}
declare module WebUnity {
    enum LocationServiceStatus {
        Stopped = 0,
        Initializing = 1,
        Running = 2,
        Failed = 3,
    }
}
declare module WebUnity {
    enum LODFadeMode {
        None = 0,
        CrossFade = 1,
        SpeedTree = 2,
    }
}
declare module WebUnity {
    enum LogType {
        Error = 0,
        Assert = 1,
        Warning = 2,
        Log = 3,
        Exception = 4,
    }
}
declare module WebUnity {
    enum MasterServerEvent {
        RegistrationFailedGameName = 0,
        RegistrationFailedGameType = 1,
        RegistrationFailedNoServer = 2,
        RegistrationSucceeded = 3,
        HostListReceived = 4,
    }
}
declare module WebUnity {
    enum MaterialGlobalIlluminationFlags {
        None = 0,
        RealtimeEmissive = 1,
        BakedEmissive = 2,
        EmissiveIsBlack = 4,
    }
}
declare module WebUnity {
    enum MeshTopology {
        Triangles = 0,
        Quads = 2,
        Lines = 3,
        LineStrip = 4,
        Points = 5,
    }
}
declare module WebUnity {
    enum NavMeshObstacleShape {
        Capsule = 0,
        Box = 1,
    }
}
declare module WebUnity {
    enum NavMeshPathStatus {
        PathComplete = 0,
        PathPartial = 1,
        PathInvalid = 2,
    }
}
declare module WebUnity {
    enum NetworkConnectionError {
        NoError = 0,
        RSAPublicKeyMismatch = 21,
        InvalidPassword = 23,
        ConnectionFailed = 15,
        TooManyConnectedPlayers = 18,
        ConnectionBanned = 22,
        AlreadyConnectedToServer = 16,
        AlreadyConnectedToAnotherServer = -1,
        CreateSocketOrThreadFailure = -2,
        IncorrectParameters = -3,
        EmptyConnectTarget = -4,
        InternalDirectConnectFailed = -5,
        NATTargetNotConnected = 69,
        NATTargetConnectionLost = 71,
        NATPunchthroughFailed = 73,
    }
}
declare module WebUnity {
    enum NetworkDisconnection {
        LostConnection = 20,
        Disconnected = 19,
    }
}
declare module WebUnity.Networking {
    enum NetworkError {
        Ok = 0,
        WrongHost = 1,
        WrongConnection = 2,
        WrongChannel = 3,
        NoResources = 4,
        BadMessage = 5,
        Timeout = 6,
        MessageToLong = 7,
        WrongOperation = 8,
        VersionMismatch = 9,
        CRCMismatch = 10,
        DNSFailure = 11,
    }
}
declare module WebUnity.Networking {
    enum NetworkEventType {
        DataEvent = 0,
        ConnectEvent = 1,
        DisconnectEvent = 2,
        Nothing = 3,
        BroadcastEvent = 4,
    }
}
declare module WebUnity.Networking {
    enum QosType {
        Unreliable = 0,
        UnreliableFragmented = 1,
        UnreliableSequenced = 2,
        Reliable = 3,
        ReliableFragmented = 4,
        ReliableSequenced = 5,
        StateUpdate = 6,
        ReliableStateUpdate = 7,
        AllCostDelivery = 8,
    }
}
declare module WebUnity.Networking {
    enum ReactorModel {
        SelectReactor = 0,
        FixRateReactor = 1,
    }
}
declare module WebUnity.Networking.Types {
    enum NetworkAccessLevel {
        Invalid = 0,
        User = 1,
        Owner = 2,
        Admin = 4,
    }
}
declare module WebUnity.Networking.Types {
    enum NodeID {
        Invalid = 0,
    }
}
declare module WebUnity {
    enum NetworkLogLevel {
        Off = 0,
        Informational = 1,
        Full = 3,
    }
}
declare module WebUnity {
    enum NetworkPeerType {
        Disconnected = 0,
        Server = 1,
        Client = 2,
        Connecting = 3,
    }
}
declare module WebUnity {
    enum NetworkReachability {
        NotReachable = 0,
        ReachableViaCarrierDataNetwork = 1,
        ReachableViaLocalAreaNetwork = 2,
    }
}
declare module WebUnity {
    enum NetworkStateSynchronization {
        Off = 0,
        ReliableDeltaCompressed = 1,
        Unreliable = 2,
    }
}
declare module WebUnity {
    enum NPOTSupport {
        None = 0,
        Restricted = 1,
        Full = 2,
    }
}
declare module WebUnity {
    enum ObstacleAvoidanceType {
        NoObstacleAvoidance = 0,
        LowQualityObstacleAvoidance = 1,
        MedQualityObstacleAvoidance = 2,
        GoodQualityObstacleAvoidance = 3,
        HighQualityObstacleAvoidance = 4,
    }
}
declare module WebUnity {
    enum OffMeshLinkType {
        LinkTypeManual = 0,
        LinkTypeDropDown = 1,
        LinkTypeJumpAcross = 2,
    }
}
declare module WebUnity {
    enum ParticleRenderMode {
        Billboard = 0,
        Stretch = 3,
        SortedBillboard = 2,
        HorizontalBillboard = 4,
        VerticalBillboard = 5,
    }
}
declare module WebUnity {
    enum ParticleSystemAnimationType {
        WholeSheet = 0,
        SingleRow = 1,
    }
}
declare module WebUnity {
    enum ParticleSystemCollisionMode {
        Collision3D = 0,
        Collision2D = 1,
    }
}
declare module WebUnity {
    enum ParticleSystemCollisionQuality {
        High = 0,
        Medium = 1,
        Low = 2,
    }
}
declare module WebUnity {
    enum ParticleSystemCollisionType {
        Planes = 0,
        World = 1,
    }
}
declare module WebUnity {
    enum ParticleSystemCurveMode {
        Constant = 0,
        Curve = 1,
        TwoCurves = 2,
        TwoConstants = 3,
    }
}
declare module WebUnity {
    enum ParticleSystemEmissionType {
        Time = 0,
        Distance = 1,
    }
}
declare module WebUnity {
    enum ParticleSystemGradientMode {
        Color = 0,
        Gradient = 1,
        TwoColors = 2,
        TwoGradients = 3,
    }
}
declare module WebUnity {
    enum ParticleSystemInheritVelocityMode {
        Initial = 0,
        Current = 1,
    }
}
declare module WebUnity {
    enum ParticleSystemMeshShapeType {
        Vertex = 0,
        Edge = 1,
        Triangle = 2,
    }
}
declare module WebUnity {
    enum ParticleSystemRenderMode {
        Billboard = 0,
        Stretch = 1,
        HorizontalBillboard = 2,
        VerticalBillboard = 3,
        Mesh = 4,
    }
}
declare module WebUnity {
    enum ParticleSystemRenderSpace {
        View = 0,
        World = 1,
        Local = 2,
    }
}
declare module WebUnity {
    enum ParticleSystemScalingMode {
        Hierarchy = 0,
        Local = 1,
        Shape = 2,
    }
}
declare module WebUnity {
    enum ParticleSystemShapeType {
        Sphere = 0,
        SphereShell = 1,
        Hemisphere = 2,
        HemisphereShell = 3,
        Cone = 4,
        Box = 5,
        Mesh = 6,
        ConeShell = 7,
        ConeVolume = 8,
        ConeVolumeShell = 9,
        Circle = 10,
        CircleEdge = 11,
        SingleSidedEdge = 12,
        MeshRenderer = 13,
        SkinnedMeshRenderer = 14,
    }
}
declare module WebUnity {
    enum ParticleSystemSimulationSpace {
        Local = 0,
        World = 1,
    }
}
declare module WebUnity {
    enum ParticleSystemSortMode {
        None = 0,
        Distance = 1,
        OldestInFront = 2,
        YoungestInFront = 3,
    }
}
declare module WebUnity {
    enum PhysicMaterialCombine {
        Average = 0,
        Minimum = 2,
        Multiply = 1,
        Maximum = 3,
    }
}
declare module WebUnity {
    enum PlayMode {
        StopSameLayer = 0,
        StopAll = 4,
    }
}
declare module WebUnity {
    enum PrimitiveType {
        Sphere = 0,
        Capsule = 1,
        Cylinder = 2,
        Cube = 3,
        Plane = 4,
        Quad = 5,
    }
}
declare module WebUnity {
    enum ProceduralCacheSize {
        Tiny = 0,
        Medium = 1,
        Heavy = 2,
        NoLimit = 3,
        None = 4,
    }
}
declare module WebUnity {
    enum ProceduralLoadingBehavior {
        DoNothing = 0,
        Generate = 1,
        BakeAndKeep = 2,
        BakeAndDiscard = 3,
        Cache = 4,
        DoNothingAndCache = 5,
    }
}
declare module WebUnity {
    enum ProceduralOutputType {
        Unknown = 0,
        Diffuse = 1,
        Normal = 2,
        Height = 3,
        Emissive = 4,
        Specular = 5,
        Opacity = 6,
        Smoothness = 7,
        AmbientOcclusion = 8,
        DetailMask = 9,
        Metallic = 10,
        Roughness = 11,
    }
}
declare module WebUnity {
    enum ProceduralProcessorUsage {
        Unsupported = 0,
        One = 1,
        Half = 2,
        All = 3,
    }
}
declare module WebUnity {
    enum ProceduralPropertyType {
        Boolean = 0,
        Float = 1,
        Vector2 = 2,
        Vector3 = 3,
        Vector4 = 4,
        Color3 = 5,
        Color4 = 6,
        Enum = 7,
        Texture = 8,
    }
}
declare module WebUnity {
    enum QualityLevel {
        Fastest = 0,
        Fast = 1,
        Simple = 2,
        Good = 3,
        Beautiful = 4,
        Fantastic = 5,
    }
}
declare module WebUnity {
    enum QueryTriggerInteraction {
        UseGlobal = 0,
        Ignore = 1,
        Collide = 2,
    }
}
declare module WebUnity {
    enum QueueMode {
        CompleteOthers = 0,
        PlayNow = 2,
    }
}
declare module UnityEngine {
    enum RectTransform_Axis {
        Horizontal = 0,
        Vertical = 1,
    }
}
declare module UnityEngine {
    enum RectTransform_Edge {
        Left = 0,
        Right = 1,
        Top = 2,
        Bottom = 3,
    }
}
declare module WebUnity.Rendering {
    enum AmbientMode {
        Skybox = 0,
        Trilight = 1,
        Flat = 3,
        Custom = 4,
    }
}
declare module WebUnity.Rendering {
    enum BlendMode {
        Zero = 0,
        One = 1,
        DstColor = 2,
        SrcColor = 3,
        OneMinusDstColor = 4,
        SrcAlpha = 5,
        OneMinusSrcColor = 6,
        DstAlpha = 7,
        OneMinusDstAlpha = 8,
        SrcAlphaSaturate = 9,
        OneMinusSrcAlpha = 10,
    }
}
declare module WebUnity.Rendering {
    enum BlendOp {
        Add = 0,
        Subtract = 1,
        ReverseSubtract = 2,
        Min = 3,
        Max = 4,
        LogicalClear = 5,
        LogicalSet = 6,
        LogicalCopy = 7,
        LogicalCopyInverted = 8,
        LogicalNoop = 9,
        LogicalInvert = 10,
        LogicalAnd = 11,
        LogicalNand = 12,
        LogicalOr = 13,
        LogicalNor = 14,
        LogicalXor = 15,
        LogicalEquivalence = 16,
        LogicalAndReverse = 17,
        LogicalAndInverted = 18,
        LogicalOrReverse = 19,
        LogicalOrInverted = 20,
        Multiply = 21,
        Screen = 22,
        Overlay = 23,
        Darken = 24,
        Lighten = 25,
        ColorDodge = 26,
        ColorBurn = 27,
        HardLight = 28,
        SoftLight = 29,
        Difference = 30,
        Exclusion = 31,
        HSLHue = 32,
        HSLSaturation = 33,
        HSLColor = 34,
        HSLLuminosity = 35,
    }
}
declare module WebUnity.Rendering {
    enum BuiltinRenderTextureType {
        None = 0,
        CurrentActive = 1,
        CameraTarget = 2,
        Depth = 3,
        DepthNormals = 4,
        PrepassNormalsSpec = 7,
        PrepassLight = 8,
        PrepassLightSpec = 9,
        GBuffer0 = 10,
        GBuffer1 = 11,
        GBuffer2 = 12,
        GBuffer3 = 13,
        Reflections = 14,
    }
}
declare module WebUnity.Rendering {
    enum BuiltinShaderMode {
        Disabled = 0,
        UseBuiltin = 1,
        UseCustom = 2,
    }
}
declare module WebUnity.Rendering {
    enum BuiltinShaderType {
        DeferredShading = 0,
        DeferredReflections = 1,
        LegacyDeferredLighting = 2,
    }
}
declare module WebUnity.Rendering {
    enum CameraEvent {
        BeforeDepthTexture = 0,
        AfterDepthTexture = 1,
        BeforeDepthNormalsTexture = 2,
        AfterDepthNormalsTexture = 3,
        BeforeGBuffer = 4,
        AfterGBuffer = 5,
        BeforeLighting = 6,
        AfterLighting = 7,
        BeforeFinalPass = 8,
        AfterFinalPass = 9,
        BeforeForwardOpaque = 10,
        AfterForwardOpaque = 11,
        BeforeImageEffectsOpaque = 12,
        AfterImageEffectsOpaque = 13,
        BeforeSkybox = 14,
        AfterSkybox = 15,
        BeforeForwardAlpha = 16,
        AfterForwardAlpha = 17,
        BeforeImageEffects = 18,
        AfterImageEffects = 19,
        AfterEverything = 20,
        BeforeReflections = 21,
        AfterReflections = 22,
    }
}
declare module WebUnity.Rendering {
    enum ColorWriteMask {
        Alpha = 1,
        Blue = 2,
        Green = 4,
        Red = 8,
        All = 15,
    }
}
declare module WebUnity.Rendering {
    enum CompareFunction {
        Disabled = 0,
        Never = 1,
        Less = 2,
        Equal = 3,
        LessEqual = 4,
        Greater = 5,
        NotEqual = 6,
        GreaterEqual = 7,
        Always = 8,
    }
}
declare module WebUnity.Rendering {
    enum CullMode {
        Off = 0,
        Front = 1,
        Back = 2,
    }
}
declare module WebUnity.Rendering {
    enum DefaultReflectionMode {
        Skybox = 0,
        Custom = 1,
    }
}
declare module WebUnity.Rendering {
    enum GraphicsDeviceType {
        OpenGL2 = 0,
        Direct3D9 = 1,
        Direct3D11 = 2,
        PlayStation3 = 3,
        Null = 4,
        Xbox360 = 6,
        OpenGLES2 = 8,
        OpenGLES3 = 11,
        PlayStationVita = 12,
        PlayStation4 = 13,
        XboxOne = 14,
        PlayStationMobile = 15,
        Metal = 16,
        OpenGLCore = 17,
        Direct3D12 = 18,
        Nintendo3DS = 19,
    }
}
declare module WebUnity.Rendering {
    enum LightEvent {
        BeforeShadowMap = 0,
        AfterShadowMap = 1,
        BeforeScreenspaceMask = 2,
        AfterScreenspaceMask = 3,
    }
}
declare module WebUnity.Rendering {
    enum OpaqueSortMode {
        Default = 0,
        FrontToBack = 1,
        NoDistanceSort = 2,
    }
}
declare module WebUnity.Rendering {
    enum PassType {
        Normal = 0,
        Vertex = 1,
        VertexLM = 2,
        VertexLMRGBM = 3,
        ForwardBase = 4,
        ForwardAdd = 5,
        LightPrePassBase = 6,
        LightPrePassFinal = 7,
        ShadowCaster = 8,
        Deferred = 10,
        Meta = 11,
    }
}
declare module WebUnity.Rendering {
    enum ReflectionCubemapCompression {
        Uncompressed = 0,
        Compressed = 1,
        Auto = 2,
    }
}
declare module WebUnity.Rendering {
    enum ReflectionProbeClearFlags {
        Skybox = 1,
        SolidColor = 2,
    }
}
declare module WebUnity.Rendering {
    enum ReflectionProbeMode {
        Baked = 0,
        Realtime = 1,
        Custom = 2,
    }
}
declare module WebUnity.Rendering {
    enum ReflectionProbeRefreshMode {
        OnAwake = 0,
        EveryFrame = 1,
        ViaScripting = 2,
    }
}
declare module WebUnity.Rendering {
    enum ReflectionProbeTimeSlicingMode {
        AllFacesAtOnce = 0,
        IndividualFaces = 1,
        NoTimeSlicing = 2,
    }
}
declare module WebUnity.Rendering {
    enum ReflectionProbeType {
        Cube = 0,
        Card = 1,
    }
}
declare module WebUnity.Rendering {
    enum ReflectionProbeUsage {
        Off = 0,
        BlendProbes = 1,
        BlendProbesAndSkybox = 2,
        Simple = 3,
    }
}
declare module WebUnity.Rendering {
    enum RenderBufferLoadAction {
        Load = 0,
        DontCare = 2,
    }
}
declare module WebUnity.Rendering {
    enum RenderBufferStoreAction {
        Store = 0,
        DontCare = 1,
    }
}
declare module WebUnity.Rendering {
    enum ShadowCastingMode {
        Off = 0,
        On = 1,
        TwoSided = 2,
        ShadowsOnly = 3,
    }
}
declare module WebUnity.Rendering {
    enum ShadowSamplingMode {
        CompareDepths = 0,
        RawDepth = 1,
    }
}
declare module WebUnity.Rendering {
    enum StencilOp {
        Keep = 0,
        Zero = 1,
        Replace = 2,
        IncrementSaturate = 3,
        DecrementSaturate = 4,
        Invert = 5,
        IncrementWrap = 6,
        DecrementWrap = 7,
    }
}
declare module WebUnity {
    enum RenderingPath {
        UsePlayerSettings = -1,
        VertexLit = 0,
        Forward = 1,
        DeferredLighting = 2,
        DeferredShading = 3,
    }
}
declare module WebUnity {
    enum RenderMode {
        ScreenSpaceOverlay = 0,
        ScreenSpaceCamera = 1,
        WorldSpace = 2,
    }
}
declare module WebUnity {
    enum RenderTextureFormat {
        ARGB32 = 0,
        Depth = 1,
        ARGBHalf = 2,
        Shadowmap = 3,
        RGB565 = 4,
        ARGB4444 = 5,
        ARGB1555 = 6,
        Default = 7,
        ARGB2101010 = 8,
        DefaultHDR = 9,
        ARGBFloat = 11,
        RGFloat = 12,
        RGHalf = 13,
        RFloat = 14,
        RHalf = 15,
        R8 = 16,
        ARGBInt = 17,
        RGInt = 18,
        RInt = 19,
    }
}
declare module WebUnity {
    enum RenderTextureReadWrite {
        Default = 0,
        Linear = 1,
        sRGB = 2,
    }
}
declare module WebUnity {
    enum RigidbodyConstraints {
        None = 0,
        FreezePositionX = 2,
        FreezePositionY = 4,
        FreezePositionZ = 8,
        FreezeRotationX = 16,
        FreezeRotationY = 32,
        FreezeRotationZ = 64,
        FreezePosition = 14,
        FreezeRotation = 112,
        FreezeAll = 126,
    }
}
declare module WebUnity {
    enum RigidbodyConstraints2D {
        None = 0,
        FreezePositionX = 1,
        FreezePositionY = 2,
        FreezeRotation = 4,
        FreezePosition = 3,
        FreezeAll = 7,
    }
}
declare module WebUnity {
    enum RigidbodyInterpolation {
        None = 0,
        Interpolate = 1,
        Extrapolate = 2,
    }
}
declare module WebUnity {
    enum RigidbodyInterpolation2D {
        None = 0,
        Interpolate = 1,
        Extrapolate = 2,
    }
}
declare module WebUnity {
    enum RigidbodySleepMode2D {
        NeverSleep = 0,
        StartAwake = 1,
        StartAsleep = 2,
    }
}
declare module WebUnity {
    enum RotationDriveMode {
        XYAndZ = 0,
        Slerp = 1,
    }
}
declare module WebUnity {
    enum RPCMode {
        Server = 0,
        Others = 1,
        OthersBuffered = 5,
        All = 2,
        AllBuffered = 6,
    }
}
declare module WebUnity {
    enum RuntimeInitializeLoadType {
        AfterSceneLoad = 0,
        BeforeSceneLoad = 1,
    }
}
declare module WebUnity {
    enum RuntimePlatform {
        OSXEditor = 0,
        OSXPlayer = 1,
        WindowsPlayer = 2,
        OSXWebPlayer = 3,
        OSXDashboardPlayer = 4,
        WindowsWebPlayer = 5,
        WindowsEditor = 7,
        IPhonePlayer = 8,
        XBOX360 = 10,
        PS3 = 9,
        Android = 11,
        NaCl = 12,
        FlashPlayer = 15,
        LinuxPlayer = 13,
        WebGLPlayer = 17,
        MetroPlayerX86 = 18,
        WSAPlayerX86 = 18,
        MetroPlayerX64 = 19,
        WSAPlayerX64 = 19,
        MetroPlayerARM = 20,
        WSAPlayerARM = 20,
        WP8Player = 21,
        BB10Player = 22,
        BlackBerryPlayer = 22,
        TizenPlayer = 23,
        PSP2 = 24,
        PS4 = 25,
        PSM = 26,
        XboxOne = 27,
        SamsungTVPlayer = 28,
        WiiU = 30,
        tvOS = 31,
    }
}
declare module WebUnity {
    enum ScaleMode {
        StretchToFill = 0,
        ScaleAndCrop = 1,
        ScaleToFit = 2,
    }
}
declare module WebUnity.SceneManagement {
    enum LoadSceneMode {
        Single = 0,
        Additive = 1,
    }
}
declare module WebUnity {
    enum ScreenOrientation {
        Unknown = 0,
        Portrait = 1,
        PortraitUpsideDown = 2,
        LandscapeLeft = 3,
        LandscapeRight = 4,
        AutoRotation = 5,
        Landscape = 3,
    }
}
declare module WebUnity {
    enum SendMessageOptions {
        RequireReceiver = 0,
        DontRequireReceiver = 1,
    }
}
declare module WebUnity {
    enum ShadowProjection {
        CloseFit = 0,
        StableFit = 1,
    }
}
declare module WebUnity {
    enum SkinQuality {
        Auto = 0,
        Bone1 = 1,
        Bone2 = 2,
        Bone4 = 4,
    }
}
declare module WebUnity.SocialPlatforms {
    enum TimeScope {
        Today = 0,
        Week = 1,
        AllTime = 2,
    }
}
declare module WebUnity.SocialPlatforms {
    enum UserScope {
        Global = 0,
        FriendsOnly = 1,
    }
}
declare module WebUnity.SocialPlatforms {
    enum UserState {
        Online = 0,
        OnlineAndAway = 1,
        OnlineAndBusy = 2,
        Offline = 3,
        Playing = 4,
    }
}
declare module WebUnity {
    enum Space {
        World = 0,
        Self = 1,
    }
}
declare module WebUnity {
    enum SpriteAlignment {
        Center = 0,
        TopLeft = 1,
        TopCenter = 2,
        TopRight = 3,
        LeftCenter = 4,
        RightCenter = 5,
        BottomLeft = 6,
        BottomCenter = 7,
        BottomRight = 8,
        Custom = 9,
    }
}
declare module WebUnity {
    enum SpriteMeshType {
        FullRect = 0,
        Tight = 1,
    }
}
declare module WebUnity {
    enum SpritePackingMode {
        Tight = 0,
        Rectangle = 1,
    }
}
declare module WebUnity {
    enum SpritePackingRotation {
        None = 0,
        Any = 15,
    }
}
declare module WebUnity {
    enum StackTraceLogType {
        None = 0,
        ScriptOnly = 1,
        Full = 2,
    }
}
declare module WebUnity {
    enum SystemLanguage {
        Afrikaans = 0,
        Arabic = 1,
        Basque = 2,
        Belarusian = 3,
        Bulgarian = 4,
        Catalan = 5,
        Chinese = 6,
        Czech = 7,
        Danish = 8,
        Dutch = 9,
        English = 10,
        Estonian = 11,
        Faroese = 12,
        Finnish = 13,
        French = 14,
        German = 15,
        Greek = 16,
        Hebrew = 17,
        Hugarian = 18,
        Icelandic = 19,
        Indonesian = 20,
        Italian = 21,
        Japanese = 22,
        Korean = 23,
        Latvian = 24,
        Lithuanian = 25,
        Norwegian = 26,
        Polish = 27,
        Portuguese = 28,
        Romanian = 29,
        Russian = 30,
        SerboCroatian = 31,
        Slovak = 32,
        Slovenian = 33,
        Spanish = 34,
        Swedish = 35,
        Thai = 36,
        Turkish = 37,
        Ukrainian = 38,
        Vietnamese = 39,
        ChineseSimplified = 40,
        ChineseTraditional = 41,
        Unknown = 42,
        Hungarian = 18,
    }
}
declare module WebUnity {
    enum TerrainRenderFlags {
        heightmap = 1,
        trees = 2,
        details = 4,
        all = 7,
    }
}
declare module UnityEngine {
    enum Terrain_MaterialType {
        BuiltInStandard = 0,
        BuiltInLegacyDiffuse = 1,
        BuiltInLegacySpecular = 2,
        Custom = 3,
    }
}
declare module WebUnity {
    enum TexGenMode {
        None = 0,
        SphereMap = 1,
        Object = 2,
        EyeLinear = 3,
        CubeReflect = 4,
        CubeNormal = 5,
    }
}
declare module WebUnity {
    enum TextAlignment {
        Left = 0,
        Center = 1,
        Right = 2,
    }
}
declare module WebUnity {
    enum TextAnchor {
        UpperLeft = 0,
        UpperCenter = 1,
        UpperRight = 2,
        MiddleLeft = 3,
        MiddleCenter = 4,
        MiddleRight = 5,
        LowerLeft = 6,
        LowerCenter = 7,
        LowerRight = 8,
    }
}
declare module WebUnity {
    enum TextClipping {
        Overflow = 0,
        Clip = 1,
    }
}
declare module UnityEngine {
    enum TextEditor_CharacterType {
        LetterLike = 0,
        Symbol = 1,
        Symbol2 = 2,
        WhiteSpace = 3,
    }
}
declare module UnityEngine {
    enum TextEditor_DblClickSnapping {
        WORDS = 0,
        PARAGRAPHS = 1,
    }
}
declare module UnityEngine {
    enum TextEditor_TextEditOp {
        MoveLeft = 0,
        MoveRight = 1,
        MoveUp = 2,
        MoveDown = 3,
        MoveLineStart = 4,
        MoveLineEnd = 5,
        MoveTextStart = 6,
        MoveTextEnd = 7,
        MovePageUp = 8,
        MovePageDown = 9,
        MoveGraphicalLineStart = 10,
        MoveGraphicalLineEnd = 11,
        MoveWordLeft = 12,
        MoveWordRight = 13,
        MoveParagraphForward = 14,
        MoveParagraphBackward = 15,
        MoveToStartOfNextWord = 16,
        MoveToEndOfPreviousWord = 17,
        SelectLeft = 18,
        SelectRight = 19,
        SelectUp = 20,
        SelectDown = 21,
        SelectTextStart = 22,
        SelectTextEnd = 23,
        SelectPageUp = 24,
        SelectPageDown = 25,
        ExpandSelectGraphicalLineStart = 26,
        ExpandSelectGraphicalLineEnd = 27,
        SelectGraphicalLineStart = 28,
        SelectGraphicalLineEnd = 29,
        SelectWordLeft = 30,
        SelectWordRight = 31,
        SelectToEndOfPreviousWord = 32,
        SelectToStartOfNextWord = 33,
        SelectParagraphBackward = 34,
        SelectParagraphForward = 35,
        Delete = 36,
        Backspace = 37,
        DeleteWordBack = 38,
        DeleteWordForward = 39,
        DeleteLineBack = 40,
        Cut = 41,
        Copy = 42,
        Paste = 43,
        SelectAll = 44,
        SelectNone = 45,
        ScrollStart = 46,
        ScrollEnd = 47,
        ScrollPageUp = 48,
        ScrollPageDown = 49,
    }
}
declare module WebUnity {
    enum TextureFormat {
        Alpha8 = 1,
        ARGB4444 = 2,
        RGB24 = 3,
        RGBA32 = 4,
        ARGB32 = 5,
        RGB565 = 7,
        R16 = 9,
        DXT1 = 10,
        DXT5 = 12,
        RGBA4444 = 13,
        BGRA32 = 14,
        RHalf = 15,
        RGHalf = 16,
        RGBAHalf = 17,
        RFloat = 18,
        RGFloat = 19,
        RGBAFloat = 20,
        YUY2 = 21,
        DXT1Crunched = 28,
        DXT5Crunched = 29,
        PVRTC_RGB2 = 30,
        PVRTC_RGBA2 = 31,
        PVRTC_RGB4 = 32,
        PVRTC_RGBA4 = 33,
        ETC_RGB4 = 34,
        ATC_RGB4 = 35,
        ATC_RGBA8 = 36,
        EAC_R = 41,
        EAC_R_SIGNED = 42,
        EAC_RG = 43,
        EAC_RG_SIGNED = 44,
        ETC2_RGB = 45,
        ETC2_RGBA1 = 46,
        ETC2_RGBA8 = 47,
        ASTC_RGB_4x4 = 48,
        ASTC_RGB_5x5 = 49,
        ASTC_RGB_6x6 = 50,
        ASTC_RGB_8x8 = 51,
        ASTC_RGB_10x10 = 52,
        ASTC_RGB_12x12 = 53,
        ASTC_RGBA_4x4 = 54,
        ASTC_RGBA_5x5 = 55,
        ASTC_RGBA_6x6 = 56,
        ASTC_RGBA_8x8 = 57,
        ASTC_RGBA_10x10 = 58,
        ASTC_RGBA_12x12 = 59,
        ETC_RGB4_3DS = 60,
        ETC_RGBA8_3DS = 61,
        PVRTC_2BPP_RGB = -127,
        PVRTC_2BPP_RGBA = -127,
        PVRTC_4BPP_RGB = -127,
        PVRTC_4BPP_RGBA = -127,
    }
}
declare module WebUnity {
    enum TextureWrapMode {
        Repeat = 0,
        Clamp = 1,
    }
}
declare module WebUnity {
    enum ThreadPriority {
        Low = 0,
        BelowNormal = 1,
        Normal = 2,
        High = 4,
    }
}
declare module WebUnity {
    enum TouchPhase {
        Began = 0,
        Moved = 1,
        Stationary = 2,
        Ended = 3,
        Canceled = 4,
    }
}
declare module WebUnity {
    enum TouchScreenKeyboardType {
        Default = 0,
        ASCIICapable = 1,
        NumbersAndPunctuation = 2,
        URL = 3,
        NumberPad = 4,
        PhonePad = 5,
        NamePhonePad = 6,
        EmailAddress = 7,
        NintendoNetworkAccount = 8,
    }
}
declare module WebUnity {
    enum TouchType {
        Direct = 0,
        Indirect = 1,
        Stylus = 2,
    }
}
declare module WebUnity {
    enum TransparencySortMode {
        Default = 0,
        Perspective = 1,
        Orthographic = 2,
    }
}
declare module WebUnityInternal {
    enum TypeInferenceRules {
        TypeReferencedByFirstArgument = 0,
        TypeReferencedBySecondArgument = 1,
        ArrayOfTypeReferencedByFirstArgument = 2,
        TypeOfFirstArgument = 3,
    }
}
declare module WebUnity {
    enum UserAuthorization {
        WebCam = 1,
        Microphone = 2,
    }
}
declare module WebUnity {
    enum VerticalWrapMode {
        Truncate = 0,
        Overflow = 1,
    }
}
declare module WebUnity.VR {
    enum VRDeviceType {
        None = 0,
        Stereo = 1,
        Split = 2,
        Oculus = 3,
        Morpheus = 4,
    }
}
declare module WebUnity.VR {
    enum VRNode {
        LeftEye = 0,
        RightEye = 1,
        CenterEye = 2,
        Head = 3,
    }
}
declare module WebUnity {
    enum WebCamFlags {
        FrontFacing = 1,
    }
}
declare module WebUnity {
    enum WindZoneMode {
        Directional = 0,
        Spherical = 1,
    }
}
declare module WebUnity {
    enum WrapMode {
        Once = 1,
        Loop = 2,
        PingPong = 4,
        Default = 0,
        ClampForever = 8,
        Clamp = 1,
    }
}
