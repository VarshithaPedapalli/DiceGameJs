var n1=Math.floor(Math.random() * 6)+1;
var word1= "./images/dice" + n1 +".png";

var n2=Math.floor(Math.random() * 6)+1;
var word2= "./images/dice" + n2 +".png";


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",word1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",word2);


//  if(n1>n2){
//     document.getElementsByTagName("h1").innerHTML = "🚩 Player 1 is winner";
// }
// else if(n1<n2){
//     document.getElementsByTagName("h1").innerHTML = "🚩 Player 2 is winner";
// }
// else {
//     document.getElementsByTagName("h1").innerHTML = "Draw!";
// }
if (n1 > n2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (n2 > n1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }