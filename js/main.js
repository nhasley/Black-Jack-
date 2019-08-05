//defining elements
var dCards = [];
var pCards = [];
var dTotal = 0;
var pTotal = 0;
var deck = [];

// var money = 100;
// var bet = 10;
// var btnBet = document.getElementsByClassName("btnBet");

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

var start = true,
  stop = false;
//getElementsById
document.getElementById("message");
function status() {
  if (!start) {
    message.innerHTML = "Let's Play";
  }
}

document.getElementById("hit").addEventListener("click", crdHit);
function crdHit() {
  pCards.push(shuffledDeck.pop());
  cTotal();
}

document.getElementById("stay").addEventListener("click", stayFunc);
function stayFunc() {
  stop = true;

  return;
}

document.getElementById("start").addEventListener("click", startFunc);
function startFunc() {
  start = true;
  stop = false;
  dCards = [shuffledDeck.pop(), shuffledDeck.shift()];
  pCards = [shuffledDeck.pop(), shuffledDeck.shift()];
  renderShuffledDeck(); //or shuffedDeck
}

// test
function buildMasterDeck() {
  var deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
        // the 'face' property maps to the CSS classes for cards
        face: `${suit}${rank}`,
        // the 'value' property is set for blackjack, not war
        value: Number(rank) || (rank === "A" ? 11 : 10)
      });
    });
  });
  return deck;
}
var masterDeck = buildMasterDeck();
var shuffledDeck;
renderShuffledDeck();
function renderShuffledDeck() {
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  // renderDeckInContainer(shuffledDeck, shuffledContainer);
}
var pContainer = document.getElementById("p-cards");
function renderCards(deck, container) {
  container.innerHTML = "";
  var cardsHtml = shuffledDeck.reduce(function(html, card) {
    return html + `<div class="card ${card.face}"></div>`;
  }, "");
  container.innerHTML = cardsHtml;
}
var card = renderCards(shuffledDeck.pop(), pContainer);

// var pContainer = document.getElementById('p-cards');
// var cardEl = document.createElement('div');
// cardEl.classList.add("card ${card.face}")

// // -------------

// function cardVal(card){
//   switch (values){
//     case "A":
//       return 1;
//       break;
//     case 02:
//       return 2;
//       break;
//     case 03:
//       return 3;
//       break;
//     case 04:
//       return 4;
//       break;
//     case 05:
//       return 5;
//       break;
//     case 06:
//       return 6;
//       break;
//     case 07:
//       return 7;
//       break;
//     case 08:
//       return 8;
//       break;
//     case 09:
//       return 9;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//       return 10;
//       break;
//   }

// function pullScore(array){
//   let score = 0;
//   let ace = false;
//   for(let i = 0; i < array.length; i++){ //use reduce instead?
//     let card = array[i];
//     score += cardVal(card);
//     if(card.value == "A"){
//       ace = true;
//     }
//     if(ace && score + 10 <= 21){ //if there's an ace and score+10 is less than 21
//       return score + 10;
//     }
//   }
//   return score;
// }

// function newScore() {
//   dTotal = pullScore(dCards);
//   pTotal = pullScore(pCards);
// }

// // function cTotal() {}

// // -----------------------

// // function renderDeckInContainer(deck, container) {
// //   container.innerHTML = "";
// //   // Let's build the cards as a string of HTML
// //   var cardsHtml = deck.reduce(function(html, card) {
// //     return html + `<div class="card ${card.face}"></div>`;
// //   }, "");
// //   container.innerHTML = cardsHtml;
// // }

// // ----?
// let card1 = function() {
//   return shuffledDeck.pop();
// };
// let card2 = function() {
//   return shuffledDeck.pop();
// };
// var playerContainer = document.getElementsById("p-cards");
// var dealerContainer = document.getElementsById("d-cards");
// renderDeckInContainer(card1, playerContainer);
// renderDeckInContainer(card2, dealerContainer);
// // ------

// ///add players Cards
// const playerAmt = obj => pCards.values(obj).reduce((a, b) => a + b);
// const dealerAmt = obj => dCards.values(obj).reduce((a, b) => a + b);

// //needs work

// //learned in class. repl(https://repl.it/@NovaHasley/hw-array-methods). It is last function.
// const dealRandom = deck.sort(function(){
//     return Math.random() - .5;
// });

//
// }
// }

// var playerVal = player.reduce(function(accumuator, currentVal){
//     return accumuator + currentVal;
// },0);
// var dealerVal = dealer.reduce(function(accumuator, currentVal){
//     return accumuator + currentVal;
// },0);
// ------------------

//one way i could do this is make player 1 total positive to win
//and player 2 score negative to win -Math.abs turns # to neg (do this by making a function then having neg conversion within)

//     -querySelector for cards and attach the value?
//     -create objects?

// }
// function stay(){
//     if button is pressed then go to dealer

// }
// function dealer(){
//     have ai function
//     if *stay function is clicked. dealer is lower than 15 do hitMe to dealer
// }

// function curBet(){
//     if player wins totAmt + curBet
//     else if player loses totAmt - curBet
//     if bet is done then hide button and replace with stay and hitMe buttons
// }

// // if player wins then add *curBet.
// // else player loses then take away *curBet.
// let totAmt = arr => arr.reduce(player[i])
// totAmt <= 21 ? /*keep going */ : (alert("Bust!"))
