let crossBar = document.body.querySelector(".fa-times");
let messageDivision =document.body.querySelector(".message-div");
let button = document.body.querySelector(".button");
let headingDivision =document.querySelector(".heading-div")
let buttonDivision = document.querySelector(".button-div")

button.addEventListener("click",()=>{
    // document.body.style.backgroundColor = ""
    headingDivision.classList.add("clear");
    buttonDivision.classList.add("clear");
    messageDivision.classList.add("action");
})

crossBar.addEventListener("click",()=>{
    messageDivision.classList.remove("action");
    headingDivision.classList.remove("clear");
    buttonDivision.classList.remove("clear");

})