function timer(timeLeft, consistency){   
    let timer = setInterval(function(){
        let timerElement = document.querySelector("#circleContainer");
        let cook_button = document.getElementById("cook_button");
        cook_button.textContent = "STOP!"
       
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
        

        if (timeLeft === 299) {
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
            let eggPicture = document.getElementById("egg");
            console.log("done!");
            if(consistency === 360){
                eggPicture.src = "./images/imagesoft.png";
                eggPicture.style.width = "55%";
                
            }
            if(consistency === 480){
                eggPicture.src = "./images/imagemedium.png";
                eggPicture.style.width = "45%";
               
            }
            if(consistency === 600){
                eggPicture.src = "./images/imagehard.png"
                eggPicture.style.width = "45%";
                
            }
            document.querySelector("h1").textContent = "Enjoy!";
            
        }
        timeLeft--;
    }, 1000)
}

function changeEggImage(imageSrc) {
    const eggElement = document.getElementById("egg");
    eggElement.src = imageSrc;
    eggElement.classList.add("wiggle");

    setTimeout(() => {
      eggElement.classList.remove("wiggle");
    }, 500); 
  }