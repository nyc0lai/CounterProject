let randomNumber = getRandomNumber(300);//generate initial a random number

let screenElement = document.getElementById('screen');
let minus = document.getElementById('btn-minus');
let plus = document.getElementById('btn-plus');

let randomNumberNode = document.createTextNode(randomNumber)
screenElement.appendChild(randomNumberNode)

minus.addEventListener('click', decriment);//add event to minus button
plus.addEventListener('click', incriment);//add event to plus button

// screen number incriment
function incriment() {
randomNumber++;
screenElement.innerText = randomNumber; 
}

//screen number decriment
function decriment() {
    if(randomNumber > 1) {
    randomNumber--;
    screenElement.innerText = randomNumber;
    }else{//if screen number = with zero then generate another random number
        randomNumber = getRandomNumber(300);
        screenElement.innerText = randomNumber;
    }

}

function getRandomNumber (max) {
    return Math.floor(Math.random()*(max+1));
}


