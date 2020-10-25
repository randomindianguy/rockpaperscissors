let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_p = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
    const choice = ['r', 'p', 's'];
    const compChoice = Math.floor(Math.random() * 3);
    return choice[compChoice];
}

function convertToWord(letter){
    if(letter == 'r') return "Rock";
    if(letter == 'p') return "Paper";
    return "Scissors";
}

function win (userChoice, compChoice){
    const smallUserWord = " //User".fontsize(2).sub();
    const smallCompWord = " //Comp".fontsize(2).sub();
    const userChoice_div = document.getElementById(userChoice).classList;
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}`; 
    userChoice_div.add('green-glow');
    setTimeout(()=> userChoice_div.remove('green-glow'), 300);
}

function lose (userChoice, compChoice){
    const smallUserWord = " //User".fontsize(2).sub();
    const smallCompWord = " //Comp".fontsize(2).sub();
    const userChoice_div = document.getElementById(userChoice).classList;
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}`;
    userChoice_div.add('red-glow');
    setTimeout(() => userChoice_div.remove('red-glow'), 300);
}

function draw (userChoice, compChoice){
    const smallUserWord = "//User".fontsize(2).sub();
    const smallCompWord = "//Comp".fontsize(2).sub();
    const userChoice_div = document.getElementById(userChoice).classList;
    result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} is equal to ${convertToWord(compChoice)}${smallCompWord}. Try Again!`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.remove('grey-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getCompChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "sp":
        case "pr": 
                    win(userChoice, computerChoice);
                    break;
        case "rp":
        case "ps":
        case "sr":
                    lose(userChoice, computerChoice);
                    break;
        case "rr":
        case "pp":
        case "ss":
                    draw(userChoice, computerChoice);
                    break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}

main();
