const kei = {
    userName: "小野圭介",
    passWord: "keisuke-pwd",
    login(){
        console.log(`ログイン[${this.userName} / ${this.passWord}]`);
    }
};

kei.login();

class User {
    constructor(name, passWord){
        this.name = name,
        this.passWord = passWord
    }

    login(){
        console.log(`ログイン[${this.userName} / ${this.passWord}]`);
    }
};

const azuki = new User("あずき", "azuki-pwd");
