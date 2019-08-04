//defining elements
var money = 100;
var dCards = [];
var pCards = [];
var bet = 10;
var btnBet = document.getElementsByClassName("btnBet");

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

//getElementsById
document.getElementById("message");
// function status(){
//   if(!gameStarted)
// }

document.getElementById("hit").addEventListener("click", crdHit);
function crdHit() {
  alert("Hello");
}
document.getElementById("stay").addEventListener("click", stayFunc);
function stayFunc() {
  alert("Hello");
  return;
}
document.getElementById("start").addEventListener("click", startFunc);
function startFunc() {
  alert("Hello");
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

// build a 'master' deck of 'card' objects used to create shuffled decks
var masterDeck = buildMasterDeck();

function renderShuffledDeck() {
  // create a copy of the masterDeck (leave masterDeck untouched!)
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  renderDeckInContainer(shuffledDeck, shuffledContainer);
}

// ------
// const cards = {
//     suit:
//     val:
//     amt:
// },
// -----
// class cards {
//   constructor() {
//     this.deck = [];
//     const suits = ["s", "d", "c", "h"];
//     const values = [
//       "02",
//       "03",
//       "04",
//       "05",
//       "06",
//       "07",
//       "08",
//       "09",
//       "10",
//       "J",
//       "Q",
//       "K",
//       "A"
//     ];

//     for (let suit in suits) {
//       for (let value in values) {
//         this.deck.push(`${suits[suit]}${values[value]}`);
//       }
//     }
//   }
// }
// const deck1 = new Deck();
// console.log(deck1.deck);

// //needs work
// ----------------------
// function loopRand() {
//   pCards = [];
//   for (i = 0; i <= 5; i++) {
//     function rCard() {
//       return `${randSuit}${randVal}`;
//     }
//     pCards.push;
//   }
// }

// var cardEl = document.querySelector(`.card${suits}${values}`);
// var suits = ["s", "d", "c", "h"];
// var values = [02, 03, 04, 05, 06, 07, 08, 09, 10, "J", "Q", "K", "A"];
// let deck = [];
// var board, turn, winner;
// var cards = [];
// var player = [];
// var dealer = [];
// var strtTotl = 100;
// var curBet = 5;
// var bet = document.getElementsByClassName("bet1");

// function createDeck(){
//     for
//     deck.push()
// }

// //learned in class. repl(https://repl.it/@NovaHasley/hw-array-methods). It is last function.
// const dealRandom = deck.sort(function(){
//     return Math.random() - .5;
// });

// function createBoard(){
//     for(var i = 0; i < deck.length; i++)
//     cardEl
// }

// function crdAmt(){

// switch (values){
//     case 02:
//         cards.push('2');
//         break;
//     case 03:
//         cards.push('3');
//         break;
//     case 04:
//         cards.push('4');
//         break;
//     case 05:
//         cards.push('5');
//         break;
//     case 06:
//         cards.push('6');
//         break;
//     case 07:
//         cards.push('7');
//         break;
//     case 08:
//         cards.push('8');
//         break;
//     case 09:
//         cards.push('9');
//         break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//         cards.push('10');
//         break;
//     case "A":
//         var answer = prompt("Would you like the value of Ace to be 1 or 11?")
//         function(){
//             if(crdTotl === '1'){
//                 cards.push('1');
//             } else {
//                 cards.push('11')
//             }
//         }
//         break;
// }
// }

// var playerVal = player.reduce(function(accumuator, currentVal){
//     return accumuator + currentVal;
// },0);
// var dealerVal = dealer.reduce(function(accumuator, currentVal){
//     return accumuator + currentVal;
// },0);
// ------------------

// var deck = [];

//one way i could do this is make player 1 total positive to win
//and player 2 score negative to win -Math.abs turns # to neg (do this by making a function then having neg conversion within)

//     -querySelector for cards and attach the value?
//     -create objects?

// function start(pBet){
//     cards = [];
//     player = [];
//     dealer = [];
// }

// function hitMe(evt){
//     var idx = parsInt(evt.target.id.raplace)

//     get random card from deck
//     .push random card from deck
//     if card makes playerVal > than 21 do bust alert. if not keep playing

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
