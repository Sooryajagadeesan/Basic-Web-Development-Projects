let cross = document.body.querySelector(".cross");
let burgerButton = document.body.querySelector(".button");
let slideBar = document.body.querySelector(".sidebar");
var slideAnimation = false;
cross.addEventListener("click",()=>{
    // slideBar.classList.remove("anime"); no need because topdown in CSS checkit
    slideBar.classList.add("reverse-anime");
    slideAnimation = false;
    burgerButton.classList.remove("mobile");
});
burgerButton.addEventListener("click",()=>{
    if(!slideAnimation){
        slideBar.classList.remove("reverse-anime");
        slideBar.classList.add("anime");
        burgerButton.classList.add("mobile");
        slideAnimation= true;
    }else{
        slideBar.classList.add("reverse-anime");
        // slideBar.classList.remove("anime");
        slideAnimation = false;
    }
});