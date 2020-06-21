const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');
const menuCover = document.querySelector('.menu__cover');
let closed = true;

function toggleMenu() {
  menu.classList.toggle('menu--open');
  menuCover.classList.toggle('menu__cover--active');
  closed = !closed;
}

menuToggle.addEventListener('click', toggleMenu);
menuCover.addEventListener('click', toggleMenu);
