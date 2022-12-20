const hamburger = document.querySelector('.menuImg');
const menuList = document.querySelector('.menu_items');
const closeHamburger = document.querySelector('#btn_close');
const logoName = document.querySelector('.logo-name');

hamburger.addEventListener('click', () => {
  if (menuList.style.display !== 'block') {
    menuList.style.display = 'block';
    logoName.style.display = 'none';
    hamburger.style.display = 'none';
  }
});

closeHamburger.addEventListener('click', () => {
  menuList.style.display = 'none';
  logoName.style.display = 'block';
  hamburger.style.display = 'block';
});
