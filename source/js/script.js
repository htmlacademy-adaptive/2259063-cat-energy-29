let menu = document.querySelector(".main-nav__list");
let button = document.querySelector(".main-nav__toggle");

console.log(menu);

// button.addEventListener("click", handler);

button.onclick = function () {
  if (menu.classList.contains("list main-nav__list--close")) {
    menu.classList.remove("main-nav__list--close");
  }
  else { menu.classList.add("main-nav__list--close"); }
}
