/*
let menuValue = document.querySelector(".dropdown__value");
let menuList = document.querySelector(".dropdown__list");

menuValue.addEventListener("click", function (){
    menuList.classList.toggle("dropdown__list_active");
}); 

const link = document.querySelectorAll(".dropdown__link");
let value = {};

link.forEach(function (link){
    link.addEventListener("click", function(){
        
        value = {text: this.textContent};
        menuValue.textContent = value.text;
        menuList.classList.remove('dropdown__list_active');
    })
})
*/
/*let menuOpen = document.querySelector(".dropdown__list");

menuOpen.onclick = function (){
    menuOpen.classList.toggle("dropdown__list_active")
}
*/
/*document.querySelector('.dropdown__value').addEventListener('click', function() {
    var list = document.querySelector('.dropdown__list');
    list.classList.toggle('dropdown__list_active');
  });

*/


let menuValue = document.querySelector(".dropdown__value");
let menuList = document.querySelector(".dropdown__list");

menuValue.addEventListener("click", function (){
    menuList.classList.toggle("dropdown__list_active");
}); 

const link = document.querySelectorAll(".dropdown__link");
let value = {};

link.forEach(function (link){
    link.addEventListener("click", function(e){
        value = {text: link.textContent};
        menuValue.textContent = value.text;
        menuList.classList.remove('dropdown__list_active');
        e.preventDefault();
    })
}) 


/*
document.querySelector('.dropdown__value').addEventListener('click', function() {
  var list = document.querySelector('.dropdown__list');
  list.classList.toggle('dropdown__list_active');
});

document.querySelectorAll('.dropdown__link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var value = this.textContent;
    document.querySelector('.dropdown__value').textContent = value;
    list.classList.remove('dropdown__list_active');
  });
});
*/