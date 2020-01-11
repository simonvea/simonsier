const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => menu.classList.toggle('menu--open'));