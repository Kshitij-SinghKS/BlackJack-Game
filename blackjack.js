let sum = 0
let cards = []
let isAlive = false
let haveBlackjack = false
let firstcard
let secondcard

let player = {
    firstname:" Kshitij " ,
     chips:1000
 }
 let playerEl = document.querySelector("#player-el")
   playerEl.textContent = player.firstname + " " + player.chips



 function startgame()
 {
    isAlive = true
    let firstcard = getRandom()
    let secondcard = getRandom()
    sum = firstcard + secondcard
    cards = [firstcard,secondcard]
    rendergame()
 }
 function getRandom(){
    let rcard = Math.floor((Math.random()*13)+1)
    if(rcard === 1)
    return 11;
    else if(rcard === 11||rcard === 12||rcard === 13)
    return 10;
    else 
    return rcard;
 }

function rendergame()
{
    let sumEl = document.querySelector("#sum-el")
    sumEl.textContent = "Sum: "+sum
    let cardEl = document.getElementById("cards-el")
    cardEl.textContent = "Cards: "+cards

    let message = ""

    let messageEl = document.querySelector("#message-el")
    if(sum<=20)
    {
        message = "Do you want to draw a card !!"
    }
    else if(sum===21)
    {
        haveBlackjack =true
        message = "Wohoo!! You have a Blackjack"
    }
    else
   { isAlive = false
    message = "Huh!! You are out of the game"
   }
    messageEl.textContent = message
  
}

function cardnew()
{
    if(isAlive===true && haveBlackjack===false)
    {
    let nextcard  = getRandom()
    sum+= nextcard
    cards.push(nextcard)
    rendergame()
    }
}