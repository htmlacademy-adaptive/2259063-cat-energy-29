let menu = document.querySelector(".main-nav__list");
let button = document.querySelector(".main-nav__toggle");

button.onclick = function () {
  menu.classList.toggle('main-nav__list--close');
  button.classList.toggle('main-nav__toggle--opened');
}
