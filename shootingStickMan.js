let randomNum = Math.floor(Math.random()*6+1);
let diceValue = document.getElementById("diceValue");
let rollBtn = document.getElementById("rollBtn");
rollBtn.addEventListener("click",showDiceValue);

function showDiceValue(){
    diceValue.innerHTML = randomNum;
}

