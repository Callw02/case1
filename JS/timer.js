let timeLeft = "3";

function timer(timeLeft){
    let timer = setInterval(function(){
        timeLeft--;
        let div = document.querySelector("#try").textContent = timeLeft;
        console.log(timeLeft);
        if(timeLeft === 0){
            clearInterval(timer);
            console.log("done!");
        }
    }, 1000)
}

timer(timeLeft);