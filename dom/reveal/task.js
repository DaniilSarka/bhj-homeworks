/*

window.addEventListener("scroll", function revealPopup(){
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(function(reveal){
    const top = reveal.getBoundingClientRect().top;
    const bottom = reveal.getBoundingClientRect().bottom;
        if (bottom > 0) && (top < window.innerHeight){
            reveal.classList.add("reveal_active")
        } else{
            reveal.classList.remove("reveal_active")
        }
    })
});
*/

/* 
window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(function(reveal) {
      const revealTop = reveal.getBoundingClientRect().top;
      const revealHeight = reveal.offsetHeight;
      const windowHeight = window.innerHeight;
  
      if (revealTop < windowHeight && revealTop + revealHeight > 0) {
        reveal.classList.add('reveal_active');
      } else {
        reveal.classList.remove('reveal_active');
      }
    });
  });
  */

let reveals = document.querySelectorAll(".reveal");

reveals.forEach(function(reveal){

reveals.addEventListener("scroll", function revealPopup(){
    const top = reveal.getBoundingClientRect().top;
    const bottom = reveal.getBoundingClientRect().bottom;
        if (bottom > 0 & top < window.innerHeight){
            reveal.classList.add("reveal_active")
        } else{
            reveal.classList.remove("reveal_active")
        }
    })
});