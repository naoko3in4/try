(function(){
    "use strict";

    let slider = document.getElementById("slider");
    let label = document.getElementById("label");
    let btn = document.getElementById("btn");
    let result = document.getElementById("result");
    let numbers = document.getElementById("numbers");
    let symbols = document.getElementById("symbols");
    let pwd = document.getElementById("pwd");
    let confirmP = document.getElementById("confirmP");
    let tmp = document.getElementById("tmp");
    let button = document.getElementById("button");
    let useFor = document.getElementById("useFor");

    function getPassword(){
        let seed_letters = "abcdefghijklmnopqrstuvwxyz";
        let seed_numbers = "0123456789";
        let seed_symbols = "!#$%&()";
        let seed;

        let len = slider.value;
        let pwd ="";

        seed = seed_letters + seed_letters.toUpperCase();
        if(numbers.checked === true){
            seed += seed_numbers;
        }
        if(symbols.checked){
            seed += seed_symbols;
        }

//seed(ここではアルファベットa-z）の長さから、値をランダムで出したものにMath.floorを掛ける
        // for(let i = 0; i<len; i++){
        //     pwd += seed[Math.floor(Math.random()*seed.length)];
        // }
        // result.value = pwd;
    // }

//while文↓①自作
        //     let i =0;
        //     while(i<len){
        //         i++;
        //         pwd += seed[Math.floor(Math.random()*seed.length)];   
        //         result.value = pwd;
        //     }
        // }
//while文↓②ドットインストール
        while(len--){
            pwd += seed[Math.floor(Math.random()*seed.length)];
        }
        result.value = pwd;
    }
    slider.addEventListener("change", function(){
        label.innerHTML = this.value;
    });
    btn.addEventListener("click", function(){
        getPassword();
    });
    result.addEventListener("click", function(){
        this.select();
    });
    getPassword();

    button.addEventListener("click", function(){
        tmp.value = result.value;
        localStorage.setItem("使用先", useFor.value);
        localStorage.setItem("パスワード", tmp.value);
    });

    

    // getPw.addEventListener("click", function(){
    //     let getPass = result.value;
    //     console.log(getPass);
    // });

})();

