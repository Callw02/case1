let timeLeft = "1203";

function timer(timeLeft){
    const timerElement = document.querySelector("#try"); 
    let timer = setInterval(function(){

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        let formattedMinutes = minutes.toString().padStart(2, '0');
        let formattedSeconds = seconds.toString().padStart(2, '0');
    
        // Update the timer display
        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    
        console.log(`${formattedMinutes}:${formattedSeconds}`);
        timeLeft--;
       

        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
        console.log(timeLeft);
      
        if (timeLeft >= 0) {
          // Decrease the border width proportionally
          
          
        }
        if(timeLeft === 0){
            clearInterval(timer);
            console.log("done!");
            document.querySelector("#try").textContent = "Enjoy!"
        }
    }, 100)
}

timer(timeLeft);