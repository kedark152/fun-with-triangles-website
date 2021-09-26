const button = document.querySelector(".btn");
const angles = document.querySelectorAll(".angle-input");
const result = document.querySelector("#output-1");
button.addEventListener("click",isTriangle);

function sumAngles(){
    var sum = 0;
    for(i=0;i<angles.length;i++){
    sum = sum + Number(angles[i].value);
}
    console.log("Sum is",sum);
    return sum;

}
function isTriangle(){
    if (sumAngles() === 180) {
        console.log('Yay, the angles form a Triangle');
        result.innerText = 'Yay, the angles form a Triangle';
    } else {
        console.log('Oh!, the angles do not form a Triangle');
        result.innerText = 'Oh!, the angles do not form a Triangle';
    }
}