const mobileMenu = document.querySelector('.header__menu-mobile');
const body = document.querySelector('body');
document.querySelector('.header__menu-btn').addEventListener('click', () => {
	body.classList.toggle('body--fixed');
	mobileMenu.classList.toggle('header__menu-mobile--hidden');
})