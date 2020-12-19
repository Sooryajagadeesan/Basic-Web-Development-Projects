let buttonIcon = document.body.querySelector(".fas");
let navList = document.body.querySelector(".nav-list");

buttonIcon.addEventListener("click",()=>{
    buttonIcon.classList.toggle("burger-rotate");
    navList.classList.toggle("mobile");
})