console.log("Hello world");



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


let sign = ""; //prompt("Rock, Paper or Scissors?");
    let compCh = "";
    let pRes = "";
    // console.log("sign1.5");
    // console.log(sign);
    let humanScore = 0;
    let computerScore = 0;
    let roundRes = "start";
    let games = 0;

//for(let i = 0; i < 5; i++)  {

    const sect = document.querySelector('.MainCont');
    const sect2 = document.querySelector('.MainCont');    
    const rockB = document.querySelector('#rock');
    const paperB = document.querySelector('#paper');
    const scissorsB = document.querySelector('#scissors');

function humanClick(choice)
{
    const divItem = document.createElement('div');
    divItem.setAttribute("class", "user-choice");
    divItem.textContent = choice;
    sect.appendChild(divItem);
    //const spanItem = document.createElement('span');
    //spanItem.textContent = "Rock";
    console.log("getting here");
    sign = choice;
    console.log("Human choice");
    console.log(sign);
    console.log(" ");
    compCh = getComputerChoice();
    roundRes = playRound(compCh, sign);
    
    games = games+ 1;


// for(let i = 0; i < 5; i++)
// {
    
    if(roundRes === "ccwin")
        {
            computerScore++;
        }
        else if (roundRes === "cclose")
        {
            humanScore++;
        }
        else {
            const divItemDraw = document.createElement('div');
        divItemDraw.setAttribute("class", "draw");
        divItemDraw.textContent = "Draw";
            console.log("********Draw*******");
            sect.appendChild(divItemDraw);
        }
        //let cScoreTemp=computerScore;
        //let hScoreTemp=humanScore;
        const divItem2 = document.createElement('div');
        divItem2.setAttribute("class", "score");
        divItem2.textContent = "score is computer: " + computerScore + ", human:" + humanScore;
        sect.appendChild(divItem2);
        
        console.log("score is computer: " + computerScore + ", human:" + humanScore);
        //console.log("score is computer: " + cScoreTemp + ", human:" + hScoreTemp);
        console.log(" ");
       
// }
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

//}

    //while(sign !== "rock" && sign !== "scissors" && sign !== "paper")
    //{
        //sign = prompt("Rock, Paper or Scissors? Incorrect input try again");
        // console.log("sign1");
        // console.log(sign);
        //sign = sign.toLocaleLowerCase();
        // console.log("sign2");
        // console.log(sign);

    //}

    /*if (sign.toLowerCase() === "rock") {
        alert("Wow! I'm a Rock too!");
        // sign = 1;
    }
    else
    if (sign.toLowerCase() === "paper") {
        alert("Wow! I'm a paper too!");
        // sign = 2;
    }
    else
    if (sign.toLowerCase() === "scissors") {
        alert("Wow! I'm a scissors too!");
        // sign = 3;
    }
    else
    {
        sign = "rock";
        alert("Default Rock");
    }*/
    //console.log("Human choice");
    //console.log(sign);
    //console.log(" ");
    //return sign;

}







function playRound(pRcc, pRhc)
{
    let result = "ERROR";
    


    // console.log("hc in playround");
    // console.log(pRhc);

    // if(pRhc === "rock")
    // {
        // result = "geting in";
        // console.log("geting in");
    // }

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

function playGame(){

    

    
    let hc = GetHumanChoice();
    console.log("hc");
    console.log(hc);
    let cc = getComputerChoice();
    console.log("cc");
    console.log(cc);

    let roundResP = playRound(cc, hc);
    return roundResP;
    }

function MWmain()
{
    let humanScore = 0;
    let computerScore = 0;
    let roundRes = "start";

    

    // for(let i = 0; i < 5; i++)
    // {
        roundRes = playGame();
        if(roundRes === "ccwin")
            {
                computerScore++;
            }
            else if (roundRes === "cclose")
            {
                humanScore++;
            }
            else {
                console.log("********Draw*******");
            }
            //let cScoreTemp=computerScore;
            //let hScoreTemp=humanScore;

            console.log("score is computer: " + computerScore + ", human:" + humanScore);
            //console.log("score is computer: " + cScoreTemp + ", human:" + hScoreTemp);
            console.log(" ");
           
    // }
    console.log("GAME OVER!")
    //console.log(typeof humanScore)
    /*if(computerScore > humanScore)
    {
        console.log("YOU DIED!!!!!");
    }
    else if(humanScore > computerScore)
    {
        console.log("You killed computer!!");
    }
    else {
        console.log("Game Drawn");
    }*/
}

//MWmain();


GetHumanChoice();





