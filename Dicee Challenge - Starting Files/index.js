var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// for(var i = 1; i < 7; i++){
//     if(randomNumber1 === i){
//         document.querySelector(".img1").setAttribute("style", "img: dice + 'i'");
//         break;
//     }
// }
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
} else {document.querySelector("h1").innerHTML = "It's a Draw!";}

if(randomNumber1 === 1){

    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}else {document.querySelector(".img1").setAttribute("src", "images/dice6.png");}

if(randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}else if (randomNumber2=== 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}else {document.querySelector(".img2").setAttribute("src", "images/dice6.png");}