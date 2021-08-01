"use strict";


const inputs=document.querySelectorAll("#inputID");
const submitBtn=document.querySelector("#submit-sideID");
const form=document.querySelector("#form-tri");
const message=document.querySelector("#outputID");

function messageHandler(text){
    message.innerText=text;
}

function formHandler(event){
    event.preventDefault();
    
    const a=Number(inputs[0].value);
    const b=Number(inputs[1].value);
    const c=Number(inputs[2].value);
    // console.log(a,b,c);
    let sum=0;
    sum=a+b+c;
    if(sum===180){
        messageHandler("Yay! These angles can make a Triangle");

    }
    else{
        messageHandler("OOPS! These angles cannot make a triangle");
        
    }

}


form.addEventListener("submit",formHandler)