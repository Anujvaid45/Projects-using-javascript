const p1Button=document.querySelector('#p1Button');
const p2Button=document.querySelector('#p2Button');
const winningScoreSelect=document.querySelector('#playto');
const p1Score=document.querySelector('#p1Score');
const p2Score=document.querySelector('#p2Score');
const reset=document.querySelector('#reset');
let p1score=0;
let p2score=0;
let winningScore=0; 
let isGameOver=false;
p1Button.addEventListener('click',function(){
    if(!isGameOver)
    {
    p1score +=1;
    if(p1score===winningScore){
        isGameOver=true;
        p1Score.classList.add('winner');
        p2Score.classList.add('loser');
    }
    p1Score.innerText=p1score;
} 

})

p2Button.addEventListener('click',function(){
    if(!isGameOver)
    {
    p2score +=1;
    if(p2score===winningScore){
        isGameOver=true;
        p1Score.classList.add('loser');
        p2Score.classList.add('winner');
    }
    p2Score.innerText=p2score;

    }

})

winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    resetButton();
})

reset.addEventListener('click',resetButton)

function resetButton(){
    isGameOver=false;
    p1score=0;
    p2score=0;
    p1Score.innerText=0;
    p2Score.innerText=0;
    p1Score.classList.remove('winner','loser');
    p2Score.classList.remove('winner','loser');
}