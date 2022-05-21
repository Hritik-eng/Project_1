console.log("Welcome to my tic toc toe");
let audioTurn = new Audio("music.mp3");
let winMusic = new Audio("win_music.mp3");
let turn = "X";
let gameover = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2, 0.2, 4.5, 0],
    [3, 4, 5, 0.2, 14.5, 0],
    [6, 7, 8, 0.2, 24.5, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0.2, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, 135],
  ];

  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText !== "" &&
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText
    ) {
      document.querySelector(".info").innerText =
        boxText[e[0]].innerText + " Won";
      winMusic.play();
      document.querySelector(".img").style.width = "20vw";
      document.querySelector(".line").style.width = "30vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      gameover = true;
    }
  });
};

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

boxTexts = document.getElementsByClassName("boxText");
document.getElementById("reset").addEventListener("click", () => {
  Array.from(boxTexts).forEach((e) => {
    e.innerText = "";
  });
  turn = "X";
  gameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".img").style.width = "0vw";
  document.querySelector(".line").style.width = "0vw";
  winMusic.pause();
});
