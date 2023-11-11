'use strict';
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
const xScore = document.querySelector('.scoreX');
const oScore = document.querySelector('.scoreO');
const tie = document.querySelector('.TIES');
const allBoxes = document.querySelectorAll('.boxes');
const turnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
    if (turnArray.length === 0) {
      alert('Tie');
      window.location.reload();
    }
  });
});

//reset
resetContainer.addEventListener('click', function () {
  window.location.reload();
});
