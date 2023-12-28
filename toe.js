let btns = document.querySelectorAll('.btn');
let resetBtn = document.querySelector(".reset");
let winnerBox = document.querySelector(".winnerbox");
let winnerMsg = document.querySelector(".winnermsg"); 
let newGameBtn = document.querySelector(".newgame"); 

let turn = true;
const winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const showWinnerBox = (message) => { 
    winnerMsg.innerText = message;
    winnerBox.style.display = "block";
};
      
const hideWinnerBox = () => {
    winnerBox.style.display = "none";
};

const reset = () => {
    hideWinnerBox();
    turn = true;
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
};

const disableBtns = () => {
    for (let btn of btns) {
        btn.disabled = true;
    }
};

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("btn was clicked");
            if (turn) {
                btn.innerText = "O";
                turn = false;
                btn.disabled = true;
            } 
            else {
                btn.innerText = "X";
                turn = true;
                btn.disabled = true;
            }
        checkWinner();
    });
});

const checkWinner = () => {
    for (let i = 0; i < winner.length; i++) {
        const [a, b, c] = winner[i];
        const btnA = btns[a].innerText;
        const btnB = btns[b].innerText;
        const btnC = btns[c].innerText;
        if (btnA !== "" && btnB !== "" && btnC !== "") {
            if (btnA == btnB && btnB == btnC) {
                showWinnerBox(`Player ${btnA} wins!\n😀😀`);
                disableBtns();
            }
        }
    }
};

resetBtn.addEventListener("click", reset);
newGameBtn.addEventListener("click", reset);

