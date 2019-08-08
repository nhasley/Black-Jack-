#Nova Blackjack Game

![Nova Hasley Blackjack game](https://i.imgur.com/AI0U1Dc.png)

##Object:
Beat the dealer by getting a count as close to 21 as possible, without going over 21.

##Game Link:
<http://novahasleyblackjack.surge.sh/>

##Languages

- HTML
- CSS
- Javascript

##User Persona
A fiesty lass who likes a cup of tea in the morning, but likes to party at night.

##MVP User stories
As a user I should be able to click the buttons and get the assigned objective.

I should see my card total.

I should have winners satisfaction.

##Stretch Goal
I should see my bet amount and what I have left

##Pseudo Code

```
var player = [];
var dealer = [];
var deck = [];

let playerVal = 0;
let dealerVal = 0;

var cards = [1,2,3,4,5,6,7,8,9,10,11];
-querySelector for cards and attach the -value?
create objects?

function start(){
   if player clicks button dealRandom. if not stay null
}

function dealRandom() {
   math.floor(math.random) generator
}

function hitMe(){
   get random card from deck
   .push random card from deck
   if card makes playerVal > than 21 do bust alert. if not keep playing
}

function stay(){
   if button is pressed then go to dealer
}

function curBet(){
   if player wins add 5,10,20 $
   if bet is done then hide button and replace with stay and hitMe buttons
}

function totAmt(){
   if player wins then add
   curBet.
   else player loses then take away curBet
```
