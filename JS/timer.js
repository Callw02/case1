function timer(timeLeft){   
    let timer = setInterval(function(){
        let timerElement = document.querySelector("#circleContainer")
        timerElement.classList.remove("blink");
       
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        let formattedMinutes = minutes.toString().padStart(2, '0');
        let formattedSeconds = seconds.toString().padStart(2, '0');

        const setTime = formattedMinutes + formattedSeconds;
        const startTime = Date.now();
        const futureTimer = startTime + setTime;

        // Update the timer display
        timerElement.innerHTML = `<h1>${formattedMinutes}:${formattedSeconds}</h1>`;
        console.log(`${formattedMinutes}:${formattedSeconds}`);
        timeLeft--;

        if (timeLeft === 350) {
            changeEggImage("./images/cracks.png")
        }
        if (timeLeft === 239) {
            changeEggImage("./images/crackscrack2.png")
        }
        if (timeLeft === 179) {
            changeEggImage("./images/crackscrack3.png")
        }
        if (timeLeft === 119) {
            changeEggImage("./images/crackscrack4.png")
        }
        if (timeLeft === 59) {
            changeEggImage("./images/crackscrack5.png")
        }
        
        
        if(timeLeft === 0){
            clearInterval(timer);
            console.log("done!");
            document.querySelector("#circleContainer").textContent = "Enjoy!"
        }
    }, 1000)
}

function changeEggImage(imageSrc) {
    let timerElement = document.querySelector("#circleContainer")
    

    const eggElement = document.getElementById("egg");
    eggElement.src = imageSrc;
    eggElement.classList.add("wiggle");

    setTimeout(() => {
      eggElement.classList.remove("wiggle");
    }, 500); 
  }