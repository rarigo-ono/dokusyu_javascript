let instance = new Promise(( resolve, reject) => {

    //1秒後に実行
    setTimeout(() => {
        //0~10のランダムな値を取得
        const rand = Math.floor(Math.random() * 11);

        if( rand < 5 ) {
            reject( rand ); //5未満はエラー
        } else {
            resolve( rand );    //5以上は成功
        }
    }, 1000);
});

instance = instance.then( value => {
    console.log(`5以上の値[${ value }]が渡ってきました。`)
});

instance = instance.catch( errorValue => {
    console.log(`5未満の値[${ value }]が渡ってきたためエラー表示。`)
});

instance = instance.finally( () => {
    console.log(`処理を実行します。`)
})