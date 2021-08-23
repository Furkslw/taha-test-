/*Daha sonra kullanmak üzere kullanılacakları tanımlıyoruz*/
var userScore = 0;
var pcScore = 0;
const userScoreSpan = document.getElementById("kullanıcı-skor");
const pcScoreSpan = document.getElementById("pc-skor");
const scoreBoardDiv = document.querySelector(".skor");
const resultP = document.querySelector(".sonuc > p");
const tasDiv = document.getElementById("t");
const kagitDiv = document.getElementById("k");
const makasDiv = document.getElementById("m");
/*Kazanıp Kaybetme Yazısını değiştirmek için*/
function convertToWord(yazi) {
  if (yazi === "t") return "Taş";
  if (yazi === "k") return "Kağıt";
  return "Makas";
}
/* bilgisayara random 3 sayı arasından seçtirmek için Math.blabla() * 3 şeklinde yazıyoruz. Sadece 0 1 2 dönmesi için başına Math.floor ekleniyor*/
function getComputerChoice() {
  const choices = ["t", "k", "m"];
  const randomSayi = Math.floor(Math.random() * 3);
  return choices[randomSayi];
}
/* Kazanma fonksiyonu */
function kazanma(userSecim, computerChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  pcScoreSpan.innerHTML = pcScore;

  resultP.innerHTML =
    convertToWord(userSecim) +
    " " +
    convertToWord(computerChoice) +
    "ı SİKTİ. Sen Kazandın!!";
  document.getElementById(userSecim).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userSecim).classList.remove("green-glow");
  }, 1000);
}
/*kaybetme fonksiyonu  */
function kaybetme(userSecim, computerChoice) {
  pcScore++;
  userScoreSpan.innerHTML = userScore;
  pcScoreSpan.innerHTML = pcScore;

  resultP.innerHTML =
    convertToWord(computerChoice) +
    " " +
    convertToWord(userSecim) +
    "ı SİKTİ. KAYBETTİN AMK!";
  document.getElementById(userSecim).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userSecim).classList.remove("red-glow");
  }, 1000);
}
/*Berabere Durumu Fonksiyonu*/
function berabere() {
  resultP.innerHTML = "Berabere Brom!!";
  document.getElementById(userSecim).classList.add("gray-glow");
  setTimeout(function () {
    document.getElementById(userSecim).classList.remove("gray-glow");
  }, 1000);
}
/*Oyunu switch üzerinden kodlamak */
function game(userSecim) {
  const computerChoice = getComputerChoice();
  switch (userSecim + computerChoice) {
    case "tm":
    case "kt":
    case "mk":
      kazanma(userSecim, computerChoice);
      break;
    case "tk":
    case "km":
    case "mt":
      kaybetme(userSecim, computerChoice);
      break;
    case "tt":
    case "kk":
    case "mm":
      berabere(userSecim, computerChoice);
      break;
  }
}

game();
function main() {
  tasDiv.addEventListener("click", () => {
    game("t");
  });
  kagitDiv.addEventListener("click", () => {
    game("k");
  });
  makasDiv.addEventListener("click", () => {
    game("m");
  });
}

main();
