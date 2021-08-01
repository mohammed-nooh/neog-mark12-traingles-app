"use strict";

const area1Btn=document.querySelector("#area-container1");
const area2Btn=document.querySelector("#area-container2");
const area1=document.querySelector("#area1ID");
const area2=document.querySelector("#area2ID");
const form1=document.querySelector(".form1");
const form2=document.querySelector(".form2");
const inputs1=document.querySelectorAll(".hypo-input");
const inputs2=document.querySelectorAll(".hypo-input");
const message1=document.querySelector("#area-outputID1");
const message2=document.querySelector("#area-outputID2");



area1Btn.addEventListener("click",()=>{
    area2.classList.add("hidden");
    area1.classList.remove("hidden");

    form1.addEventListener("submit",(e)=>{
        e.preventDefault();

        const b=Number(inputs1[0].value);
        const h=Number(inputs1[1].value);

        let area=0;
        area=0.5*b*h;
        message1.innerText=`Area = ${area}`;

    })

});



area2Btn.addEventListener("click",()=>{
    area1.classList.add("hidden");
    area2.classList.remove("hidden");
})


