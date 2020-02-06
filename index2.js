var randomNo1 = Math.random(); // generate random no. 1 between 0 - 0.9999999999999999

randomNo1 = Math.floor(randomNo1 * 6) + 1; // generate random no. 1 between 1 - 6

var randomImageSource1 = "images/dice" + randomNo1 + ".png"; // Image 1 source

var image = document.querySelectorAll("img"); // select image

image[0].setAttribute("src", randomImageSource1); // set src attribute of image 1

var randomNo2 = Math.random(); // generate random no. 2 between 0 - 0.9999999999999999

randomNo2 = Math.floor(randomNo2 * 6) + 1; // generate randon no. 2 between 1 - 6

randomImageSource2 = "images/dice" + randomNo2 + ".png"; // Image 2 source

image[1].setAttribute("src", randomImageSource2); // set src attribute of image

var heading = document.querySelector("h1"); //select h1

if (randomNo1 > randomNo2) {
  heading.innerHTML = "🚩Player 1 Win!";
} else if (randomNo1 < randomNo2) {
  heading.innerHTML = "Player 2 Win!🚩";
} else {
  heading.innerHTML = "Draw!";
}
