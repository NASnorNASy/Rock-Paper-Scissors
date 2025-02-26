let RPS = Math.floor(Math.random() * 3 + 1);

const rockPlayer1 = document.getElementById('rock-player');
const paperPlayer1 = document.getElementById('paper-player');
const scissorsPlayer1 = document.getElementById('scissors-player');

const rockBot1 = document.getElementById('rock-bot1');
const paperBot1 = document.getElementById('paper-bot1');
const scissorsBot1 = document.getElementById('scissors-bot1');

const again = document.getElementById('again');

const results = document.getElementById('results');

let rockPlayer = 1;
let paperPlayer = 2;
let scissorsPlayer = 3;

rockPlayer1.addEventListener('click', () => {
    if (RPS == 1) {
        rockBot1.style.display = 'block';
        paperBot1.style.display = 'none';
        scissorsBot1.style.display = 'none';
        results.textContent = "Tie";
    }
    else if (RPS == 2) {
        paperBot1.style.display = 'block';
        rockBot1.style.display = 'none';
        scissorsBot1.style.display = 'none';
        results.textContent = "You lost";
    }
    else if (RPS == 3) {
        scissorsBot1.style.display = 'block';
        paperBot1.style.display = 'none';
        rockBot1.style.display = 'none';
        results.textContent = "You won";
    }
    again.style.display = 'block';
})
paperPlayer1.addEventListener('click', () => {
    if (RPS == 1) {
        rockBot1.style.display = 'block';
        paperBot1.style.display = 'none';
        scissorsBot1.style.display = 'none';
        results.textContent = "You won";
    }
    else if (RPS == 2) {
        paperBot1.style.display = 'block';
        rockBot1.style.display = 'none';
        scissorsBot1.style.display = 'none';
        results.textContent = "Tie";
    }
    else if (RPS == 3) {
        scissorsBot1.style.display = 'block';
        paperBot1.style.display = 'none';
        rockBot1.style.display = 'none';
        results.textContent = "You lost";
    }
    again.style.display = 'block';
})
scissorsPlayer1.addEventListener('click', () => {
    if (RPS == 1) {
        rockBot1.style.display = 'block';
        paperBot1.style.display = 'none';
        scissorsBot1.style.display = 'none';
        results.textContent = "You lost";
    }
    else if (RPS == 2) {
        paperBot1.style.display = 'block';
        rockBot1.style.display = 'none';
        scissorsBot1.style.display = 'none';
        results.textContent = "You won";
    }
    else if (RPS == 3) {
        scissorsBot1.style.display = 'block';
        paperBot1.style.display = 'none';
        rockBot1.style.display = 'none';
        results.textContent = "Tie";
    }
    again.style.display = 'block';
})