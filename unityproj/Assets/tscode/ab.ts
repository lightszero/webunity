///<refen
class ab implements WI_Component
{
    //固定名称_exportdata,表示导出的数据,有导出数据就会被认为是一个组件
    static _wi_export =  {"a1":"int","a2":"string"} ;
    
    constructor()//尽量不要写构造器，成员初始化会由自动系统接手
    {
    }
    a1: number;
    a2: string;
    start()
    {
        
    }

    update(delta: number)
    {
    }
}