var side_nav = document.querySelector(".side-nav");
var menu = document.querySelector(".menu");
var main = document.querySelector(".main");

menu.onclick = function(){
    side_nav.classList.toggle("activated");
    main.classList.toggle("activated2");
}
