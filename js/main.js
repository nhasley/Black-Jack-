/*----- constants -----*/ 
const PLAYERS = {
    '1': 'Player 1',
    '-1': 'Player 2',
    'null': 'Blank' //is this needed?
}
/*----- app's state (variables) -----*/ 
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 
/*----- functions -----*/



//needs work
var board, turn, winner;
var cards = []
var player = [cards[i]];
var dealer = [cards[i]];
// var deck = [];

//one way i could do this is make player 1 total positive to win 
//and player 2 score negative to win -Math.abs turns # to neg (do this by making a function then having neg conversion within)


let playerVal = 0;
let dealerVal = 0;// do we need two? or just one cardVal?

let cardVal? = 0;
switch (cardVal?){
    case '2':
        cards.push('2');
        break;
    case '3':
        cards.push('3');
        break;
    case '4':
        cards.push('4');
        break;
    case '5':
        cards.push('5');
        break;
    case '6':
        cards.push('6');
        break;
    case '7':
        cards.push('7');
        break;
    case '8':
        cards.push('8');
        break;
    case '9':
        cards.push('9');
        break;
    case '10':
    case 'J':
    case 'Q':
    case 'K':
        cards.push('10');
        break;
    case 'A':
        var answer = prompt("Would you like the value of Ace to be 1 or 11?")
        function(){
            if(answer === '1'){
                cards.push('1');
            } else {
                cards.push('11')
            }
        }
        break;
}


var cards = [1,2,3,4,5,6,7,8,9,10,11];
    -querySelector for cards and attach the value?
    -create objects?

function start(){
    if deck val = 0 then use start function
    else if in play then change .innerhtml to a reset button. 
        if reset button then set board to null.
}
function dealRandom() {
    math.floor(math.random) generator
}
function hitMe(evt){
    var idx = parsInt(evt.target.id.raplace)

    get random card from deck
    .push random card from deck
    if card makes playerVal > than 21 do bust alert. if not keep playing

}
function stay(){
    if button is pressed then go to dealer

}
function dealer(){
    have ai function
    if *stay function is clicked. dealer is lower than 15 do hitMe to dealer
}

function curBet(){
    if player wins totAmt + curBet
    else if player loses totAmt - curBet 
    if bet is done then hide button and replace with stay and hitMe buttons
}

// if player wins then add *curBet. 
// else player loses then take away *curBet.
let totAmt = arr => arr.reduce(player[i])
totAmt <= 21 ? /*keep going */ : (alert("Bust!"))
    
