let menu=document.querySelector(".main-nav__list"),button=document.querySelector(".main-nav__toggle"),nojs=document.querySelector(".menu-nojs"),nav=document.querySelector("nav"),map=document.querySelector("iframe");nav.classList.remove("menu-nojs"),map.classList.remove("contacts__location-nojs"),button.onclick=function(){menu.classList.toggle("main-nav__list--close"),button.classList.toggle("main-nav__toggle--opened")};