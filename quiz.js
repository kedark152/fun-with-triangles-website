const quizForm = document.querySelector(".quiz-form");
const submitForm = document.querySelector("#submit-btn");
const quizResult = document.querySelector("#quiz-result");

const correctAnswers = ['90°', 'right-angled','Yes','scalene triangle','75','60']; 
 function calculateScore(e){
    e.preventDefault();
     let index = 0;
     score= 0;

     if((document.querySelector('input[type=radio]:checked'))!=null){
      const data = new FormData(quizForm);
      for(let entry of data.values()){
            if (entry==correctAnswers[index]) {
               score++;
            } 
            index++;
      }
      console.log("Your Score is:",score);
      quizResult.innerText=`Your score is ${score}/6`;
   }else{
      quizResult.innerText=`Please answer atleast 1 question`;
   }
 }

 submitForm.addEventListener("click",calculateScore);
 