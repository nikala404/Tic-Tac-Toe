'use strict';
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
const allBoxes = document.querySelectorAll('.boxes');
const scoreO = document.querySelector('.score1');
const scoreX = document.querySelector('.score2');
const scoreTie = document.querySelector('.score3');
const winningWindow = document.querySelector('.result');
const winner = document.querySelector('.result-h1-2');
const turnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

//text changing and computer Logic
allBox.forEach(function (changeText) {
  changeText.addEventListener('click', function () {
    // Check if the box has already been selected
    if (changeText.textContent === 'X' || changeText.textContent === 'O') {
      return;
    }

    let cpuTurn = Math.round(Math.random(turnArray) * turnArray.length);
    const boxNumber =
      Array.from(document.querySelectorAll('.boxes')).indexOf(changeText) + 1;
    if (turnArray.find(num => num === boxNumber)) {
      turnArray.splice(turnArray.indexOf(boxNumber), 1);
    }
    if (turnArray.includes(cpuTurn)) {
      allBox[cpuTurn - 1].textContent = 'O';
      allBox[cpuTurn - 1].style.color = '#f2b237';
      turnArray.splice(turnArray.indexOf(cpuTurn), 1);
    } else if (turnArray.includes(cpuTurn) === false) {
      let random = 0;
      while (random < 10) {
        random += 1;
        if (turnArray.includes(random) === true) {
          allBox[random - 1].textContent = 'O';
          allBox[random - 1].style.color = '#f2b237';
          turnArray.splice(turnArray.indexOf(random), 1);
          break;
        }
      }
    }
    if (changeText.textContent === 'X' || changeText.textContent === 'O') {
      if (changeText.textContent === 'X') {
        changeText.textContent = 'X';
      } else if (changeText.textContent === 'O') {
        changeText.textContent = 'O';
        changeText.style.color = '#f2b237';
      }
    } else {
      changeText.textContent = 'X';
    }
    // Check if the game is over
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        a.textContent === 'X' &&
        b.textContent === 'X' &&
        c.textContent === 'X'
      ) {
        scoreX.textContent = Number(scoreX.textContent) + 1;
        winningWindow.style.display = 'block';
        winner.textContent = 'X';
        winner.style.color = '#00fff2';
        parent.style.filter = 'blur(5px)';
        parent.style.webkitFilter = 'blur(8px)';
        setTimeout(function () {
          winningWindow.style.display = 'none';
          parent.style.filter = 'blur(0px)';
          parent.style.webkitFilter = 'blur(0px)';
        }, 3000);

        break;
      }
      if (
        a.textContent === 'O' &&
        b.textContent === 'O' &&
        c.textContent === 'O'
      ) {
        scoreO.textContent = Number(scoreO.textContent) + 1;

        winningWindow.style.display = 'block';
        winner.textContent = 'O';
        winner.style.color = '#f2b237';
        parent.style.filter = 'blur(5px)';
        parent.style.webkitFilter = 'blur(8px)';
        setTimeout(function () {
          winningWindow.style.display = 'none';
          parent.style.filter = 'blur(0px)';
          parent.style.webkitFilter = 'blur(0px)';
        }, 3000);
        break;
      }
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
        scoreTie.textContent = Number(scoreTie.textContent) + 1;
        winningWindow.style.display = 'block';
        document.querySelector('.result-h1').textContent = '';
        winner.textContent = 'TIE';
        winner.style.color = '#a8bec9';
        parent.style.filter = 'blur(5px)';
        parent.style.webkitFilter = 'blur(8px)';
        setTimeout(function () {
          winningWindow.style.display = 'none';
          parent.style.filter = 'blur(0px)';
          parent.style.webkitFilter = 'blur(0px)';
        }, 3000);
        break;
      }
    }
  });
});

//reset
resetContainer.addEventListener('click', function () {
  window.location.reload();
});
