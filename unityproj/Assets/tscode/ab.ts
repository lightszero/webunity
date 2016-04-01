///<refen
class ab implements WI_Component
{
   //qq1 //固定名称_exportdata,表示导出的数据,有导出数据就会被认为是一个组件
    static _wi_export = { "a1": "int", "a2": "string" };
    obj: wi.GameObject;
    constructor()//尽量不要写构造器，成员初始化会由自动系统接手
    {
        this.a1 = 5;
    }
    a1: number;
    aa2: string;
    a3: any;
    start()
    {

    }

    update(delta: number)
    {
        var t = this.obj.GetRotate();
        t.y += 30 * delta;

          
        this.obj.SetRotate(t);
    }

}