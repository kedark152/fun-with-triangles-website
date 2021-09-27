const sideA = document.querySelector("#side-a");
const sideB = document.querySelector("#side-b");
const buttonHyp = document.querySelector(".btn");
const result = document.querySelector("#result-hypo");
const errorMsg = document.querySelector("#errorMsg");
buttonHyp.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse(){
    errorMsg.innerText="";
    result.textContent="";
   if((sideA.value>0) && (sideB.value>0)){
    var SqA = Math. pow(sideA.value, 2);
    var SqB = Math. pow(sideB.value, 2);
    const hypotenuse = Math.sqrt(SqA+SqB).toFixed(2);
    console.log("Hypotenuse is: ",hypotenuse);
    result.textContent = `The length of the hypotenuse is ${hypotenuse} cm`
}
   else{
    errorMsg.innerText = "Please enter the valid lengths of triangles: It should be greater than 0";
   }
}