"use strict";
const xSymbol = document.querySelector(".new-div");
const oSymbol = document.querySelector(".new-div1");
const turnContainer = document.querySelector(".turn-div");
const resetContainer = document.querySelector(".reset-div");
const resetButto = document.getElementsByTagName("button");
const box1 = document.querySelector(".boxes1");
const box2 = document.querySelector(".boxes2");
const box3 = document.querySelector(".boxes3");
const box4 = document.querySelector(".boxes4");
const box5 = document.querySelector(".boxes5");
const box6 = document.querySelector(".boxes6");
const box7 = document.querySelector(".boxes7");
const box8 = document.querySelector(".boxes8");
const box9 = document.querySelector(".boxes9");
const allBox = document.querySelectorAll(".boxes");
const xScore = document.querySelector(".scoreX");
const oScore = document.querySelector(".scoreO");
const tie = document.querySelector(".TIES");
const allBoxes = document.querySelectorAll(".boxes");
const cpuTurn = Math.round(Math.random((0, 9)) * 10);
console.log(cpuTurn);
//text changing
allBox.forEach(function (changeText) {
  changeText.addEventListener("click", function () {
    console.log("clicked");
    changeText.textContent = "X";
  });
});
//reset
resetContainer.addEventListener("click", function () {
  window.location.reload();
});
