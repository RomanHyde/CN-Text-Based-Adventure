let name = prompt("what is your name?");
console.log(`Hi ${name}!`);

let start = prompt("Would you like to play a game?").toLowerCase;

switch (start) {
    case "y":
    case "yes":
    case "yeah":
    case "yee":
    case "ye":
        console.log("Lets start!");
        gamestart();
        break;
    case "n":
    case "no":
    case "nope":
    case "nah":
        console.log("I'll find someone else to play with then. Goodbye.");
        gameEnd();
        break;
    default:
        console.log("I'm sorry I didn't understand!");

};

// -------------------------------------------------------------------------------
// The End Function Module

 gameEnd = () => {
     console.log("The End.")
 }

// -------------------------------------------------------------------------------
// Start Game Function Module
// const gamestart = () => {
//     Options here (pick a game option)
// };



// -------------------------------------------------------------------------------
// Rock Paper Scissors Function Module

const rpsStart = () => {
    cpuPick = (moves) => {

        return moves[Math.floor(Math.random() * moves.length)];
    }
    // pick variable is a stand in for the player's choice.
    let pick = prompt("Lets play rock paper scissors! Pick one!").toLowerCase();
    //moves array is the choice of options for the computer to choose from.
    let moves = ["rock", "paper", "scissors"];
    let cpuChoice = cpuPick(moves);


    // if/else statement selector determines the rules
    if (pick == cpuChoice) {
        console.log("Draw!")
    } else if (pick.toLowerCase() == "rock" && cpuChoice == "paper") {
        console.log("Computer wins!")
    } else if (pick.toLowerCase() == "paper" && cpuChoice == "scissors") {
        console.log("Computer wins!")
    } else if (pick.toLowerCase() == "scissors" && cpuChoice == "rock") {
        console.log("Computer wins!")
    } else if (cpuChoice == "rock" && pick.toLowerCase() == "paper") {
        console.log("You win!")
    } else if (cpuChoice == "paper" && pick.toLowerCase() == "scissors") {
        console.log("You win!")
    } else if (cpuChoice == "scissors" && pick.toLowerCase() == "rock") {
        console.log("You win!")
    } else {
        console.log("Please pick a move. Your options are, rock, paper and scissors.")
    };


    console.log(`You picked ${pick} and computer picked ` + cpuChoice + ".");
};

// -------------------------------------------------------------------------------
// "Would you like to play again?" Function Module


const rpsQuestion = () => {

    let again = prompt("Would you like to play again?");
    switch (again) {
        case "y":
        case "yes":
        case "yeah":
        case "yee":
        case "ye":
            console.log("Lets start!");
            rpsStart();
            break;
        case "n":
        case "no":
        case "nope":
        case "nah":
            console.log("I'll find someone else to play with then. Goodbye.");
            gameEnd();
            break;
        default:
            console.log("I'm sorry I didn't understand!");
    };

};


// Messy experimental code below this line.
// I'm leaving in some of my working so far so my teachers can try and understand my thought process (I wouldn't normally keep this stuff in).
// ------------------------------------------------------------




// Note: I have no idea if there's a way to put two variables into a switch statement yet.
// let pick = "rock"
// let moves = "rock"



// switch (pick, moves) {
//     case pick == "rock" && moves == "paper":
//     case pick == "paper" && moves == "scissors":
//     case pick == "scissors" && moves == "rock":
//         console.log("Computer wins!");
//         break;
//     case moves== "rock" && pick == "paper":
//     case moves == "paper" && pick == "scissors":
//     case moves == "scissors" && pick == "rock":
//         console.log("You win!");
//         break;
//     case pick == moves:
//         console.log("Draw!")
//         break;
//   };






