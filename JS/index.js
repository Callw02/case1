"use strict"
let wrapper1 = document.createElement("div");



function starting_page() {
    document.querySelector("body").innerHTML = ``;
    wrapper1.classList.remove("wrapper2");
    let body = document.querySelector("body");
    wrapper1.classList.add("wrapper1");
    body.appendChild(wrapper1);

    wrapper1.innerHTML = `
    <img id="logo" src="./images/Untitled.png"></img> 
    <div id="info">i</div>
    <img src="./images/Ellipse 110.png"></img> 
    <button id="start_button">Preferences</button>
    
    `

    let start_button = document.querySelector("#start_button")
    start_button.addEventListener("click", options_page);

    let info_button = document.querySelector("#info");
    let popupVisible = false;
    info_button.addEventListener("click", togglePopup);

    function togglePopup(event) {

        if (popupVisible) {
            removePopup();
        } else {
            showPopup();
        }
    }
    function showPopup() {
        let popup = document.createElement("div");

        popup.innerHTML =
            `Step 1 : Bring your water to a boil 
         Step 2 : Select your preferences.
         Step 3 : Start cooking! `

        wrapper1.appendChild(popup);
        popup.classList.add("popup");

        info_button.innerHTML = `X`;
        popupVisible = true;
    }
    function removePopup() {
        let popup = document.querySelector(".popup");
        if (popup) {
            popup.remove();
        }
        info_button.innerHTML = `i`;
        popupVisible = false;
    }

}



starting_page();







function options_page() {

    wrapper1.classList.remove("wrapper1");
    wrapper1.classList.add("wrapper2");
    wrapper1.innerHTML = `
        <div class="option_containers">
            <div>TYPE</div>
            <div id="type" class="inner_container">
                <button class="option_buttons">CHICKEN</button>
                <button class="option_buttons">QUAIL</button>
                <button class="option_buttons">OSTRICH</button>
            </div>
        </div>

        <div class="seperator"></div>

        <div class="option_containers">
            <div>SIZE</div> 
            <div id="size" class="inner_container">
                <button  class="option_buttons">S</button>
                <button  class="option_buttons">M</button>
                <button  class="option_buttons">L</button>
                <button  class="option_buttons">XL</button>
            </div>
        </div>

        <div class="seperator"></div>
        
        <div class="option_containers">
            <div>CONSISTENCY</div>
            <div id="consistency" class="inner_container">
                <button class="option_buttons">SOFT</button>
                <button class="option_buttons">MEDIUM</button>
                <button class="option_buttons">HARD</button>
            </div>
        </div>

        <div class="seperator"></div>
        
        <div class="option_containers">
            <div>CHILLED</div>
            <div id="chilled" class="inner_container">
                <button class="option_buttons">YES</button>
                <button class="option_buttons">NO</button>
            </div>
        </div>

        <div class="seperator"></div>

        <button id="boil_button">Boil!</button>
        `;

    const buttons = document.querySelectorAll(".option_buttons");
    buttons.forEach(button => {

        if (button.parentElement.id !== "type") {
            button.disabled = true;
            button.classList.add("disabled")
        }
    });
    buttons.forEach(button => {
        button.addEventListener("click", handleButtonClick);
    });


    const boilButton = document.querySelector("#boil_button");
    boilButton.addEventListener("click", calculateCookingTime);

}


let eggPreferences = {
    consistency: 0, // Initialize with default value
    type: 0,        // Initialize with default value
    size: 0,        // Initialize with default value
    chilled: 0
};
let quail = false;
function handleButtonClick(event) {
    const buttonId = event.target;
    console.log(buttonId);


    if (buttonId.parentElement.id === "type") {
        const buttons = document.querySelectorAll(".option_buttons");
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.remove("disabled")
        });
        if (buttonId.textContent === "QUAIL" || buttonId.textContent === "OSTRICH") {
            const sizeButtons = document.querySelectorAll("#size .option_buttons");
            sizeButtons.forEach(sizeButton => {
                sizeButton.disabled = true;
                sizeButton.classList.add("disabled")
            });
        }
    }


    if (buttonId.parentElement.id === "type") {
        switch (buttonId.textContent) {
            case "CHICKEN":
                eggPreferences["type"] = 0;
                break;
            case "OSTRICH":
                eggPreferences["type"] = 3000;
                break;

            case "QUAIL": 160
                eggPreferences["type"] = 160;
                
                break;
        }
    }
    if(buttonId.textContent === "QUAIL"){
        quail = true;
    }
    
    if (buttonId.parentElement.id === "size") {
        switch (buttonId.textContent) {
            case "S": 0
                eggPreferences["size"] = 0;
                break;
            case "M": 60
                eggPreferences["size"] = 60;
                break;
            case "L": 120
                eggPreferences["size"] = 120;
                break;
            case "XL": 180
                eggPreferences["size"] = 180;
                break;


        }

    }
    
    if (buttonId.parentElement.id === "consistency") {
        if (quail == true) {
            switch (buttonId.textContent) {
                case "SOFT":
                    eggPreferences["consistency"] = 0;
                    break;

                case "MEDIUM":
                    eggPreferences["consistency"] = 40;
                    break;

                case "HARD":
                    eggPreferences["consistency"] = 150;
                    break;
            }

        }else{
        switch (buttonId.textContent) {
            case "SOFT":
                eggPreferences["consistency"] = 360;
                break;

            case "MEDIUM": 480
                eggPreferences["consistency"] = 480;
                break;

            case "HARD": 600
                eggPreferences["consistency"] = 600;
                break;
        }}
    }
    if (buttonId.parentElement.id === "chilled") {
        switch (buttonId.textContent) {
            case "YES": 60
                eggPreferences["chilled"] = 60;
                break;
            case "NO": 0
                eggPreferences["chilled"] = 0;
                break;
        }

    }
    console.log(eggPreferences);

}

function calculateCookingTime(event) {
    let body = document.querySelector("body");

    let wrapper2 = document.createElement("div");
    //wrapper2.classList.add("wrapper2");
    body.appendChild(wrapper2);
    body.classList.add("countDownPage")
    body.innerHTML = `
        <div id="circleContainer">
            <h1></h1>    
        </div> 
        <img id="egg" src="./images/Ellipse 110.png"></img> 
        <button id="cook_button">START!</button>
           
        `

    let cookTime = eggPreferences.consistency + eggPreferences.type + eggPreferences.size + eggPreferences.chilled;

    let minutes = Math.floor(cookTime / 60);
    let seconds = cookTime % 60;
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = seconds.toString().padStart(2, '0');
    document.querySelector("h1").textContent = `${formattedMinutes}:${formattedSeconds}`;
    document.querySelector("#cook_button").addEventListener("click", startCountDown)


}
function startCountDown(event) {
    let cookTime = eggPreferences.consistency + eggPreferences.type + eggPreferences.size + eggPreferences.chilled;
    timer(cookTime)
}


