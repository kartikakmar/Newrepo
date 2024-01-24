let gameseq=[];
let userseq=[];

let btn=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("gagme is start");
        started=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

function levelup(){
    level++;
    h2.innerText=`Level ${level}`;
    let randIndx=Math.floor(Math.random()*3);
    let rancolor=btn[randIndx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    //console.log(randIndx);
    //console.log(rancolor);
    //console.log(ranbtn);

    gameseq.push(rancolor);
    console.log(gameseq);

    btnflash(ranbtn);
}

function checkAns(){

    console.log("check level", level);

   let idx= level-1

   if(userseq[idx]==gameseq[idx]){
        console.log("same value");

   }else{
        h2.innerText=`game over! press any key to start`;
   }
}

function btnpress(){
    console.log(this)
    let btn =this;
    userflash(btn);

    let usercolor=btn.getAttribute("id");
    console.log(usercolor);

    checkAns();

}

let allBtns=document.querySelectorAll('.btn');
for(allBtns of allBtns){
    allBtns.addEventListener("click",btnpress);
}

