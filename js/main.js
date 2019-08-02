/*----- constants -----*/


/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/



// //needs work

let deck = [];
var board, turn, winner;
var cards = [];
var player = [];
var dealer = [];
var strtTotl = 100;
var curBet = 5;
var bet = document.getElementsByClassName("bet1");


var suits = ["s", "d", "c", "h"];
var values = [02, 03, 04, 05, 06, 07, 08, 09, 10, "J", "Q", "K", "A"];
var cardEl = document.querySelector(`.card${suits}${values}`);


function createDeck(){
    for
    deck.push()
}

//learned in class. repl(https://repl.it/@NovaHasley/hw-array-methods). It is last function.
const dealRandom = deck.sort(function(){
    return Math.random() - .5;
});

function createBoard(){
    for(var i = 0; i < deck.length; i++)
    cardEl
}

function crdAmt(){

switch (values){
    case 02:
        cards.push('2');
        break;
    case 03:
        cards.push('3');
        break;
    case 04:
        cards.push('4');
        break;
    case 05:
        cards.push('5');
        break;
    case 06:
        cards.push('6');
        break;
    case 07:
        cards.push('7');
        break;
    case 08:
        cards.push('8');
        break;
    case 09:
        cards.push('9');
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
        cards.push('10');
        break;
    case "A":
        var answer = prompt("Would you like the value of Ace to be 1 or 11?")
        function(){
            if(crdTotl === '1'){
                cards.push('1');
            } else {
                cards.push('11')
            }
        }
        break;
}
}


var playerVal = player.reduce(function(accumuator, currentVal){
    return accumuator + currentVal;
},0);
var dealerVal = dealer.reduce(function(accumuator, currentVal){
    return accumuator + currentVal;
},0);

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
