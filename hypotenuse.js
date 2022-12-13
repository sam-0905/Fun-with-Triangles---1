const sides = document.querySelectorAll(".input-side");
const hypotenusebtn = document.querySelector("#hypotenuse-btn");
const outputBox = document.querySelector("#output-box");
//console.log(sides[0].value);

//console.log(output)
//console.log(hypotenusebtn)
function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b
        //console.log(sumOfSquares);
    return sumOfSquares
}

function calculateHypotenuse() {

    if (sides[0].value === "" || sides[1].value === "") {
        outputBox.innerText = "Input field is empty 📖 ";
        return;
    }
    if (sides[0].value < 0 || sides[1].value < 0) {
        outputBox.innerText = "please enter valid input 🤔";
        return;
    }

    if (sides[0].value == 0 || sides[1].value == 0) {
        outputBox.innerText = "The value has to be greater than zero 0️⃣ !";
        return;
    }

    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    //console.log(sumOfSquares, lengthOfHypotenuse)
    outputBox.innerText = " The length of hypotenuse is  " + lengthOfHypotenuse + "cm";

    sides[0].value = "";
    sides[1].value = "";

}

hypotenusebtn.addEventListener("click", calculateHypotenuse)