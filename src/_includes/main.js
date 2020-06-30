const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');
const menuCover = document.querySelector('.menu__cover');
const tabButtons = document.querySelectorAll('.portfolio__tab');

let closed = true;

function toggleMenu() {
  menu.classList.toggle('menu--open');
  menuCover.classList.toggle('menu__cover--active');
  closed = !closed;
}

function openTab(event) {
  const { textContent } = this;
  const tabContent = document.getElementsByClassName('portfolio__section');

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('portfolio__tab--active');
  }

  event.currentTarget.classList.add('portfolio__tab--active');
  document.getElementById(textContent).style.display = 'block';
  document.getElementById('Hobbyprosjekter').classList.add('animate--left');
}

menuToggle.addEventListener('click', toggleMenu);
menuCover.addEventListener('click', toggleMenu);
tabButtons.forEach((tab) => tab.addEventListener('click', openTab));
