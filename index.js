let userScore=0;
let computerScore=0;
const choises=document.querySelectorAll(".choise");
const msg=document.querySelector("#msg");
const msgCont=document.querySelector(".msg-container");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");


const getCompChoise=()=>{
    const options=["rock","paper","scissors"];
    const rendomIndex=Math.floor(Math.random()*3);
    return options[rendomIndex];
}


const drawGame=()=>{
   msg.innerText="Game has been draw, try again !";
   msgCont.style.backgroundColor="orange"
  
}
const showWinner=(userWin)=>{
    if(userWin){
        msg.innerText="Hurray You won !";
        userScore++;
        userScorePara.innerText=userScore;
        msgCont.style.backgroundColor="green"

    }
    else{
      msg.innerText="oops ! You lose.";
      computerScore++;
      compScorePara.innerText=computerScore;
      msgCont.style.backgroundColor="red"
    }
}

const playGame=(userChoise)=>{
console.log("userChoise="+userChoise);
const compChoise=getCompChoise();
console.log("compChoise="+compChoise);
if(userChoise===compChoise){
    drawGame();
}
else{
    let userWin=true;
    if(userChoise==="rock"){
       userWin= compChoise==="paper"?false:true;
    }
    else if(userChoise==="paper"){
       userWin= compChoise==="scissors"?false:true;
    }
    else{
        compChoise==="rock"?false:true; 
    }
    showWinner(userWin);
}

}


choises.forEach((choise)=>{
     choise.addEventListener("click",()=>{
        const userChoise=choise.getAttribute("id");
      
        playGame(userChoise)
    })
})
