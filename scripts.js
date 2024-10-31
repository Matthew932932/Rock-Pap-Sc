console.log("Hello world");


let sign = ""; //prompt("Rock, Paper or Scissors?");
let compCh = "";
let pRes = "";
// console.log("sign1.5");
// console.log(sign);
let humanScore = 0;
let computerScore = 0;
let roundRes = "start";
let games = 0;
const sect = document.querySelector('.MainCont');
const sect2 = document.querySelector('.MainCont');    
const rockB = document.querySelector('#rock');
const paperB = document.querySelector('#paper');
const scissorsB = document.querySelector('#scissors');
const divItem = document.createElement('div');
divItem.setAttribute("class", "user-choice");
const divItem2 = document.createElement('div');
divItem2.setAttribute("class", "score");


function playRound(pRcc, pRhc)
{
    let result = "ERROR";
    
    if((pRcc === "rock") && (pRhc === "rock"))
    {
        result = "draw";
    }
    else if(pRcc === "rock" && pRhc === "paper")
    {
        result = "cclose";
    }
    else if(pRcc === "rock" && pRhc === "scissors")
    {
         result = "ccwin";
    }
    else if(pRcc === "paper" && pRhc === "paper")
    {
       result = "draw";
    }
    else if(pRcc === "paper" && pRhc === "rock")
    {
        result = "ccwin";
    }
    else if(pRcc === "paper" && pRhc === "scissors")
    {
         result = "cclose";
    }
    else if(pRcc === "scissors" && pRhc === "scissors")
    {
       result = "draw";
    }
    else if(pRcc === "scissors" && pRhc === "rock")
    {
        result = "cclose";
    }
    else if(pRcc === "scissors" && pRhc === "paper")
    {
         result = "ccwin";
    }
    // console.log(result);
    return result;

}


function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    //console.log(randomNumber);
    if(randomNumber < 33)
    {
        randomNumber = "rock";
    }
    else if(randomNumber > 66)
    {
        randomNumber = "scissors";
    }
    else 
    {
        randomNumber = "paper";
    }
    //console.log(randomNumber);
    console.log("Computer choice");
    console.log(randomNumber);
    console.log(" ");
    return randomNumber;
}


function humanClick(choice)
{
    
    divItem.textContent = "Human: " + choice;
    sect.appendChild(divItem);
    //const spanItem = document.createElement('span');
    //spanItem.textContent = "Rock";
    console.log("getting here");
    sign = choice;
    console.log("Human choice");
    console.log(sign);
    console.log(" ");
    compCh = getComputerChoice();
    divItem.textContent = "Human: " + choice + " " + "--- Comp: " + compCh;
    roundRes = playRound(compCh, sign);
    
    games = games+ 1;



    
    if(roundRes === "ccwin")
    {
        computerScore++;
    }
    else if (roundRes === "cclose")
    {
        humanScore++;
    }
    else 
    {
        //const divItemDraw = document.createElement('div');
        //divItemDraw.setAttribute("class", "draw");
        divItem.textContent += "---Draw";
        console.log("********Draw*******");
        sect.appendChild(divItem);
    }
    //let cScoreTemp=computerScore;
    //let hScoreTemp=humanScore;
    
    divItem2.textContent = "score is computer: " + computerScore + ", human:" + humanScore;
    sect.appendChild(divItem2);
    
    console.log("score is computer: " + computerScore + ", human:" + humanScore);
    //console.log("score is computer: " + cScoreTemp + ", human:" + hScoreTemp);
    console.log(" ");
        

    if(games === 5)
    {
        
        sect.removeChild(rockB);
        sect.removeChild(paperB);
        sect.removeChild(scissorsB);

        const divItemFin = document.createElement('div');
        divItemFin.setAttribute("class", "final-res");

        console.log("GAME OVER!")
        console.log(typeof humanScore)
        if(computerScore > humanScore)
        {
            
            divItemFin.textContent = "game over, YOU DIED!!!!!";
        
            console.log("YOU DIED!!!!!");
        }
        else if(humanScore > computerScore)
        {
            console.log("You killed computer!!");
            divItemFin.textContent = "game over, You killed computer!!";
        }
        else {
            console.log("Game Drawn");
            divItemFin.textContent = "game over, Game Drawn";
        }



        sect.appendChild(divItemFin);

    }
}    

function GetHumanChoice()
{
    
    
    let ghcChoice = "";
    

    rockB.addEventListener('click', () => {
        ghcChoice = "rock";
        humanClick(ghcChoice);

    });

    paperB.addEventListener('click', () => {
        ghcChoice = "paper";
        humanClick(ghcChoice);

    });

    scissorsB.addEventListener('click', () => {
        ghcChoice = "scissors";
        humanClick(ghcChoice);

    });



}

GetHumanChoice();





