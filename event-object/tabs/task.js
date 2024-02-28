let tabs = document.querySelectorAll(".tab");
let tabsContent = document.querySelectorAll(".tab__content");

tabs.forEach(function(tab, index){
    tab.addEventListener("click", function(){
        tabs.forEach(function(tab){
            tab.classList.remove("tab_active");
        })
        tab.classList.add("tab_active");

        tabsContent.forEach(function(content){
            content.classList.remove("tab__content_active");
        })
        tabsContent[index].classList.add("tab__content_active");
    })
}) 

