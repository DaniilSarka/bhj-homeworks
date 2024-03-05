/*
const rotators = document.querySelectorAll(".rotator__case");


window.addEventListener("DOMContentLoaded",setInterval(() => rotators.forEach(function(rotator){
    if (rotator.classList.contains("rotator__case_active")){
        rotator.classList.remove("rotator__case_active")
    } else {
        rotator.classList.add("rotator__case_active")
    }
}),1000
) );
*/



/*
document.addEventListener("DOMContentLoaded", function() {
    const rotators = document.querySelectorAll(".rotator__case");

    function rotate(rotator) {
        rotator.classList.remove("rotator__case_active");
        rotator.classList.add("rotator__case_active");
    }

    setInterval(function() {
        rotators.forEach(rotate);
    }, 1000);
});
*/

document.addEventListener("DOMContentLoaded", function() {
    const rotators = document.querySelectorAll(".rotator__case");
    let currentIndex = 0;

    function rotate() {
        rotators[currentIndex].classList.remove("rotator__case_active");
        currentIndex = (currentIndex + 1) % rotators.length;
        rotators[currentIndex].classList.add("rotator__case_active");
    }

    setInterval(rotate, 1000);
});