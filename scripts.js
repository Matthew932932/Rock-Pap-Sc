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

function GetHumanChoice()
{
    
    let sign = prompt("Rock, Paper or Scissors?");
    // console.log("sign1.5");
    // console.log(sign);

    while(sign !== "rock" && sign !== "scissors" && sign !== "paper")
    {
        sign = prompt("Rock, Paper or Scissors? Incorrect input try again");
        // console.log("sign1");
        // console.log(sign);
        sign = sign.toLocaleLowerCase();
        // console.log("sign2");
        // console.log(sign);

    }

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
    console.log("Human choice");
    console.log(sign);
    console.log(" ");
    return sign;

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
    //console.log("hc");
    //console.log(hc);
    let cc = getComputerChoice();
    //console.log("cc");
    //console.log(cc);

    let roundResP = playRound(cc, hc);
    return roundResP;
    }

function MWmain()
{
    let humanScore = 0;
    let computerScore = 0;
    let roundRes = "start";
    
    for(let i = 0; i < 5; i++)
    {
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
           
    }
    console.log("GAME OVER!")
    //console.log(typeof humanScore)
    if(computerScore > humanScore)
    {
        console.log("YOU DIED!!!!!");
    }
    else if(humanScore > computerScore)
    {
        console.log("You killed computer!!");
    }
    else {
        console.log("Game Drawn");
    }
}

MWmain();





