function timer(timeLeft){   
    let timer = setInterval(function(){
      let timerElement = document.querySelector("#circleContainer")
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        let formattedMinutes = minutes.toString().padStart(2, '0');
        let formattedSeconds = seconds.toString().padStart(2, '0');

        const setTime = formattedMinutes + formattedSeconds;
        const startTime = Date.now();
        const futureTimer = startTime + setTime;

        // Update the timer display
        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
        console.log(`${formattedMinutes}:${formattedSeconds}`);
        timeLeft--;
        
        if(timeLeft === 0){
            clearInterval(timer);
            console.log("done!");
            document.querySelector("#circleContainer").textContent = "Enjoy!"
        }
    }, 1000)
}

