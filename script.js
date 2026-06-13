let randomNumber = Math.floor(Math.random() * 100) + 1;

let attemptsLeft = 10;

const guessInput = document.querySelector("#guessInput");
const checkBtn = document.querySelector("#checkBtn");
const restartBtn = document.querySelector("#restartBtn");
const message = document.querySelector("#message");
const attempts = document.querySelector("#attempts");

checkBtn.addEventListener("click", () => {

    let userGuess = Number(guessInput.value);

    if(userGuess === 0){
        message.innerText = "⚠ Please enter a number";
        return;
    }

    attemptsLeft--;
    attempts.innerText = attemptsLeft;

    if(userGuess === randomNumber){

        message.innerText =
        `🎉 You Won! Number was ${randomNumber}`;

        message.style.color = "green";

        guessInput.disabled = true;
        checkBtn.disabled = true;
    }

    else if(userGuess > randomNumber){

        message.innerText = "📈 Too High!";
        message.style.color = "red";
    }

    else{

        message.innerText = "📉 Too Low!";
        message.style.color = "red";
    }

    if(attemptsLeft === 0 && userGuess !== randomNumber){

        message.innerText =
        `💀 Game Over! Number was ${randomNumber}`;

        message.style.color = "darkred";

        guessInput.disabled = true;
        checkBtn.disabled = true;
    }

    guessInput.value = "";
});

restartBtn.addEventListener("click", () => {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attemptsLeft = 10;

    attempts.innerText = attemptsLeft;

    message.innerText = "";

    guessInput.disabled = false;
    checkBtn.disabled = false;

    guessInput.value = "";
});