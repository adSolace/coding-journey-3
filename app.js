const menuDom = document.querySelector('.menus');
const closeBtn = document.querySelector('.close');
const menuBtn = document.querySelector('.menu');

menuBtn.onclick = () => {
  menuDom.classList.remove('showMenus');
};
// close btn
closeBtn.onclick = () => {
  menuDom.classList.add('showMenus');
};
