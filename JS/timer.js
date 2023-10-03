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
        timerElement.innerHTML = `<h1>${formattedMinutes}:${formattedSeconds}</h1>`;
        console.log(`${formattedMinutes}:${formattedSeconds}`);
        timeLeft--;

        if (timeLeft === 299) {
            document.getElementById("egg").src = "./images/cracks.png"
        }
        if (timeLeft === 239) {
            document.getElementById("egg").src = "./images/crackscrack2.png"
        }
        if (timeLeft === 179) {
            document.getElementById("egg").src = "./images/crackscrack3.png"
        }
        if (timeLeft === 119) {
            document.getElementById("egg").src = "./images/crackscrack4.png"
        }
        if (timeLeft === 59) {
            document.getElementById("egg").src = "./images/crackscrack5.png"
        }
        
        
        if(timeLeft === 0){
            clearInterval(timer);
            console.log("done!");
            document.querySelector("#circleContainer").textContent = "Enjoy!"
        }
    }, 1000)
}

