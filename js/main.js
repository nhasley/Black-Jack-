var deck = [];
var dCards = [];
var pCards = [];
var dTotal = 0;
var pTotal = 0;
var start = true;
var stop = false;
var suits = ["s", "c", "d", "h"];
var ranks = [
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

var pCon = document.getElementById("p-cards");
var dCon = document.getElementById("d-cards");
var pScore = document.getElementById("p-score");
var dScore = document.getElementById("d-score");
var msg = document.getElementById("message");
var title = document.getElementById("title");
document.getElementById("hit").addEventListener("click", crdHit);
document.getElementById("stay").addEventListener("click", stayFunc);
document.getElementById("start").addEventListener("click", startFunc);
document.getElementById("classic").addEventListener("click", classic);
document.getElementById("dance").addEventListener("click", dance);

var dance = new Audio("Bowie-Twerk.mp3");
var classic = new Audio("Spring_Allegro.mp3");

function dance() {
  dance.play();
  classic.pause();
}
function classic() {
  classic.play();
  dance.pause();
}
function changeCSS(file) {
  document.getElementById("theme").setAttribute("href", file);
}

function renderCard(deck, container) {
  container.innerHTML = "";
  var cardsHtml = deck.reduce(function(html, card) {
    return html + `<div class="card ${card.suit}${card.rank}"></div>`;
  }, "");
  container.innerHTML = cardsHtml;
}
function gameBoard() {
  //gameBoard refresh
  newScore();
  renderCard(dCards, dCon);
  renderCard(pCards, pCon);
  dScore.innerText = "Dealer score: " + dTotal;
  pScore.innerText = "Player score: " + pTotal;
  msg.innerText = "";
  if (stop) {
    if (win) {
      msg.innerText += "YOU WIN!";
      msg.style.fontSize = "100px";
      title.innerText = "";
      confetti.start(2000);
    } else {
      msg.innerText += "DEALER WINS";
      msg.style.fontSize = "100px";
      title.innerText = "";
    }
  }
}
//hit button
function crdHit() {
  pCards.push(deck.shift());
  cTotal(); //pull cTotal before newScore. Otherwise amount zero
  gameBoard();
}
//stay button
function stayFunc() {
  stop = true;
  cTotal();
  gameBoard();
}
//start button
function startFunc() {
  start = true;
  stop = false;
  deck = buildMasterDeck();
  shuffleDeck(deck);
  dCards = [deck.shift(), deck.shift()];
  pCards = [deck.shift(), deck.shift()];
  gameBoard();
  title.innerText = "Black Jack Extravaganza";
}
function buildMasterDeck() {
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let rankIdx = 0; rankIdx < ranks.length; rankIdx++) {
      let card = {
        suit: suits[suitIdx],
        rank: ranks[rankIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}
function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let rndIdx = Math.trunc(Math.random() * deck.length);
    let tempDeck = deck[rndIdx];
    deck[rndIdx] = deck[i];
    deck[i] = tempDeck;
  }
}
function cardVal(card) {
  switch (card.rank) {
    case "A":
      return 1;
      break;
    case "02":
      return 2;
      break;
    case "03":
      return 3;
      break;
    case "04":
      return 4;
      break;
    case "05":
      return 5;
      break;
    case "06":
      return 6;
      break;
    case "07":
      return 7;
      break;
    case "08":
      return 8;
      break;
    case "09":
      return 9;
      break;
    default:
      return 10;
      break;
  }
}
function pullScore(array) {
  let score = 0;
  let ace = false;
  for (let i = 0; i < array.length; i++) {
    let card = array[i];
    score += cardVal(card);
    if (card.rank == "A") {
      ace = true;
    }
    if (ace && score + 10 <= 21) {
      return score + 10;
    }
  }
  return score;
}
function newScore() {
  dTotal = pullScore(dCards);
  pTotal = pullScore(pCards);
}
function cTotal() {
  newScore();
  if (dTotal < pTotal && dTotal <= 21 && pTotal <= 21) {
    dCards.push(deck.shift());
    newScore();
  }
  if (pTotal > 21) {
    win = false;
    stop = true;
  } else if (dTotal > 21) {
    win = true;
    stop = true;
  } else if (stop) {
    if (pTotal > dTotal) {
      win = true;
    } else {
      win = false;
    }
  }
}
