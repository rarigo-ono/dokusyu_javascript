class TestCls {
    method( arg ){
        console.log(`引数:[ ${arg} ]でメソッドを実行`);
    }
};

const test = new TestCls;
test.method("テストだよ");

class User {
    constructor(username, password, roll){
        this.username = username;
        this.password = password;
        this.roll = roll;
    }

    login() {
        this.check();
        console.log(`ログイン[${this.username} / ${this.password}]`);
        this.checkRoll();
    }

    check(){
        console.log(`ログイン情報をチェックします。`);
    }

    checkRoll(){
        if(this.roll === "admin"){
            console.log("管理者権限です。");
        } else {
            console.log("一般ユーザーです。");
        };
    };  
};

//オブジェクト作成
const taro = new User("独習太郎", "taro-pwd", "admin");
const hanako = new User("予習花子", "hanako-pwd");

taro.login();
hanako.login();