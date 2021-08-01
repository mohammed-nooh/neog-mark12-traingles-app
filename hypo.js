"use strict";

const sides=document.querySelectorAll(".hypo-input");
const form=document.querySelector(".form");
const message=document.querySelector("#hypo-outputID");

function messageHandler(text){
    message.innerText=text;
}

function checkHandler(e){
    e.preventDefault();
    const a=Number(sides[0].value);
    const b=Number(sides[1].value);
    let sum=0;
    let sqrt=0;
    sum=Math.pow(a,2)+Math.pow(b,2);
    sqrt=(Math.sqrt(sum)).toFixed(2);
    console.log(sum,sqrt);
    messageHandler(`C = ${sqrt}`);

}


form.addEventListener("submit",checkHandler);