const base = document.querySelector("#base");
const height = document.querySelector("#height");
const buttonArea = document.querySelector(".btn");
const resultArea = document.querySelector("#result-area");

buttonArea.addEventListener("click",calculateArea);

function calculateArea(){
    const area = (0.5*base.value*height.value).toFixed(2);
    console.log("area of triangle is: ",area);
    resultArea.textContent = `The Area of the Triangle is ${area} cm`
}