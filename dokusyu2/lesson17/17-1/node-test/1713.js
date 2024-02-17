const val = "ECMAScriptの使用に沿って記述します。";

function fn(){
    console.log("関数を利用することができます。");
};
fn();

class NodeClass{
    constructor(){
        console.log("クラスも利用することができます。");
    }
}
new NodeClass;

Promise.resolve().then(() => {
    console.log("Promiseなども使用可能です。");
});

function* generator(){
    yield "ジェネレータも使えます。";
};

for(const str of generator()){
    console.log(str);
};

//console.log(window);

console.log(global);


setTimeout(() => {
    console.log("hello");
}, 1000);
