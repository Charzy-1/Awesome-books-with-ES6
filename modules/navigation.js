export const setupNavigation = () => {
  const hamburger = document.querySelector('.hamburger');
  const navmenu = document.querySelector('.navMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
  });

  document.querySelectorAll('.navLink').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
  }));
};
