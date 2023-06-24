let firstcard = getRandom()
let secondcard = getRandom()
let sum = firstcard + secondcard
let cards = [firstcard,secondcard]
 function startgame()
 {
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
        message = "Do you want to draw a card !!";
    }
    else if(sum===21)
    {
        message = "Wohoo!! You have a Blackjack";
    }
    else
    message = "Huh!! You are out of the game";
    messageEl.textContent = message
  
}

function cardnew()
{
    let nextcard  = getRandom()
    sum+= parseInt(nextcard)
    cards.push(nextcard)
    rendergame()
}