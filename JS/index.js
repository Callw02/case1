"use strict"



function starting_page() {
    let body = document.querySelector("body");
    let wrapper1 = document.createElement("div");
    wrapper1.classList.add("wrapper1");
    body.appendChild(wrapper1);

    wrapper1.innerHTML = `
    <img id="logo" src="./images/Untitled.png"></img> 
    <img src="./images/Ellipse 110.png"></img> 
    <button id="start_button">Preferences</button>
    
    `
    let start_button = document.querySelector("#start_button")
    start_button.addEventListener("click", options_page);

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

        <div class="option_containers">
            <div>SIZE</div> 
            <div id="size" class="inner_container">
                <button  class="option_buttons">S</button>
                <button  class="option_buttons">M</button>
                <button  class="option_buttons">L</button>
                <button  class="option_buttons">XL</button>
            </div>
        </div>
        
        <div class="option_containers">
            <div>CONSISTENCY</div>
            <div id="consistency" class="inner_container">
                <button class="option_buttons">SOFT</button>
                <button class="option_buttons">MEDIUM</button>
                <button class="option_buttons">HARD</button>
            </div>
        </div>

        
        <div class="option_containers">
            <div>CHILLED</div>
            <div id="chilled" class="inner_container">
                <button class="option_buttons">YES</button>
                <button class="option_buttons">NO</button>
            </div>
        </div>

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



    let eggPreferences = {};

    function handleButtonClick(event) {
        const buttonId = event.target;
        console.log(buttonId);

        if (buttonId.parentElement.id === "type") {
            const buttons = document.querySelectorAll(".option_buttons");
            buttons.forEach(button => {
                button.disabled = false;
                button.classList.remove("disabled")
            });
        }


        if (buttonId.parentElement.id === "type") {
            switch (buttonId.textContent) {
                case "OSTRICH": 3000
                    eggPreferences["type"] = 3000;
                    break;

                case "QUAIL": 160
                    eggPreferences["type"] = 160;
                    break;
            }
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
            switch (buttonId.textContent) {
                case "SOFT": 360
                    eggPreferences["consistency"] = 360;
                    break;

                case "MEDIUM": 480
                    eggPreferences["consistency"] = 480;
                    break;

                case "HARD": 600
                    eggPreferences["consistency"] = 600;
                    break;
            }
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

        let cookTime = eggPreferences.consistency + eggPreferences.type + eggPreferences.size + eggPreferences.chilled;
        console.log(eggPreferences.consistency);

    }
    function calculateCookingTime(event) {

    }
}
starting_page()
