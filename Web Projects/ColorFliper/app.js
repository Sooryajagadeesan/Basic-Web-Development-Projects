// simpleColors = ["red","green","blue"]
// hexColors = ["#FF0000","#00FF00","#0000FF"];
const colors = {
    simpleColors : ["red","green","blue","yellow","orange","pink","purple","violet","white","brown"],
    hexColors : ["#FF0000","#00FF00","#0000FF","#eb4034","#6b4643","#086673","#80ff80","#001a00","#737373","#996633","#ff00ff","#b3ff1a"],
}
var colorSet = ["#996633","#ff00ff","pink","#80ff80","purple","#737373","orange","#eb4034","red","#6b4643","green","#b3ff1a","blue","yellow","violet","#001a00","white","#086673","brown"];
var colorLength = colorSet.length;
var randomValue = 0;

const color = document.body.querySelector("#color");
const simple = document.body.querySelector(".simple");
const hex = document.body.querySelector(".hex");
const click = document.body.querySelector(".button");

simple.addEventListener("click",()=>{
    colorSet = colors.simpleColors;
    colorLength = colorSet.length;
    // location = location;
    // return true;
})

hex.addEventListener("click",()=>{
    colorSet = colors.hexColors;
    colorLength = colorSet.length
})

click.addEventListener("click",()=>{
    randomValue = Math.floor(Math.random()*colorLength);
    let randomColor = colorSet[randomValue];
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
    
    
})
