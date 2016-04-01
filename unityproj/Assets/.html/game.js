var _a2 = (function () {
    function _a2() {
    }
    _a2.prototype.start = function () {
    };
    _a2.prototype.update = function () {
    };
    //固定名称_wi_export,有此静态对象表示为一个组件
    _a2._wi_export = { "a11": "int", "a12": "string" };
    return _a2;
}());
///<refen
var ab = (function () {
    function ab() {
        this.a1 = 5;
    }
    ab.prototype.start = function () {
    };
    ab.prototype.update = function (delta) {
        var t = this.obj.GetRotate();
        t.y += 30 * delta;
        this.obj.SetRotate(t);
    };
    //固定名称_exportdata,表示导出的数据,有导出数据就会被认为是一个组件
    ab._wi_export = { "a1": "int", "a2": "string" };
    return ab;
}());
//# sourceMappingURL=game.js.map