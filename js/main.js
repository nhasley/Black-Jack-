//defining elements
var dCards = [];
var pCards = [];
var dTotal = 0;
var pTotal = 0;
var deck = [];
var start = true;
var stop = false;
var pCon = document.getElementById("p-cards");
var dCon = document.getElementById("d-cards");

var pScore = document.getElementById("p-score");
var dScore = document.getElementById("d-score");

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

var msg = document.getElementById("message");
var title = document.getElementById("title");

// function renderCard(card) {
//   return `${card.rank}${card.value}`;
// }

function renderCard(deck, container) {
  container.innerHTML = "";
  var cardsHtml = deck.reduce(function(html, card) {
    return html + `<div class="card ${card.rank}${card.value}"></div>`;
  }, "");
  container.innerHTML = cardsHtml;
}

function gameBoard() {
  newScore();
  renderCard(dCards, dCon);
  renderCard(pCards, pCon);
  dScore.innerText = "Dealer score: " + dTotal;
  pScore.innerText = "Player score: " + pTotal;

  if (stop) {
    if (win) {
      msg.innerText += "YOU WIN!";
      title.innerText = "";
      startConfetti();
    } else {
      msg.innerText += "DEALER WINS";
      title.innerText = "";
    }
  }
}

document.getElementById("hit").addEventListener("click", crdHit);
function crdHit() {
  pCards.push(deck.shift());
  cTotal();
  gameBoard();
}

document.getElementById("stay").addEventListener("click", stayFunc);
function stayFunc() {
  stop = true;
  cTotal();
  gameBoard();
  return;
}

document.getElementById("start").addEventListener("click", startFunc);
function startFunc() {
  start = true;
  stop = false;
  deck = buildMasterDeck();
  shuffleDeck(deck);
  dCards = [deck.shift(), deck.shift()];
  pCards = [deck.shift(), deck.shift()];
  gameBoard();
  msg.innerText = "";
  title.innerText = "Black Jack Extravaganza";
  stopConfetti();
}
function buildMasterDeck() {
  let deck = [];
  for (let rankIdx = 0; rankIdx < suits.length; rankIdx++) {
    for (let valueIdx = 0; valueIdx < ranks.length; valueIdx++) {
      let card = {
        rank: suits[rankIdx],
        value: ranks[valueIdx]
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
  switch (card.value) {
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
    if (card.value == "A") {
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
