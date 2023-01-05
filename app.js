// Initialize `choices` array: r, p, s. representing rock, paper, or scissors.

let choices = ["rock", "paper", "scissors"];


let wins = 0;
let losses = 0;
let ties = 0;

//Prompt user to enter "r," "p," or "s".

for(let i = 0; i < 10; i++){

    let userChoice = prompt("Time to play! Select Rock, Paper or Scissors to play");
    if (userChoice === "rock" || "paper" || "scissors") {
    console.log(`You have chosen ${userChoice}`);
    } else {
    console.log("Error, please try typing rock, paper or scissors again.")
    } 
        
    let pcChoice = choices[Math.floor(Math.random()*3)]
    console.log(`The computer has chosen ${pcChoice}`);

    if (userChoice === "rock" && pcChoice === "paper") {
        alert(`${pcChoice} beats ${userChoice}, try again!`);
        losses++;
        alert(`You've Lost ${losses} times.`)
    } else if (userChoice === "paper" && pcChoice === "scissors") {
        alert(`${pcChoice} beats ${userChoice}, try again!`);
        losses++;
        alert(`You've Lost ${losses} times.`)
    } else if (userChoice === "scissors" && pcChoice === "rock") {
        alert(`${pcChoice} beats ${userChoice}, try again!`);
        losses++;
        alert(`You've Lost ${losses} times.`)
    } else if (userChoice === "paper" && pcChoice === "rock") {
        alert(`${userChoice} beats ${pcChoice}, Nice one!`);
        wins++;
        alert(`You've won ${wins} times.`)
    } else if (userChoice === "scissors" && pcChoice === "paper") {
        alert(`${userChoice} beats ${pcChoice}, Nice one!`);
        wins++;
        alert(`You've won ${wins} times.`)
    } else if (userChoice === "rock" && pcChoice === "scissors") {
        alert(`${userChoice} beats ${pcChoice}, Nice one!`);
        wins++;
        alert(`You've won ${wins} times.`)
    } else { 
        (userChoice === pcChoice)
        alert("Tie! Try again!");
        ties++;
        alert(`You've tied ${ties} times.`)
    }

    alert(`Wins:${wins} Losses:${losses} Ties:${tie}`)
}


