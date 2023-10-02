"use strict"

function starting_page() {
    let body = document.querySelector("body");
    let wrapper1 = document.createElement("div");
    wrapper1.classList.add("wrapper1");
    body.appendChild(wrapper1);

    wrapper1.innerHTML = `
    <img id="logo" src="./images/Untitled.png"></img> 

    <button id="start_button">Options</button>
    
    `
    let start_button = document.querySelector("#start_button")
    start_button.addEventListener("click", options_page);

    function options_page() {
        wrapper1.classList.remove("wrapper1");
        wrapper1.classList.add("wrapper2");
        wrapper1.innerHTML = `
        <div class="option_containers">
            <div>CONSISTENCY</div>
            <div class="inner_container">
                <button class="option_buttons">Soft</button>
                <button class="option_buttons">Medium</button>
                <button class="option_buttons">Hard</button>
            </div>
        </div>

        <div class="option_containers">
            <div>TYPE</div>
            <div class="inner_container">
                <button class="option_buttons">CHICKEN</button>
                <button class="option_buttons">QUAIL</button>
                <button class="option_buttons">OSTRICH</button>
            </div>
        </div>

        <div class="option_containers">
            <div>SIZE</div> 
            <div class="inner_container">
                <button class="option_buttons">S</button>
                <button class="option_buttons">M</button>
                <button class="option_buttons">L</button>
                <button class="option_buttons">XL</button>
            </div>
        </div>
        
        <div class="option_containers">
            <div>CHILLED</div>
            <div class="inner_container">
                <button class="option_buttons">Yes</button>
                <button class="option_buttons">No</button>
            </div>
        </div>

        <button id="boil_button">Boil!</button>
        `;

        const buttons = document.querySelectorAll(".option_buttons");
        buttons.forEach(button => {
            button.addEventListener("click", handleButtonClick);
        });

        const boilButton = document.querySelector("#boil_button");
        boilButton.addEventListener("click", calculateCookingTime);
    }
    function handleButtonClick(event) {
        const buttonId = event.target;
        console.log(buttonId);
    }
    function calculateCookingTime(event) {

    }
}
starting_page()
