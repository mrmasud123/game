let list=document.querySelectorAll('img');
const photoList=Array(
    ['stone.png', 10],
    ['paper.png', 20],
    ['scissors.png', 30],
);
console.log(list);
let winBox=document.querySelector('#winText');
let box=document.querySelector('#win-box');
let btn=document.querySelector('.btn');
list.forEach((list)=>{
    list.addEventListener('click',function cl(e){
        let randNum=Math.floor(Math.random()*3);
        let targe=e.currentTarget;
        let BotSelectItem=photoList[randNum][0];
        let userSelectItem= targe.getAttribute('src');
        console.log("Bot select item: "+ BotSelectItem);
        console.log("User select item: "+ userSelectItem);
        const userSelectBox=document.querySelector("#user-select");
        const botSelectBox=document.querySelector("#bot-select");
        userSelectBox.textContent=userSelectItem;
        botSelectBox.textContent=BotSelectItem;
        let botSelectedNum=parseInt(photoList[randNum][1]);
        let userSelectedNum=parseInt(list.getAttribute('data-id'));
        if(userSelectItem==BotSelectItem){
            winBox.textContent="Tied";
            
        }else if((userSelectItem=='stone.png')&&(BotSelectItem=='paper.png')){
            winBox.textContent="Bot wins";
        }else if((userSelectItem=='paper.png')&&(BotSelectItem=='scissors.png')){
            winBox.textContent="Bot wins";
        }else if((userSelectItem=='scissors.png')&&(BotSelectItem=='stone.png')){
            winBox.textContent="Bot wins";
        }else{
            winBox.textContent="You win";
        }
    });
});
const gameBox=document.querySelector(".wrapper");
const mainBox=document.querySelector(".game-content");
const endBox=document.querySelector("#endgame");
winBox.textContent="Want to play rock, paper ,scissor game?";
    
box.onclick=()=>{
    console.log("Clicked");
    box.classList.add("transition");
    box.style.top="10%";
    mainBox.style.left="50%";
    mainBox.style.transition="4s";  
    endBox.style.transition="4s";  
    endBox.style.left="50%";
    
}
endBox.onclick=()=>{
    console.log("End box clicked");
    box.style.top="50%";
    mainBox.style.left="-100%";
    mainBox.style.transition="4s";
    endBox.style.transition="4s";
    endBox.style.left="-100%";
    winBox.textContent="Thank you for playing";
}

