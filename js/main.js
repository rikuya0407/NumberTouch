class NumberTouch {
    constructor(){
        // 要素の設定
        this.numberBtns = document.querySelectorAll('.num-btn');
        this.start = document.querySelector('.start');
        this.goTop = document.querySelector('.top');

        // スタートが押されたらrandom関数
        this.start.addEventListener('click',this._random);  
        // // 各ボタンの真偽判定を行います
        this.numberBtns.forEach(numberBtn =>{
            numberBtn.addEventListener('click',this._numberCheck.bind(this));
        });      
    }

    // random関数(startボタンがクリックされたら起動)
    _random(){
        // スタートボタンを連続して押せないように真偽値を持たせる
        bool = true;

        // スタートボタンが一度押されたら
        if(startBool === true){
            startBool = false;
            startTime = new Date();

            // タイマー関数
            timeCount();

            // 数字の一つ一つの要素を取得し、ランダムに配置を行う
            document.querySelectorAll('.num-btn').forEach(el =>{
                // 乱数を作る
                let randomNumber = Math.floor(Math.random() * numberArry.length);

                // 初期配列の数字を上書きする
                el.innerHTML = numberArry[randomNumber];

                // 一度表示させたらその数字は削除したいのでspliceで削除
                numberArry.splice(randomNumber,1);
            });
        }

        // タイマー関数
        function timeCount(){
            timeoutId = setTimeout(function(){
                let min = Math.floor((new Date() - startTime) / 60000);
                let sec = Math.floor((new Date() - startTime) % 60000 /1000)
                let mm  = (new Date() - startTime) % 1000;

                min = ('0' + min).slice(-2); 
                sec = ('0' + sec).slice(-2);
                mm = ('0' + mm).slice(-3);

                document.querySelector('.timer').innerHTML = min + ':' + sec + ':' + mm ;
                // 10ms毎に繰り返す
                timeCount();
            },10);
        }

    }

    _numberCheck(number){
        console.log(number.target);
        if(number.target.innerHTML == count){
            console.log(number.target.innerHTML);
            if(bool === false){
                number.target.classList.remove('inview');
            }else{
                number.target.classList.add('inview');
            }
            count++
            if(number.target.innerHTML == lastCount){
                clearTimeout(timeoutId);
                this.goTop.classList.add('inview');
            }
        }
    }


    

}

let count = 1;
let lastCount = 16;
let numberArry = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let startTime;
let timeoutId;
let bool = false;
let startBool = true;

const numberTouch =  new NumberTouch();












