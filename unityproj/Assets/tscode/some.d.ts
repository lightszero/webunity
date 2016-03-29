declare module BABYLON
{
    class Vector3
    {
        constructor(x: number, y: number, z: number);
        x: number;
        y: number;
        z: number;
    }
}
declare module wi
{
    export class GameObject
    {
        SetPos(vec: BABYLON.Vector3);
        SetRotate(vec: BABYLON.Vector3);
        GetRotate(): BABYLON.Vector3;
    }
}