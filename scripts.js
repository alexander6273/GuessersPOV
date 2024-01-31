"use strict"

window.addEventListener("DOMContentLoaded", start)

function start(){
    console.log("JS up and running")
    showGuess();
    document.querySelector("#button-too-low").addEventListener("click", guessIsTooLow);
    document.querySelector("#button-too-high").addEventListener("click", guessIsTooHigh);
    document.querySelector("#button-correct").addEventListener("click", guessIsCorrect);
}

function addEventListenerToButton(button){
    button.addEventListener("click");
}

function generateGuess(){
    return Math.floor(Math.random()*99)+1;
}

function showGuess(){
    const guessARandomNumber = generateGuess();
    const list = document.querySelector("#guess-list");
    const html = `<li>I am guessing ${guessARandomNumber} - is that correct?</li>`;
    list.insertAdjacentHTML("beforeend", html);
}

function guessIsCorrect(){
    console.log("correct");

    const winMessage = document.querySelector("#message-win");
    const html = `YES i got the correct anwser!`;
    winMessage.insertAdjacentHTML("beforeend", html);
    //winMessage.replaceWith(html);


}

function guessIsTooLow(){
    console.log("too low");
    showGuess();
}

function guessIsTooHigh(){
    console.log("too high");
    showGuess();
}