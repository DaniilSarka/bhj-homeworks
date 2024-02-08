let currentTimer = 59; 
let count = document.getElementById("timer");

function countDown(){ 

    count.textContent --;

if (count.textContent == 0){ 
    clearInterval(counter); 
    alert ("Вы победили в конкурсе!"); 
}
}

let counter = setInterval(countDown, 200);