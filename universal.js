'use strict';
// Selecting DOM elements
const parent = document.querySelector('.parentcontainer');
const xSymbol = document.querySelector('.new-div');
const oSymbol = document.querySelector('.new-div1');
const turnContainer = document.querySelector('.turn-div');
const resetContainer = document.querySelector('.reset-div');
const resetButton = document.getElementsByTagName('button');
const box1 = document.querySelector('.boxes1');
const box2 = document.querySelector('.boxes2');
const box3 = document.querySelector('.boxes3');
const box4 = document.querySelector('.boxes4');
const box5 = document.querySelector('.boxes5');
const box6 = document.querySelector('.boxes6');
const box7 = document.querySelector('.boxes7');
const box8 = document.querySelector('.boxes8');
const box9 = document.querySelector('.boxes9');
const allBox = document.querySelectorAll('.boxes');
const tie = document.querySelector('.TIES');
const scoreO = document.querySelector('.score1');
const scoreX = document.querySelector('.score2');
const scoreTie = document.querySelector('.score3');
const winningWindow = document.querySelector('.result');
const winner = document.querySelector('.result-h1-2');
let turnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let playerSymbol = 'X'; // Default player symbol
let computerSymbol = 'O'; // Default computer symbol
const winningCombinations = [
  [box1, box2, box3],
  [box4, box5, box6],
  [box7, box8, box9],
  [box1, box4, box7],
  [box2, box5, box8],
  [box3, box6, box9],
  [box1, box5, box9],
  [box3, box5, box7],
];
const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

// Event listener for X symbol
xSymbol.addEventListener('click', function () {
  scoreO.textContent = 0;
  scoreX.textContent = 0;
  scoreTie.textContent = 0;
  playerSymbol = 'X';
  computerSymbol = 'O';
  turnContainer.textContent = 'YOU: X';
  xSymbol.style.color = '#2cc6be';
  oSymbol.style.color = '#a8bec9';
});

// Event listener for O symbol
oSymbol.addEventListener('click', function () {
  scoreO.textContent = 0;
  scoreX.textContent = 0;
  scoreTie.textContent = 0;
  playerSymbol = 'O';
  computerSymbol = 'X';
  turnContainer.textContent = 'YOU: O';
  xSymbol.style.color = '#a8bec9';
  oSymbol.style.color = '#2cc6be';
});

// Event listener for each box
allBox.forEach(function (changeText) {
  xSymbol.style.color = '#2cc6be';
  oSymbol.style.color = '#a8bec9';
  changeText.addEventListener('click', function () {
    // Check if the box has already been selected
    if (changeText.textContent === 'X' || changeText.textContent === 'O') {
      return; // Do nothing if the box is already selected
    }

    // Computer's turn logic
    let cpuTurn = Math.round(Math.random(turnArray) * turnArray.length);
    const boxNumber =
      Array.from(document.querySelectorAll('.boxes')).indexOf(changeText) + 1;

    // Remove the selected box from the available turns
    if (turnArray.find(num => num === boxNumber)) {
      turnArray.splice(turnArray.indexOf(boxNumber), 1);
    }

    // Check if the selected turn is available
    if (turnArray.includes(cpuTurn)) {
      allBox[cpuTurn - 1].textContent = computerSymbol;
      allBox[cpuTurn - 1].style.color = '#f2b237';
      turnArray.splice(turnArray.indexOf(cpuTurn), 1);
    } else if (turnArray.includes(cpuTurn) === false) {
      // If not find the first available turn and use it
      let random = 0;
      while (random < 10) {
        random += 1;
        if (turnArray.includes(random) === true) {
          allBox[random - 1].textContent = computerSymbol;
          allBox[random - 1].style.color = '#f2b237';
          turnArray.splice(turnArray.indexOf(random), 1);
          break;
        }
      }
    }

    // Set X or O based on player's turn
    if (changeText.textContent === 'X' || changeText.textContent === 'O') {
      if (changeText.textContent === 'X') {
        // If X is already present, keep it as X
        changeText.textContent = 'X';
      } else if (changeText.textContent === 'O') {
        // If O is already present, keep it as O and change color
        changeText.textContent = 'O';
        changeText.style.color = '#f2b237';
      }
    } else {
      // Set X or O based on player's symbol
      changeText.textContent = playerSymbol;
    }

    // Check if the game is over
    // Check if the game is over
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      // Check for player win
      if (
        a.textContent === playerSymbol &&
        b.textContent === playerSymbol &&
        c.textContent === playerSymbol
      ) {
        // Update scores and show winning message
        if (playerSymbol === 'X') {
          scoreX.textContent = Number(scoreX.textContent) + 1;
        } else {
          scoreO.textContent = Number(scoreO.textContent) + 1;
        }
        showWinningMessage(playerSymbol, '#00fff2');
        setTimeout(function () {
          // Clear the boxes and reset turnArray after a delay
          boxes.forEach(box => {
            box.textContent = '';
            box.style.color = ''; // Reset the text color
          });
          turnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }, 3000);
        break; // Exit the loop after showing the winning message
      }

      // Check for computer win
      if (
        a.textContent === computerSymbol &&
        b.textContent === computerSymbol &&
        c.textContent === computerSymbol
      ) {
        // Update scores and show winning message
        if (computerSymbol === 'X') {
          scoreX.textContent = Number(scoreX.textContent) + 1;
        } else {
          scoreO.textContent = Number(scoreO.textContent) + 1;
        }
        showWinningMessage(computerSymbol, '#f2b237');
        setTimeout(function () {
          // Clear the boxes and reset turnArray after a delay
          boxes.forEach(box => {
            box.textContent = '';
            box.style.color = ''; // Reset the text color
          });
          turnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }, 3000);
        break; // Exit the loop after showing the winning message
      }

      // Check for a tie
      if (
        box1.textContent !== '' &&
        box2.textContent !== '' &&
        box3.textContent !== '' &&
        box4.textContent !== '' &&
        box5.textContent !== '' &&
        box6.textContent !== '' &&
        box7.textContent !== '' &&
        box8.textContent !== '' &&
        box9.textContent !== ''
      ) {
        // Update scores and show tie message
        scoreTie.textContent = Number(scoreTie.textContent) + 1;
        showWinningMessage('TIE', '#a8bec9');
        setTimeout(function () {
          // Clear the boxes and reset turnArray after a delay
          boxes.forEach(box => {
            box.textContent = '';
            box.style.color = '';
            // Reset the text color
          });
          turnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }, 3000);
        break; // Exit the loop after showing the tie message
      }
    }
  });
});

// Reset button event listener
resetContainer.addEventListener('click', function () {
  // Reload the page to reset the game
  window.location.reload();
});

// Function to display winning message
function showWinningMessage(player, color) {
  winningWindow.style.display = 'block';
  winner.textContent = player;
  winner.style.color = color;
  parent.style.filter = 'blur(5px)';
  parent.style.webkitFilter = 'blur(8px)';
  setTimeout(function () {
    winningWindow.style.display = 'none';
    parent.style.filter = 'blur(0px)';
    parent.style.webkitFilter = 'blur(0px)';
  }, 3000);
}
