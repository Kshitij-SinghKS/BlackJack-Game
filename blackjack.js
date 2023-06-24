let firstcard = prompt("Enter the face value of first card","1-13")
let secondcard = prompt("Enter the face value of second card","1-13")
let sum = parseInt(firstcard)+parseInt(secondcard)
let cards = [firstcard,secondcard]
 function startgame()
 {
    rendergame()
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
    let nextcard  = prompt("Enter new card value:","1-13")
    sum+= parseInt(nextcard)
    cards.push(nextcard)
    rendergame()
}