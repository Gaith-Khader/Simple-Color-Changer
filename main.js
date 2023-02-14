let colorIN=document.querySelector(".color-input");
let color=document.querySelector(".color");
colorIN.addEventListener("input",()=>{
    color.style.backgroundColor=colorIN.value;
});