const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

navMenu.addEventListener('click', (e) => {
  let link = e.target;
  link.tagName === 'A' || link.tagName === 'UL'
    ? navMenu.classList.toggle('show')
    : '';
});
