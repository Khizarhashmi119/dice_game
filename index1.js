var randomNo1 = img1Toggle();
var randomNo2 = img2Toggle();
winner(randomNo1, randomNo2);

function randomNoGenerator() {
  var randomNo = Math.random();
  randomNo = Math.round(randomNo * 6) + 1;
  return randomNo;
}

function img1Toggle() {
  var randomNo = randomNoGenerator();
  var img1Ref = document.querySelector(".img1");
  if (randomNo === 1) {
    img1Ref.setAttribute("src", "images/dice1.png");
  } else if (randomNo === 2) {
    img1Ref.setAttribute("src", "images/dice2.png");
  } else if (randomNo === 3) {
    img1Ref.setAttribute("src", "images/dice3.png");
  } else if (randomNo === 4) {
    img1Ref.setAttribute("src", "images/dice4.png");
  } else if (randomNo === 5) {
    img1Ref.setAttribute("src", "images/dice5.png");
  } else {
    img1Ref.setAttribute("src", "images/dice6.png");
  }
  return randomNo;
}

function img2Toggle() {
  var randomNo = randomNoGenerator();
  var img2Ref = document.querySelector(".img2");
  if (randomNo === 1) {
    img2Ref.setAttribute("src", "images/dice1.png");
  } else if (randomNo === 2) {
    img2Ref.setAttribute("src", "images/dice2.png");
  } else if (randomNo === 3) {
    img2Ref.setAttribute("src", "images/dice3.png");
  } else if (randomNo === 4) {
    img2Ref.setAttribute("src", "images/dice4.png");
  } else if (randomNo === 5) {
    img2Ref.setAttribute("src", "images/dice5.png");
  } else {
    img2Ref.setAttribute("src", "images/dice6.png");
  }
  return randomNo;
}

function winner(randomNo1, randomNo2) {
  var h1ref = document.querySelector("h1");
  if (randomNo1 > randomNo2) {
    h1ref.innerHTML = "🚩&nbsp;Player&nbsp;1&nbsp;is&nbsp;winner";
  } else if (randomNo2 > randomNo1) {
    h1ref.innerHTML = "Player&nbsp;2&nbsp;is&nbsp;winner&nbsp;🚩";
  } else {
    h1ref.innerHTML = "Draw";
  }
}
