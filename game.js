// game.js

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""]; // Tracks the game state
let isGameOver = false;

const boxes = document.querySelectorAll("#box");
const resetButton = document.getElementById("reset");

// Function to handle a click on a box
function handleBoxClick(index) {
  if (isGameOver || gameBoard[index] !== "") return;

  gameBoard[index] = currentPlayer;
  boxes[index].textContent = currentPlayer;

  // Check for a winner
  if (checkWinner()) {
    setTimeout(() => alert(`${currentPlayer} wins!`), 100);
    isGameOver = true;
    return;
  }

  // Switch the player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Function to check if there's a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    );
  });
}

// Add event listeners to the boxes
boxes.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index));
});

// Reset the game
resetButton.addEventListener("click", () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  isGameOver = false;
  currentPlayer = "X";
  boxes.forEach((box) => (box.textContent = ""));
});
