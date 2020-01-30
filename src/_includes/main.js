const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');
let closed = true;

function closeMenuOnOutsideClick({ target }) {
  if (target.className === 'menu__toggle' || closed) {
    return
  }
  toggleMenu();
}

function toggleMenu() {
  menu.classList.toggle('menu--open');
  closed = !closed;
}


menuToggle.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenuOnOutsideClick);