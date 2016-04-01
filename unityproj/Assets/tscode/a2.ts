class _a2 implements WI_Component
{
    //固定名称_wi_export,有此静态对象表示为一个组件
    static _wi_export = { "a11": "int", "a12": "string" };
    obj: wi.GameObject;
    constructor()//尽量不要写构造器，成员初始化会由自动系统接手
    {
    }
    a11: number;
    a12: string;


    start()
    {
    }
    update()
    {      
    }
}