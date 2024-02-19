console.log("処理A");
if(true){
    console.log("処理B");
} else {
    console.log("処理C");
}

console.log("処理D");

let val = 0;

setTimeout(() => {val = 1;}, 1000);

console.log(val);