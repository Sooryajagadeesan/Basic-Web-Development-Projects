let name = document.body.querySelector(".name");
let position =document.body.querySelector(".position");
let story = document.body.querySelector(".story");
let leftArrow = document.body.querySelector(".fa-angle-left");
let rightArrow = document.body.querySelector(".fa-angle-right");
let button = document.body.querySelector(".button");
let image = document.body.querySelector(".image");


//constructor 
function User(userName,userPosition,userStory,userImage){
    this.name = userName;
    this.position = userPosition;
    this.story = userStory;
    this.image = userImage;
}

let billgatesStory = "Hi, We are reaching out to people who need help all over the world and also we are fully involved in discovering a vaccine for the COVID-19 exclusively at low price considering the economy";
let jackmaStory = "Hi, We are aiming to bring our customers the comfortability of enjoying our services instantly through online. We are helping many people and the government to stabilize the economy."
let sridharStory = "Hi, We are maintaining our pace towards our goal. This is only because of our dedicated employees. We still want to be self-funded so that we'll be free to do what we plan";
let stevejobsStory ="Hi, Each of you will face barriers in day to day life, overcome them with hardwork and persistence as I did, remember me whenever you lose your confidence, have a nice day !"; 

let users = {
    "0" : new User("Bill Gates","CEO  Microsoft",billgatesStory,"https://marriedbiography.com/wp-content/uploads/2017/09/Bill-Gates-1.jpg"),
    "1" : new User("Jack Ma","CEO Alibaba",jackmaStory,"https://marriedbiography.com/wp-content/uploads/2017/07/Jack-Ma-300x300.jpg"),
    "2" : new User("Sridhar Vembu","CEO ZOHO",sridharStory,"https://i1.wp.com/www.ebizlatam.com/wp-content/uploads/2020/10/Columnista-Sridhar-Vembu.jpg?resize=300%2C300"),
    "3" : new User("Steve Jobs","CEO Apple",stevejobsStory,"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg")
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