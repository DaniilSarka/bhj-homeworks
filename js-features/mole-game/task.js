const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let countDead = 0;
let countLost = 0;
const getHole = (index) => document.getElementById(`hole${index}`);
for (let index = 1; index < 10; index ++) {
    let hole = getHole(index);
    hole.onclick = function moleInHole () {
        if (hole.className.includes('hole_has-mole') === true){
            countDead ++;
            dead.textContent = countDead;
        } else {
            countLost ++;
            lost.textContent = countLost;
        }
        if (countDead === 10){
            alert("winner winner mole diner");
            countDead = 0;
            countLost = 0;
            dead.textContent = countDead;
            lost.textContent = countLost;
        }


        if (countLost === 5){
            alert("You lost, try next time");
            countDead = 0;
            countLost = 0;
            dead.textContent = countDead;
            lost.textContent = countLost;
        }
    }
}
