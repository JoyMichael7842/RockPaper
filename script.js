
const STATES = ['rock','paper','scissors']

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return STATES[Math.floor(Math.random() * STATES.length)];
}



function getHumanChoice(){
    var humanChoice = prompt('choose')
    return humanChoice
}



function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase()

    if(humanChoice=='rock'){
        if(computerChoice === 'scissors'){
            console.log('you win '+ humanChoice + ' beats '+computerChoice)
            humanScore+=1
        }
        else if(computerChoice === 'paper'){
            console.log('you lose '+ computerChoice + ' beats '+humanChoice)
            computerScore+=1
        }
        else{
            console.log('draw')
        }
    }
    if(humanChoice=='paper'){
        if(computerChoice === 'rock'){
            console.log('you win '+ humanChoice + ' beats '+computerChoice)
            humanScore+=1
        }
        else if(computerChoice === 'scissors'){
            console.log('you lose '+ computerChoice + ' beats '+humanChoice)
            computerScore+=1
        }
        else{
            console.log('draw')
        }
    }
    if(humanChoice=='scissors'){
        if(computerChoice === 'paper'){
            console.log('you win '+ humanChoice + ' beats '+computerChoice)
            humanScore+=1
        }
        else if(computerChoice === 'rock'){
            console.log('you lose '+ computerChoice + ' beats '+humanChoice)
            computerScore+=1
        }
        else{
            console.log('draw')
        }
    }

}

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log('human score: '+humanScore)
    console.log('computer score: '+computerScore)
}

playGame()
playGame()
playGame()
playGame()
playGame()
