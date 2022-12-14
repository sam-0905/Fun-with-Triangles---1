//const area = document.querySelectorAll(".input-area");
const inputBase = document.querySelector("#base");
const inputHeight = document.querySelector("#height")
const areaBtn = document.querySelector("#area-btn");
const outputBox = document.querySelector("#output-box");

//console.log(inputBase.value, inputHeight.value)
//console.log(areaBtn, output)

function calculateAreaOfTriangle() {
    //console.log("Calculate area called", inputBase.value, inputHeight.value);
    if (inputBase.value < 0 || inputHeight.value < 0) {
        outputBox.innerText = "please enter valid input 🤔";
        return;
    }
    if (inputBase.value === "" || inputHeight.value === "") {
        outputBox.innerText = "Base and Height can't be empty 📖 ";
        return;
    }
    if (inputBase.value == 0 || inputHeight.value == 0) {
        outputBox.innerText = "The Base and Height has to be greater than zero 0️⃣ !";
        return;
    }
    var area = (0.5) * inputBase.value * inputHeight.value;
    outputBox.innerText = "The area of a triangle is " + area + "cm²";

    inputBase.value = "";
    inputHeight.value = "";
}

areaBtn.addEventListener('click', calculateAreaOfTriangle);