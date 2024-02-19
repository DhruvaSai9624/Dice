const roll = document.getElementById("roll");
const tellroll = document.getElementById("tellroll");
const min = 1;
const max = 12;
let randomNum
roll.onclick = function(){
    randomNum = Math.trunc(Math.random() * max) + min;  
    tellroll.textContent = randomNum;   
}

