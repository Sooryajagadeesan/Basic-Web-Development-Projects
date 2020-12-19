let number = document.body.querySelector(".number");
let increase = document.body.querySelector(".increase");
let decrease = document.body.querySelector(".decrease");
let reset = document.body.querySelector(".reset");


increase.addEventListener("click", ()=> {
    number.textContent = Number(number.textContent)+1;
    if (Number(number.textContent)==0){
        number.style.color = "gray";
    }else if (Number(number.textContent) >0){

        number.style.color = "green";
    }else if (Number(number.textContent) < 0){
        number.style.color = "red";
    }
    
})

decrease.addEventListener("click",()=> {
    number.textContent = Number(number.textContent) -1;
    if (Number(number.textContent)==0){
        number.style.color = "gray";
    }else if (Number(number.textContent) >0){
        number.style.color = "green";
    }else if (Number(number.textContent) < 0){
        number.style.color = "red";
    }
})

reset.addEventListener("click",()=>{
    number.textContent = 0;
    number.style.color="gray";
})

