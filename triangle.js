const inputs = document.querySelectorAll(".input-angle");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output-box");

//console.log(output)
//console.log(isTriangleBtn)
//console.log(inputs)

function calculateSumOfAngles(angle1, angle2, angle3) {
    const SumOfAngles = angle1 + angle2 + angle3
        //console.log(SumOfAngles);
    return (SumOfAngles)
}

function isTriangle() {
    if (inputs[0].value < 0 || inputs[1].value < 0 || inputs[2].value < 0) {
        outputBox.innerText = "please enter valid input 🤔";
        return;
    }

    if (inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === "") {
        outputBox.innerText = "Angles can't be empty 📖 ";
        return;
    }

    if (inputs[0].value == 0 || inputs[1].value == 0 || inputs[2].value == 0) {
        outputBox.innerText = "The Angle has to be greater than zero 0️⃣ !";
        return;
    }

    const SumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (SumOfAngles === 180) {
        outputBox.innerText = " Yay! These angles form a 🔼 triangle 🤗🤩"

    } else {
        outputBox.innerText = " Oh! These angles don't form a 🔼 triangle 🫤"


        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""
            //console.log(inputs[0].value, inputs[1].value, inputs[2].value)
    }
}

isTriangleBtn.addEventListener("click", isTriangle)