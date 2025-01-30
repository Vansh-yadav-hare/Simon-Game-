let gameseq=[];
let userseq=[];
let btns=["red","yellow","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("game is started");
        started=true;
    }
    levelup();
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },500);
    
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    },500);
    
}




function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

let randidx=Math.floor(Math.random()*4);
let randcolor=btns[randidx];
let randbtn=document.querySelector(`.${randcolor}`);
// console.log(randidx);
// console.log(randcolor);
// console.log(randbtn);
  gameseq.push(randcolor);
  console.log(gameseq);
  gameflash(randbtn);
}
function btnpress(){
    let btn=this;
    userflash(btn);
     let usercolor=btn.getAttribute("id");
     userseq.push(usercolor);
     console.log(userseq);
     check(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function check(idx){
    
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelup(),1000);

       }
       

    }
    else{
        h2.innerHTML=`Game over! Your Score was <b>${level}</b> <br> Press any key to restart the game `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();  
      }

}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}