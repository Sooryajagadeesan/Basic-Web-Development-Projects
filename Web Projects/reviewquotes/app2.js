let name = document.body.querySelector(".name");
let position =document.body.querySelector(".position");
let story = document.body.querySelector(".story");
let leftArrow = document.body.querySelector(".fa-angle-left");
let rightArrow = document.body.querySelector(".fa-angle-right");
let button = document.body.querySelector(".button");
let image = document.body.querySelector(".image");
// leftArrow.addEventListener("click",()=> console.log("left arrow clicked"));

let users = {
    "0": {
        name : "Bill gates",
        position : "CEO Microsoft",
        story : "sssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffggggggggggggggggggggggggggggg",
        image : "https://marriedbiography.com/wp-content/uploads/2017/09/Bill-Gates-1.jpg",
    },
    "1":{
        name : "Jack Ma",
        position : "CEO Alibaba",
        story : "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqquuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeennnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
        image : "https://marriedbiography.com/wp-content/uploads/2017/07/Jack-Ma-300x300.jpg",
    },
    "2":{
        name : "Sridhar Vembu",
        position : "CEO ZOHO",
        story : "mmmmmmmmmmmmmmmmaaaaaaaaaaaaaaaaaaaaasssssttttttttteeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrr",
        image : "https://i1.wp.com/www.ebizlatam.com/wp-content/uploads/2020/10/Columnista-Sridhar-Vembu.jpg?resize=300%2C300",    
    },
    "3":{
        name :"Steve Jobs",
        position :"CEO Apple",
        story : "thalaivan the mass",
        image : "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
}

var userNumber = 0;
var userNumberS = "" + userNumber;
var usersLength = Object.keys(users).length;

name.textContent = users[userNumberS].name;
position.textContent = users[userNumberS].position;
story.textContent = users[userNumberS].story;
image.src = users[userNumberS].image;

rightArrow.addEventListener("click",()=>{
    userNumber++;
    if(userNumber == usersLength){
        userNumber = 0;
    }
    userNumberS = ""+userNumber;
    name.textContent = users[userNumberS].name;
    position.textContent = users[userNumberS].position;
    story.textContent = users[userNumberS].story;
    image.src = users[userNumberS].image;
    
})

leftArrow.addEventListener("click",()=>{
    userNumber--;
    // let uNumber = usernumber;
    if(userNumber < 0){
        userNumber = usersLength-1;
    }
    userNumberS= ""+userNumber;
    name.textContent = users[userNumberS].name;
    position.textContent = users[userNumberS].position;
    story.textContent = users[userNumberS].story;
    image.src = users[userNumberS].image;
    
})

button.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random()*usersLength);
    userNumber = randomNumber;
    userNumberS =""+userNumber;
    name.textContent = users[userNumberS].name;
    position.textContent = users[userNumberS].position;
    story.textContent = users[userNumberS].story;
    image.src = users[userNumberS].image;
})