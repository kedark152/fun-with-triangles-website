const base = document.querySelector("#base");
const height = document.querySelector("#height");
const buttonArea = document.querySelector(".btn");
const resultArea = document.querySelector("#result-area");
const errorMsg = document.querySelector("#errorMsg");
buttonArea.addEventListener("click",calculateArea);

function calculateArea(){
    errorMsg.innerText = "";
    resultArea.textContent = "";
    if((base.value>0) &&(height.value>0)){
    const area = (0.5*base.value*height.value).toFixed(2);
    console.log("area of triangle is: ",area);
    resultArea.textContent = `The Area of the Triangle is ${area} cm`
}
    else{
        errorMsg.innerText = "Please enter the valid base & height of traingle: It should be greater than 0 "
    }
}