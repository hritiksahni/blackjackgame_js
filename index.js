

let age = 21

if(age < 21)
{
    console.log("You can not enter the club!")
}
else{
    console.log("welcome")
}


let age1 = 100

if(age1 < 100){
    console.log("not elegible")
}

else if(age1 === 100)
{
    console.log("Here is your birthday card from the King!")
}
else
{
    console.log("Not elegible, you have already gotten one")
}



let player = {
    name : "Ritik", chips : 999 
}
let hasBlackjack = false
let isAlive = false
let message = " "
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")




let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + "$" + player.chips


function getRandomCard()
{ 
       let randomnumber = Math.floor(Math.random() * 13) + 1
       if  (randomnumber > 10)
       {
           return 10
       }else if (randomnumber === 1)
       {
           return 11
       }else{
           return randomnumber
       }
       

       

}

function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){

sumEl.textContent = "Sum: " +sum

cardsEl.textContent = "Cards: "

for(let i = 0; i < cards.length; i += 1)
{
cardsEl.textContent += cards[i] + " "
}
if(sum <= 20){
    message = "Do you want to draw a new card? 🙂"
    isAlive = true
  
}

else if (sum === 21){
    message = "Wohoo! You've got Blackjack! 🥳"

        hasBlackjack = true
    }

else{
    message = "You're out of the game! 😭"
        isAlive = false
    }



    messageEl.textContent = message 
    
    
}

function newCard()
{
if (isAlive === true && hasBlackjack === false )
{
   let thirdCard = getRandomCard()
   sum = sum + thirdCard
   cards.push(thirdCard)
   console.log(cards)

   renderGame()
}
}