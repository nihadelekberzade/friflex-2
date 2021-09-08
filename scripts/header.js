const mobileMenu = document.querySelector('.header__menu-mobile');
const body = document.querySelector('body');
document.querySelector('.header__menu-btn').addEventListener('click', () => {
  body.classList.toggle('body--fixed');
  mobileMenu.classList.toggle('header__menu-mobile--hidden');
})
document.querySelectorAll('.header .dropdown').forEach(el => {
  el.addEventListener('mouseover', () => {
    el.querySelector('.dropdown__content').style.height = `${el.querySelector('.dropdown__content-inner').offsetHeight.toString()}px`;
    el.querySelector('.dropdown__content').style.opacity = '1';
    el.querySelector('.dropdown__content').style.visibility = 'visible';
  })
  el.addEventListener('mouseleave', () => {
    el.querySelector('.dropdown__content').style.height = '0';
    el.querySelector('.dropdown__content').style.opacity = '0';
    el.querySelector('.dropdown__content').style.visibility = 'hidden';
  })
})