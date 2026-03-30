let secretNumber;
const easyBtn=document.querySelector(".easy");
const hardBtn=document.querySelector(".hard");
const mediumBtn=document.querySelector(".medium");

const input=document.querySelector(".input");
const submitBtn=document.querySelector(".submitBtn")

const highGuess=document.querySelector(".highGuess")
const lowGuess=document.querySelector(".lowGuess")


const winnerBox=document.querySelector(".winner-div");

const resetBtn=document.querySelector(".reset");


const music=document.querySelector(".music");
const musicLoss=document.querySelector(".loseMusic")
const musicWin=document.querySelector(".musicWin")


let tries=7;

const tryBox=document.querySelector(".tries");





easyBtn.addEventListener("click",()=>{

        hardBtn.classList.remove("active")
    easyBtn.classList.add("active");
    mediumBtn.classList.remove("active");

    secretNumber=Math.floor(Math.random()*(10+1));
    console.log(secretNumber);
    
    

})

hardBtn.addEventListener("click",()=>{
    hardBtn.classList.add("active")
    easyBtn.classList.remove("active");
    mediumBtn.classList.remove("active");

    secretNumber=Math.floor(Math.random()*(1000+1))
    console.log(secretNumber);

})

mediumBtn.addEventListener("click",()=>{

        hardBtn.classList.remove("active")
    easyBtn.classList.remove("active");
    mediumBtn.classList.add("active");

    secretNumber=Math.floor(Math.random()*(100+1));
    console.log(secretNumber);
})












submitBtn.addEventListener("click",()=>{
    let guess=Number(input.value);

    if( guess===secretNumber){
        winnerBox.innerText="You Won The Game Nigga 🏆";
        submitBtn.disabled=true;
        musicWin.play();
             
        musicWin.play();
      

    }
    else if(guess<secretNumber){
        tries--;
        tryBox.innerText=`Tries left: ${tries}`
        
        music.play();
        setTimeout(() => {
         music.pause();
         music.currentTime = 0;
            }, 500);


        let li = document.createElement("li"); 
        li.innerText = guess; 
        lowGuess.appendChild(li); 
    }
    else if(guess>secretNumber){
        tries--;
        tryBox.innerText=`Tries left: ${tries}`
        music.play();
            setTimeout(() => {
         music.pause();
         music.currentTime = 0;
            }, 500);

        let li = document.createElement("li"); 
        li.innerText = guess; 
        highGuess.appendChild(li); 
    }
    input.value = "";

    if(tries===0){
        winnerBox.innerText=`Game Over Youo Jerk
        The Right Answer is:${secretNumber}` 
        winnerBox.style.color="red";
        submitBtn.disabled = true;
        musicLoss.play();
               setTimeout(() => {
         musicLoss.pause();
         musicLoss.currentTime = 0;
            }, 2000);

            music.pause();
       

    }
})




    input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        submitBtn.click();
    }
});
      

    input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");
});



resetBtn.addEventListener("click",()=>{

    winnerBox.innerText="";
    lowGuess.innerHTML="";
    hardBtn.classList.remove("active");
    easyBtn.classList.remove("active");
    mediumBtn.classList.remove("active");
    secretNumber=undefined;
    highGuess.innerHTML="";
    input.value="";
 submitBtn.disabled = false;
tries = 7;
tryBox.innerText = "Tries Left: 7";
music.pause();
musicLoss.pause();
musicWin.pause();
  winnerBox.style.color="";
 
})