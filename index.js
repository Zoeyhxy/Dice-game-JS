function playDice() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var diceImg1 = document.querySelector(".img1");
    var diceImg2 = document.querySelector(".img2");

    diceImg1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    diceImg2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    var titleDisplay = document.querySelector("h1");

    if(randomNumber1 > randomNumber2) {
        titleDisplay.innerHTML = "Zoey won!";
    } else if(randomNumber1 == randomNumber2) {
        titleDisplay.innerHTML = "Try again!";
    } else if(randomNumber1 < randomNumber2) {
        titleDisplay.innerHTML = "Will won!";
    }

}
playDice();

