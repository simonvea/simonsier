const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');
let closed = true;

function closeMenuOnOutsideClick({ target }) {
  if (target.className === 'menu__toggle' || closed) {
    return;
  }
  toggleMenu();
}

function toggleMenu() {
  menu.classList.toggle('menu--open');
  closed = !closed;
}

menuToggle.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenuOnOutsideClick);

// This handles redirect to adminsite if login is successful
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', (user) => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}
