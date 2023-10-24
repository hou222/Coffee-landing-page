const btn = document.querySelector('.js-header__button');
const icon = document.querySelector('.js-header__icon');
const nav = document.querySelector('.js-header__nav');
let clicked = false;

btn.addEventListener('click', () => {
    if(!clicked){
    icon.style.background = 'transparent';
    icon.classList.add('header__cancel');
    icon.classList.remove('header__icon');
    nav.style.animation = 'slideIn 0.5s forwards';
    nav.style.visibility = 'visible';
    clicked = true;
    }else {
        icon.style.background = 'white';
    icon.classList.add('header__icon');
    icon.classList.remove('header__cancel');
    nav.style.animation = 'slideOut 0.5s forwards';
    clicked = false;
    }
});