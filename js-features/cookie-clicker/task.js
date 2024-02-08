const image = document.getElementById("cookie");
const text = document.getElementById("clicker__counter");
let counter = 0;

function counterCheck () {
    counter = text.textContent++;
}

image.onclick = function changeSizeCount () {
    if (counter % 2 !== 0){
        image.width = 500;
    } else {
        image.width = 350;
    }
    
    counterCheck ();
};