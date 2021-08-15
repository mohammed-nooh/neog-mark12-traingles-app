"use strict";

const quiz=document.forms[0];
const submitBtn=document.querySelector("#quiz-submit");
const questionDiv=document.querySelectorAll(".radio-question");
const scoreDiv=document.querySelector("#quiz-output");

const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];
let score= 0;

function submitHandler(e){
    e.preventDefault();
    const data=new FormData(quiz);
    let index=0;
    for(let entry of data ){
        if(entry[1]==correctAns[index]){
            questionDiv[index].style.backgroundColor="lightgreen";
            score++;

        }
        else{
            questionDiv[index].style.backgroundColor="pink";
        }
        index++;
    }
    scoreDiv.innerText=score;
    submitBtn.classList.add("hidden");

}

quiz.addEventListener("submit",submitHandler)