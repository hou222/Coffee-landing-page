const btn = document.querySelector('.js-header__button');
const icon = document.querySelector('.js-header__icon');
let clicked = false;

btn.addEventListener('click', () => {
    if(!clicked){
    icon.style.background = 'transparent';
    icon.classList.add('header__cancel');
    icon.classList.remove('header__icon');
    clicked = true;
    }else {
        icon.style.background = 'white';
    icon.classList.add('header__icon');
    icon.classList.remove('header__cancel');
    clicked = false;
    }
});