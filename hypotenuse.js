const sideA = document.querySelector("#side-a");
const sideB = document.querySelector("#side-b");
const buttonHyp = document.querySelector(".btn");
const result = document.querySelector("#result-hypo");

buttonHyp.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse(){

    var SqA = Math. pow(sideA.value, 2);
    var SqB = Math. pow(sideB.value, 2);
    const hypotenuse = Math.sqrt(SqA+SqB).toFixed(2);
    console.log("Hypotenuse is: ",hypotenuse);
    result.textContent = `The length of the hypotenuse is ${hypotenuse} cm`
}