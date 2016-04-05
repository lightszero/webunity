var WebUnity;
(function (WebUnity) {
    (function (AnimationBlendMode) {
        AnimationBlendMode[AnimationBlendMode["Blend"] = 0] = "Blend";
        AnimationBlendMode[AnimationBlendMode["Additive"] = 1] = "Additive";
    })(WebUnity.AnimationBlendMode || (WebUnity.AnimationBlendMode = {}));
    var AnimationBlendMode = WebUnity.AnimationBlendMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AnimationCullingType) {
        AnimationCullingType[AnimationCullingType["AlwaysAnimate"] = 0] = "AlwaysAnimate";
        AnimationCullingType[AnimationCullingType["BasedOnRenderers"] = 1] = "BasedOnRenderers";
        AnimationCullingType[AnimationCullingType["BasedOnClipBounds"] = 2] = "BasedOnClipBounds";
        AnimationCullingType[AnimationCullingType["BasedOnUserBounds"] = 3] = "BasedOnUserBounds";
    })(WebUnity.AnimationCullingType || (WebUnity.AnimationCullingType = {}));
    var AnimationCullingType = WebUnity.AnimationCullingType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AnimationPlayMode) {
        AnimationPlayMode[AnimationPlayMode["Stop"] = 0] = "Stop";
        AnimationPlayMode[AnimationPlayMode["Queue"] = 1] = "Queue";
        AnimationPlayMode[AnimationPlayMode["Mix"] = 2] = "Mix";
    })(WebUnity.AnimationPlayMode || (WebUnity.AnimationPlayMode = {}));
    var AnimationPlayMode = WebUnity.AnimationPlayMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AnimatorControllerParameterType) {
        AnimatorControllerParameterType[AnimatorControllerParameterType["Float"] = 1] = "Float";
        AnimatorControllerParameterType[AnimatorControllerParameterType["Int"] = 3] = "Int";
        AnimatorControllerParameterType[AnimatorControllerParameterType["Bool"] = 4] = "Bool";
        AnimatorControllerParameterType[AnimatorControllerParameterType["Trigger"] = 9] = "Trigger";
    })(WebUnity.AnimatorControllerParameterType || (WebUnity.AnimatorControllerParameterType = {}));
    var AnimatorControllerParameterType = WebUnity.AnimatorControllerParameterType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AnimatorCullingMode) {
        AnimatorCullingMode[AnimatorCullingMode["AlwaysAnimate"] = 0] = "AlwaysAnimate";
        AnimatorCullingMode[AnimatorCullingMode["CullUpdateTransforms"] = 1] = "CullUpdateTransforms";
        AnimatorCullingMode[AnimatorCullingMode["CullCompletely"] = 2] = "CullCompletely";
    })(WebUnity.AnimatorCullingMode || (WebUnity.AnimatorCullingMode = {}));
    var AnimatorCullingMode = WebUnity.AnimatorCullingMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AnimatorRecorderMode) {
        AnimatorRecorderMode[AnimatorRecorderMode["Offline"] = 0] = "Offline";
        AnimatorRecorderMode[AnimatorRecorderMode["Playback"] = 1] = "Playback";
        AnimatorRecorderMode[AnimatorRecorderMode["Record"] = 2] = "Record";
    })(WebUnity.AnimatorRecorderMode || (WebUnity.AnimatorRecorderMode = {}));
    var AnimatorRecorderMode = WebUnity.AnimatorRecorderMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AnimatorUpdateMode) {
        AnimatorUpdateMode[AnimatorUpdateMode["Normal"] = 0] = "Normal";
        AnimatorUpdateMode[AnimatorUpdateMode["AnimatePhysics"] = 1] = "AnimatePhysics";
        AnimatorUpdateMode[AnimatorUpdateMode["UnscaledTime"] = 2] = "UnscaledTime";
    })(WebUnity.AnimatorUpdateMode || (WebUnity.AnimatorUpdateMode = {}));
    var AnimatorUpdateMode = WebUnity.AnimatorUpdateMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AnisotropicFiltering) {
        AnisotropicFiltering[AnisotropicFiltering["Disable"] = 0] = "Disable";
        AnisotropicFiltering[AnisotropicFiltering["Enable"] = 1] = "Enable";
        AnisotropicFiltering[AnisotropicFiltering["ForceEnable"] = 2] = "ForceEnable";
    })(WebUnity.AnisotropicFiltering || (WebUnity.AnisotropicFiltering = {}));
    var AnisotropicFiltering = WebUnity.AnisotropicFiltering;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ApplicationInstallMode) {
        ApplicationInstallMode[ApplicationInstallMode["Unknown"] = 0] = "Unknown";
        ApplicationInstallMode[ApplicationInstallMode["Store"] = 1] = "Store";
        ApplicationInstallMode[ApplicationInstallMode["DeveloperBuild"] = 2] = "DeveloperBuild";
        ApplicationInstallMode[ApplicationInstallMode["Adhoc"] = 3] = "Adhoc";
        ApplicationInstallMode[ApplicationInstallMode["Enterprise"] = 4] = "Enterprise";
        ApplicationInstallMode[ApplicationInstallMode["Editor"] = 5] = "Editor";
    })(WebUnity.ApplicationInstallMode || (WebUnity.ApplicationInstallMode = {}));
    var ApplicationInstallMode = WebUnity.ApplicationInstallMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ApplicationSandboxType) {
        ApplicationSandboxType[ApplicationSandboxType["Unknown"] = 0] = "Unknown";
        ApplicationSandboxType[ApplicationSandboxType["NotSandboxed"] = 1] = "NotSandboxed";
        ApplicationSandboxType[ApplicationSandboxType["Sandboxed"] = 2] = "Sandboxed";
        ApplicationSandboxType[ApplicationSandboxType["SandboxBroken"] = 3] = "SandboxBroken";
    })(WebUnity.ApplicationSandboxType || (WebUnity.ApplicationSandboxType = {}));
    var ApplicationSandboxType = WebUnity.ApplicationSandboxType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AudioClipLoadType) {
        AudioClipLoadType[AudioClipLoadType["DecompressOnLoad"] = 0] = "DecompressOnLoad";
        AudioClipLoadType[AudioClipLoadType["CompressedInMemory"] = 1] = "CompressedInMemory";
        AudioClipLoadType[AudioClipLoadType["Streaming"] = 2] = "Streaming";
    })(WebUnity.AudioClipLoadType || (WebUnity.AudioClipLoadType = {}));
    var AudioClipLoadType = WebUnity.AudioClipLoadType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AudioCompressionFormat) {
        AudioCompressionFormat[AudioCompressionFormat["PCM"] = 0] = "PCM";
        AudioCompressionFormat[AudioCompressionFormat["Vorbis"] = 1] = "Vorbis";
        AudioCompressionFormat[AudioCompressionFormat["ADPCM"] = 2] = "ADPCM";
        AudioCompressionFormat[AudioCompressionFormat["MP3"] = 3] = "MP3";
        AudioCompressionFormat[AudioCompressionFormat["VAG"] = 4] = "VAG";
        AudioCompressionFormat[AudioCompressionFormat["HEVAG"] = 5] = "HEVAG";
        AudioCompressionFormat[AudioCompressionFormat["XMA"] = 6] = "XMA";
        AudioCompressionFormat[AudioCompressionFormat["AAC"] = 7] = "AAC";
        AudioCompressionFormat[AudioCompressionFormat["GCADPCM"] = 8] = "GCADPCM";
    })(WebUnity.AudioCompressionFormat || (WebUnity.AudioCompressionFormat = {}));
    var AudioCompressionFormat = WebUnity.AudioCompressionFormat;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AudioDataLoadState) {
        AudioDataLoadState[AudioDataLoadState["Unloaded"] = 0] = "Unloaded";
        AudioDataLoadState[AudioDataLoadState["Loading"] = 1] = "Loading";
        AudioDataLoadState[AudioDataLoadState["Loaded"] = 2] = "Loaded";
        AudioDataLoadState[AudioDataLoadState["Failed"] = 3] = "Failed";
    })(WebUnity.AudioDataLoadState || (WebUnity.AudioDataLoadState = {}));
    var AudioDataLoadState = WebUnity.AudioDataLoadState;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AudioReverbPreset) {
        AudioReverbPreset[AudioReverbPreset["Off"] = 0] = "Off";
        AudioReverbPreset[AudioReverbPreset["Generic"] = 1] = "Generic";
        AudioReverbPreset[AudioReverbPreset["PaddedCell"] = 2] = "PaddedCell";
        AudioReverbPreset[AudioReverbPreset["Room"] = 3] = "Room";
        AudioReverbPreset[AudioReverbPreset["Bathroom"] = 4] = "Bathroom";
        AudioReverbPreset[AudioReverbPreset["Livingroom"] = 5] = "Livingroom";
        AudioReverbPreset[AudioReverbPreset["Stoneroom"] = 6] = "Stoneroom";
        AudioReverbPreset[AudioReverbPreset["Auditorium"] = 7] = "Auditorium";
        AudioReverbPreset[AudioReverbPreset["Concerthall"] = 8] = "Concerthall";
        AudioReverbPreset[AudioReverbPreset["Cave"] = 9] = "Cave";
        AudioReverbPreset[AudioReverbPreset["Arena"] = 10] = "Arena";
        AudioReverbPreset[AudioReverbPreset["Hangar"] = 11] = "Hangar";
        AudioReverbPreset[AudioReverbPreset["CarpetedHallway"] = 12] = "CarpetedHallway";
        AudioReverbPreset[AudioReverbPreset["Hallway"] = 13] = "Hallway";
        AudioReverbPreset[AudioReverbPreset["StoneCorridor"] = 14] = "StoneCorridor";
        AudioReverbPreset[AudioReverbPreset["Alley"] = 15] = "Alley";
        AudioReverbPreset[AudioReverbPreset["Forest"] = 16] = "Forest";
        AudioReverbPreset[AudioReverbPreset["City"] = 17] = "City";
        AudioReverbPreset[AudioReverbPreset["Mountains"] = 18] = "Mountains";
        AudioReverbPreset[AudioReverbPreset["Quarry"] = 19] = "Quarry";
        AudioReverbPreset[AudioReverbPreset["Plain"] = 20] = "Plain";
        AudioReverbPreset[AudioReverbPreset["ParkingLot"] = 21] = "ParkingLot";
        AudioReverbPreset[AudioReverbPreset["SewerPipe"] = 22] = "SewerPipe";
        AudioReverbPreset[AudioReverbPreset["Underwater"] = 23] = "Underwater";
        AudioReverbPreset[AudioReverbPreset["Drugged"] = 24] = "Drugged";
        AudioReverbPreset[AudioReverbPreset["Dizzy"] = 25] = "Dizzy";
        AudioReverbPreset[AudioReverbPreset["Psychotic"] = 26] = "Psychotic";
        AudioReverbPreset[AudioReverbPreset["User"] = 27] = "User";
    })(WebUnity.AudioReverbPreset || (WebUnity.AudioReverbPreset = {}));
    var AudioReverbPreset = WebUnity.AudioReverbPreset;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AudioRolloffMode) {
        AudioRolloffMode[AudioRolloffMode["Logarithmic"] = 0] = "Logarithmic";
        AudioRolloffMode[AudioRolloffMode["Linear"] = 1] = "Linear";
        AudioRolloffMode[AudioRolloffMode["Custom"] = 2] = "Custom";
    })(WebUnity.AudioRolloffMode || (WebUnity.AudioRolloffMode = {}));
    var AudioRolloffMode = WebUnity.AudioRolloffMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AudioSourceCurveType) {
        AudioSourceCurveType[AudioSourceCurveType["CustomRolloff"] = 0] = "CustomRolloff";
        AudioSourceCurveType[AudioSourceCurveType["SpatialBlend"] = 1] = "SpatialBlend";
        AudioSourceCurveType[AudioSourceCurveType["ReverbZoneMix"] = 2] = "ReverbZoneMix";
        AudioSourceCurveType[AudioSourceCurveType["Spread"] = 3] = "Spread";
    })(WebUnity.AudioSourceCurveType || (WebUnity.AudioSourceCurveType = {}));
    var AudioSourceCurveType = WebUnity.AudioSourceCurveType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AudioSpeakerMode) {
        AudioSpeakerMode[AudioSpeakerMode["Raw"] = 0] = "Raw";
        AudioSpeakerMode[AudioSpeakerMode["Mono"] = 1] = "Mono";
        AudioSpeakerMode[AudioSpeakerMode["Stereo"] = 2] = "Stereo";
        AudioSpeakerMode[AudioSpeakerMode["Quad"] = 3] = "Quad";
        AudioSpeakerMode[AudioSpeakerMode["Surround"] = 4] = "Surround";
        AudioSpeakerMode[AudioSpeakerMode["Mode5point1"] = 5] = "Mode5point1";
        AudioSpeakerMode[AudioSpeakerMode["Mode7point1"] = 6] = "Mode7point1";
        AudioSpeakerMode[AudioSpeakerMode["Prologic"] = 7] = "Prologic";
    })(WebUnity.AudioSpeakerMode || (WebUnity.AudioSpeakerMode = {}));
    var AudioSpeakerMode = WebUnity.AudioSpeakerMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AudioType) {
        AudioType[AudioType["UNKNOWN"] = 0] = "UNKNOWN";
        AudioType[AudioType["ACC"] = 1] = "ACC";
        AudioType[AudioType["AIFF"] = 2] = "AIFF";
        AudioType[AudioType["IT"] = 10] = "IT";
        AudioType[AudioType["MOD"] = 12] = "MOD";
        AudioType[AudioType["MPEG"] = 13] = "MPEG";
        AudioType[AudioType["OGGVORBIS"] = 14] = "OGGVORBIS";
        AudioType[AudioType["S3M"] = 17] = "S3M";
        AudioType[AudioType["WAV"] = 20] = "WAV";
        AudioType[AudioType["XM"] = 21] = "XM";
        AudioType[AudioType["XMA"] = 22] = "XMA";
        AudioType[AudioType["VAG"] = 23] = "VAG";
        AudioType[AudioType["AUDIOQUEUE"] = 24] = "AUDIOQUEUE";
    })(WebUnity.AudioType || (WebUnity.AudioType = {}));
    var AudioType = WebUnity.AudioType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AudioVelocityUpdateMode) {
        AudioVelocityUpdateMode[AudioVelocityUpdateMode["Auto"] = 0] = "Auto";
        AudioVelocityUpdateMode[AudioVelocityUpdateMode["Fixed"] = 1] = "Fixed";
        AudioVelocityUpdateMode[AudioVelocityUpdateMode["Dynamic"] = 2] = "Dynamic";
    })(WebUnity.AudioVelocityUpdateMode || (WebUnity.AudioVelocityUpdateMode = {}));
    var AudioVelocityUpdateMode = WebUnity.AudioVelocityUpdateMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AvatarIKGoal) {
        AvatarIKGoal[AvatarIKGoal["LeftFoot"] = 0] = "LeftFoot";
        AvatarIKGoal[AvatarIKGoal["RightFoot"] = 1] = "RightFoot";
        AvatarIKGoal[AvatarIKGoal["LeftHand"] = 2] = "LeftHand";
        AvatarIKGoal[AvatarIKGoal["RightHand"] = 3] = "RightHand";
    })(WebUnity.AvatarIKGoal || (WebUnity.AvatarIKGoal = {}));
    var AvatarIKGoal = WebUnity.AvatarIKGoal;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AvatarIKHint) {
        AvatarIKHint[AvatarIKHint["LeftKnee"] = 0] = "LeftKnee";
        AvatarIKHint[AvatarIKHint["RightKnee"] = 1] = "RightKnee";
        AvatarIKHint[AvatarIKHint["LeftElbow"] = 2] = "LeftElbow";
        AvatarIKHint[AvatarIKHint["RightElbow"] = 3] = "RightElbow";
    })(WebUnity.AvatarIKHint || (WebUnity.AvatarIKHint = {}));
    var AvatarIKHint = WebUnity.AvatarIKHint;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (AvatarTarget) {
        AvatarTarget[AvatarTarget["Root"] = 0] = "Root";
        AvatarTarget[AvatarTarget["Body"] = 1] = "Body";
        AvatarTarget[AvatarTarget["LeftFoot"] = 2] = "LeftFoot";
        AvatarTarget[AvatarTarget["RightFoot"] = 3] = "RightFoot";
        AvatarTarget[AvatarTarget["LeftHand"] = 4] = "LeftHand";
        AvatarTarget[AvatarTarget["RightHand"] = 5] = "RightHand";
    })(WebUnity.AvatarTarget || (WebUnity.AvatarTarget = {}));
    var AvatarTarget = WebUnity.AvatarTarget;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (BlendWeights) {
        BlendWeights[BlendWeights["OneBone"] = 1] = "OneBone";
        BlendWeights[BlendWeights["TwoBones"] = 2] = "TwoBones";
        BlendWeights[BlendWeights["FourBones"] = 4] = "FourBones";
    })(WebUnity.BlendWeights || (WebUnity.BlendWeights = {}));
    var BlendWeights = WebUnity.BlendWeights;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (CameraClearFlags) {
        CameraClearFlags[CameraClearFlags["Skybox"] = 1] = "Skybox";
        CameraClearFlags[CameraClearFlags["Color"] = 2] = "Color";
        CameraClearFlags[CameraClearFlags["SolidColor"] = 2] = "SolidColor";
        CameraClearFlags[CameraClearFlags["Depth"] = 3] = "Depth";
        CameraClearFlags[CameraClearFlags["Nothing"] = 4] = "Nothing";
    })(WebUnity.CameraClearFlags || (WebUnity.CameraClearFlags = {}));
    var CameraClearFlags = WebUnity.CameraClearFlags;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (CameraType) {
        CameraType[CameraType["Game"] = 1] = "Game";
        CameraType[CameraType["SceneView"] = 2] = "SceneView";
        CameraType[CameraType["Preview"] = 4] = "Preview";
    })(WebUnity.CameraType || (WebUnity.CameraType = {}));
    var CameraType = WebUnity.CameraType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (CollisionDetectionMode) {
        CollisionDetectionMode[CollisionDetectionMode["Discrete"] = 0] = "Discrete";
        CollisionDetectionMode[CollisionDetectionMode["Continuous"] = 1] = "Continuous";
        CollisionDetectionMode[CollisionDetectionMode["ContinuousDynamic"] = 2] = "ContinuousDynamic";
    })(WebUnity.CollisionDetectionMode || (WebUnity.CollisionDetectionMode = {}));
    var CollisionDetectionMode = WebUnity.CollisionDetectionMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (CollisionDetectionMode2D) {
        CollisionDetectionMode2D[CollisionDetectionMode2D["None"] = 0] = "None";
        CollisionDetectionMode2D[CollisionDetectionMode2D["Discrete"] = 0] = "Discrete";
        CollisionDetectionMode2D[CollisionDetectionMode2D["Continuous"] = 1] = "Continuous";
    })(WebUnity.CollisionDetectionMode2D || (WebUnity.CollisionDetectionMode2D = {}));
    var CollisionDetectionMode2D = WebUnity.CollisionDetectionMode2D;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (CollisionFlags) {
        CollisionFlags[CollisionFlags["None"] = 0] = "None";
        CollisionFlags[CollisionFlags["Sides"] = 1] = "Sides";
        CollisionFlags[CollisionFlags["Above"] = 2] = "Above";
        CollisionFlags[CollisionFlags["Below"] = 4] = "Below";
        CollisionFlags[CollisionFlags["CollidedSides"] = 1] = "CollidedSides";
        CollisionFlags[CollisionFlags["CollidedAbove"] = 2] = "CollidedAbove";
        CollisionFlags[CollisionFlags["CollidedBelow"] = 4] = "CollidedBelow";
    })(WebUnity.CollisionFlags || (WebUnity.CollisionFlags = {}));
    var CollisionFlags = WebUnity.CollisionFlags;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ColorSpace) {
        ColorSpace[ColorSpace["Uninitialized"] = -1] = "Uninitialized";
        ColorSpace[ColorSpace["Gamma"] = 0] = "Gamma";
        ColorSpace[ColorSpace["Linear"] = 1] = "Linear";
    })(WebUnity.ColorSpace || (WebUnity.ColorSpace = {}));
    var ColorSpace = WebUnity.ColorSpace;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ComputeBufferType) {
        ComputeBufferType[ComputeBufferType["Default"] = 0] = "Default";
        ComputeBufferType[ComputeBufferType["Raw"] = 1] = "Raw";
        ComputeBufferType[ComputeBufferType["Append"] = 2] = "Append";
        ComputeBufferType[ComputeBufferType["Counter"] = 4] = "Counter";
        ComputeBufferType[ComputeBufferType["DrawIndirect"] = 256] = "DrawIndirect";
        ComputeBufferType[ComputeBufferType["GPUMemory"] = 512] = "GPUMemory";
    })(WebUnity.ComputeBufferType || (WebUnity.ComputeBufferType = {}));
    var ComputeBufferType = WebUnity.ComputeBufferType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ConfigurableJointMotion) {
        ConfigurableJointMotion[ConfigurableJointMotion["Locked"] = 0] = "Locked";
        ConfigurableJointMotion[ConfigurableJointMotion["Limited"] = 1] = "Limited";
        ConfigurableJointMotion[ConfigurableJointMotion["Free"] = 2] = "Free";
    })(WebUnity.ConfigurableJointMotion || (WebUnity.ConfigurableJointMotion = {}));
    var ConfigurableJointMotion = WebUnity.ConfigurableJointMotion;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ConnectionTesterStatus) {
        ConnectionTesterStatus[ConnectionTesterStatus["Error"] = -2] = "Error";
        ConnectionTesterStatus[ConnectionTesterStatus["Undetermined"] = -1] = "Undetermined";
        ConnectionTesterStatus[ConnectionTesterStatus["PrivateIPNoNATPunchthrough"] = 0] = "PrivateIPNoNATPunchthrough";
        ConnectionTesterStatus[ConnectionTesterStatus["PrivateIPHasNATPunchThrough"] = 1] = "PrivateIPHasNATPunchThrough";
        ConnectionTesterStatus[ConnectionTesterStatus["PublicIPIsConnectable"] = 2] = "PublicIPIsConnectable";
        ConnectionTesterStatus[ConnectionTesterStatus["PublicIPPortBlocked"] = 3] = "PublicIPPortBlocked";
        ConnectionTesterStatus[ConnectionTesterStatus["PublicIPNoServerStarted"] = 4] = "PublicIPNoServerStarted";
        ConnectionTesterStatus[ConnectionTesterStatus["LimitedNATPunchthroughPortRestricted"] = 5] = "LimitedNATPunchthroughPortRestricted";
        ConnectionTesterStatus[ConnectionTesterStatus["LimitedNATPunchthroughSymmetric"] = 6] = "LimitedNATPunchthroughSymmetric";
        ConnectionTesterStatus[ConnectionTesterStatus["NATpunchthroughFullCone"] = 7] = "NATpunchthroughFullCone";
        ConnectionTesterStatus[ConnectionTesterStatus["NATpunchthroughAddressRestrictedCone"] = 8] = "NATpunchthroughAddressRestrictedCone";
    })(WebUnity.ConnectionTesterStatus || (WebUnity.ConnectionTesterStatus = {}));
    var ConnectionTesterStatus = WebUnity.ConnectionTesterStatus;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (CubemapFace) {
        CubemapFace[CubemapFace["Unknown"] = -1] = "Unknown";
        CubemapFace[CubemapFace["PositiveX"] = 0] = "PositiveX";
        CubemapFace[CubemapFace["NegativeX"] = 1] = "NegativeX";
        CubemapFace[CubemapFace["PositiveY"] = 2] = "PositiveY";
        CubemapFace[CubemapFace["NegativeY"] = 3] = "NegativeY";
        CubemapFace[CubemapFace["PositiveZ"] = 4] = "PositiveZ";
        CubemapFace[CubemapFace["NegativeZ"] = 5] = "NegativeZ";
    })(WebUnity.CubemapFace || (WebUnity.CubemapFace = {}));
    var CubemapFace = WebUnity.CubemapFace;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (CursorLockMode) {
        CursorLockMode[CursorLockMode["None"] = 0] = "None";
        CursorLockMode[CursorLockMode["Locked"] = 1] = "Locked";
        CursorLockMode[CursorLockMode["Confined"] = 2] = "Confined";
    })(WebUnity.CursorLockMode || (WebUnity.CursorLockMode = {}));
    var CursorLockMode = WebUnity.CursorLockMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (CursorMode) {
        CursorMode[CursorMode["Auto"] = 0] = "Auto";
        CursorMode[CursorMode["ForceSoftware"] = 1] = "ForceSoftware";
    })(WebUnity.CursorMode || (WebUnity.CursorMode = {}));
    var CursorMode = WebUnity.CursorMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (DepthTextureMode) {
        DepthTextureMode[DepthTextureMode["None"] = 0] = "None";
        DepthTextureMode[DepthTextureMode["Depth"] = 1] = "Depth";
        DepthTextureMode[DepthTextureMode["DepthNormals"] = 2] = "DepthNormals";
    })(WebUnity.DepthTextureMode || (WebUnity.DepthTextureMode = {}));
    var DepthTextureMode = WebUnity.DepthTextureMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (DetailRenderMode) {
        DetailRenderMode[DetailRenderMode["GrassBillboard"] = 0] = "GrassBillboard";
        DetailRenderMode[DetailRenderMode["VertexLit"] = 1] = "VertexLit";
        DetailRenderMode[DetailRenderMode["Grass"] = 2] = "Grass";
    })(WebUnity.DetailRenderMode || (WebUnity.DetailRenderMode = {}));
    var DetailRenderMode = WebUnity.DetailRenderMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (DeviceOrientation) {
        DeviceOrientation[DeviceOrientation["Unknown"] = 0] = "Unknown";
        DeviceOrientation[DeviceOrientation["Portrait"] = 1] = "Portrait";
        DeviceOrientation[DeviceOrientation["PortraitUpsideDown"] = 2] = "PortraitUpsideDown";
        DeviceOrientation[DeviceOrientation["LandscapeLeft"] = 3] = "LandscapeLeft";
        DeviceOrientation[DeviceOrientation["LandscapeRight"] = 4] = "LandscapeRight";
        DeviceOrientation[DeviceOrientation["FaceUp"] = 5] = "FaceUp";
        DeviceOrientation[DeviceOrientation["FaceDown"] = 6] = "FaceDown";
    })(WebUnity.DeviceOrientation || (WebUnity.DeviceOrientation = {}));
    var DeviceOrientation = WebUnity.DeviceOrientation;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (DeviceType) {
        DeviceType[DeviceType["Unknown"] = 0] = "Unknown";
        DeviceType[DeviceType["Handheld"] = 1] = "Handheld";
        DeviceType[DeviceType["Console"] = 2] = "Console";
        DeviceType[DeviceType["Desktop"] = 3] = "Desktop";
    })(WebUnity.DeviceType || (WebUnity.DeviceType = {}));
    var DeviceType = WebUnity.DeviceType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (DrivenTransformProperties) {
        DrivenTransformProperties[DrivenTransformProperties["None"] = 0] = "None";
        DrivenTransformProperties[DrivenTransformProperties["All"] = -1] = "All";
        DrivenTransformProperties[DrivenTransformProperties["AnchoredPositionX"] = 2] = "AnchoredPositionX";
        DrivenTransformProperties[DrivenTransformProperties["AnchoredPositionY"] = 4] = "AnchoredPositionY";
        DrivenTransformProperties[DrivenTransformProperties["AnchoredPositionZ"] = 8] = "AnchoredPositionZ";
        DrivenTransformProperties[DrivenTransformProperties["Rotation"] = 16] = "Rotation";
        DrivenTransformProperties[DrivenTransformProperties["ScaleX"] = 32] = "ScaleX";
        DrivenTransformProperties[DrivenTransformProperties["ScaleY"] = 64] = "ScaleY";
        DrivenTransformProperties[DrivenTransformProperties["ScaleZ"] = 128] = "ScaleZ";
        DrivenTransformProperties[DrivenTransformProperties["AnchorMinX"] = 256] = "AnchorMinX";
        DrivenTransformProperties[DrivenTransformProperties["AnchorMinY"] = 512] = "AnchorMinY";
        DrivenTransformProperties[DrivenTransformProperties["AnchorMaxX"] = 1024] = "AnchorMaxX";
        DrivenTransformProperties[DrivenTransformProperties["AnchorMaxY"] = 2048] = "AnchorMaxY";
        DrivenTransformProperties[DrivenTransformProperties["SizeDeltaX"] = 4096] = "SizeDeltaX";
        DrivenTransformProperties[DrivenTransformProperties["SizeDeltaY"] = 8192] = "SizeDeltaY";
        DrivenTransformProperties[DrivenTransformProperties["PivotX"] = 16384] = "PivotX";
        DrivenTransformProperties[DrivenTransformProperties["PivotY"] = 32768] = "PivotY";
        DrivenTransformProperties[DrivenTransformProperties["AnchoredPosition"] = 6] = "AnchoredPosition";
        DrivenTransformProperties[DrivenTransformProperties["AnchoredPosition3D"] = 14] = "AnchoredPosition3D";
        DrivenTransformProperties[DrivenTransformProperties["Scale"] = 224] = "Scale";
        DrivenTransformProperties[DrivenTransformProperties["AnchorMin"] = 768] = "AnchorMin";
        DrivenTransformProperties[DrivenTransformProperties["AnchorMax"] = 3072] = "AnchorMax";
        DrivenTransformProperties[DrivenTransformProperties["Anchors"] = 3840] = "Anchors";
        DrivenTransformProperties[DrivenTransformProperties["SizeDelta"] = 12288] = "SizeDelta";
        DrivenTransformProperties[DrivenTransformProperties["Pivot"] = 49152] = "Pivot";
    })(WebUnity.DrivenTransformProperties || (WebUnity.DrivenTransformProperties = {}));
    var DrivenTransformProperties = WebUnity.DrivenTransformProperties;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (EffectorForceMode2D) {
        EffectorForceMode2D[EffectorForceMode2D["Constant"] = 0] = "Constant";
        EffectorForceMode2D[EffectorForceMode2D["InverseLinear"] = 1] = "InverseLinear";
        EffectorForceMode2D[EffectorForceMode2D["InverseSquared"] = 2] = "InverseSquared";
    })(WebUnity.EffectorForceMode2D || (WebUnity.EffectorForceMode2D = {}));
    var EffectorForceMode2D = WebUnity.EffectorForceMode2D;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (EffectorSelection2D) {
        EffectorSelection2D[EffectorSelection2D["Rigidbody"] = 0] = "Rigidbody";
        EffectorSelection2D[EffectorSelection2D["Collider"] = 1] = "Collider";
    })(WebUnity.EffectorSelection2D || (WebUnity.EffectorSelection2D = {}));
    var EffectorSelection2D = WebUnity.EffectorSelection2D;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (EventModifiers) {
        EventModifiers[EventModifiers["None"] = 0] = "None";
        EventModifiers[EventModifiers["Shift"] = 1] = "Shift";
        EventModifiers[EventModifiers["Control"] = 2] = "Control";
        EventModifiers[EventModifiers["Alt"] = 4] = "Alt";
        EventModifiers[EventModifiers["Command"] = 8] = "Command";
        EventModifiers[EventModifiers["Numeric"] = 16] = "Numeric";
        EventModifiers[EventModifiers["CapsLock"] = 32] = "CapsLock";
        EventModifiers[EventModifiers["FunctionKey"] = 64] = "FunctionKey";
    })(WebUnity.EventModifiers || (WebUnity.EventModifiers = {}));
    var EventModifiers = WebUnity.EventModifiers;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Events;
    (function (Events) {
        (function (PersistentListenerMode) {
            PersistentListenerMode[PersistentListenerMode["EventDefined"] = 0] = "EventDefined";
            PersistentListenerMode[PersistentListenerMode["Void"] = 1] = "Void";
            PersistentListenerMode[PersistentListenerMode["Object"] = 2] = "Object";
            PersistentListenerMode[PersistentListenerMode["Int"] = 3] = "Int";
            PersistentListenerMode[PersistentListenerMode["Float"] = 4] = "Float";
            PersistentListenerMode[PersistentListenerMode["String"] = 5] = "String";
            PersistentListenerMode[PersistentListenerMode["Bool"] = 6] = "Bool";
        })(Events.PersistentListenerMode || (Events.PersistentListenerMode = {}));
        var PersistentListenerMode = Events.PersistentListenerMode;
    })(Events = WebUnity.Events || (WebUnity.Events = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Events;
    (function (Events) {
        (function (UnityEventCallState) {
            UnityEventCallState[UnityEventCallState["Off"] = 0] = "Off";
            UnityEventCallState[UnityEventCallState["EditorAndRuntime"] = 1] = "EditorAndRuntime";
            UnityEventCallState[UnityEventCallState["RuntimeOnly"] = 2] = "RuntimeOnly";
        })(Events.UnityEventCallState || (Events.UnityEventCallState = {}));
        var UnityEventCallState = Events.UnityEventCallState;
    })(Events = WebUnity.Events || (WebUnity.Events = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (EventType) {
        EventType[EventType["MouseDown"] = 0] = "MouseDown";
        EventType[EventType["MouseUp"] = 1] = "MouseUp";
        EventType[EventType["MouseMove"] = 2] = "MouseMove";
        EventType[EventType["MouseDrag"] = 3] = "MouseDrag";
        EventType[EventType["KeyDown"] = 4] = "KeyDown";
        EventType[EventType["KeyUp"] = 5] = "KeyUp";
        EventType[EventType["ScrollWheel"] = 6] = "ScrollWheel";
        EventType[EventType["Repaint"] = 7] = "Repaint";
        EventType[EventType["Layout"] = 8] = "Layout";
        EventType[EventType["DragUpdated"] = 9] = "DragUpdated";
        EventType[EventType["DragPerform"] = 10] = "DragPerform";
        EventType[EventType["DragExited"] = 15] = "DragExited";
        EventType[EventType["Ignore"] = 11] = "Ignore";
        EventType[EventType["Used"] = 12] = "Used";
        EventType[EventType["ValidateCommand"] = 13] = "ValidateCommand";
        EventType[EventType["ExecuteCommand"] = 14] = "ExecuteCommand";
        EventType[EventType["ContextClick"] = 16] = "ContextClick";
        EventType[EventType["mouseDown"] = 0] = "mouseDown";
        EventType[EventType["mouseUp"] = 1] = "mouseUp";
        EventType[EventType["mouseMove"] = 2] = "mouseMove";
        EventType[EventType["mouseDrag"] = 3] = "mouseDrag";
        EventType[EventType["keyDown"] = 4] = "keyDown";
        EventType[EventType["keyUp"] = 5] = "keyUp";
        EventType[EventType["scrollWheel"] = 6] = "scrollWheel";
        EventType[EventType["repaint"] = 7] = "repaint";
        EventType[EventType["layout"] = 8] = "layout";
        EventType[EventType["dragUpdated"] = 9] = "dragUpdated";
        EventType[EventType["dragPerform"] = 10] = "dragPerform";
        EventType[EventType["ignore"] = 11] = "ignore";
        EventType[EventType["used"] = 12] = "used";
    })(WebUnity.EventType || (WebUnity.EventType = {}));
    var EventType = WebUnity.EventType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Experimental;
    (function (Experimental) {
        var Director;
        (function (Director) {
            (function (DirectorUpdateMode) {
                DirectorUpdateMode[DirectorUpdateMode["DSPClock"] = 0] = "DSPClock";
                DirectorUpdateMode[DirectorUpdateMode["GameTime"] = 1] = "GameTime";
                DirectorUpdateMode[DirectorUpdateMode["UnscaledGameTime"] = 2] = "UnscaledGameTime";
                DirectorUpdateMode[DirectorUpdateMode["Manual"] = 3] = "Manual";
            })(Director.DirectorUpdateMode || (Director.DirectorUpdateMode = {}));
            var DirectorUpdateMode = Director.DirectorUpdateMode;
        })(Director = Experimental.Director || (Experimental.Director = {}));
    })(Experimental = WebUnity.Experimental || (WebUnity.Experimental = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Experimental;
    (function (Experimental) {
        var Director;
        (function (Director) {
            (function (PlayState) {
                PlayState[PlayState["Paused"] = 0] = "Paused";
                PlayState[PlayState["Playing"] = 1] = "Playing";
            })(Director.PlayState || (Director.PlayState = {}));
            var PlayState = Director.PlayState;
        })(Director = Experimental.Director || (Experimental.Director = {}));
    })(Experimental = WebUnity.Experimental || (WebUnity.Experimental = {}));
})(WebUnity || (WebUnity = {}));
var UnityEngine;
(function (UnityEngine) {
    var Experimental;
    (function (Experimental) {
        var Networking;
        (function (Networking) {
            (function (UnityWebRequest_UnityWebRequestError) {
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["OK"] = 0] = "OK";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["Unknown"] = 1] = "Unknown";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["SDKError"] = 2] = "SDKError";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["UnsupportedProtocol"] = 3] = "UnsupportedProtocol";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["MalformattedUrl"] = 4] = "MalformattedUrl";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["CannotResolveProxy"] = 5] = "CannotResolveProxy";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["CannotResolveHost"] = 6] = "CannotResolveHost";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["CannotConnectToHost"] = 7] = "CannotConnectToHost";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["AccessDenied"] = 8] = "AccessDenied";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["GenericHTTPError"] = 9] = "GenericHTTPError";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["WriteError"] = 10] = "WriteError";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["ReadError"] = 11] = "ReadError";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["OutOfMemory"] = 12] = "OutOfMemory";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["Timeout"] = 13] = "Timeout";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["HTTPPostError"] = 14] = "HTTPPostError";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["SSLCannotConnect"] = 15] = "SSLCannotConnect";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["Aborted"] = 16] = "Aborted";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["TooManyRedirects"] = 17] = "TooManyRedirects";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["ReceivedNoData"] = 18] = "ReceivedNoData";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["SSLNotSupported"] = 19] = "SSLNotSupported";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["FailedToSendData"] = 20] = "FailedToSendData";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["FailedToReceiveData"] = 21] = "FailedToReceiveData";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["SSLCertificateError"] = 22] = "SSLCertificateError";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["SSLCipherNotAvailable"] = 23] = "SSLCipherNotAvailable";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["SSLCACertError"] = 24] = "SSLCACertError";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["UnrecognizedContentEncoding"] = 25] = "UnrecognizedContentEncoding";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["LoginFailed"] = 26] = "LoginFailed";
                UnityWebRequest_UnityWebRequestError[UnityWebRequest_UnityWebRequestError["SSLShutdownFailed"] = 27] = "SSLShutdownFailed";
            })(Networking.UnityWebRequest_UnityWebRequestError || (Networking.UnityWebRequest_UnityWebRequestError = {}));
            var UnityWebRequest_UnityWebRequestError = Networking.UnityWebRequest_UnityWebRequestError;
        })(Networking = Experimental.Networking || (Experimental.Networking = {}));
    })(Experimental = UnityEngine.Experimental || (UnityEngine.Experimental = {}));
})(UnityEngine || (UnityEngine = {}));
var UnityEngine;
(function (UnityEngine) {
    var Experimental;
    (function (Experimental) {
        var Networking;
        (function (Networking) {
            (function (UnityWebRequest_UnityWebRequestMethod) {
                UnityWebRequest_UnityWebRequestMethod[UnityWebRequest_UnityWebRequestMethod["Get"] = 0] = "Get";
                UnityWebRequest_UnityWebRequestMethod[UnityWebRequest_UnityWebRequestMethod["Post"] = 1] = "Post";
                UnityWebRequest_UnityWebRequestMethod[UnityWebRequest_UnityWebRequestMethod["Put"] = 2] = "Put";
                UnityWebRequest_UnityWebRequestMethod[UnityWebRequest_UnityWebRequestMethod["Head"] = 3] = "Head";
                UnityWebRequest_UnityWebRequestMethod[UnityWebRequest_UnityWebRequestMethod["Custom"] = 4] = "Custom";
            })(Networking.UnityWebRequest_UnityWebRequestMethod || (Networking.UnityWebRequest_UnityWebRequestMethod = {}));
            var UnityWebRequest_UnityWebRequestMethod = Networking.UnityWebRequest_UnityWebRequestMethod;
        })(Networking = Experimental.Networking || (Experimental.Networking = {}));
    })(Experimental = UnityEngine.Experimental || (UnityEngine.Experimental = {}));
})(UnityEngine || (UnityEngine = {}));
var WebUnity;
(function (WebUnity) {
    (function (FFTWindow) {
        FFTWindow[FFTWindow["Rectangular"] = 0] = "Rectangular";
        FFTWindow[FFTWindow["Triangle"] = 1] = "Triangle";
        FFTWindow[FFTWindow["Hamming"] = 2] = "Hamming";
        FFTWindow[FFTWindow["Hanning"] = 3] = "Hanning";
        FFTWindow[FFTWindow["Blackman"] = 4] = "Blackman";
        FFTWindow[FFTWindow["BlackmanHarris"] = 5] = "BlackmanHarris";
    })(WebUnity.FFTWindow || (WebUnity.FFTWindow = {}));
    var FFTWindow = WebUnity.FFTWindow;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (FilterMode) {
        FilterMode[FilterMode["Point"] = 0] = "Point";
        FilterMode[FilterMode["Bilinear"] = 1] = "Bilinear";
        FilterMode[FilterMode["Trilinear"] = 2] = "Trilinear";
    })(WebUnity.FilterMode || (WebUnity.FilterMode = {}));
    var FilterMode = WebUnity.FilterMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (FocusType) {
        FocusType[FocusType["Native"] = 0] = "Native";
        FocusType[FocusType["Keyboard"] = 1] = "Keyboard";
        FocusType[FocusType["Passive"] = 2] = "Passive";
    })(WebUnity.FocusType || (WebUnity.FocusType = {}));
    var FocusType = WebUnity.FocusType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (FogMode) {
        FogMode[FogMode["Linear"] = 1] = "Linear";
        FogMode[FogMode["Exponential"] = 2] = "Exponential";
        FogMode[FogMode["ExponentialSquared"] = 3] = "ExponentialSquared";
    })(WebUnity.FogMode || (WebUnity.FogMode = {}));
    var FogMode = WebUnity.FogMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (FontStyle) {
        FontStyle[FontStyle["Normal"] = 0] = "Normal";
        FontStyle[FontStyle["Bold"] = 1] = "Bold";
        FontStyle[FontStyle["Italic"] = 2] = "Italic";
        FontStyle[FontStyle["BoldAndItalic"] = 3] = "BoldAndItalic";
    })(WebUnity.FontStyle || (WebUnity.FontStyle = {}));
    var FontStyle = WebUnity.FontStyle;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ForceMode) {
        ForceMode[ForceMode["Force"] = 0] = "Force";
        ForceMode[ForceMode["Acceleration"] = 5] = "Acceleration";
        ForceMode[ForceMode["Impulse"] = 1] = "Impulse";
        ForceMode[ForceMode["VelocityChange"] = 2] = "VelocityChange";
    })(WebUnity.ForceMode || (WebUnity.ForceMode = {}));
    var ForceMode = WebUnity.ForceMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ForceMode2D) {
        ForceMode2D[ForceMode2D["Force"] = 0] = "Force";
        ForceMode2D[ForceMode2D["Impulse"] = 1] = "Impulse";
    })(WebUnity.ForceMode2D || (WebUnity.ForceMode2D = {}));
    var ForceMode2D = WebUnity.ForceMode2D;
})(WebUnity || (WebUnity = {}));
var WebUnityInternal;
(function (WebUnityInternal) {
    (function (GITextureType) {
        GITextureType[GITextureType["Charting"] = 0] = "Charting";
        GITextureType[GITextureType["Albedo"] = 1] = "Albedo";
        GITextureType[GITextureType["Emissive"] = 2] = "Emissive";
        GITextureType[GITextureType["Irradiance"] = 3] = "Irradiance";
        GITextureType[GITextureType["Directionality"] = 4] = "Directionality";
        GITextureType[GITextureType["Baked"] = 5] = "Baked";
        GITextureType[GITextureType["BakedDirectional"] = 6] = "BakedDirectional";
        GITextureType[GITextureType["InputWorkspace"] = 7] = "InputWorkspace";
    })(WebUnityInternal.GITextureType || (WebUnityInternal.GITextureType = {}));
    var GITextureType = WebUnityInternal.GITextureType;
})(WebUnityInternal || (WebUnityInternal = {}));
var UnityEngine;
(function (UnityEngine) {
    (function (GUILayoutOption_Type) {
        GUILayoutOption_Type[GUILayoutOption_Type["fixedWidth"] = 0] = "fixedWidth";
        GUILayoutOption_Type[GUILayoutOption_Type["fixedHeight"] = 1] = "fixedHeight";
        GUILayoutOption_Type[GUILayoutOption_Type["minWidth"] = 2] = "minWidth";
        GUILayoutOption_Type[GUILayoutOption_Type["maxWidth"] = 3] = "maxWidth";
        GUILayoutOption_Type[GUILayoutOption_Type["minHeight"] = 4] = "minHeight";
        GUILayoutOption_Type[GUILayoutOption_Type["maxHeight"] = 5] = "maxHeight";
        GUILayoutOption_Type[GUILayoutOption_Type["stretchWidth"] = 6] = "stretchWidth";
        GUILayoutOption_Type[GUILayoutOption_Type["stretchHeight"] = 7] = "stretchHeight";
        GUILayoutOption_Type[GUILayoutOption_Type["alignStart"] = 8] = "alignStart";
        GUILayoutOption_Type[GUILayoutOption_Type["alignMiddle"] = 9] = "alignMiddle";
        GUILayoutOption_Type[GUILayoutOption_Type["alignEnd"] = 10] = "alignEnd";
        GUILayoutOption_Type[GUILayoutOption_Type["alignJustify"] = 11] = "alignJustify";
        GUILayoutOption_Type[GUILayoutOption_Type["equalSize"] = 12] = "equalSize";
        GUILayoutOption_Type[GUILayoutOption_Type["spacing"] = 13] = "spacing";
    })(UnityEngine.GUILayoutOption_Type || (UnityEngine.GUILayoutOption_Type = {}));
    var GUILayoutOption_Type = UnityEngine.GUILayoutOption_Type;
})(UnityEngine || (UnityEngine = {}));
var WebUnity;
(function (WebUnity) {
    (function (HideFlags) {
        HideFlags[HideFlags["None"] = 0] = "None";
        HideFlags[HideFlags["HideInHierarchy"] = 1] = "HideInHierarchy";
        HideFlags[HideFlags["HideInInspector"] = 2] = "HideInInspector";
        HideFlags[HideFlags["DontSaveInEditor"] = 4] = "DontSaveInEditor";
        HideFlags[HideFlags["NotEditable"] = 8] = "NotEditable";
        HideFlags[HideFlags["DontSaveInBuild"] = 16] = "DontSaveInBuild";
        HideFlags[HideFlags["DontUnloadUnusedAsset"] = 32] = "DontUnloadUnusedAsset";
        HideFlags[HideFlags["DontSave"] = 52] = "DontSave";
        HideFlags[HideFlags["HideAndDontSave"] = 61] = "HideAndDontSave";
    })(WebUnity.HideFlags || (WebUnity.HideFlags = {}));
    var HideFlags = WebUnity.HideFlags;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (HorizontalWrapMode) {
        HorizontalWrapMode[HorizontalWrapMode["Wrap"] = 0] = "Wrap";
        HorizontalWrapMode[HorizontalWrapMode["Overflow"] = 1] = "Overflow";
    })(WebUnity.HorizontalWrapMode || (WebUnity.HorizontalWrapMode = {}));
    var HorizontalWrapMode = WebUnity.HorizontalWrapMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (HumanBodyBones) {
        HumanBodyBones[HumanBodyBones["Hips"] = 0] = "Hips";
        HumanBodyBones[HumanBodyBones["LeftUpperLeg"] = 1] = "LeftUpperLeg";
        HumanBodyBones[HumanBodyBones["RightUpperLeg"] = 2] = "RightUpperLeg";
        HumanBodyBones[HumanBodyBones["LeftLowerLeg"] = 3] = "LeftLowerLeg";
        HumanBodyBones[HumanBodyBones["RightLowerLeg"] = 4] = "RightLowerLeg";
        HumanBodyBones[HumanBodyBones["LeftFoot"] = 5] = "LeftFoot";
        HumanBodyBones[HumanBodyBones["RightFoot"] = 6] = "RightFoot";
        HumanBodyBones[HumanBodyBones["Spine"] = 7] = "Spine";
        HumanBodyBones[HumanBodyBones["Chest"] = 8] = "Chest";
        HumanBodyBones[HumanBodyBones["Neck"] = 9] = "Neck";
        HumanBodyBones[HumanBodyBones["Head"] = 10] = "Head";
        HumanBodyBones[HumanBodyBones["LeftShoulder"] = 11] = "LeftShoulder";
        HumanBodyBones[HumanBodyBones["RightShoulder"] = 12] = "RightShoulder";
        HumanBodyBones[HumanBodyBones["LeftUpperArm"] = 13] = "LeftUpperArm";
        HumanBodyBones[HumanBodyBones["RightUpperArm"] = 14] = "RightUpperArm";
        HumanBodyBones[HumanBodyBones["LeftLowerArm"] = 15] = "LeftLowerArm";
        HumanBodyBones[HumanBodyBones["RightLowerArm"] = 16] = "RightLowerArm";
        HumanBodyBones[HumanBodyBones["LeftHand"] = 17] = "LeftHand";
        HumanBodyBones[HumanBodyBones["RightHand"] = 18] = "RightHand";
        HumanBodyBones[HumanBodyBones["LeftToes"] = 19] = "LeftToes";
        HumanBodyBones[HumanBodyBones["RightToes"] = 20] = "RightToes";
        HumanBodyBones[HumanBodyBones["LeftEye"] = 21] = "LeftEye";
        HumanBodyBones[HumanBodyBones["RightEye"] = 22] = "RightEye";
        HumanBodyBones[HumanBodyBones["Jaw"] = 23] = "Jaw";
        HumanBodyBones[HumanBodyBones["LeftThumbProximal"] = 24] = "LeftThumbProximal";
        HumanBodyBones[HumanBodyBones["LeftThumbIntermediate"] = 25] = "LeftThumbIntermediate";
        HumanBodyBones[HumanBodyBones["LeftThumbDistal"] = 26] = "LeftThumbDistal";
        HumanBodyBones[HumanBodyBones["LeftIndexProximal"] = 27] = "LeftIndexProximal";
        HumanBodyBones[HumanBodyBones["LeftIndexIntermediate"] = 28] = "LeftIndexIntermediate";
        HumanBodyBones[HumanBodyBones["LeftIndexDistal"] = 29] = "LeftIndexDistal";
        HumanBodyBones[HumanBodyBones["LeftMiddleProximal"] = 30] = "LeftMiddleProximal";
        HumanBodyBones[HumanBodyBones["LeftMiddleIntermediate"] = 31] = "LeftMiddleIntermediate";
        HumanBodyBones[HumanBodyBones["LeftMiddleDistal"] = 32] = "LeftMiddleDistal";
        HumanBodyBones[HumanBodyBones["LeftRingProximal"] = 33] = "LeftRingProximal";
        HumanBodyBones[HumanBodyBones["LeftRingIntermediate"] = 34] = "LeftRingIntermediate";
        HumanBodyBones[HumanBodyBones["LeftRingDistal"] = 35] = "LeftRingDistal";
        HumanBodyBones[HumanBodyBones["LeftLittleProximal"] = 36] = "LeftLittleProximal";
        HumanBodyBones[HumanBodyBones["LeftLittleIntermediate"] = 37] = "LeftLittleIntermediate";
        HumanBodyBones[HumanBodyBones["LeftLittleDistal"] = 38] = "LeftLittleDistal";
        HumanBodyBones[HumanBodyBones["RightThumbProximal"] = 39] = "RightThumbProximal";
        HumanBodyBones[HumanBodyBones["RightThumbIntermediate"] = 40] = "RightThumbIntermediate";
        HumanBodyBones[HumanBodyBones["RightThumbDistal"] = 41] = "RightThumbDistal";
        HumanBodyBones[HumanBodyBones["RightIndexProximal"] = 42] = "RightIndexProximal";
        HumanBodyBones[HumanBodyBones["RightIndexIntermediate"] = 43] = "RightIndexIntermediate";
        HumanBodyBones[HumanBodyBones["RightIndexDistal"] = 44] = "RightIndexDistal";
        HumanBodyBones[HumanBodyBones["RightMiddleProximal"] = 45] = "RightMiddleProximal";
        HumanBodyBones[HumanBodyBones["RightMiddleIntermediate"] = 46] = "RightMiddleIntermediate";
        HumanBodyBones[HumanBodyBones["RightMiddleDistal"] = 47] = "RightMiddleDistal";
        HumanBodyBones[HumanBodyBones["RightRingProximal"] = 48] = "RightRingProximal";
        HumanBodyBones[HumanBodyBones["RightRingIntermediate"] = 49] = "RightRingIntermediate";
        HumanBodyBones[HumanBodyBones["RightRingDistal"] = 50] = "RightRingDistal";
        HumanBodyBones[HumanBodyBones["RightLittleProximal"] = 51] = "RightLittleProximal";
        HumanBodyBones[HumanBodyBones["RightLittleIntermediate"] = 52] = "RightLittleIntermediate";
        HumanBodyBones[HumanBodyBones["RightLittleDistal"] = 53] = "RightLittleDistal";
        HumanBodyBones[HumanBodyBones["LastBone"] = 54] = "LastBone";
    })(WebUnity.HumanBodyBones || (WebUnity.HumanBodyBones = {}));
    var HumanBodyBones = WebUnity.HumanBodyBones;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ImagePosition) {
        ImagePosition[ImagePosition["ImageLeft"] = 0] = "ImageLeft";
        ImagePosition[ImagePosition["ImageAbove"] = 1] = "ImageAbove";
        ImagePosition[ImagePosition["ImageOnly"] = 2] = "ImageOnly";
        ImagePosition[ImagePosition["TextOnly"] = 3] = "TextOnly";
    })(WebUnity.ImagePosition || (WebUnity.ImagePosition = {}));
    var ImagePosition = WebUnity.ImagePosition;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (IMECompositionMode) {
        IMECompositionMode[IMECompositionMode["Auto"] = 0] = "Auto";
        IMECompositionMode[IMECompositionMode["On"] = 1] = "On";
        IMECompositionMode[IMECompositionMode["Off"] = 2] = "Off";
    })(WebUnity.IMECompositionMode || (WebUnity.IMECompositionMode = {}));
    var IMECompositionMode = WebUnity.IMECompositionMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (JointDriveMode) {
        JointDriveMode[JointDriveMode["None"] = 0] = "None";
        JointDriveMode[JointDriveMode["Position"] = 1] = "Position";
        JointDriveMode[JointDriveMode["Velocity"] = 2] = "Velocity";
        JointDriveMode[JointDriveMode["PositionAndVelocity"] = 3] = "PositionAndVelocity";
    })(WebUnity.JointDriveMode || (WebUnity.JointDriveMode = {}));
    var JointDriveMode = WebUnity.JointDriveMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (JointLimitState2D) {
        JointLimitState2D[JointLimitState2D["Inactive"] = 0] = "Inactive";
        JointLimitState2D[JointLimitState2D["LowerLimit"] = 1] = "LowerLimit";
        JointLimitState2D[JointLimitState2D["UpperLimit"] = 2] = "UpperLimit";
        JointLimitState2D[JointLimitState2D["EqualLimits"] = 3] = "EqualLimits";
    })(WebUnity.JointLimitState2D || (WebUnity.JointLimitState2D = {}));
    var JointLimitState2D = WebUnity.JointLimitState2D;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (JointProjectionMode) {
        JointProjectionMode[JointProjectionMode["None"] = 0] = "None";
        JointProjectionMode[JointProjectionMode["PositionAndRotation"] = 1] = "PositionAndRotation";
        JointProjectionMode[JointProjectionMode["PositionOnly"] = 2] = "PositionOnly";
    })(WebUnity.JointProjectionMode || (WebUnity.JointProjectionMode = {}));
    var JointProjectionMode = WebUnity.JointProjectionMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (KeyCode) {
        KeyCode[KeyCode["None"] = 0] = "None";
        KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
        KeyCode[KeyCode["Delete"] = 127] = "Delete";
        KeyCode[KeyCode["Tab"] = 9] = "Tab";
        KeyCode[KeyCode["Clear"] = 12] = "Clear";
        KeyCode[KeyCode["Return"] = 13] = "Return";
        KeyCode[KeyCode["Pause"] = 19] = "Pause";
        KeyCode[KeyCode["Escape"] = 27] = "Escape";
        KeyCode[KeyCode["Space"] = 32] = "Space";
        KeyCode[KeyCode["Keypad0"] = 256] = "Keypad0";
        KeyCode[KeyCode["Keypad1"] = 257] = "Keypad1";
        KeyCode[KeyCode["Keypad2"] = 258] = "Keypad2";
        KeyCode[KeyCode["Keypad3"] = 259] = "Keypad3";
        KeyCode[KeyCode["Keypad4"] = 260] = "Keypad4";
        KeyCode[KeyCode["Keypad5"] = 261] = "Keypad5";
        KeyCode[KeyCode["Keypad6"] = 262] = "Keypad6";
        KeyCode[KeyCode["Keypad7"] = 263] = "Keypad7";
        KeyCode[KeyCode["Keypad8"] = 264] = "Keypad8";
        KeyCode[KeyCode["Keypad9"] = 265] = "Keypad9";
        KeyCode[KeyCode["KeypadPeriod"] = 266] = "KeypadPeriod";
        KeyCode[KeyCode["KeypadDivide"] = 267] = "KeypadDivide";
        KeyCode[KeyCode["KeypadMultiply"] = 268] = "KeypadMultiply";
        KeyCode[KeyCode["KeypadMinus"] = 269] = "KeypadMinus";
        KeyCode[KeyCode["KeypadPlus"] = 270] = "KeypadPlus";
        KeyCode[KeyCode["KeypadEnter"] = 271] = "KeypadEnter";
        KeyCode[KeyCode["KeypadEquals"] = 272] = "KeypadEquals";
        KeyCode[KeyCode["UpArrow"] = 273] = "UpArrow";
        KeyCode[KeyCode["DownArrow"] = 274] = "DownArrow";
        KeyCode[KeyCode["RightArrow"] = 275] = "RightArrow";
        KeyCode[KeyCode["LeftArrow"] = 276] = "LeftArrow";
        KeyCode[KeyCode["Insert"] = 277] = "Insert";
        KeyCode[KeyCode["Home"] = 278] = "Home";
        KeyCode[KeyCode["End"] = 279] = "End";
        KeyCode[KeyCode["PageUp"] = 280] = "PageUp";
        KeyCode[KeyCode["PageDown"] = 281] = "PageDown";
        KeyCode[KeyCode["F1"] = 282] = "F1";
        KeyCode[KeyCode["F2"] = 283] = "F2";
        KeyCode[KeyCode["F3"] = 284] = "F3";
        KeyCode[KeyCode["F4"] = 285] = "F4";
        KeyCode[KeyCode["F5"] = 286] = "F5";
        KeyCode[KeyCode["F6"] = 287] = "F6";
        KeyCode[KeyCode["F7"] = 288] = "F7";
        KeyCode[KeyCode["F8"] = 289] = "F8";
        KeyCode[KeyCode["F9"] = 290] = "F9";
        KeyCode[KeyCode["F10"] = 291] = "F10";
        KeyCode[KeyCode["F11"] = 292] = "F11";
        KeyCode[KeyCode["F12"] = 293] = "F12";
        KeyCode[KeyCode["F13"] = 294] = "F13";
        KeyCode[KeyCode["F14"] = 295] = "F14";
        KeyCode[KeyCode["F15"] = 296] = "F15";
        KeyCode[KeyCode["Alpha0"] = 48] = "Alpha0";
        KeyCode[KeyCode["Alpha1"] = 49] = "Alpha1";
        KeyCode[KeyCode["Alpha2"] = 50] = "Alpha2";
        KeyCode[KeyCode["Alpha3"] = 51] = "Alpha3";
        KeyCode[KeyCode["Alpha4"] = 52] = "Alpha4";
        KeyCode[KeyCode["Alpha5"] = 53] = "Alpha5";
        KeyCode[KeyCode["Alpha6"] = 54] = "Alpha6";
        KeyCode[KeyCode["Alpha7"] = 55] = "Alpha7";
        KeyCode[KeyCode["Alpha8"] = 56] = "Alpha8";
        KeyCode[KeyCode["Alpha9"] = 57] = "Alpha9";
        KeyCode[KeyCode["Exclaim"] = 33] = "Exclaim";
        KeyCode[KeyCode["DoubleQuote"] = 34] = "DoubleQuote";
        KeyCode[KeyCode["Hash"] = 35] = "Hash";
        KeyCode[KeyCode["Dollar"] = 36] = "Dollar";
        KeyCode[KeyCode["Ampersand"] = 38] = "Ampersand";
        KeyCode[KeyCode["Quote"] = 39] = "Quote";
        KeyCode[KeyCode["LeftParen"] = 40] = "LeftParen";
        KeyCode[KeyCode["RightParen"] = 41] = "RightParen";
        KeyCode[KeyCode["Asterisk"] = 42] = "Asterisk";
        KeyCode[KeyCode["Plus"] = 43] = "Plus";
        KeyCode[KeyCode["Comma"] = 44] = "Comma";
        KeyCode[KeyCode["Minus"] = 45] = "Minus";
        KeyCode[KeyCode["Period"] = 46] = "Period";
        KeyCode[KeyCode["Slash"] = 47] = "Slash";
        KeyCode[KeyCode["Colon"] = 58] = "Colon";
        KeyCode[KeyCode["Semicolon"] = 59] = "Semicolon";
        KeyCode[KeyCode["Less"] = 60] = "Less";
        KeyCode[KeyCode["Equals"] = 61] = "Equals";
        KeyCode[KeyCode["Greater"] = 62] = "Greater";
        KeyCode[KeyCode["Question"] = 63] = "Question";
        KeyCode[KeyCode["At"] = 64] = "At";
        KeyCode[KeyCode["LeftBracket"] = 91] = "LeftBracket";
        KeyCode[KeyCode["Backslash"] = 92] = "Backslash";
        KeyCode[KeyCode["RightBracket"] = 93] = "RightBracket";
        KeyCode[KeyCode["Caret"] = 94] = "Caret";
        KeyCode[KeyCode["Underscore"] = 95] = "Underscore";
        KeyCode[KeyCode["BackQuote"] = 96] = "BackQuote";
        KeyCode[KeyCode["A"] = 97] = "A";
        KeyCode[KeyCode["B"] = 98] = "B";
        KeyCode[KeyCode["C"] = 99] = "C";
        KeyCode[KeyCode["D"] = 100] = "D";
        KeyCode[KeyCode["E"] = 101] = "E";
        KeyCode[KeyCode["F"] = 102] = "F";
        KeyCode[KeyCode["G"] = 103] = "G";
        KeyCode[KeyCode["H"] = 104] = "H";
        KeyCode[KeyCode["I"] = 105] = "I";
        KeyCode[KeyCode["J"] = 106] = "J";
        KeyCode[KeyCode["K"] = 107] = "K";
        KeyCode[KeyCode["L"] = 108] = "L";
        KeyCode[KeyCode["M"] = 109] = "M";
        KeyCode[KeyCode["N"] = 110] = "N";
        KeyCode[KeyCode["O"] = 111] = "O";
        KeyCode[KeyCode["P"] = 112] = "P";
        KeyCode[KeyCode["Q"] = 113] = "Q";
        KeyCode[KeyCode["R"] = 114] = "R";
        KeyCode[KeyCode["S"] = 115] = "S";
        KeyCode[KeyCode["T"] = 116] = "T";
        KeyCode[KeyCode["U"] = 117] = "U";
        KeyCode[KeyCode["V"] = 118] = "V";
        KeyCode[KeyCode["W"] = 119] = "W";
        KeyCode[KeyCode["X"] = 120] = "X";
        KeyCode[KeyCode["Y"] = 121] = "Y";
        KeyCode[KeyCode["Z"] = 122] = "Z";
        KeyCode[KeyCode["Numlock"] = 300] = "Numlock";
        KeyCode[KeyCode["CapsLock"] = 301] = "CapsLock";
        KeyCode[KeyCode["ScrollLock"] = 302] = "ScrollLock";
        KeyCode[KeyCode["RightShift"] = 303] = "RightShift";
        KeyCode[KeyCode["LeftShift"] = 304] = "LeftShift";
        KeyCode[KeyCode["RightControl"] = 305] = "RightControl";
        KeyCode[KeyCode["LeftControl"] = 306] = "LeftControl";
        KeyCode[KeyCode["RightAlt"] = 307] = "RightAlt";
        KeyCode[KeyCode["LeftAlt"] = 308] = "LeftAlt";
        KeyCode[KeyCode["LeftCommand"] = 310] = "LeftCommand";
        KeyCode[KeyCode["LeftApple"] = 310] = "LeftApple";
        KeyCode[KeyCode["LeftWindows"] = 311] = "LeftWindows";
        KeyCode[KeyCode["RightCommand"] = 309] = "RightCommand";
        KeyCode[KeyCode["RightApple"] = 309] = "RightApple";
        KeyCode[KeyCode["RightWindows"] = 312] = "RightWindows";
        KeyCode[KeyCode["AltGr"] = 313] = "AltGr";
        KeyCode[KeyCode["Help"] = 315] = "Help";
        KeyCode[KeyCode["Print"] = 316] = "Print";
        KeyCode[KeyCode["SysReq"] = 317] = "SysReq";
        KeyCode[KeyCode["Break"] = 318] = "Break";
        KeyCode[KeyCode["Menu"] = 319] = "Menu";
        KeyCode[KeyCode["Mouse0"] = 323] = "Mouse0";
        KeyCode[KeyCode["Mouse1"] = 324] = "Mouse1";
        KeyCode[KeyCode["Mouse2"] = 325] = "Mouse2";
        KeyCode[KeyCode["Mouse3"] = 326] = "Mouse3";
        KeyCode[KeyCode["Mouse4"] = 327] = "Mouse4";
        KeyCode[KeyCode["Mouse5"] = 328] = "Mouse5";
        KeyCode[KeyCode["Mouse6"] = 329] = "Mouse6";
        KeyCode[KeyCode["JoystickButton0"] = 330] = "JoystickButton0";
        KeyCode[KeyCode["JoystickButton1"] = 331] = "JoystickButton1";
        KeyCode[KeyCode["JoystickButton2"] = 332] = "JoystickButton2";
        KeyCode[KeyCode["JoystickButton3"] = 333] = "JoystickButton3";
        KeyCode[KeyCode["JoystickButton4"] = 334] = "JoystickButton4";
        KeyCode[KeyCode["JoystickButton5"] = 335] = "JoystickButton5";
        KeyCode[KeyCode["JoystickButton6"] = 336] = "JoystickButton6";
        KeyCode[KeyCode["JoystickButton7"] = 337] = "JoystickButton7";
        KeyCode[KeyCode["JoystickButton8"] = 338] = "JoystickButton8";
        KeyCode[KeyCode["JoystickButton9"] = 339] = "JoystickButton9";
        KeyCode[KeyCode["JoystickButton10"] = 340] = "JoystickButton10";
        KeyCode[KeyCode["JoystickButton11"] = 341] = "JoystickButton11";
        KeyCode[KeyCode["JoystickButton12"] = 342] = "JoystickButton12";
        KeyCode[KeyCode["JoystickButton13"] = 343] = "JoystickButton13";
        KeyCode[KeyCode["JoystickButton14"] = 344] = "JoystickButton14";
        KeyCode[KeyCode["JoystickButton15"] = 345] = "JoystickButton15";
        KeyCode[KeyCode["JoystickButton16"] = 346] = "JoystickButton16";
        KeyCode[KeyCode["JoystickButton17"] = 347] = "JoystickButton17";
        KeyCode[KeyCode["JoystickButton18"] = 348] = "JoystickButton18";
        KeyCode[KeyCode["JoystickButton19"] = 349] = "JoystickButton19";
        KeyCode[KeyCode["Joystick1Button0"] = 350] = "Joystick1Button0";
        KeyCode[KeyCode["Joystick1Button1"] = 351] = "Joystick1Button1";
        KeyCode[KeyCode["Joystick1Button2"] = 352] = "Joystick1Button2";
        KeyCode[KeyCode["Joystick1Button3"] = 353] = "Joystick1Button3";
        KeyCode[KeyCode["Joystick1Button4"] = 354] = "Joystick1Button4";
        KeyCode[KeyCode["Joystick1Button5"] = 355] = "Joystick1Button5";
        KeyCode[KeyCode["Joystick1Button6"] = 356] = "Joystick1Button6";
        KeyCode[KeyCode["Joystick1Button7"] = 357] = "Joystick1Button7";
        KeyCode[KeyCode["Joystick1Button8"] = 358] = "Joystick1Button8";
        KeyCode[KeyCode["Joystick1Button9"] = 359] = "Joystick1Button9";
        KeyCode[KeyCode["Joystick1Button10"] = 360] = "Joystick1Button10";
        KeyCode[KeyCode["Joystick1Button11"] = 361] = "Joystick1Button11";
        KeyCode[KeyCode["Joystick1Button12"] = 362] = "Joystick1Button12";
        KeyCode[KeyCode["Joystick1Button13"] = 363] = "Joystick1Button13";
        KeyCode[KeyCode["Joystick1Button14"] = 364] = "Joystick1Button14";
        KeyCode[KeyCode["Joystick1Button15"] = 365] = "Joystick1Button15";
        KeyCode[KeyCode["Joystick1Button16"] = 366] = "Joystick1Button16";
        KeyCode[KeyCode["Joystick1Button17"] = 367] = "Joystick1Button17";
        KeyCode[KeyCode["Joystick1Button18"] = 368] = "Joystick1Button18";
        KeyCode[KeyCode["Joystick1Button19"] = 369] = "Joystick1Button19";
        KeyCode[KeyCode["Joystick2Button0"] = 370] = "Joystick2Button0";
        KeyCode[KeyCode["Joystick2Button1"] = 371] = "Joystick2Button1";
        KeyCode[KeyCode["Joystick2Button2"] = 372] = "Joystick2Button2";
        KeyCode[KeyCode["Joystick2Button3"] = 373] = "Joystick2Button3";
        KeyCode[KeyCode["Joystick2Button4"] = 374] = "Joystick2Button4";
        KeyCode[KeyCode["Joystick2Button5"] = 375] = "Joystick2Button5";
        KeyCode[KeyCode["Joystick2Button6"] = 376] = "Joystick2Button6";
        KeyCode[KeyCode["Joystick2Button7"] = 377] = "Joystick2Button7";
        KeyCode[KeyCode["Joystick2Button8"] = 378] = "Joystick2Button8";
        KeyCode[KeyCode["Joystick2Button9"] = 379] = "Joystick2Button9";
        KeyCode[KeyCode["Joystick2Button10"] = 380] = "Joystick2Button10";
        KeyCode[KeyCode["Joystick2Button11"] = 381] = "Joystick2Button11";
        KeyCode[KeyCode["Joystick2Button12"] = 382] = "Joystick2Button12";
        KeyCode[KeyCode["Joystick2Button13"] = 383] = "Joystick2Button13";
        KeyCode[KeyCode["Joystick2Button14"] = 384] = "Joystick2Button14";
        KeyCode[KeyCode["Joystick2Button15"] = 385] = "Joystick2Button15";
        KeyCode[KeyCode["Joystick2Button16"] = 386] = "Joystick2Button16";
        KeyCode[KeyCode["Joystick2Button17"] = 387] = "Joystick2Button17";
        KeyCode[KeyCode["Joystick2Button18"] = 388] = "Joystick2Button18";
        KeyCode[KeyCode["Joystick2Button19"] = 389] = "Joystick2Button19";
        KeyCode[KeyCode["Joystick3Button0"] = 390] = "Joystick3Button0";
        KeyCode[KeyCode["Joystick3Button1"] = 391] = "Joystick3Button1";
        KeyCode[KeyCode["Joystick3Button2"] = 392] = "Joystick3Button2";
        KeyCode[KeyCode["Joystick3Button3"] = 393] = "Joystick3Button3";
        KeyCode[KeyCode["Joystick3Button4"] = 394] = "Joystick3Button4";
        KeyCode[KeyCode["Joystick3Button5"] = 395] = "Joystick3Button5";
        KeyCode[KeyCode["Joystick3Button6"] = 396] = "Joystick3Button6";
        KeyCode[KeyCode["Joystick3Button7"] = 397] = "Joystick3Button7";
        KeyCode[KeyCode["Joystick3Button8"] = 398] = "Joystick3Button8";
        KeyCode[KeyCode["Joystick3Button9"] = 399] = "Joystick3Button9";
        KeyCode[KeyCode["Joystick3Button10"] = 400] = "Joystick3Button10";
        KeyCode[KeyCode["Joystick3Button11"] = 401] = "Joystick3Button11";
        KeyCode[KeyCode["Joystick3Button12"] = 402] = "Joystick3Button12";
        KeyCode[KeyCode["Joystick3Button13"] = 403] = "Joystick3Button13";
        KeyCode[KeyCode["Joystick3Button14"] = 404] = "Joystick3Button14";
        KeyCode[KeyCode["Joystick3Button15"] = 405] = "Joystick3Button15";
        KeyCode[KeyCode["Joystick3Button16"] = 406] = "Joystick3Button16";
        KeyCode[KeyCode["Joystick3Button17"] = 407] = "Joystick3Button17";
        KeyCode[KeyCode["Joystick3Button18"] = 408] = "Joystick3Button18";
        KeyCode[KeyCode["Joystick3Button19"] = 409] = "Joystick3Button19";
        KeyCode[KeyCode["Joystick4Button0"] = 410] = "Joystick4Button0";
        KeyCode[KeyCode["Joystick4Button1"] = 411] = "Joystick4Button1";
        KeyCode[KeyCode["Joystick4Button2"] = 412] = "Joystick4Button2";
        KeyCode[KeyCode["Joystick4Button3"] = 413] = "Joystick4Button3";
        KeyCode[KeyCode["Joystick4Button4"] = 414] = "Joystick4Button4";
        KeyCode[KeyCode["Joystick4Button5"] = 415] = "Joystick4Button5";
        KeyCode[KeyCode["Joystick4Button6"] = 416] = "Joystick4Button6";
        KeyCode[KeyCode["Joystick4Button7"] = 417] = "Joystick4Button7";
        KeyCode[KeyCode["Joystick4Button8"] = 418] = "Joystick4Button8";
        KeyCode[KeyCode["Joystick4Button9"] = 419] = "Joystick4Button9";
        KeyCode[KeyCode["Joystick4Button10"] = 420] = "Joystick4Button10";
        KeyCode[KeyCode["Joystick4Button11"] = 421] = "Joystick4Button11";
        KeyCode[KeyCode["Joystick4Button12"] = 422] = "Joystick4Button12";
        KeyCode[KeyCode["Joystick4Button13"] = 423] = "Joystick4Button13";
        KeyCode[KeyCode["Joystick4Button14"] = 424] = "Joystick4Button14";
        KeyCode[KeyCode["Joystick4Button15"] = 425] = "Joystick4Button15";
        KeyCode[KeyCode["Joystick4Button16"] = 426] = "Joystick4Button16";
        KeyCode[KeyCode["Joystick4Button17"] = 427] = "Joystick4Button17";
        KeyCode[KeyCode["Joystick4Button18"] = 428] = "Joystick4Button18";
        KeyCode[KeyCode["Joystick4Button19"] = 429] = "Joystick4Button19";
        KeyCode[KeyCode["Joystick5Button0"] = 430] = "Joystick5Button0";
        KeyCode[KeyCode["Joystick5Button1"] = 431] = "Joystick5Button1";
        KeyCode[KeyCode["Joystick5Button2"] = 432] = "Joystick5Button2";
        KeyCode[KeyCode["Joystick5Button3"] = 433] = "Joystick5Button3";
        KeyCode[KeyCode["Joystick5Button4"] = 434] = "Joystick5Button4";
        KeyCode[KeyCode["Joystick5Button5"] = 435] = "Joystick5Button5";
        KeyCode[KeyCode["Joystick5Button6"] = 436] = "Joystick5Button6";
        KeyCode[KeyCode["Joystick5Button7"] = 437] = "Joystick5Button7";
        KeyCode[KeyCode["Joystick5Button8"] = 438] = "Joystick5Button8";
        KeyCode[KeyCode["Joystick5Button9"] = 439] = "Joystick5Button9";
        KeyCode[KeyCode["Joystick5Button10"] = 440] = "Joystick5Button10";
        KeyCode[KeyCode["Joystick5Button11"] = 441] = "Joystick5Button11";
        KeyCode[KeyCode["Joystick5Button12"] = 442] = "Joystick5Button12";
        KeyCode[KeyCode["Joystick5Button13"] = 443] = "Joystick5Button13";
        KeyCode[KeyCode["Joystick5Button14"] = 444] = "Joystick5Button14";
        KeyCode[KeyCode["Joystick5Button15"] = 445] = "Joystick5Button15";
        KeyCode[KeyCode["Joystick5Button16"] = 446] = "Joystick5Button16";
        KeyCode[KeyCode["Joystick5Button17"] = 447] = "Joystick5Button17";
        KeyCode[KeyCode["Joystick5Button18"] = 448] = "Joystick5Button18";
        KeyCode[KeyCode["Joystick5Button19"] = 449] = "Joystick5Button19";
        KeyCode[KeyCode["Joystick6Button0"] = 450] = "Joystick6Button0";
        KeyCode[KeyCode["Joystick6Button1"] = 451] = "Joystick6Button1";
        KeyCode[KeyCode["Joystick6Button2"] = 452] = "Joystick6Button2";
        KeyCode[KeyCode["Joystick6Button3"] = 453] = "Joystick6Button3";
        KeyCode[KeyCode["Joystick6Button4"] = 454] = "Joystick6Button4";
        KeyCode[KeyCode["Joystick6Button5"] = 455] = "Joystick6Button5";
        KeyCode[KeyCode["Joystick6Button6"] = 456] = "Joystick6Button6";
        KeyCode[KeyCode["Joystick6Button7"] = 457] = "Joystick6Button7";
        KeyCode[KeyCode["Joystick6Button8"] = 458] = "Joystick6Button8";
        KeyCode[KeyCode["Joystick6Button9"] = 459] = "Joystick6Button9";
        KeyCode[KeyCode["Joystick6Button10"] = 460] = "Joystick6Button10";
        KeyCode[KeyCode["Joystick6Button11"] = 461] = "Joystick6Button11";
        KeyCode[KeyCode["Joystick6Button12"] = 462] = "Joystick6Button12";
        KeyCode[KeyCode["Joystick6Button13"] = 463] = "Joystick6Button13";
        KeyCode[KeyCode["Joystick6Button14"] = 464] = "Joystick6Button14";
        KeyCode[KeyCode["Joystick6Button15"] = 465] = "Joystick6Button15";
        KeyCode[KeyCode["Joystick6Button16"] = 466] = "Joystick6Button16";
        KeyCode[KeyCode["Joystick6Button17"] = 467] = "Joystick6Button17";
        KeyCode[KeyCode["Joystick6Button18"] = 468] = "Joystick6Button18";
        KeyCode[KeyCode["Joystick6Button19"] = 469] = "Joystick6Button19";
        KeyCode[KeyCode["Joystick7Button0"] = 470] = "Joystick7Button0";
        KeyCode[KeyCode["Joystick7Button1"] = 471] = "Joystick7Button1";
        KeyCode[KeyCode["Joystick7Button2"] = 472] = "Joystick7Button2";
        KeyCode[KeyCode["Joystick7Button3"] = 473] = "Joystick7Button3";
        KeyCode[KeyCode["Joystick7Button4"] = 474] = "Joystick7Button4";
        KeyCode[KeyCode["Joystick7Button5"] = 475] = "Joystick7Button5";
        KeyCode[KeyCode["Joystick7Button6"] = 476] = "Joystick7Button6";
        KeyCode[KeyCode["Joystick7Button7"] = 477] = "Joystick7Button7";
        KeyCode[KeyCode["Joystick7Button8"] = 478] = "Joystick7Button8";
        KeyCode[KeyCode["Joystick7Button9"] = 479] = "Joystick7Button9";
        KeyCode[KeyCode["Joystick7Button10"] = 480] = "Joystick7Button10";
        KeyCode[KeyCode["Joystick7Button11"] = 481] = "Joystick7Button11";
        KeyCode[KeyCode["Joystick7Button12"] = 482] = "Joystick7Button12";
        KeyCode[KeyCode["Joystick7Button13"] = 483] = "Joystick7Button13";
        KeyCode[KeyCode["Joystick7Button14"] = 484] = "Joystick7Button14";
        KeyCode[KeyCode["Joystick7Button15"] = 485] = "Joystick7Button15";
        KeyCode[KeyCode["Joystick7Button16"] = 486] = "Joystick7Button16";
        KeyCode[KeyCode["Joystick7Button17"] = 487] = "Joystick7Button17";
        KeyCode[KeyCode["Joystick7Button18"] = 488] = "Joystick7Button18";
        KeyCode[KeyCode["Joystick7Button19"] = 489] = "Joystick7Button19";
        KeyCode[KeyCode["Joystick8Button0"] = 490] = "Joystick8Button0";
        KeyCode[KeyCode["Joystick8Button1"] = 491] = "Joystick8Button1";
        KeyCode[KeyCode["Joystick8Button2"] = 492] = "Joystick8Button2";
        KeyCode[KeyCode["Joystick8Button3"] = 493] = "Joystick8Button3";
        KeyCode[KeyCode["Joystick8Button4"] = 494] = "Joystick8Button4";
        KeyCode[KeyCode["Joystick8Button5"] = 495] = "Joystick8Button5";
        KeyCode[KeyCode["Joystick8Button6"] = 496] = "Joystick8Button6";
        KeyCode[KeyCode["Joystick8Button7"] = 497] = "Joystick8Button7";
        KeyCode[KeyCode["Joystick8Button8"] = 498] = "Joystick8Button8";
        KeyCode[KeyCode["Joystick8Button9"] = 499] = "Joystick8Button9";
        KeyCode[KeyCode["Joystick8Button10"] = 500] = "Joystick8Button10";
        KeyCode[KeyCode["Joystick8Button11"] = 501] = "Joystick8Button11";
        KeyCode[KeyCode["Joystick8Button12"] = 502] = "Joystick8Button12";
        KeyCode[KeyCode["Joystick8Button13"] = 503] = "Joystick8Button13";
        KeyCode[KeyCode["Joystick8Button14"] = 504] = "Joystick8Button14";
        KeyCode[KeyCode["Joystick8Button15"] = 505] = "Joystick8Button15";
        KeyCode[KeyCode["Joystick8Button16"] = 506] = "Joystick8Button16";
        KeyCode[KeyCode["Joystick8Button17"] = 507] = "Joystick8Button17";
        KeyCode[KeyCode["Joystick8Button18"] = 508] = "Joystick8Button18";
        KeyCode[KeyCode["Joystick8Button19"] = 509] = "Joystick8Button19";
    })(WebUnity.KeyCode || (WebUnity.KeyCode = {}));
    var KeyCode = WebUnity.KeyCode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (LightmapsMode) {
        LightmapsMode[LightmapsMode["NonDirectional"] = 0] = "NonDirectional";
        LightmapsMode[LightmapsMode["CombinedDirectional"] = 1] = "CombinedDirectional";
        LightmapsMode[LightmapsMode["SeparateDirectional"] = 2] = "SeparateDirectional";
    })(WebUnity.LightmapsMode || (WebUnity.LightmapsMode = {}));
    var LightmapsMode = WebUnity.LightmapsMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (LightmapsModeLegacy) {
        LightmapsModeLegacy[LightmapsModeLegacy["Single"] = 0] = "Single";
        LightmapsModeLegacy[LightmapsModeLegacy["Dual"] = 1] = "Dual";
        LightmapsModeLegacy[LightmapsModeLegacy["Directional"] = 2] = "Directional";
    })(WebUnity.LightmapsModeLegacy || (WebUnity.LightmapsModeLegacy = {}));
    var LightmapsModeLegacy = WebUnity.LightmapsModeLegacy;
})(WebUnity || (WebUnity = {}));
var WebUnityInternal;
(function (WebUnityInternal) {
    (function (LightmapType) {
        LightmapType[LightmapType["NoLightmap"] = -1] = "NoLightmap";
        LightmapType[LightmapType["StaticLightmap"] = 0] = "StaticLightmap";
        LightmapType[LightmapType["DynamicLightmap"] = 1] = "DynamicLightmap";
    })(WebUnityInternal.LightmapType || (WebUnityInternal.LightmapType = {}));
    var LightmapType = WebUnityInternal.LightmapType;
})(WebUnityInternal || (WebUnityInternal = {}));
var WebUnity;
(function (WebUnity) {
    (function (LightRenderMode) {
        LightRenderMode[LightRenderMode["Auto"] = 0] = "Auto";
        LightRenderMode[LightRenderMode["ForcePixel"] = 1] = "ForcePixel";
        LightRenderMode[LightRenderMode["ForceVertex"] = 2] = "ForceVertex";
    })(WebUnity.LightRenderMode || (WebUnity.LightRenderMode = {}));
    var LightRenderMode = WebUnity.LightRenderMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (LightShadows) {
        LightShadows[LightShadows["None"] = 0] = "None";
        LightShadows[LightShadows["Hard"] = 1] = "Hard";
        LightShadows[LightShadows["Soft"] = 2] = "Soft";
    })(WebUnity.LightShadows || (WebUnity.LightShadows = {}));
    var LightShadows = WebUnity.LightShadows;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (LightType) {
        LightType[LightType["Spot"] = 0] = "Spot";
        LightType[LightType["Directional"] = 1] = "Directional";
        LightType[LightType["Point"] = 2] = "Point";
        LightType[LightType["Area"] = 3] = "Area";
    })(WebUnity.LightType || (WebUnity.LightType = {}));
    var LightType = WebUnity.LightType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (LocationServiceStatus) {
        LocationServiceStatus[LocationServiceStatus["Stopped"] = 0] = "Stopped";
        LocationServiceStatus[LocationServiceStatus["Initializing"] = 1] = "Initializing";
        LocationServiceStatus[LocationServiceStatus["Running"] = 2] = "Running";
        LocationServiceStatus[LocationServiceStatus["Failed"] = 3] = "Failed";
    })(WebUnity.LocationServiceStatus || (WebUnity.LocationServiceStatus = {}));
    var LocationServiceStatus = WebUnity.LocationServiceStatus;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (LODFadeMode) {
        LODFadeMode[LODFadeMode["None"] = 0] = "None";
        LODFadeMode[LODFadeMode["CrossFade"] = 1] = "CrossFade";
        LODFadeMode[LODFadeMode["SpeedTree"] = 2] = "SpeedTree";
    })(WebUnity.LODFadeMode || (WebUnity.LODFadeMode = {}));
    var LODFadeMode = WebUnity.LODFadeMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (LogType) {
        LogType[LogType["Error"] = 0] = "Error";
        LogType[LogType["Assert"] = 1] = "Assert";
        LogType[LogType["Warning"] = 2] = "Warning";
        LogType[LogType["Log"] = 3] = "Log";
        LogType[LogType["Exception"] = 4] = "Exception";
    })(WebUnity.LogType || (WebUnity.LogType = {}));
    var LogType = WebUnity.LogType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (MasterServerEvent) {
        MasterServerEvent[MasterServerEvent["RegistrationFailedGameName"] = 0] = "RegistrationFailedGameName";
        MasterServerEvent[MasterServerEvent["RegistrationFailedGameType"] = 1] = "RegistrationFailedGameType";
        MasterServerEvent[MasterServerEvent["RegistrationFailedNoServer"] = 2] = "RegistrationFailedNoServer";
        MasterServerEvent[MasterServerEvent["RegistrationSucceeded"] = 3] = "RegistrationSucceeded";
        MasterServerEvent[MasterServerEvent["HostListReceived"] = 4] = "HostListReceived";
    })(WebUnity.MasterServerEvent || (WebUnity.MasterServerEvent = {}));
    var MasterServerEvent = WebUnity.MasterServerEvent;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (MaterialGlobalIlluminationFlags) {
        MaterialGlobalIlluminationFlags[MaterialGlobalIlluminationFlags["None"] = 0] = "None";
        MaterialGlobalIlluminationFlags[MaterialGlobalIlluminationFlags["RealtimeEmissive"] = 1] = "RealtimeEmissive";
        MaterialGlobalIlluminationFlags[MaterialGlobalIlluminationFlags["BakedEmissive"] = 2] = "BakedEmissive";
        MaterialGlobalIlluminationFlags[MaterialGlobalIlluminationFlags["EmissiveIsBlack"] = 4] = "EmissiveIsBlack";
    })(WebUnity.MaterialGlobalIlluminationFlags || (WebUnity.MaterialGlobalIlluminationFlags = {}));
    var MaterialGlobalIlluminationFlags = WebUnity.MaterialGlobalIlluminationFlags;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (MeshTopology) {
        MeshTopology[MeshTopology["Triangles"] = 0] = "Triangles";
        MeshTopology[MeshTopology["Quads"] = 2] = "Quads";
        MeshTopology[MeshTopology["Lines"] = 3] = "Lines";
        MeshTopology[MeshTopology["LineStrip"] = 4] = "LineStrip";
        MeshTopology[MeshTopology["Points"] = 5] = "Points";
    })(WebUnity.MeshTopology || (WebUnity.MeshTopology = {}));
    var MeshTopology = WebUnity.MeshTopology;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (NavMeshObstacleShape) {
        NavMeshObstacleShape[NavMeshObstacleShape["Capsule"] = 0] = "Capsule";
        NavMeshObstacleShape[NavMeshObstacleShape["Box"] = 1] = "Box";
    })(WebUnity.NavMeshObstacleShape || (WebUnity.NavMeshObstacleShape = {}));
    var NavMeshObstacleShape = WebUnity.NavMeshObstacleShape;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (NavMeshPathStatus) {
        NavMeshPathStatus[NavMeshPathStatus["PathComplete"] = 0] = "PathComplete";
        NavMeshPathStatus[NavMeshPathStatus["PathPartial"] = 1] = "PathPartial";
        NavMeshPathStatus[NavMeshPathStatus["PathInvalid"] = 2] = "PathInvalid";
    })(WebUnity.NavMeshPathStatus || (WebUnity.NavMeshPathStatus = {}));
    var NavMeshPathStatus = WebUnity.NavMeshPathStatus;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (NetworkConnectionError) {
        NetworkConnectionError[NetworkConnectionError["NoError"] = 0] = "NoError";
        NetworkConnectionError[NetworkConnectionError["RSAPublicKeyMismatch"] = 21] = "RSAPublicKeyMismatch";
        NetworkConnectionError[NetworkConnectionError["InvalidPassword"] = 23] = "InvalidPassword";
        NetworkConnectionError[NetworkConnectionError["ConnectionFailed"] = 15] = "ConnectionFailed";
        NetworkConnectionError[NetworkConnectionError["TooManyConnectedPlayers"] = 18] = "TooManyConnectedPlayers";
        NetworkConnectionError[NetworkConnectionError["ConnectionBanned"] = 22] = "ConnectionBanned";
        NetworkConnectionError[NetworkConnectionError["AlreadyConnectedToServer"] = 16] = "AlreadyConnectedToServer";
        NetworkConnectionError[NetworkConnectionError["AlreadyConnectedToAnotherServer"] = -1] = "AlreadyConnectedToAnotherServer";
        NetworkConnectionError[NetworkConnectionError["CreateSocketOrThreadFailure"] = -2] = "CreateSocketOrThreadFailure";
        NetworkConnectionError[NetworkConnectionError["IncorrectParameters"] = -3] = "IncorrectParameters";
        NetworkConnectionError[NetworkConnectionError["EmptyConnectTarget"] = -4] = "EmptyConnectTarget";
        NetworkConnectionError[NetworkConnectionError["InternalDirectConnectFailed"] = -5] = "InternalDirectConnectFailed";
        NetworkConnectionError[NetworkConnectionError["NATTargetNotConnected"] = 69] = "NATTargetNotConnected";
        NetworkConnectionError[NetworkConnectionError["NATTargetConnectionLost"] = 71] = "NATTargetConnectionLost";
        NetworkConnectionError[NetworkConnectionError["NATPunchthroughFailed"] = 73] = "NATPunchthroughFailed";
    })(WebUnity.NetworkConnectionError || (WebUnity.NetworkConnectionError = {}));
    var NetworkConnectionError = WebUnity.NetworkConnectionError;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (NetworkDisconnection) {
        NetworkDisconnection[NetworkDisconnection["LostConnection"] = 20] = "LostConnection";
        NetworkDisconnection[NetworkDisconnection["Disconnected"] = 19] = "Disconnected";
    })(WebUnity.NetworkDisconnection || (WebUnity.NetworkDisconnection = {}));
    var NetworkDisconnection = WebUnity.NetworkDisconnection;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Networking;
    (function (Networking) {
        (function (NetworkError) {
            NetworkError[NetworkError["Ok"] = 0] = "Ok";
            NetworkError[NetworkError["WrongHost"] = 1] = "WrongHost";
            NetworkError[NetworkError["WrongConnection"] = 2] = "WrongConnection";
            NetworkError[NetworkError["WrongChannel"] = 3] = "WrongChannel";
            NetworkError[NetworkError["NoResources"] = 4] = "NoResources";
            NetworkError[NetworkError["BadMessage"] = 5] = "BadMessage";
            NetworkError[NetworkError["Timeout"] = 6] = "Timeout";
            NetworkError[NetworkError["MessageToLong"] = 7] = "MessageToLong";
            NetworkError[NetworkError["WrongOperation"] = 8] = "WrongOperation";
            NetworkError[NetworkError["VersionMismatch"] = 9] = "VersionMismatch";
            NetworkError[NetworkError["CRCMismatch"] = 10] = "CRCMismatch";
            NetworkError[NetworkError["DNSFailure"] = 11] = "DNSFailure";
        })(Networking.NetworkError || (Networking.NetworkError = {}));
        var NetworkError = Networking.NetworkError;
    })(Networking = WebUnity.Networking || (WebUnity.Networking = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Networking;
    (function (Networking) {
        (function (NetworkEventType) {
            NetworkEventType[NetworkEventType["DataEvent"] = 0] = "DataEvent";
            NetworkEventType[NetworkEventType["ConnectEvent"] = 1] = "ConnectEvent";
            NetworkEventType[NetworkEventType["DisconnectEvent"] = 2] = "DisconnectEvent";
            NetworkEventType[NetworkEventType["Nothing"] = 3] = "Nothing";
            NetworkEventType[NetworkEventType["BroadcastEvent"] = 4] = "BroadcastEvent";
        })(Networking.NetworkEventType || (Networking.NetworkEventType = {}));
        var NetworkEventType = Networking.NetworkEventType;
    })(Networking = WebUnity.Networking || (WebUnity.Networking = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Networking;
    (function (Networking) {
        (function (QosType) {
            QosType[QosType["Unreliable"] = 0] = "Unreliable";
            QosType[QosType["UnreliableFragmented"] = 1] = "UnreliableFragmented";
            QosType[QosType["UnreliableSequenced"] = 2] = "UnreliableSequenced";
            QosType[QosType["Reliable"] = 3] = "Reliable";
            QosType[QosType["ReliableFragmented"] = 4] = "ReliableFragmented";
            QosType[QosType["ReliableSequenced"] = 5] = "ReliableSequenced";
            QosType[QosType["StateUpdate"] = 6] = "StateUpdate";
            QosType[QosType["ReliableStateUpdate"] = 7] = "ReliableStateUpdate";
            QosType[QosType["AllCostDelivery"] = 8] = "AllCostDelivery";
        })(Networking.QosType || (Networking.QosType = {}));
        var QosType = Networking.QosType;
    })(Networking = WebUnity.Networking || (WebUnity.Networking = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Networking;
    (function (Networking) {
        (function (ReactorModel) {
            ReactorModel[ReactorModel["SelectReactor"] = 0] = "SelectReactor";
            ReactorModel[ReactorModel["FixRateReactor"] = 1] = "FixRateReactor";
        })(Networking.ReactorModel || (Networking.ReactorModel = {}));
        var ReactorModel = Networking.ReactorModel;
    })(Networking = WebUnity.Networking || (WebUnity.Networking = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Networking;
    (function (Networking) {
        var Types;
        (function (Types) {
            (function (NetworkAccessLevel) {
                NetworkAccessLevel[NetworkAccessLevel["Invalid"] = 0] = "Invalid";
                NetworkAccessLevel[NetworkAccessLevel["User"] = 1] = "User";
                NetworkAccessLevel[NetworkAccessLevel["Owner"] = 2] = "Owner";
                NetworkAccessLevel[NetworkAccessLevel["Admin"] = 4] = "Admin";
            })(Types.NetworkAccessLevel || (Types.NetworkAccessLevel = {}));
            var NetworkAccessLevel = Types.NetworkAccessLevel;
        })(Types = Networking.Types || (Networking.Types = {}));
    })(Networking = WebUnity.Networking || (WebUnity.Networking = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Networking;
    (function (Networking) {
        var Types;
        (function (Types) {
            (function (NodeID) {
                NodeID[NodeID["Invalid"] = 0] = "Invalid";
            })(Types.NodeID || (Types.NodeID = {}));
            var NodeID = Types.NodeID;
        })(Types = Networking.Types || (Networking.Types = {}));
    })(Networking = WebUnity.Networking || (WebUnity.Networking = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (NetworkLogLevel) {
        NetworkLogLevel[NetworkLogLevel["Off"] = 0] = "Off";
        NetworkLogLevel[NetworkLogLevel["Informational"] = 1] = "Informational";
        NetworkLogLevel[NetworkLogLevel["Full"] = 3] = "Full";
    })(WebUnity.NetworkLogLevel || (WebUnity.NetworkLogLevel = {}));
    var NetworkLogLevel = WebUnity.NetworkLogLevel;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (NetworkPeerType) {
        NetworkPeerType[NetworkPeerType["Disconnected"] = 0] = "Disconnected";
        NetworkPeerType[NetworkPeerType["Server"] = 1] = "Server";
        NetworkPeerType[NetworkPeerType["Client"] = 2] = "Client";
        NetworkPeerType[NetworkPeerType["Connecting"] = 3] = "Connecting";
    })(WebUnity.NetworkPeerType || (WebUnity.NetworkPeerType = {}));
    var NetworkPeerType = WebUnity.NetworkPeerType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (NetworkReachability) {
        NetworkReachability[NetworkReachability["NotReachable"] = 0] = "NotReachable";
        NetworkReachability[NetworkReachability["ReachableViaCarrierDataNetwork"] = 1] = "ReachableViaCarrierDataNetwork";
        NetworkReachability[NetworkReachability["ReachableViaLocalAreaNetwork"] = 2] = "ReachableViaLocalAreaNetwork";
    })(WebUnity.NetworkReachability || (WebUnity.NetworkReachability = {}));
    var NetworkReachability = WebUnity.NetworkReachability;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (NetworkStateSynchronization) {
        NetworkStateSynchronization[NetworkStateSynchronization["Off"] = 0] = "Off";
        NetworkStateSynchronization[NetworkStateSynchronization["ReliableDeltaCompressed"] = 1] = "ReliableDeltaCompressed";
        NetworkStateSynchronization[NetworkStateSynchronization["Unreliable"] = 2] = "Unreliable";
    })(WebUnity.NetworkStateSynchronization || (WebUnity.NetworkStateSynchronization = {}));
    var NetworkStateSynchronization = WebUnity.NetworkStateSynchronization;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (NPOTSupport) {
        NPOTSupport[NPOTSupport["None"] = 0] = "None";
        NPOTSupport[NPOTSupport["Restricted"] = 1] = "Restricted";
        NPOTSupport[NPOTSupport["Full"] = 2] = "Full";
    })(WebUnity.NPOTSupport || (WebUnity.NPOTSupport = {}));
    var NPOTSupport = WebUnity.NPOTSupport;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ObstacleAvoidanceType) {
        ObstacleAvoidanceType[ObstacleAvoidanceType["NoObstacleAvoidance"] = 0] = "NoObstacleAvoidance";
        ObstacleAvoidanceType[ObstacleAvoidanceType["LowQualityObstacleAvoidance"] = 1] = "LowQualityObstacleAvoidance";
        ObstacleAvoidanceType[ObstacleAvoidanceType["MedQualityObstacleAvoidance"] = 2] = "MedQualityObstacleAvoidance";
        ObstacleAvoidanceType[ObstacleAvoidanceType["GoodQualityObstacleAvoidance"] = 3] = "GoodQualityObstacleAvoidance";
        ObstacleAvoidanceType[ObstacleAvoidanceType["HighQualityObstacleAvoidance"] = 4] = "HighQualityObstacleAvoidance";
    })(WebUnity.ObstacleAvoidanceType || (WebUnity.ObstacleAvoidanceType = {}));
    var ObstacleAvoidanceType = WebUnity.ObstacleAvoidanceType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (OffMeshLinkType) {
        OffMeshLinkType[OffMeshLinkType["LinkTypeManual"] = 0] = "LinkTypeManual";
        OffMeshLinkType[OffMeshLinkType["LinkTypeDropDown"] = 1] = "LinkTypeDropDown";
        OffMeshLinkType[OffMeshLinkType["LinkTypeJumpAcross"] = 2] = "LinkTypeJumpAcross";
    })(WebUnity.OffMeshLinkType || (WebUnity.OffMeshLinkType = {}));
    var OffMeshLinkType = WebUnity.OffMeshLinkType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleRenderMode) {
        ParticleRenderMode[ParticleRenderMode["Billboard"] = 0] = "Billboard";
        ParticleRenderMode[ParticleRenderMode["Stretch"] = 3] = "Stretch";
        ParticleRenderMode[ParticleRenderMode["SortedBillboard"] = 2] = "SortedBillboard";
        ParticleRenderMode[ParticleRenderMode["HorizontalBillboard"] = 4] = "HorizontalBillboard";
        ParticleRenderMode[ParticleRenderMode["VerticalBillboard"] = 5] = "VerticalBillboard";
    })(WebUnity.ParticleRenderMode || (WebUnity.ParticleRenderMode = {}));
    var ParticleRenderMode = WebUnity.ParticleRenderMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemAnimationType) {
        ParticleSystemAnimationType[ParticleSystemAnimationType["WholeSheet"] = 0] = "WholeSheet";
        ParticleSystemAnimationType[ParticleSystemAnimationType["SingleRow"] = 1] = "SingleRow";
    })(WebUnity.ParticleSystemAnimationType || (WebUnity.ParticleSystemAnimationType = {}));
    var ParticleSystemAnimationType = WebUnity.ParticleSystemAnimationType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemCollisionMode) {
        ParticleSystemCollisionMode[ParticleSystemCollisionMode["Collision3D"] = 0] = "Collision3D";
        ParticleSystemCollisionMode[ParticleSystemCollisionMode["Collision2D"] = 1] = "Collision2D";
    })(WebUnity.ParticleSystemCollisionMode || (WebUnity.ParticleSystemCollisionMode = {}));
    var ParticleSystemCollisionMode = WebUnity.ParticleSystemCollisionMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemCollisionQuality) {
        ParticleSystemCollisionQuality[ParticleSystemCollisionQuality["High"] = 0] = "High";
        ParticleSystemCollisionQuality[ParticleSystemCollisionQuality["Medium"] = 1] = "Medium";
        ParticleSystemCollisionQuality[ParticleSystemCollisionQuality["Low"] = 2] = "Low";
    })(WebUnity.ParticleSystemCollisionQuality || (WebUnity.ParticleSystemCollisionQuality = {}));
    var ParticleSystemCollisionQuality = WebUnity.ParticleSystemCollisionQuality;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemCollisionType) {
        ParticleSystemCollisionType[ParticleSystemCollisionType["Planes"] = 0] = "Planes";
        ParticleSystemCollisionType[ParticleSystemCollisionType["World"] = 1] = "World";
    })(WebUnity.ParticleSystemCollisionType || (WebUnity.ParticleSystemCollisionType = {}));
    var ParticleSystemCollisionType = WebUnity.ParticleSystemCollisionType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemCurveMode) {
        ParticleSystemCurveMode[ParticleSystemCurveMode["Constant"] = 0] = "Constant";
        ParticleSystemCurveMode[ParticleSystemCurveMode["Curve"] = 1] = "Curve";
        ParticleSystemCurveMode[ParticleSystemCurveMode["TwoCurves"] = 2] = "TwoCurves";
        ParticleSystemCurveMode[ParticleSystemCurveMode["TwoConstants"] = 3] = "TwoConstants";
    })(WebUnity.ParticleSystemCurveMode || (WebUnity.ParticleSystemCurveMode = {}));
    var ParticleSystemCurveMode = WebUnity.ParticleSystemCurveMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemEmissionType) {
        ParticleSystemEmissionType[ParticleSystemEmissionType["Time"] = 0] = "Time";
        ParticleSystemEmissionType[ParticleSystemEmissionType["Distance"] = 1] = "Distance";
    })(WebUnity.ParticleSystemEmissionType || (WebUnity.ParticleSystemEmissionType = {}));
    var ParticleSystemEmissionType = WebUnity.ParticleSystemEmissionType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemGradientMode) {
        ParticleSystemGradientMode[ParticleSystemGradientMode["Color"] = 0] = "Color";
        ParticleSystemGradientMode[ParticleSystemGradientMode["Gradient"] = 1] = "Gradient";
        ParticleSystemGradientMode[ParticleSystemGradientMode["TwoColors"] = 2] = "TwoColors";
        ParticleSystemGradientMode[ParticleSystemGradientMode["TwoGradients"] = 3] = "TwoGradients";
    })(WebUnity.ParticleSystemGradientMode || (WebUnity.ParticleSystemGradientMode = {}));
    var ParticleSystemGradientMode = WebUnity.ParticleSystemGradientMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemInheritVelocityMode) {
        ParticleSystemInheritVelocityMode[ParticleSystemInheritVelocityMode["Initial"] = 0] = "Initial";
        ParticleSystemInheritVelocityMode[ParticleSystemInheritVelocityMode["Current"] = 1] = "Current";
    })(WebUnity.ParticleSystemInheritVelocityMode || (WebUnity.ParticleSystemInheritVelocityMode = {}));
    var ParticleSystemInheritVelocityMode = WebUnity.ParticleSystemInheritVelocityMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemMeshShapeType) {
        ParticleSystemMeshShapeType[ParticleSystemMeshShapeType["Vertex"] = 0] = "Vertex";
        ParticleSystemMeshShapeType[ParticleSystemMeshShapeType["Edge"] = 1] = "Edge";
        ParticleSystemMeshShapeType[ParticleSystemMeshShapeType["Triangle"] = 2] = "Triangle";
    })(WebUnity.ParticleSystemMeshShapeType || (WebUnity.ParticleSystemMeshShapeType = {}));
    var ParticleSystemMeshShapeType = WebUnity.ParticleSystemMeshShapeType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemRenderMode) {
        ParticleSystemRenderMode[ParticleSystemRenderMode["Billboard"] = 0] = "Billboard";
        ParticleSystemRenderMode[ParticleSystemRenderMode["Stretch"] = 1] = "Stretch";
        ParticleSystemRenderMode[ParticleSystemRenderMode["HorizontalBillboard"] = 2] = "HorizontalBillboard";
        ParticleSystemRenderMode[ParticleSystemRenderMode["VerticalBillboard"] = 3] = "VerticalBillboard";
        ParticleSystemRenderMode[ParticleSystemRenderMode["Mesh"] = 4] = "Mesh";
    })(WebUnity.ParticleSystemRenderMode || (WebUnity.ParticleSystemRenderMode = {}));
    var ParticleSystemRenderMode = WebUnity.ParticleSystemRenderMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemRenderSpace) {
        ParticleSystemRenderSpace[ParticleSystemRenderSpace["View"] = 0] = "View";
        ParticleSystemRenderSpace[ParticleSystemRenderSpace["World"] = 1] = "World";
        ParticleSystemRenderSpace[ParticleSystemRenderSpace["Local"] = 2] = "Local";
    })(WebUnity.ParticleSystemRenderSpace || (WebUnity.ParticleSystemRenderSpace = {}));
    var ParticleSystemRenderSpace = WebUnity.ParticleSystemRenderSpace;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemScalingMode) {
        ParticleSystemScalingMode[ParticleSystemScalingMode["Hierarchy"] = 0] = "Hierarchy";
        ParticleSystemScalingMode[ParticleSystemScalingMode["Local"] = 1] = "Local";
        ParticleSystemScalingMode[ParticleSystemScalingMode["Shape"] = 2] = "Shape";
    })(WebUnity.ParticleSystemScalingMode || (WebUnity.ParticleSystemScalingMode = {}));
    var ParticleSystemScalingMode = WebUnity.ParticleSystemScalingMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemShapeType) {
        ParticleSystemShapeType[ParticleSystemShapeType["Sphere"] = 0] = "Sphere";
        ParticleSystemShapeType[ParticleSystemShapeType["SphereShell"] = 1] = "SphereShell";
        ParticleSystemShapeType[ParticleSystemShapeType["Hemisphere"] = 2] = "Hemisphere";
        ParticleSystemShapeType[ParticleSystemShapeType["HemisphereShell"] = 3] = "HemisphereShell";
        ParticleSystemShapeType[ParticleSystemShapeType["Cone"] = 4] = "Cone";
        ParticleSystemShapeType[ParticleSystemShapeType["Box"] = 5] = "Box";
        ParticleSystemShapeType[ParticleSystemShapeType["Mesh"] = 6] = "Mesh";
        ParticleSystemShapeType[ParticleSystemShapeType["ConeShell"] = 7] = "ConeShell";
        ParticleSystemShapeType[ParticleSystemShapeType["ConeVolume"] = 8] = "ConeVolume";
        ParticleSystemShapeType[ParticleSystemShapeType["ConeVolumeShell"] = 9] = "ConeVolumeShell";
        ParticleSystemShapeType[ParticleSystemShapeType["Circle"] = 10] = "Circle";
        ParticleSystemShapeType[ParticleSystemShapeType["CircleEdge"] = 11] = "CircleEdge";
        ParticleSystemShapeType[ParticleSystemShapeType["SingleSidedEdge"] = 12] = "SingleSidedEdge";
        ParticleSystemShapeType[ParticleSystemShapeType["MeshRenderer"] = 13] = "MeshRenderer";
        ParticleSystemShapeType[ParticleSystemShapeType["SkinnedMeshRenderer"] = 14] = "SkinnedMeshRenderer";
    })(WebUnity.ParticleSystemShapeType || (WebUnity.ParticleSystemShapeType = {}));
    var ParticleSystemShapeType = WebUnity.ParticleSystemShapeType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemSimulationSpace) {
        ParticleSystemSimulationSpace[ParticleSystemSimulationSpace["Local"] = 0] = "Local";
        ParticleSystemSimulationSpace[ParticleSystemSimulationSpace["World"] = 1] = "World";
    })(WebUnity.ParticleSystemSimulationSpace || (WebUnity.ParticleSystemSimulationSpace = {}));
    var ParticleSystemSimulationSpace = WebUnity.ParticleSystemSimulationSpace;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ParticleSystemSortMode) {
        ParticleSystemSortMode[ParticleSystemSortMode["None"] = 0] = "None";
        ParticleSystemSortMode[ParticleSystemSortMode["Distance"] = 1] = "Distance";
        ParticleSystemSortMode[ParticleSystemSortMode["OldestInFront"] = 2] = "OldestInFront";
        ParticleSystemSortMode[ParticleSystemSortMode["YoungestInFront"] = 3] = "YoungestInFront";
    })(WebUnity.ParticleSystemSortMode || (WebUnity.ParticleSystemSortMode = {}));
    var ParticleSystemSortMode = WebUnity.ParticleSystemSortMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (PhysicMaterialCombine) {
        PhysicMaterialCombine[PhysicMaterialCombine["Average"] = 0] = "Average";
        PhysicMaterialCombine[PhysicMaterialCombine["Minimum"] = 2] = "Minimum";
        PhysicMaterialCombine[PhysicMaterialCombine["Multiply"] = 1] = "Multiply";
        PhysicMaterialCombine[PhysicMaterialCombine["Maximum"] = 3] = "Maximum";
    })(WebUnity.PhysicMaterialCombine || (WebUnity.PhysicMaterialCombine = {}));
    var PhysicMaterialCombine = WebUnity.PhysicMaterialCombine;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (PlayMode) {
        PlayMode[PlayMode["StopSameLayer"] = 0] = "StopSameLayer";
        PlayMode[PlayMode["StopAll"] = 4] = "StopAll";
    })(WebUnity.PlayMode || (WebUnity.PlayMode = {}));
    var PlayMode = WebUnity.PlayMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (PrimitiveType) {
        PrimitiveType[PrimitiveType["Sphere"] = 0] = "Sphere";
        PrimitiveType[PrimitiveType["Capsule"] = 1] = "Capsule";
        PrimitiveType[PrimitiveType["Cylinder"] = 2] = "Cylinder";
        PrimitiveType[PrimitiveType["Cube"] = 3] = "Cube";
        PrimitiveType[PrimitiveType["Plane"] = 4] = "Plane";
        PrimitiveType[PrimitiveType["Quad"] = 5] = "Quad";
    })(WebUnity.PrimitiveType || (WebUnity.PrimitiveType = {}));
    var PrimitiveType = WebUnity.PrimitiveType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ProceduralCacheSize) {
        ProceduralCacheSize[ProceduralCacheSize["Tiny"] = 0] = "Tiny";
        ProceduralCacheSize[ProceduralCacheSize["Medium"] = 1] = "Medium";
        ProceduralCacheSize[ProceduralCacheSize["Heavy"] = 2] = "Heavy";
        ProceduralCacheSize[ProceduralCacheSize["NoLimit"] = 3] = "NoLimit";
        ProceduralCacheSize[ProceduralCacheSize["None"] = 4] = "None";
    })(WebUnity.ProceduralCacheSize || (WebUnity.ProceduralCacheSize = {}));
    var ProceduralCacheSize = WebUnity.ProceduralCacheSize;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ProceduralLoadingBehavior) {
        ProceduralLoadingBehavior[ProceduralLoadingBehavior["DoNothing"] = 0] = "DoNothing";
        ProceduralLoadingBehavior[ProceduralLoadingBehavior["Generate"] = 1] = "Generate";
        ProceduralLoadingBehavior[ProceduralLoadingBehavior["BakeAndKeep"] = 2] = "BakeAndKeep";
        ProceduralLoadingBehavior[ProceduralLoadingBehavior["BakeAndDiscard"] = 3] = "BakeAndDiscard";
        ProceduralLoadingBehavior[ProceduralLoadingBehavior["Cache"] = 4] = "Cache";
        ProceduralLoadingBehavior[ProceduralLoadingBehavior["DoNothingAndCache"] = 5] = "DoNothingAndCache";
    })(WebUnity.ProceduralLoadingBehavior || (WebUnity.ProceduralLoadingBehavior = {}));
    var ProceduralLoadingBehavior = WebUnity.ProceduralLoadingBehavior;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ProceduralOutputType) {
        ProceduralOutputType[ProceduralOutputType["Unknown"] = 0] = "Unknown";
        ProceduralOutputType[ProceduralOutputType["Diffuse"] = 1] = "Diffuse";
        ProceduralOutputType[ProceduralOutputType["Normal"] = 2] = "Normal";
        ProceduralOutputType[ProceduralOutputType["Height"] = 3] = "Height";
        ProceduralOutputType[ProceduralOutputType["Emissive"] = 4] = "Emissive";
        ProceduralOutputType[ProceduralOutputType["Specular"] = 5] = "Specular";
        ProceduralOutputType[ProceduralOutputType["Opacity"] = 6] = "Opacity";
        ProceduralOutputType[ProceduralOutputType["Smoothness"] = 7] = "Smoothness";
        ProceduralOutputType[ProceduralOutputType["AmbientOcclusion"] = 8] = "AmbientOcclusion";
        ProceduralOutputType[ProceduralOutputType["DetailMask"] = 9] = "DetailMask";
        ProceduralOutputType[ProceduralOutputType["Metallic"] = 10] = "Metallic";
        ProceduralOutputType[ProceduralOutputType["Roughness"] = 11] = "Roughness";
    })(WebUnity.ProceduralOutputType || (WebUnity.ProceduralOutputType = {}));
    var ProceduralOutputType = WebUnity.ProceduralOutputType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ProceduralProcessorUsage) {
        ProceduralProcessorUsage[ProceduralProcessorUsage["Unsupported"] = 0] = "Unsupported";
        ProceduralProcessorUsage[ProceduralProcessorUsage["One"] = 1] = "One";
        ProceduralProcessorUsage[ProceduralProcessorUsage["Half"] = 2] = "Half";
        ProceduralProcessorUsage[ProceduralProcessorUsage["All"] = 3] = "All";
    })(WebUnity.ProceduralProcessorUsage || (WebUnity.ProceduralProcessorUsage = {}));
    var ProceduralProcessorUsage = WebUnity.ProceduralProcessorUsage;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ProceduralPropertyType) {
        ProceduralPropertyType[ProceduralPropertyType["Boolean"] = 0] = "Boolean";
        ProceduralPropertyType[ProceduralPropertyType["Float"] = 1] = "Float";
        ProceduralPropertyType[ProceduralPropertyType["Vector2"] = 2] = "Vector2";
        ProceduralPropertyType[ProceduralPropertyType["Vector3"] = 3] = "Vector3";
        ProceduralPropertyType[ProceduralPropertyType["Vector4"] = 4] = "Vector4";
        ProceduralPropertyType[ProceduralPropertyType["Color3"] = 5] = "Color3";
        ProceduralPropertyType[ProceduralPropertyType["Color4"] = 6] = "Color4";
        ProceduralPropertyType[ProceduralPropertyType["Enum"] = 7] = "Enum";
        ProceduralPropertyType[ProceduralPropertyType["Texture"] = 8] = "Texture";
    })(WebUnity.ProceduralPropertyType || (WebUnity.ProceduralPropertyType = {}));
    var ProceduralPropertyType = WebUnity.ProceduralPropertyType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (QualityLevel) {
        QualityLevel[QualityLevel["Fastest"] = 0] = "Fastest";
        QualityLevel[QualityLevel["Fast"] = 1] = "Fast";
        QualityLevel[QualityLevel["Simple"] = 2] = "Simple";
        QualityLevel[QualityLevel["Good"] = 3] = "Good";
        QualityLevel[QualityLevel["Beautiful"] = 4] = "Beautiful";
        QualityLevel[QualityLevel["Fantastic"] = 5] = "Fantastic";
    })(WebUnity.QualityLevel || (WebUnity.QualityLevel = {}));
    var QualityLevel = WebUnity.QualityLevel;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (QueryTriggerInteraction) {
        QueryTriggerInteraction[QueryTriggerInteraction["UseGlobal"] = 0] = "UseGlobal";
        QueryTriggerInteraction[QueryTriggerInteraction["Ignore"] = 1] = "Ignore";
        QueryTriggerInteraction[QueryTriggerInteraction["Collide"] = 2] = "Collide";
    })(WebUnity.QueryTriggerInteraction || (WebUnity.QueryTriggerInteraction = {}));
    var QueryTriggerInteraction = WebUnity.QueryTriggerInteraction;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (QueueMode) {
        QueueMode[QueueMode["CompleteOthers"] = 0] = "CompleteOthers";
        QueueMode[QueueMode["PlayNow"] = 2] = "PlayNow";
    })(WebUnity.QueueMode || (WebUnity.QueueMode = {}));
    var QueueMode = WebUnity.QueueMode;
})(WebUnity || (WebUnity = {}));
var UnityEngine;
(function (UnityEngine) {
    (function (RectTransform_Axis) {
        RectTransform_Axis[RectTransform_Axis["Horizontal"] = 0] = "Horizontal";
        RectTransform_Axis[RectTransform_Axis["Vertical"] = 1] = "Vertical";
    })(UnityEngine.RectTransform_Axis || (UnityEngine.RectTransform_Axis = {}));
    var RectTransform_Axis = UnityEngine.RectTransform_Axis;
})(UnityEngine || (UnityEngine = {}));
var UnityEngine;
(function (UnityEngine) {
    (function (RectTransform_Edge) {
        RectTransform_Edge[RectTransform_Edge["Left"] = 0] = "Left";
        RectTransform_Edge[RectTransform_Edge["Right"] = 1] = "Right";
        RectTransform_Edge[RectTransform_Edge["Top"] = 2] = "Top";
        RectTransform_Edge[RectTransform_Edge["Bottom"] = 3] = "Bottom";
    })(UnityEngine.RectTransform_Edge || (UnityEngine.RectTransform_Edge = {}));
    var RectTransform_Edge = UnityEngine.RectTransform_Edge;
})(UnityEngine || (UnityEngine = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (AmbientMode) {
            AmbientMode[AmbientMode["Skybox"] = 0] = "Skybox";
            AmbientMode[AmbientMode["Trilight"] = 1] = "Trilight";
            AmbientMode[AmbientMode["Flat"] = 3] = "Flat";
            AmbientMode[AmbientMode["Custom"] = 4] = "Custom";
        })(Rendering.AmbientMode || (Rendering.AmbientMode = {}));
        var AmbientMode = Rendering.AmbientMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (BlendMode) {
            BlendMode[BlendMode["Zero"] = 0] = "Zero";
            BlendMode[BlendMode["One"] = 1] = "One";
            BlendMode[BlendMode["DstColor"] = 2] = "DstColor";
            BlendMode[BlendMode["SrcColor"] = 3] = "SrcColor";
            BlendMode[BlendMode["OneMinusDstColor"] = 4] = "OneMinusDstColor";
            BlendMode[BlendMode["SrcAlpha"] = 5] = "SrcAlpha";
            BlendMode[BlendMode["OneMinusSrcColor"] = 6] = "OneMinusSrcColor";
            BlendMode[BlendMode["DstAlpha"] = 7] = "DstAlpha";
            BlendMode[BlendMode["OneMinusDstAlpha"] = 8] = "OneMinusDstAlpha";
            BlendMode[BlendMode["SrcAlphaSaturate"] = 9] = "SrcAlphaSaturate";
            BlendMode[BlendMode["OneMinusSrcAlpha"] = 10] = "OneMinusSrcAlpha";
        })(Rendering.BlendMode || (Rendering.BlendMode = {}));
        var BlendMode = Rendering.BlendMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (BlendOp) {
            BlendOp[BlendOp["Add"] = 0] = "Add";
            BlendOp[BlendOp["Subtract"] = 1] = "Subtract";
            BlendOp[BlendOp["ReverseSubtract"] = 2] = "ReverseSubtract";
            BlendOp[BlendOp["Min"] = 3] = "Min";
            BlendOp[BlendOp["Max"] = 4] = "Max";
            BlendOp[BlendOp["LogicalClear"] = 5] = "LogicalClear";
            BlendOp[BlendOp["LogicalSet"] = 6] = "LogicalSet";
            BlendOp[BlendOp["LogicalCopy"] = 7] = "LogicalCopy";
            BlendOp[BlendOp["LogicalCopyInverted"] = 8] = "LogicalCopyInverted";
            BlendOp[BlendOp["LogicalNoop"] = 9] = "LogicalNoop";
            BlendOp[BlendOp["LogicalInvert"] = 10] = "LogicalInvert";
            BlendOp[BlendOp["LogicalAnd"] = 11] = "LogicalAnd";
            BlendOp[BlendOp["LogicalNand"] = 12] = "LogicalNand";
            BlendOp[BlendOp["LogicalOr"] = 13] = "LogicalOr";
            BlendOp[BlendOp["LogicalNor"] = 14] = "LogicalNor";
            BlendOp[BlendOp["LogicalXor"] = 15] = "LogicalXor";
            BlendOp[BlendOp["LogicalEquivalence"] = 16] = "LogicalEquivalence";
            BlendOp[BlendOp["LogicalAndReverse"] = 17] = "LogicalAndReverse";
            BlendOp[BlendOp["LogicalAndInverted"] = 18] = "LogicalAndInverted";
            BlendOp[BlendOp["LogicalOrReverse"] = 19] = "LogicalOrReverse";
            BlendOp[BlendOp["LogicalOrInverted"] = 20] = "LogicalOrInverted";
            BlendOp[BlendOp["Multiply"] = 21] = "Multiply";
            BlendOp[BlendOp["Screen"] = 22] = "Screen";
            BlendOp[BlendOp["Overlay"] = 23] = "Overlay";
            BlendOp[BlendOp["Darken"] = 24] = "Darken";
            BlendOp[BlendOp["Lighten"] = 25] = "Lighten";
            BlendOp[BlendOp["ColorDodge"] = 26] = "ColorDodge";
            BlendOp[BlendOp["ColorBurn"] = 27] = "ColorBurn";
            BlendOp[BlendOp["HardLight"] = 28] = "HardLight";
            BlendOp[BlendOp["SoftLight"] = 29] = "SoftLight";
            BlendOp[BlendOp["Difference"] = 30] = "Difference";
            BlendOp[BlendOp["Exclusion"] = 31] = "Exclusion";
            BlendOp[BlendOp["HSLHue"] = 32] = "HSLHue";
            BlendOp[BlendOp["HSLSaturation"] = 33] = "HSLSaturation";
            BlendOp[BlendOp["HSLColor"] = 34] = "HSLColor";
            BlendOp[BlendOp["HSLLuminosity"] = 35] = "HSLLuminosity";
        })(Rendering.BlendOp || (Rendering.BlendOp = {}));
        var BlendOp = Rendering.BlendOp;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (BuiltinRenderTextureType) {
            BuiltinRenderTextureType[BuiltinRenderTextureType["None"] = 0] = "None";
            BuiltinRenderTextureType[BuiltinRenderTextureType["CurrentActive"] = 1] = "CurrentActive";
            BuiltinRenderTextureType[BuiltinRenderTextureType["CameraTarget"] = 2] = "CameraTarget";
            BuiltinRenderTextureType[BuiltinRenderTextureType["Depth"] = 3] = "Depth";
            BuiltinRenderTextureType[BuiltinRenderTextureType["DepthNormals"] = 4] = "DepthNormals";
            BuiltinRenderTextureType[BuiltinRenderTextureType["PrepassNormalsSpec"] = 7] = "PrepassNormalsSpec";
            BuiltinRenderTextureType[BuiltinRenderTextureType["PrepassLight"] = 8] = "PrepassLight";
            BuiltinRenderTextureType[BuiltinRenderTextureType["PrepassLightSpec"] = 9] = "PrepassLightSpec";
            BuiltinRenderTextureType[BuiltinRenderTextureType["GBuffer0"] = 10] = "GBuffer0";
            BuiltinRenderTextureType[BuiltinRenderTextureType["GBuffer1"] = 11] = "GBuffer1";
            BuiltinRenderTextureType[BuiltinRenderTextureType["GBuffer2"] = 12] = "GBuffer2";
            BuiltinRenderTextureType[BuiltinRenderTextureType["GBuffer3"] = 13] = "GBuffer3";
            BuiltinRenderTextureType[BuiltinRenderTextureType["Reflections"] = 14] = "Reflections";
        })(Rendering.BuiltinRenderTextureType || (Rendering.BuiltinRenderTextureType = {}));
        var BuiltinRenderTextureType = Rendering.BuiltinRenderTextureType;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (BuiltinShaderMode) {
            BuiltinShaderMode[BuiltinShaderMode["Disabled"] = 0] = "Disabled";
            BuiltinShaderMode[BuiltinShaderMode["UseBuiltin"] = 1] = "UseBuiltin";
            BuiltinShaderMode[BuiltinShaderMode["UseCustom"] = 2] = "UseCustom";
        })(Rendering.BuiltinShaderMode || (Rendering.BuiltinShaderMode = {}));
        var BuiltinShaderMode = Rendering.BuiltinShaderMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (BuiltinShaderType) {
            BuiltinShaderType[BuiltinShaderType["DeferredShading"] = 0] = "DeferredShading";
            BuiltinShaderType[BuiltinShaderType["DeferredReflections"] = 1] = "DeferredReflections";
            BuiltinShaderType[BuiltinShaderType["LegacyDeferredLighting"] = 2] = "LegacyDeferredLighting";
        })(Rendering.BuiltinShaderType || (Rendering.BuiltinShaderType = {}));
        var BuiltinShaderType = Rendering.BuiltinShaderType;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (CameraEvent) {
            CameraEvent[CameraEvent["BeforeDepthTexture"] = 0] = "BeforeDepthTexture";
            CameraEvent[CameraEvent["AfterDepthTexture"] = 1] = "AfterDepthTexture";
            CameraEvent[CameraEvent["BeforeDepthNormalsTexture"] = 2] = "BeforeDepthNormalsTexture";
            CameraEvent[CameraEvent["AfterDepthNormalsTexture"] = 3] = "AfterDepthNormalsTexture";
            CameraEvent[CameraEvent["BeforeGBuffer"] = 4] = "BeforeGBuffer";
            CameraEvent[CameraEvent["AfterGBuffer"] = 5] = "AfterGBuffer";
            CameraEvent[CameraEvent["BeforeLighting"] = 6] = "BeforeLighting";
            CameraEvent[CameraEvent["AfterLighting"] = 7] = "AfterLighting";
            CameraEvent[CameraEvent["BeforeFinalPass"] = 8] = "BeforeFinalPass";
            CameraEvent[CameraEvent["AfterFinalPass"] = 9] = "AfterFinalPass";
            CameraEvent[CameraEvent["BeforeForwardOpaque"] = 10] = "BeforeForwardOpaque";
            CameraEvent[CameraEvent["AfterForwardOpaque"] = 11] = "AfterForwardOpaque";
            CameraEvent[CameraEvent["BeforeImageEffectsOpaque"] = 12] = "BeforeImageEffectsOpaque";
            CameraEvent[CameraEvent["AfterImageEffectsOpaque"] = 13] = "AfterImageEffectsOpaque";
            CameraEvent[CameraEvent["BeforeSkybox"] = 14] = "BeforeSkybox";
            CameraEvent[CameraEvent["AfterSkybox"] = 15] = "AfterSkybox";
            CameraEvent[CameraEvent["BeforeForwardAlpha"] = 16] = "BeforeForwardAlpha";
            CameraEvent[CameraEvent["AfterForwardAlpha"] = 17] = "AfterForwardAlpha";
            CameraEvent[CameraEvent["BeforeImageEffects"] = 18] = "BeforeImageEffects";
            CameraEvent[CameraEvent["AfterImageEffects"] = 19] = "AfterImageEffects";
            CameraEvent[CameraEvent["AfterEverything"] = 20] = "AfterEverything";
            CameraEvent[CameraEvent["BeforeReflections"] = 21] = "BeforeReflections";
            CameraEvent[CameraEvent["AfterReflections"] = 22] = "AfterReflections";
        })(Rendering.CameraEvent || (Rendering.CameraEvent = {}));
        var CameraEvent = Rendering.CameraEvent;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (ColorWriteMask) {
            ColorWriteMask[ColorWriteMask["Alpha"] = 1] = "Alpha";
            ColorWriteMask[ColorWriteMask["Blue"] = 2] = "Blue";
            ColorWriteMask[ColorWriteMask["Green"] = 4] = "Green";
            ColorWriteMask[ColorWriteMask["Red"] = 8] = "Red";
            ColorWriteMask[ColorWriteMask["All"] = 15] = "All";
        })(Rendering.ColorWriteMask || (Rendering.ColorWriteMask = {}));
        var ColorWriteMask = Rendering.ColorWriteMask;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (CompareFunction) {
            CompareFunction[CompareFunction["Disabled"] = 0] = "Disabled";
            CompareFunction[CompareFunction["Never"] = 1] = "Never";
            CompareFunction[CompareFunction["Less"] = 2] = "Less";
            CompareFunction[CompareFunction["Equal"] = 3] = "Equal";
            CompareFunction[CompareFunction["LessEqual"] = 4] = "LessEqual";
            CompareFunction[CompareFunction["Greater"] = 5] = "Greater";
            CompareFunction[CompareFunction["NotEqual"] = 6] = "NotEqual";
            CompareFunction[CompareFunction["GreaterEqual"] = 7] = "GreaterEqual";
            CompareFunction[CompareFunction["Always"] = 8] = "Always";
        })(Rendering.CompareFunction || (Rendering.CompareFunction = {}));
        var CompareFunction = Rendering.CompareFunction;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (CullMode) {
            CullMode[CullMode["Off"] = 0] = "Off";
            CullMode[CullMode["Front"] = 1] = "Front";
            CullMode[CullMode["Back"] = 2] = "Back";
        })(Rendering.CullMode || (Rendering.CullMode = {}));
        var CullMode = Rendering.CullMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (DefaultReflectionMode) {
            DefaultReflectionMode[DefaultReflectionMode["Skybox"] = 0] = "Skybox";
            DefaultReflectionMode[DefaultReflectionMode["Custom"] = 1] = "Custom";
        })(Rendering.DefaultReflectionMode || (Rendering.DefaultReflectionMode = {}));
        var DefaultReflectionMode = Rendering.DefaultReflectionMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (GraphicsDeviceType) {
            GraphicsDeviceType[GraphicsDeviceType["OpenGL2"] = 0] = "OpenGL2";
            GraphicsDeviceType[GraphicsDeviceType["Direct3D9"] = 1] = "Direct3D9";
            GraphicsDeviceType[GraphicsDeviceType["Direct3D11"] = 2] = "Direct3D11";
            GraphicsDeviceType[GraphicsDeviceType["PlayStation3"] = 3] = "PlayStation3";
            GraphicsDeviceType[GraphicsDeviceType["Null"] = 4] = "Null";
            GraphicsDeviceType[GraphicsDeviceType["Xbox360"] = 6] = "Xbox360";
            GraphicsDeviceType[GraphicsDeviceType["OpenGLES2"] = 8] = "OpenGLES2";
            GraphicsDeviceType[GraphicsDeviceType["OpenGLES3"] = 11] = "OpenGLES3";
            GraphicsDeviceType[GraphicsDeviceType["PlayStationVita"] = 12] = "PlayStationVita";
            GraphicsDeviceType[GraphicsDeviceType["PlayStation4"] = 13] = "PlayStation4";
            GraphicsDeviceType[GraphicsDeviceType["XboxOne"] = 14] = "XboxOne";
            GraphicsDeviceType[GraphicsDeviceType["PlayStationMobile"] = 15] = "PlayStationMobile";
            GraphicsDeviceType[GraphicsDeviceType["Metal"] = 16] = "Metal";
            GraphicsDeviceType[GraphicsDeviceType["OpenGLCore"] = 17] = "OpenGLCore";
            GraphicsDeviceType[GraphicsDeviceType["Direct3D12"] = 18] = "Direct3D12";
            GraphicsDeviceType[GraphicsDeviceType["Nintendo3DS"] = 19] = "Nintendo3DS";
        })(Rendering.GraphicsDeviceType || (Rendering.GraphicsDeviceType = {}));
        var GraphicsDeviceType = Rendering.GraphicsDeviceType;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (LightEvent) {
            LightEvent[LightEvent["BeforeShadowMap"] = 0] = "BeforeShadowMap";
            LightEvent[LightEvent["AfterShadowMap"] = 1] = "AfterShadowMap";
            LightEvent[LightEvent["BeforeScreenspaceMask"] = 2] = "BeforeScreenspaceMask";
            LightEvent[LightEvent["AfterScreenspaceMask"] = 3] = "AfterScreenspaceMask";
        })(Rendering.LightEvent || (Rendering.LightEvent = {}));
        var LightEvent = Rendering.LightEvent;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (OpaqueSortMode) {
            OpaqueSortMode[OpaqueSortMode["Default"] = 0] = "Default";
            OpaqueSortMode[OpaqueSortMode["FrontToBack"] = 1] = "FrontToBack";
            OpaqueSortMode[OpaqueSortMode["NoDistanceSort"] = 2] = "NoDistanceSort";
        })(Rendering.OpaqueSortMode || (Rendering.OpaqueSortMode = {}));
        var OpaqueSortMode = Rendering.OpaqueSortMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (PassType) {
            PassType[PassType["Normal"] = 0] = "Normal";
            PassType[PassType["Vertex"] = 1] = "Vertex";
            PassType[PassType["VertexLM"] = 2] = "VertexLM";
            PassType[PassType["VertexLMRGBM"] = 3] = "VertexLMRGBM";
            PassType[PassType["ForwardBase"] = 4] = "ForwardBase";
            PassType[PassType["ForwardAdd"] = 5] = "ForwardAdd";
            PassType[PassType["LightPrePassBase"] = 6] = "LightPrePassBase";
            PassType[PassType["LightPrePassFinal"] = 7] = "LightPrePassFinal";
            PassType[PassType["ShadowCaster"] = 8] = "ShadowCaster";
            PassType[PassType["Deferred"] = 10] = "Deferred";
            PassType[PassType["Meta"] = 11] = "Meta";
        })(Rendering.PassType || (Rendering.PassType = {}));
        var PassType = Rendering.PassType;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (ReflectionCubemapCompression) {
            ReflectionCubemapCompression[ReflectionCubemapCompression["Uncompressed"] = 0] = "Uncompressed";
            ReflectionCubemapCompression[ReflectionCubemapCompression["Compressed"] = 1] = "Compressed";
            ReflectionCubemapCompression[ReflectionCubemapCompression["Auto"] = 2] = "Auto";
        })(Rendering.ReflectionCubemapCompression || (Rendering.ReflectionCubemapCompression = {}));
        var ReflectionCubemapCompression = Rendering.ReflectionCubemapCompression;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (ReflectionProbeClearFlags) {
            ReflectionProbeClearFlags[ReflectionProbeClearFlags["Skybox"] = 1] = "Skybox";
            ReflectionProbeClearFlags[ReflectionProbeClearFlags["SolidColor"] = 2] = "SolidColor";
        })(Rendering.ReflectionProbeClearFlags || (Rendering.ReflectionProbeClearFlags = {}));
        var ReflectionProbeClearFlags = Rendering.ReflectionProbeClearFlags;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (ReflectionProbeMode) {
            ReflectionProbeMode[ReflectionProbeMode["Baked"] = 0] = "Baked";
            ReflectionProbeMode[ReflectionProbeMode["Realtime"] = 1] = "Realtime";
            ReflectionProbeMode[ReflectionProbeMode["Custom"] = 2] = "Custom";
        })(Rendering.ReflectionProbeMode || (Rendering.ReflectionProbeMode = {}));
        var ReflectionProbeMode = Rendering.ReflectionProbeMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (ReflectionProbeRefreshMode) {
            ReflectionProbeRefreshMode[ReflectionProbeRefreshMode["OnAwake"] = 0] = "OnAwake";
            ReflectionProbeRefreshMode[ReflectionProbeRefreshMode["EveryFrame"] = 1] = "EveryFrame";
            ReflectionProbeRefreshMode[ReflectionProbeRefreshMode["ViaScripting"] = 2] = "ViaScripting";
        })(Rendering.ReflectionProbeRefreshMode || (Rendering.ReflectionProbeRefreshMode = {}));
        var ReflectionProbeRefreshMode = Rendering.ReflectionProbeRefreshMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (ReflectionProbeTimeSlicingMode) {
            ReflectionProbeTimeSlicingMode[ReflectionProbeTimeSlicingMode["AllFacesAtOnce"] = 0] = "AllFacesAtOnce";
            ReflectionProbeTimeSlicingMode[ReflectionProbeTimeSlicingMode["IndividualFaces"] = 1] = "IndividualFaces";
            ReflectionProbeTimeSlicingMode[ReflectionProbeTimeSlicingMode["NoTimeSlicing"] = 2] = "NoTimeSlicing";
        })(Rendering.ReflectionProbeTimeSlicingMode || (Rendering.ReflectionProbeTimeSlicingMode = {}));
        var ReflectionProbeTimeSlicingMode = Rendering.ReflectionProbeTimeSlicingMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (ReflectionProbeType) {
            ReflectionProbeType[ReflectionProbeType["Cube"] = 0] = "Cube";
            ReflectionProbeType[ReflectionProbeType["Card"] = 1] = "Card";
        })(Rendering.ReflectionProbeType || (Rendering.ReflectionProbeType = {}));
        var ReflectionProbeType = Rendering.ReflectionProbeType;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (ReflectionProbeUsage) {
            ReflectionProbeUsage[ReflectionProbeUsage["Off"] = 0] = "Off";
            ReflectionProbeUsage[ReflectionProbeUsage["BlendProbes"] = 1] = "BlendProbes";
            ReflectionProbeUsage[ReflectionProbeUsage["BlendProbesAndSkybox"] = 2] = "BlendProbesAndSkybox";
            ReflectionProbeUsage[ReflectionProbeUsage["Simple"] = 3] = "Simple";
        })(Rendering.ReflectionProbeUsage || (Rendering.ReflectionProbeUsage = {}));
        var ReflectionProbeUsage = Rendering.ReflectionProbeUsage;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (RenderBufferLoadAction) {
            RenderBufferLoadAction[RenderBufferLoadAction["Load"] = 0] = "Load";
            RenderBufferLoadAction[RenderBufferLoadAction["DontCare"] = 2] = "DontCare";
        })(Rendering.RenderBufferLoadAction || (Rendering.RenderBufferLoadAction = {}));
        var RenderBufferLoadAction = Rendering.RenderBufferLoadAction;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (RenderBufferStoreAction) {
            RenderBufferStoreAction[RenderBufferStoreAction["Store"] = 0] = "Store";
            RenderBufferStoreAction[RenderBufferStoreAction["DontCare"] = 1] = "DontCare";
        })(Rendering.RenderBufferStoreAction || (Rendering.RenderBufferStoreAction = {}));
        var RenderBufferStoreAction = Rendering.RenderBufferStoreAction;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (ShadowCastingMode) {
            ShadowCastingMode[ShadowCastingMode["Off"] = 0] = "Off";
            ShadowCastingMode[ShadowCastingMode["On"] = 1] = "On";
            ShadowCastingMode[ShadowCastingMode["TwoSided"] = 2] = "TwoSided";
            ShadowCastingMode[ShadowCastingMode["ShadowsOnly"] = 3] = "ShadowsOnly";
        })(Rendering.ShadowCastingMode || (Rendering.ShadowCastingMode = {}));
        var ShadowCastingMode = Rendering.ShadowCastingMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (ShadowSamplingMode) {
            ShadowSamplingMode[ShadowSamplingMode["CompareDepths"] = 0] = "CompareDepths";
            ShadowSamplingMode[ShadowSamplingMode["RawDepth"] = 1] = "RawDepth";
        })(Rendering.ShadowSamplingMode || (Rendering.ShadowSamplingMode = {}));
        var ShadowSamplingMode = Rendering.ShadowSamplingMode;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var Rendering;
    (function (Rendering) {
        (function (StencilOp) {
            StencilOp[StencilOp["Keep"] = 0] = "Keep";
            StencilOp[StencilOp["Zero"] = 1] = "Zero";
            StencilOp[StencilOp["Replace"] = 2] = "Replace";
            StencilOp[StencilOp["IncrementSaturate"] = 3] = "IncrementSaturate";
            StencilOp[StencilOp["DecrementSaturate"] = 4] = "DecrementSaturate";
            StencilOp[StencilOp["Invert"] = 5] = "Invert";
            StencilOp[StencilOp["IncrementWrap"] = 6] = "IncrementWrap";
            StencilOp[StencilOp["DecrementWrap"] = 7] = "DecrementWrap";
        })(Rendering.StencilOp || (Rendering.StencilOp = {}));
        var StencilOp = Rendering.StencilOp;
    })(Rendering = WebUnity.Rendering || (WebUnity.Rendering = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RenderingPath) {
        RenderingPath[RenderingPath["UsePlayerSettings"] = -1] = "UsePlayerSettings";
        RenderingPath[RenderingPath["VertexLit"] = 0] = "VertexLit";
        RenderingPath[RenderingPath["Forward"] = 1] = "Forward";
        RenderingPath[RenderingPath["DeferredLighting"] = 2] = "DeferredLighting";
        RenderingPath[RenderingPath["DeferredShading"] = 3] = "DeferredShading";
    })(WebUnity.RenderingPath || (WebUnity.RenderingPath = {}));
    var RenderingPath = WebUnity.RenderingPath;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RenderMode) {
        RenderMode[RenderMode["ScreenSpaceOverlay"] = 0] = "ScreenSpaceOverlay";
        RenderMode[RenderMode["ScreenSpaceCamera"] = 1] = "ScreenSpaceCamera";
        RenderMode[RenderMode["WorldSpace"] = 2] = "WorldSpace";
    })(WebUnity.RenderMode || (WebUnity.RenderMode = {}));
    var RenderMode = WebUnity.RenderMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RenderTextureFormat) {
        RenderTextureFormat[RenderTextureFormat["ARGB32"] = 0] = "ARGB32";
        RenderTextureFormat[RenderTextureFormat["Depth"] = 1] = "Depth";
        RenderTextureFormat[RenderTextureFormat["ARGBHalf"] = 2] = "ARGBHalf";
        RenderTextureFormat[RenderTextureFormat["Shadowmap"] = 3] = "Shadowmap";
        RenderTextureFormat[RenderTextureFormat["RGB565"] = 4] = "RGB565";
        RenderTextureFormat[RenderTextureFormat["ARGB4444"] = 5] = "ARGB4444";
        RenderTextureFormat[RenderTextureFormat["ARGB1555"] = 6] = "ARGB1555";
        RenderTextureFormat[RenderTextureFormat["Default"] = 7] = "Default";
        RenderTextureFormat[RenderTextureFormat["ARGB2101010"] = 8] = "ARGB2101010";
        RenderTextureFormat[RenderTextureFormat["DefaultHDR"] = 9] = "DefaultHDR";
        RenderTextureFormat[RenderTextureFormat["ARGBFloat"] = 11] = "ARGBFloat";
        RenderTextureFormat[RenderTextureFormat["RGFloat"] = 12] = "RGFloat";
        RenderTextureFormat[RenderTextureFormat["RGHalf"] = 13] = "RGHalf";
        RenderTextureFormat[RenderTextureFormat["RFloat"] = 14] = "RFloat";
        RenderTextureFormat[RenderTextureFormat["RHalf"] = 15] = "RHalf";
        RenderTextureFormat[RenderTextureFormat["R8"] = 16] = "R8";
        RenderTextureFormat[RenderTextureFormat["ARGBInt"] = 17] = "ARGBInt";
        RenderTextureFormat[RenderTextureFormat["RGInt"] = 18] = "RGInt";
        RenderTextureFormat[RenderTextureFormat["RInt"] = 19] = "RInt";
    })(WebUnity.RenderTextureFormat || (WebUnity.RenderTextureFormat = {}));
    var RenderTextureFormat = WebUnity.RenderTextureFormat;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RenderTextureReadWrite) {
        RenderTextureReadWrite[RenderTextureReadWrite["Default"] = 0] = "Default";
        RenderTextureReadWrite[RenderTextureReadWrite["Linear"] = 1] = "Linear";
        RenderTextureReadWrite[RenderTextureReadWrite["sRGB"] = 2] = "sRGB";
    })(WebUnity.RenderTextureReadWrite || (WebUnity.RenderTextureReadWrite = {}));
    var RenderTextureReadWrite = WebUnity.RenderTextureReadWrite;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RigidbodyConstraints) {
        RigidbodyConstraints[RigidbodyConstraints["None"] = 0] = "None";
        RigidbodyConstraints[RigidbodyConstraints["FreezePositionX"] = 2] = "FreezePositionX";
        RigidbodyConstraints[RigidbodyConstraints["FreezePositionY"] = 4] = "FreezePositionY";
        RigidbodyConstraints[RigidbodyConstraints["FreezePositionZ"] = 8] = "FreezePositionZ";
        RigidbodyConstraints[RigidbodyConstraints["FreezeRotationX"] = 16] = "FreezeRotationX";
        RigidbodyConstraints[RigidbodyConstraints["FreezeRotationY"] = 32] = "FreezeRotationY";
        RigidbodyConstraints[RigidbodyConstraints["FreezeRotationZ"] = 64] = "FreezeRotationZ";
        RigidbodyConstraints[RigidbodyConstraints["FreezePosition"] = 14] = "FreezePosition";
        RigidbodyConstraints[RigidbodyConstraints["FreezeRotation"] = 112] = "FreezeRotation";
        RigidbodyConstraints[RigidbodyConstraints["FreezeAll"] = 126] = "FreezeAll";
    })(WebUnity.RigidbodyConstraints || (WebUnity.RigidbodyConstraints = {}));
    var RigidbodyConstraints = WebUnity.RigidbodyConstraints;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RigidbodyConstraints2D) {
        RigidbodyConstraints2D[RigidbodyConstraints2D["None"] = 0] = "None";
        RigidbodyConstraints2D[RigidbodyConstraints2D["FreezePositionX"] = 1] = "FreezePositionX";
        RigidbodyConstraints2D[RigidbodyConstraints2D["FreezePositionY"] = 2] = "FreezePositionY";
        RigidbodyConstraints2D[RigidbodyConstraints2D["FreezeRotation"] = 4] = "FreezeRotation";
        RigidbodyConstraints2D[RigidbodyConstraints2D["FreezePosition"] = 3] = "FreezePosition";
        RigidbodyConstraints2D[RigidbodyConstraints2D["FreezeAll"] = 7] = "FreezeAll";
    })(WebUnity.RigidbodyConstraints2D || (WebUnity.RigidbodyConstraints2D = {}));
    var RigidbodyConstraints2D = WebUnity.RigidbodyConstraints2D;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RigidbodyInterpolation) {
        RigidbodyInterpolation[RigidbodyInterpolation["None"] = 0] = "None";
        RigidbodyInterpolation[RigidbodyInterpolation["Interpolate"] = 1] = "Interpolate";
        RigidbodyInterpolation[RigidbodyInterpolation["Extrapolate"] = 2] = "Extrapolate";
    })(WebUnity.RigidbodyInterpolation || (WebUnity.RigidbodyInterpolation = {}));
    var RigidbodyInterpolation = WebUnity.RigidbodyInterpolation;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RigidbodyInterpolation2D) {
        RigidbodyInterpolation2D[RigidbodyInterpolation2D["None"] = 0] = "None";
        RigidbodyInterpolation2D[RigidbodyInterpolation2D["Interpolate"] = 1] = "Interpolate";
        RigidbodyInterpolation2D[RigidbodyInterpolation2D["Extrapolate"] = 2] = "Extrapolate";
    })(WebUnity.RigidbodyInterpolation2D || (WebUnity.RigidbodyInterpolation2D = {}));
    var RigidbodyInterpolation2D = WebUnity.RigidbodyInterpolation2D;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RigidbodySleepMode2D) {
        RigidbodySleepMode2D[RigidbodySleepMode2D["NeverSleep"] = 0] = "NeverSleep";
        RigidbodySleepMode2D[RigidbodySleepMode2D["StartAwake"] = 1] = "StartAwake";
        RigidbodySleepMode2D[RigidbodySleepMode2D["StartAsleep"] = 2] = "StartAsleep";
    })(WebUnity.RigidbodySleepMode2D || (WebUnity.RigidbodySleepMode2D = {}));
    var RigidbodySleepMode2D = WebUnity.RigidbodySleepMode2D;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RotationDriveMode) {
        RotationDriveMode[RotationDriveMode["XYAndZ"] = 0] = "XYAndZ";
        RotationDriveMode[RotationDriveMode["Slerp"] = 1] = "Slerp";
    })(WebUnity.RotationDriveMode || (WebUnity.RotationDriveMode = {}));
    var RotationDriveMode = WebUnity.RotationDriveMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RPCMode) {
        RPCMode[RPCMode["Server"] = 0] = "Server";
        RPCMode[RPCMode["Others"] = 1] = "Others";
        RPCMode[RPCMode["OthersBuffered"] = 5] = "OthersBuffered";
        RPCMode[RPCMode["All"] = 2] = "All";
        RPCMode[RPCMode["AllBuffered"] = 6] = "AllBuffered";
    })(WebUnity.RPCMode || (WebUnity.RPCMode = {}));
    var RPCMode = WebUnity.RPCMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RuntimeInitializeLoadType) {
        RuntimeInitializeLoadType[RuntimeInitializeLoadType["AfterSceneLoad"] = 0] = "AfterSceneLoad";
        RuntimeInitializeLoadType[RuntimeInitializeLoadType["BeforeSceneLoad"] = 1] = "BeforeSceneLoad";
    })(WebUnity.RuntimeInitializeLoadType || (WebUnity.RuntimeInitializeLoadType = {}));
    var RuntimeInitializeLoadType = WebUnity.RuntimeInitializeLoadType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (RuntimePlatform) {
        RuntimePlatform[RuntimePlatform["OSXEditor"] = 0] = "OSXEditor";
        RuntimePlatform[RuntimePlatform["OSXPlayer"] = 1] = "OSXPlayer";
        RuntimePlatform[RuntimePlatform["WindowsPlayer"] = 2] = "WindowsPlayer";
        RuntimePlatform[RuntimePlatform["OSXWebPlayer"] = 3] = "OSXWebPlayer";
        RuntimePlatform[RuntimePlatform["OSXDashboardPlayer"] = 4] = "OSXDashboardPlayer";
        RuntimePlatform[RuntimePlatform["WindowsWebPlayer"] = 5] = "WindowsWebPlayer";
        RuntimePlatform[RuntimePlatform["WindowsEditor"] = 7] = "WindowsEditor";
        RuntimePlatform[RuntimePlatform["IPhonePlayer"] = 8] = "IPhonePlayer";
        RuntimePlatform[RuntimePlatform["XBOX360"] = 10] = "XBOX360";
        RuntimePlatform[RuntimePlatform["PS3"] = 9] = "PS3";
        RuntimePlatform[RuntimePlatform["Android"] = 11] = "Android";
        RuntimePlatform[RuntimePlatform["NaCl"] = 12] = "NaCl";
        RuntimePlatform[RuntimePlatform["FlashPlayer"] = 15] = "FlashPlayer";
        RuntimePlatform[RuntimePlatform["LinuxPlayer"] = 13] = "LinuxPlayer";
        RuntimePlatform[RuntimePlatform["WebGLPlayer"] = 17] = "WebGLPlayer";
        RuntimePlatform[RuntimePlatform["MetroPlayerX86"] = 18] = "MetroPlayerX86";
        RuntimePlatform[RuntimePlatform["WSAPlayerX86"] = 18] = "WSAPlayerX86";
        RuntimePlatform[RuntimePlatform["MetroPlayerX64"] = 19] = "MetroPlayerX64";
        RuntimePlatform[RuntimePlatform["WSAPlayerX64"] = 19] = "WSAPlayerX64";
        RuntimePlatform[RuntimePlatform["MetroPlayerARM"] = 20] = "MetroPlayerARM";
        RuntimePlatform[RuntimePlatform["WSAPlayerARM"] = 20] = "WSAPlayerARM";
        RuntimePlatform[RuntimePlatform["WP8Player"] = 21] = "WP8Player";
        RuntimePlatform[RuntimePlatform["BlackBerryPlayer"] = 22] = "BlackBerryPlayer";
        RuntimePlatform[RuntimePlatform["TizenPlayer"] = 23] = "TizenPlayer";
        RuntimePlatform[RuntimePlatform["PSP2"] = 24] = "PSP2";
        RuntimePlatform[RuntimePlatform["PS4"] = 25] = "PS4";
        RuntimePlatform[RuntimePlatform["PSM"] = 26] = "PSM";
        RuntimePlatform[RuntimePlatform["XboxOne"] = 27] = "XboxOne";
        RuntimePlatform[RuntimePlatform["SamsungTVPlayer"] = 28] = "SamsungTVPlayer";
        RuntimePlatform[RuntimePlatform["WiiU"] = 30] = "WiiU";
        RuntimePlatform[RuntimePlatform["tvOS"] = 31] = "tvOS";
    })(WebUnity.RuntimePlatform || (WebUnity.RuntimePlatform = {}));
    var RuntimePlatform = WebUnity.RuntimePlatform;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ScaleMode) {
        ScaleMode[ScaleMode["StretchToFill"] = 0] = "StretchToFill";
        ScaleMode[ScaleMode["ScaleAndCrop"] = 1] = "ScaleAndCrop";
        ScaleMode[ScaleMode["ScaleToFit"] = 2] = "ScaleToFit";
    })(WebUnity.ScaleMode || (WebUnity.ScaleMode = {}));
    var ScaleMode = WebUnity.ScaleMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var SceneManagement;
    (function (SceneManagement) {
        (function (LoadSceneMode) {
            LoadSceneMode[LoadSceneMode["Single"] = 0] = "Single";
            LoadSceneMode[LoadSceneMode["Additive"] = 1] = "Additive";
        })(SceneManagement.LoadSceneMode || (SceneManagement.LoadSceneMode = {}));
        var LoadSceneMode = SceneManagement.LoadSceneMode;
    })(SceneManagement = WebUnity.SceneManagement || (WebUnity.SceneManagement = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ScreenOrientation) {
        ScreenOrientation[ScreenOrientation["Unknown"] = 0] = "Unknown";
        ScreenOrientation[ScreenOrientation["Portrait"] = 1] = "Portrait";
        ScreenOrientation[ScreenOrientation["PortraitUpsideDown"] = 2] = "PortraitUpsideDown";
        ScreenOrientation[ScreenOrientation["LandscapeLeft"] = 3] = "LandscapeLeft";
        ScreenOrientation[ScreenOrientation["LandscapeRight"] = 4] = "LandscapeRight";
        ScreenOrientation[ScreenOrientation["AutoRotation"] = 5] = "AutoRotation";
        ScreenOrientation[ScreenOrientation["Landscape"] = 3] = "Landscape";
    })(WebUnity.ScreenOrientation || (WebUnity.ScreenOrientation = {}));
    var ScreenOrientation = WebUnity.ScreenOrientation;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (SendMessageOptions) {
        SendMessageOptions[SendMessageOptions["RequireReceiver"] = 0] = "RequireReceiver";
        SendMessageOptions[SendMessageOptions["DontRequireReceiver"] = 1] = "DontRequireReceiver";
    })(WebUnity.SendMessageOptions || (WebUnity.SendMessageOptions = {}));
    var SendMessageOptions = WebUnity.SendMessageOptions;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ShadowProjection) {
        ShadowProjection[ShadowProjection["CloseFit"] = 0] = "CloseFit";
        ShadowProjection[ShadowProjection["StableFit"] = 1] = "StableFit";
    })(WebUnity.ShadowProjection || (WebUnity.ShadowProjection = {}));
    var ShadowProjection = WebUnity.ShadowProjection;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (SkinQuality) {
        SkinQuality[SkinQuality["Auto"] = 0] = "Auto";
        SkinQuality[SkinQuality["Bone1"] = 1] = "Bone1";
        SkinQuality[SkinQuality["Bone2"] = 2] = "Bone2";
        SkinQuality[SkinQuality["Bone4"] = 4] = "Bone4";
    })(WebUnity.SkinQuality || (WebUnity.SkinQuality = {}));
    var SkinQuality = WebUnity.SkinQuality;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var SocialPlatforms;
    (function (SocialPlatforms) {
        (function (TimeScope) {
            TimeScope[TimeScope["Today"] = 0] = "Today";
            TimeScope[TimeScope["Week"] = 1] = "Week";
            TimeScope[TimeScope["AllTime"] = 2] = "AllTime";
        })(SocialPlatforms.TimeScope || (SocialPlatforms.TimeScope = {}));
        var TimeScope = SocialPlatforms.TimeScope;
    })(SocialPlatforms = WebUnity.SocialPlatforms || (WebUnity.SocialPlatforms = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var SocialPlatforms;
    (function (SocialPlatforms) {
        (function (UserScope) {
            UserScope[UserScope["Global"] = 0] = "Global";
            UserScope[UserScope["FriendsOnly"] = 1] = "FriendsOnly";
        })(SocialPlatforms.UserScope || (SocialPlatforms.UserScope = {}));
        var UserScope = SocialPlatforms.UserScope;
    })(SocialPlatforms = WebUnity.SocialPlatforms || (WebUnity.SocialPlatforms = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var SocialPlatforms;
    (function (SocialPlatforms) {
        (function (UserState) {
            UserState[UserState["Online"] = 0] = "Online";
            UserState[UserState["OnlineAndAway"] = 1] = "OnlineAndAway";
            UserState[UserState["OnlineAndBusy"] = 2] = "OnlineAndBusy";
            UserState[UserState["Offline"] = 3] = "Offline";
            UserState[UserState["Playing"] = 4] = "Playing";
        })(SocialPlatforms.UserState || (SocialPlatforms.UserState = {}));
        var UserState = SocialPlatforms.UserState;
    })(SocialPlatforms = WebUnity.SocialPlatforms || (WebUnity.SocialPlatforms = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (Space) {
        Space[Space["World"] = 0] = "World";
        Space[Space["Self"] = 1] = "Self";
    })(WebUnity.Space || (WebUnity.Space = {}));
    var Space = WebUnity.Space;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (SpriteAlignment) {
        SpriteAlignment[SpriteAlignment["Center"] = 0] = "Center";
        SpriteAlignment[SpriteAlignment["TopLeft"] = 1] = "TopLeft";
        SpriteAlignment[SpriteAlignment["TopCenter"] = 2] = "TopCenter";
        SpriteAlignment[SpriteAlignment["TopRight"] = 3] = "TopRight";
        SpriteAlignment[SpriteAlignment["LeftCenter"] = 4] = "LeftCenter";
        SpriteAlignment[SpriteAlignment["RightCenter"] = 5] = "RightCenter";
        SpriteAlignment[SpriteAlignment["BottomLeft"] = 6] = "BottomLeft";
        SpriteAlignment[SpriteAlignment["BottomCenter"] = 7] = "BottomCenter";
        SpriteAlignment[SpriteAlignment["BottomRight"] = 8] = "BottomRight";
        SpriteAlignment[SpriteAlignment["Custom"] = 9] = "Custom";
    })(WebUnity.SpriteAlignment || (WebUnity.SpriteAlignment = {}));
    var SpriteAlignment = WebUnity.SpriteAlignment;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (SpriteMeshType) {
        SpriteMeshType[SpriteMeshType["FullRect"] = 0] = "FullRect";
        SpriteMeshType[SpriteMeshType["Tight"] = 1] = "Tight";
    })(WebUnity.SpriteMeshType || (WebUnity.SpriteMeshType = {}));
    var SpriteMeshType = WebUnity.SpriteMeshType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (SpritePackingMode) {
        SpritePackingMode[SpritePackingMode["Tight"] = 0] = "Tight";
        SpritePackingMode[SpritePackingMode["Rectangle"] = 1] = "Rectangle";
    })(WebUnity.SpritePackingMode || (WebUnity.SpritePackingMode = {}));
    var SpritePackingMode = WebUnity.SpritePackingMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (SpritePackingRotation) {
        SpritePackingRotation[SpritePackingRotation["None"] = 0] = "None";
        SpritePackingRotation[SpritePackingRotation["Any"] = 15] = "Any";
    })(WebUnity.SpritePackingRotation || (WebUnity.SpritePackingRotation = {}));
    var SpritePackingRotation = WebUnity.SpritePackingRotation;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (StackTraceLogType) {
        StackTraceLogType[StackTraceLogType["None"] = 0] = "None";
        StackTraceLogType[StackTraceLogType["ScriptOnly"] = 1] = "ScriptOnly";
        StackTraceLogType[StackTraceLogType["Full"] = 2] = "Full";
    })(WebUnity.StackTraceLogType || (WebUnity.StackTraceLogType = {}));
    var StackTraceLogType = WebUnity.StackTraceLogType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (SystemLanguage) {
        SystemLanguage[SystemLanguage["Afrikaans"] = 0] = "Afrikaans";
        SystemLanguage[SystemLanguage["Arabic"] = 1] = "Arabic";
        SystemLanguage[SystemLanguage["Basque"] = 2] = "Basque";
        SystemLanguage[SystemLanguage["Belarusian"] = 3] = "Belarusian";
        SystemLanguage[SystemLanguage["Bulgarian"] = 4] = "Bulgarian";
        SystemLanguage[SystemLanguage["Catalan"] = 5] = "Catalan";
        SystemLanguage[SystemLanguage["Chinese"] = 6] = "Chinese";
        SystemLanguage[SystemLanguage["Czech"] = 7] = "Czech";
        SystemLanguage[SystemLanguage["Danish"] = 8] = "Danish";
        SystemLanguage[SystemLanguage["Dutch"] = 9] = "Dutch";
        SystemLanguage[SystemLanguage["English"] = 10] = "English";
        SystemLanguage[SystemLanguage["Estonian"] = 11] = "Estonian";
        SystemLanguage[SystemLanguage["Faroese"] = 12] = "Faroese";
        SystemLanguage[SystemLanguage["Finnish"] = 13] = "Finnish";
        SystemLanguage[SystemLanguage["French"] = 14] = "French";
        SystemLanguage[SystemLanguage["German"] = 15] = "German";
        SystemLanguage[SystemLanguage["Greek"] = 16] = "Greek";
        SystemLanguage[SystemLanguage["Hebrew"] = 17] = "Hebrew";
        SystemLanguage[SystemLanguage["Icelandic"] = 19] = "Icelandic";
        SystemLanguage[SystemLanguage["Indonesian"] = 20] = "Indonesian";
        SystemLanguage[SystemLanguage["Italian"] = 21] = "Italian";
        SystemLanguage[SystemLanguage["Japanese"] = 22] = "Japanese";
        SystemLanguage[SystemLanguage["Korean"] = 23] = "Korean";
        SystemLanguage[SystemLanguage["Latvian"] = 24] = "Latvian";
        SystemLanguage[SystemLanguage["Lithuanian"] = 25] = "Lithuanian";
        SystemLanguage[SystemLanguage["Norwegian"] = 26] = "Norwegian";
        SystemLanguage[SystemLanguage["Polish"] = 27] = "Polish";
        SystemLanguage[SystemLanguage["Portuguese"] = 28] = "Portuguese";
        SystemLanguage[SystemLanguage["Romanian"] = 29] = "Romanian";
        SystemLanguage[SystemLanguage["Russian"] = 30] = "Russian";
        SystemLanguage[SystemLanguage["SerboCroatian"] = 31] = "SerboCroatian";
        SystemLanguage[SystemLanguage["Slovak"] = 32] = "Slovak";
        SystemLanguage[SystemLanguage["Slovenian"] = 33] = "Slovenian";
        SystemLanguage[SystemLanguage["Spanish"] = 34] = "Spanish";
        SystemLanguage[SystemLanguage["Swedish"] = 35] = "Swedish";
        SystemLanguage[SystemLanguage["Thai"] = 36] = "Thai";
        SystemLanguage[SystemLanguage["Turkish"] = 37] = "Turkish";
        SystemLanguage[SystemLanguage["Ukrainian"] = 38] = "Ukrainian";
        SystemLanguage[SystemLanguage["Vietnamese"] = 39] = "Vietnamese";
        SystemLanguage[SystemLanguage["ChineseSimplified"] = 40] = "ChineseSimplified";
        SystemLanguage[SystemLanguage["ChineseTraditional"] = 41] = "ChineseTraditional";
        SystemLanguage[SystemLanguage["Unknown"] = 42] = "Unknown";
        SystemLanguage[SystemLanguage["Hungarian"] = 18] = "Hungarian";
    })(WebUnity.SystemLanguage || (WebUnity.SystemLanguage = {}));
    var SystemLanguage = WebUnity.SystemLanguage;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (TerrainRenderFlags) {
        TerrainRenderFlags[TerrainRenderFlags["heightmap"] = 1] = "heightmap";
        TerrainRenderFlags[TerrainRenderFlags["trees"] = 2] = "trees";
        TerrainRenderFlags[TerrainRenderFlags["details"] = 4] = "details";
        TerrainRenderFlags[TerrainRenderFlags["all"] = 7] = "all";
    })(WebUnity.TerrainRenderFlags || (WebUnity.TerrainRenderFlags = {}));
    var TerrainRenderFlags = WebUnity.TerrainRenderFlags;
})(WebUnity || (WebUnity = {}));
var UnityEngine;
(function (UnityEngine) {
    (function (Terrain_MaterialType) {
        Terrain_MaterialType[Terrain_MaterialType["BuiltInStandard"] = 0] = "BuiltInStandard";
        Terrain_MaterialType[Terrain_MaterialType["BuiltInLegacyDiffuse"] = 1] = "BuiltInLegacyDiffuse";
        Terrain_MaterialType[Terrain_MaterialType["BuiltInLegacySpecular"] = 2] = "BuiltInLegacySpecular";
        Terrain_MaterialType[Terrain_MaterialType["Custom"] = 3] = "Custom";
    })(UnityEngine.Terrain_MaterialType || (UnityEngine.Terrain_MaterialType = {}));
    var Terrain_MaterialType = UnityEngine.Terrain_MaterialType;
})(UnityEngine || (UnityEngine = {}));
var WebUnity;
(function (WebUnity) {
    (function (TexGenMode) {
        TexGenMode[TexGenMode["None"] = 0] = "None";
        TexGenMode[TexGenMode["SphereMap"] = 1] = "SphereMap";
        TexGenMode[TexGenMode["Object"] = 2] = "Object";
        TexGenMode[TexGenMode["EyeLinear"] = 3] = "EyeLinear";
        TexGenMode[TexGenMode["CubeReflect"] = 4] = "CubeReflect";
        TexGenMode[TexGenMode["CubeNormal"] = 5] = "CubeNormal";
    })(WebUnity.TexGenMode || (WebUnity.TexGenMode = {}));
    var TexGenMode = WebUnity.TexGenMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (TextAlignment) {
        TextAlignment[TextAlignment["Left"] = 0] = "Left";
        TextAlignment[TextAlignment["Center"] = 1] = "Center";
        TextAlignment[TextAlignment["Right"] = 2] = "Right";
    })(WebUnity.TextAlignment || (WebUnity.TextAlignment = {}));
    var TextAlignment = WebUnity.TextAlignment;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (TextAnchor) {
        TextAnchor[TextAnchor["UpperLeft"] = 0] = "UpperLeft";
        TextAnchor[TextAnchor["UpperCenter"] = 1] = "UpperCenter";
        TextAnchor[TextAnchor["UpperRight"] = 2] = "UpperRight";
        TextAnchor[TextAnchor["MiddleLeft"] = 3] = "MiddleLeft";
        TextAnchor[TextAnchor["MiddleCenter"] = 4] = "MiddleCenter";
        TextAnchor[TextAnchor["MiddleRight"] = 5] = "MiddleRight";
        TextAnchor[TextAnchor["LowerLeft"] = 6] = "LowerLeft";
        TextAnchor[TextAnchor["LowerCenter"] = 7] = "LowerCenter";
        TextAnchor[TextAnchor["LowerRight"] = 8] = "LowerRight";
    })(WebUnity.TextAnchor || (WebUnity.TextAnchor = {}));
    var TextAnchor = WebUnity.TextAnchor;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (TextClipping) {
        TextClipping[TextClipping["Overflow"] = 0] = "Overflow";
        TextClipping[TextClipping["Clip"] = 1] = "Clip";
    })(WebUnity.TextClipping || (WebUnity.TextClipping = {}));
    var TextClipping = WebUnity.TextClipping;
})(WebUnity || (WebUnity = {}));
var UnityEngine;
(function (UnityEngine) {
    (function (TextEditor_CharacterType) {
        TextEditor_CharacterType[TextEditor_CharacterType["LetterLike"] = 0] = "LetterLike";
        TextEditor_CharacterType[TextEditor_CharacterType["Symbol"] = 1] = "Symbol";
        TextEditor_CharacterType[TextEditor_CharacterType["Symbol2"] = 2] = "Symbol2";
        TextEditor_CharacterType[TextEditor_CharacterType["WhiteSpace"] = 3] = "WhiteSpace";
    })(UnityEngine.TextEditor_CharacterType || (UnityEngine.TextEditor_CharacterType = {}));
    var TextEditor_CharacterType = UnityEngine.TextEditor_CharacterType;
})(UnityEngine || (UnityEngine = {}));
var UnityEngine;
(function (UnityEngine) {
    (function (TextEditor_DblClickSnapping) {
        TextEditor_DblClickSnapping[TextEditor_DblClickSnapping["WORDS"] = 0] = "WORDS";
        TextEditor_DblClickSnapping[TextEditor_DblClickSnapping["PARAGRAPHS"] = 1] = "PARAGRAPHS";
    })(UnityEngine.TextEditor_DblClickSnapping || (UnityEngine.TextEditor_DblClickSnapping = {}));
    var TextEditor_DblClickSnapping = UnityEngine.TextEditor_DblClickSnapping;
})(UnityEngine || (UnityEngine = {}));
var UnityEngine;
(function (UnityEngine) {
    (function (TextEditor_TextEditOp) {
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveLeft"] = 0] = "MoveLeft";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveRight"] = 1] = "MoveRight";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveUp"] = 2] = "MoveUp";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveDown"] = 3] = "MoveDown";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveLineStart"] = 4] = "MoveLineStart";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveLineEnd"] = 5] = "MoveLineEnd";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveTextStart"] = 6] = "MoveTextStart";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveTextEnd"] = 7] = "MoveTextEnd";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MovePageUp"] = 8] = "MovePageUp";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MovePageDown"] = 9] = "MovePageDown";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveGraphicalLineStart"] = 10] = "MoveGraphicalLineStart";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveGraphicalLineEnd"] = 11] = "MoveGraphicalLineEnd";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveWordLeft"] = 12] = "MoveWordLeft";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveWordRight"] = 13] = "MoveWordRight";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveParagraphForward"] = 14] = "MoveParagraphForward";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveParagraphBackward"] = 15] = "MoveParagraphBackward";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveToStartOfNextWord"] = 16] = "MoveToStartOfNextWord";
        TextEditor_TextEditOp[TextEditor_TextEditOp["MoveToEndOfPreviousWord"] = 17] = "MoveToEndOfPreviousWord";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectLeft"] = 18] = "SelectLeft";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectRight"] = 19] = "SelectRight";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectUp"] = 20] = "SelectUp";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectDown"] = 21] = "SelectDown";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectTextStart"] = 22] = "SelectTextStart";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectTextEnd"] = 23] = "SelectTextEnd";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectPageUp"] = 24] = "SelectPageUp";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectPageDown"] = 25] = "SelectPageDown";
        TextEditor_TextEditOp[TextEditor_TextEditOp["ExpandSelectGraphicalLineStart"] = 26] = "ExpandSelectGraphicalLineStart";
        TextEditor_TextEditOp[TextEditor_TextEditOp["ExpandSelectGraphicalLineEnd"] = 27] = "ExpandSelectGraphicalLineEnd";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectGraphicalLineStart"] = 28] = "SelectGraphicalLineStart";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectGraphicalLineEnd"] = 29] = "SelectGraphicalLineEnd";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectWordLeft"] = 30] = "SelectWordLeft";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectWordRight"] = 31] = "SelectWordRight";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectToEndOfPreviousWord"] = 32] = "SelectToEndOfPreviousWord";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectToStartOfNextWord"] = 33] = "SelectToStartOfNextWord";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectParagraphBackward"] = 34] = "SelectParagraphBackward";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectParagraphForward"] = 35] = "SelectParagraphForward";
        TextEditor_TextEditOp[TextEditor_TextEditOp["Delete"] = 36] = "Delete";
        TextEditor_TextEditOp[TextEditor_TextEditOp["Backspace"] = 37] = "Backspace";
        TextEditor_TextEditOp[TextEditor_TextEditOp["DeleteWordBack"] = 38] = "DeleteWordBack";
        TextEditor_TextEditOp[TextEditor_TextEditOp["DeleteWordForward"] = 39] = "DeleteWordForward";
        TextEditor_TextEditOp[TextEditor_TextEditOp["DeleteLineBack"] = 40] = "DeleteLineBack";
        TextEditor_TextEditOp[TextEditor_TextEditOp["Cut"] = 41] = "Cut";
        TextEditor_TextEditOp[TextEditor_TextEditOp["Copy"] = 42] = "Copy";
        TextEditor_TextEditOp[TextEditor_TextEditOp["Paste"] = 43] = "Paste";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectAll"] = 44] = "SelectAll";
        TextEditor_TextEditOp[TextEditor_TextEditOp["SelectNone"] = 45] = "SelectNone";
        TextEditor_TextEditOp[TextEditor_TextEditOp["ScrollStart"] = 46] = "ScrollStart";
        TextEditor_TextEditOp[TextEditor_TextEditOp["ScrollEnd"] = 47] = "ScrollEnd";
        TextEditor_TextEditOp[TextEditor_TextEditOp["ScrollPageUp"] = 48] = "ScrollPageUp";
        TextEditor_TextEditOp[TextEditor_TextEditOp["ScrollPageDown"] = 49] = "ScrollPageDown";
    })(UnityEngine.TextEditor_TextEditOp || (UnityEngine.TextEditor_TextEditOp = {}));
    var TextEditor_TextEditOp = UnityEngine.TextEditor_TextEditOp;
})(UnityEngine || (UnityEngine = {}));
var WebUnity;
(function (WebUnity) {
    (function (TextureFormat) {
        TextureFormat[TextureFormat["Alpha8"] = 1] = "Alpha8";
        TextureFormat[TextureFormat["ARGB4444"] = 2] = "ARGB4444";
        TextureFormat[TextureFormat["RGB24"] = 3] = "RGB24";
        TextureFormat[TextureFormat["RGBA32"] = 4] = "RGBA32";
        TextureFormat[TextureFormat["ARGB32"] = 5] = "ARGB32";
        TextureFormat[TextureFormat["RGB565"] = 7] = "RGB565";
        TextureFormat[TextureFormat["R16"] = 9] = "R16";
        TextureFormat[TextureFormat["DXT1"] = 10] = "DXT1";
        TextureFormat[TextureFormat["DXT5"] = 12] = "DXT5";
        TextureFormat[TextureFormat["RGBA4444"] = 13] = "RGBA4444";
        TextureFormat[TextureFormat["BGRA32"] = 14] = "BGRA32";
        TextureFormat[TextureFormat["RHalf"] = 15] = "RHalf";
        TextureFormat[TextureFormat["RGHalf"] = 16] = "RGHalf";
        TextureFormat[TextureFormat["RGBAHalf"] = 17] = "RGBAHalf";
        TextureFormat[TextureFormat["RFloat"] = 18] = "RFloat";
        TextureFormat[TextureFormat["RGFloat"] = 19] = "RGFloat";
        TextureFormat[TextureFormat["RGBAFloat"] = 20] = "RGBAFloat";
        TextureFormat[TextureFormat["YUY2"] = 21] = "YUY2";
        TextureFormat[TextureFormat["DXT1Crunched"] = 28] = "DXT1Crunched";
        TextureFormat[TextureFormat["DXT5Crunched"] = 29] = "DXT5Crunched";
        TextureFormat[TextureFormat["PVRTC_RGB2"] = 30] = "PVRTC_RGB2";
        TextureFormat[TextureFormat["PVRTC_RGBA2"] = 31] = "PVRTC_RGBA2";
        TextureFormat[TextureFormat["PVRTC_RGB4"] = 32] = "PVRTC_RGB4";
        TextureFormat[TextureFormat["PVRTC_RGBA4"] = 33] = "PVRTC_RGBA4";
        TextureFormat[TextureFormat["ETC_RGB4"] = 34] = "ETC_RGB4";
        TextureFormat[TextureFormat["ATC_RGB4"] = 35] = "ATC_RGB4";
        TextureFormat[TextureFormat["ATC_RGBA8"] = 36] = "ATC_RGBA8";
        TextureFormat[TextureFormat["EAC_R"] = 41] = "EAC_R";
        TextureFormat[TextureFormat["EAC_R_SIGNED"] = 42] = "EAC_R_SIGNED";
        TextureFormat[TextureFormat["EAC_RG"] = 43] = "EAC_RG";
        TextureFormat[TextureFormat["EAC_RG_SIGNED"] = 44] = "EAC_RG_SIGNED";
        TextureFormat[TextureFormat["ETC2_RGB"] = 45] = "ETC2_RGB";
        TextureFormat[TextureFormat["ETC2_RGBA1"] = 46] = "ETC2_RGBA1";
        TextureFormat[TextureFormat["ETC2_RGBA8"] = 47] = "ETC2_RGBA8";
        TextureFormat[TextureFormat["ASTC_RGB_4x4"] = 48] = "ASTC_RGB_4x4";
        TextureFormat[TextureFormat["ASTC_RGB_5x5"] = 49] = "ASTC_RGB_5x5";
        TextureFormat[TextureFormat["ASTC_RGB_6x6"] = 50] = "ASTC_RGB_6x6";
        TextureFormat[TextureFormat["ASTC_RGB_8x8"] = 51] = "ASTC_RGB_8x8";
        TextureFormat[TextureFormat["ASTC_RGB_10x10"] = 52] = "ASTC_RGB_10x10";
        TextureFormat[TextureFormat["ASTC_RGB_12x12"] = 53] = "ASTC_RGB_12x12";
        TextureFormat[TextureFormat["ASTC_RGBA_4x4"] = 54] = "ASTC_RGBA_4x4";
        TextureFormat[TextureFormat["ASTC_RGBA_5x5"] = 55] = "ASTC_RGBA_5x5";
        TextureFormat[TextureFormat["ASTC_RGBA_6x6"] = 56] = "ASTC_RGBA_6x6";
        TextureFormat[TextureFormat["ASTC_RGBA_8x8"] = 57] = "ASTC_RGBA_8x8";
        TextureFormat[TextureFormat["ASTC_RGBA_10x10"] = 58] = "ASTC_RGBA_10x10";
        TextureFormat[TextureFormat["ASTC_RGBA_12x12"] = 59] = "ASTC_RGBA_12x12";
        TextureFormat[TextureFormat["ETC_RGB4_3DS"] = 60] = "ETC_RGB4_3DS";
        TextureFormat[TextureFormat["ETC_RGBA8_3DS"] = 61] = "ETC_RGBA8_3DS";
    })(WebUnity.TextureFormat || (WebUnity.TextureFormat = {}));
    var TextureFormat = WebUnity.TextureFormat;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (TextureWrapMode) {
        TextureWrapMode[TextureWrapMode["Repeat"] = 0] = "Repeat";
        TextureWrapMode[TextureWrapMode["Clamp"] = 1] = "Clamp";
    })(WebUnity.TextureWrapMode || (WebUnity.TextureWrapMode = {}));
    var TextureWrapMode = WebUnity.TextureWrapMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (ThreadPriority) {
        ThreadPriority[ThreadPriority["Low"] = 0] = "Low";
        ThreadPriority[ThreadPriority["BelowNormal"] = 1] = "BelowNormal";
        ThreadPriority[ThreadPriority["Normal"] = 2] = "Normal";
        ThreadPriority[ThreadPriority["High"] = 4] = "High";
    })(WebUnity.ThreadPriority || (WebUnity.ThreadPriority = {}));
    var ThreadPriority = WebUnity.ThreadPriority;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (TouchPhase) {
        TouchPhase[TouchPhase["Began"] = 0] = "Began";
        TouchPhase[TouchPhase["Moved"] = 1] = "Moved";
        TouchPhase[TouchPhase["Stationary"] = 2] = "Stationary";
        TouchPhase[TouchPhase["Ended"] = 3] = "Ended";
        TouchPhase[TouchPhase["Canceled"] = 4] = "Canceled";
    })(WebUnity.TouchPhase || (WebUnity.TouchPhase = {}));
    var TouchPhase = WebUnity.TouchPhase;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (TouchScreenKeyboardType) {
        TouchScreenKeyboardType[TouchScreenKeyboardType["Default"] = 0] = "Default";
        TouchScreenKeyboardType[TouchScreenKeyboardType["ASCIICapable"] = 1] = "ASCIICapable";
        TouchScreenKeyboardType[TouchScreenKeyboardType["NumbersAndPunctuation"] = 2] = "NumbersAndPunctuation";
        TouchScreenKeyboardType[TouchScreenKeyboardType["URL"] = 3] = "URL";
        TouchScreenKeyboardType[TouchScreenKeyboardType["NumberPad"] = 4] = "NumberPad";
        TouchScreenKeyboardType[TouchScreenKeyboardType["PhonePad"] = 5] = "PhonePad";
        TouchScreenKeyboardType[TouchScreenKeyboardType["NamePhonePad"] = 6] = "NamePhonePad";
        TouchScreenKeyboardType[TouchScreenKeyboardType["EmailAddress"] = 7] = "EmailAddress";
        TouchScreenKeyboardType[TouchScreenKeyboardType["NintendoNetworkAccount"] = 8] = "NintendoNetworkAccount";
    })(WebUnity.TouchScreenKeyboardType || (WebUnity.TouchScreenKeyboardType = {}));
    var TouchScreenKeyboardType = WebUnity.TouchScreenKeyboardType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (TouchType) {
        TouchType[TouchType["Direct"] = 0] = "Direct";
        TouchType[TouchType["Indirect"] = 1] = "Indirect";
        TouchType[TouchType["Stylus"] = 2] = "Stylus";
    })(WebUnity.TouchType || (WebUnity.TouchType = {}));
    var TouchType = WebUnity.TouchType;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (TransparencySortMode) {
        TransparencySortMode[TransparencySortMode["Default"] = 0] = "Default";
        TransparencySortMode[TransparencySortMode["Perspective"] = 1] = "Perspective";
        TransparencySortMode[TransparencySortMode["Orthographic"] = 2] = "Orthographic";
    })(WebUnity.TransparencySortMode || (WebUnity.TransparencySortMode = {}));
    var TransparencySortMode = WebUnity.TransparencySortMode;
})(WebUnity || (WebUnity = {}));
var WebUnityInternal;
(function (WebUnityInternal) {
    (function (TypeInferenceRules) {
        TypeInferenceRules[TypeInferenceRules["TypeReferencedByFirstArgument"] = 0] = "TypeReferencedByFirstArgument";
        TypeInferenceRules[TypeInferenceRules["TypeReferencedBySecondArgument"] = 1] = "TypeReferencedBySecondArgument";
        TypeInferenceRules[TypeInferenceRules["ArrayOfTypeReferencedByFirstArgument"] = 2] = "ArrayOfTypeReferencedByFirstArgument";
        TypeInferenceRules[TypeInferenceRules["TypeOfFirstArgument"] = 3] = "TypeOfFirstArgument";
    })(WebUnityInternal.TypeInferenceRules || (WebUnityInternal.TypeInferenceRules = {}));
    var TypeInferenceRules = WebUnityInternal.TypeInferenceRules;
})(WebUnityInternal || (WebUnityInternal = {}));
var WebUnity;
(function (WebUnity) {
    (function (UserAuthorization) {
        UserAuthorization[UserAuthorization["WebCam"] = 1] = "WebCam";
        UserAuthorization[UserAuthorization["Microphone"] = 2] = "Microphone";
    })(WebUnity.UserAuthorization || (WebUnity.UserAuthorization = {}));
    var UserAuthorization = WebUnity.UserAuthorization;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (VerticalWrapMode) {
        VerticalWrapMode[VerticalWrapMode["Truncate"] = 0] = "Truncate";
        VerticalWrapMode[VerticalWrapMode["Overflow"] = 1] = "Overflow";
    })(WebUnity.VerticalWrapMode || (WebUnity.VerticalWrapMode = {}));
    var VerticalWrapMode = WebUnity.VerticalWrapMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var VR;
    (function (VR) {
        (function (VRDeviceType) {
            VRDeviceType[VRDeviceType["None"] = 0] = "None";
            VRDeviceType[VRDeviceType["Stereo"] = 1] = "Stereo";
            VRDeviceType[VRDeviceType["Split"] = 2] = "Split";
            VRDeviceType[VRDeviceType["Oculus"] = 3] = "Oculus";
            VRDeviceType[VRDeviceType["Morpheus"] = 4] = "Morpheus";
            VRDeviceType[VRDeviceType["PlayStationVR"] = 4] = "PlayStationVR";
        })(VR.VRDeviceType || (VR.VRDeviceType = {}));
        var VRDeviceType = VR.VRDeviceType;
    })(VR = WebUnity.VR || (WebUnity.VR = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    var VR;
    (function (VR) {
        (function (VRNode) {
            VRNode[VRNode["LeftEye"] = 0] = "LeftEye";
            VRNode[VRNode["RightEye"] = 1] = "RightEye";
            VRNode[VRNode["CenterEye"] = 2] = "CenterEye";
            VRNode[VRNode["Head"] = 3] = "Head";
        })(VR.VRNode || (VR.VRNode = {}));
        var VRNode = VR.VRNode;
    })(VR = WebUnity.VR || (WebUnity.VR = {}));
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (WebCamFlags) {
        WebCamFlags[WebCamFlags["FrontFacing"] = 1] = "FrontFacing";
    })(WebUnity.WebCamFlags || (WebUnity.WebCamFlags = {}));
    var WebCamFlags = WebUnity.WebCamFlags;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (WindZoneMode) {
        WindZoneMode[WindZoneMode["Directional"] = 0] = "Directional";
        WindZoneMode[WindZoneMode["Spherical"] = 1] = "Spherical";
    })(WebUnity.WindZoneMode || (WebUnity.WindZoneMode = {}));
    var WindZoneMode = WebUnity.WindZoneMode;
})(WebUnity || (WebUnity = {}));
var WebUnity;
(function (WebUnity) {
    (function (WrapMode) {
        WrapMode[WrapMode["Once"] = 1] = "Once";
        WrapMode[WrapMode["Loop"] = 2] = "Loop";
        WrapMode[WrapMode["PingPong"] = 4] = "PingPong";
        WrapMode[WrapMode["Default"] = 0] = "Default";
        WrapMode[WrapMode["ClampForever"] = 8] = "ClampForever";
        WrapMode[WrapMode["Clamp"] = 1] = "Clamp";
    })(WebUnity.WrapMode || (WebUnity.WrapMode = {}));
    var WrapMode = WebUnity.WrapMode;
})(WebUnity || (WebUnity = {}));
//# sourceMappingURL=t.js.map