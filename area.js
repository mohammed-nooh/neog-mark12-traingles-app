"use strict";

const area1Btn=document.querySelector("#area-container1");
const area2Btn=document.querySelector("#area-container2");
const area1=document.querySelector("#area1ID");
const area2=document.querySelector("#area2ID");
const form1=document.querySelector(".form1");
const form2=document.querySelector(".form2");
const inputs1=document.querySelectorAll(".hypo-input1");
const inputs2=document.querySelectorAll(".hypo-input2");
const message1=document.querySelector("#area-outputID1");
const message2=document.querySelector("#area-outputID2");



area1Btn.addEventListener("click",()=>{
    area2.classList.add("hidden");
    area1.classList.remove("hidden");

    form1.addEventListener("submit",(e)=>{
        e.preventDefault();

        const b=Number(inputs1[0].value);
        const h=Number(inputs1[1].value);

        let area1=0;
        area1=0.5*b*h;
        message1.innerText=`Area = ${area1}`;

    })

});



area2Btn.addEventListener("click",()=>{
    area1.classList.add("hidden");
    area2.classList.remove("hidden");

    form2.addEventListener("submit",(e)=>{
        e.preventDefault();

        const a=Number(inputs2[0].value);
        const b=Number(inputs2[1].value);
        const c=Number(inputs2[2].value);
        console.log(a,b,c);

        if((a+b)>c && (b+c)>a && (a+c)>b){
            const s=(a+b+c)/2;
            const area2=Math.sqrt(s*(s-a)*(s-b)*(s-c));
            message2.innerText=`Area = ${area2}`;
        }
        else{
            message2.innerText=`Invalid numbers`;
        }

    })

})


