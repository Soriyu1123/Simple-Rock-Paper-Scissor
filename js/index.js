// Randomize using formula
var randomPicture1 = Math.floor(Math.random() * 3) + 1;
var randomPicture2 = Math.floor(Math.random() * 3) + 1;

// Variable for random images
var randomImage1 = `images/rsp${randomPicture1}.jpg`;
var randomImage2 = `images/rsp${randomPicture2}.jpg`;

// Image location using DOM
var image1 = document.querySelectorAll('img')[0];
var image2 = document.querySelectorAll('img')[1];

// DOM for img1 Injection to the Random Image Source 
image1.setAttribute('src', randomImage1);
image2.setAttribute('src', randomImage2);

// Variable Names for Each Hands
var rock = 'images/rsp1.jpg';
var scissors = 'images/rsp2.jpg';
var paper = 'images/rsp3.jpg';

// P1 Scissors vs P2 Paper
if(randomImage1 === scissors && randomImage2 === paper ){
    document.querySelector('h1').textContent = "SCISSORS WIN!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').textContent = "PLAYER 2 LOSE!";
    document.querySelector('.p2').style.textDecoration = "line-through";
}

//  P2 Scissors vs P1 Paper 
else if (randomImage2 === scissors && randomImage1 === paper ){
    document.querySelector('h1').textContent = "SCISSORS WIN!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE!";
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
    document.querySelector('.p1').style.textDecoration = "line-through";
}

// P1 Paper vs P2 Rock
else if (randomImage1 === paper && randomImage2 === rock ){
    document.querySelector('h1').textContent = "PAPER WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').textContent = "PLAYER 2 LOSE!";
    document.querySelector('.p2').style.textDecoration = "line-through";
}

// P2 Paper vs P1 Rock
else if (randomImage1 === rock && randomImage2 === paper ){
    document.querySelector('h1').textContent = "PAPER WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE!";
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
    document.querySelector('.p1').style.textDecoration = "line-through";
}

// P1 Rock vs P2 Scissors
else if (randomImage1 === rock && randomImage2 === scissors ){
    document.querySelector('h1').textContent = "ROCK WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').textContent = "PLAYER 2 LOSE!";
    document.querySelector('.p2').style.textDecoration = "line-through";
}

// P1 Scissors vs P2 Rock
else if (randomImage1 === scissors && randomImage2 === rock ){
    document.querySelector('h1').textContent = "ROCK WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE!";
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
    document.querySelector('.p1').style.textDecoration = "line-through";
}

else {
    document.querySelector('h1').textContent = "DRAW! TRY AGAIN!";
    document.querySelector('.p1').textContent = "PLAYER 1 DRAW!";
    document.querySelector('.p2').textContent = "PLAYER 2 DRAW!";
}


