class TestCls {
    constructor( arg ){
        this.prop = arg;
    }
};

const obj = new TestCls("引数");
console.log(obj.prop);


obj.prop = "値の変更";
console.log(obj.prop);