const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.navMenu');

const toggleMenu = () => {
  hamburger.classList.toggle('active');
  navmenu.classList.toggle('active');
};

const closeMenu = () => {
  hamburger.classList.remove('active');
  navmenu.classList.remove('active');
};

hamburger.addEventListener('click', toggleMenu);
document.querySelectorAll('.navLink').forEach((n) => n.addEventListener('click', closeMenu));

export default { toggleMenu, closeMenu };
