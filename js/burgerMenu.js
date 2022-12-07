const burgerMenu = document.querySelectorAll('.header');

function DropDownMenuOn(){
    burgerMenu.forEach((item) =>
    item.classList.remove('activeBurgerMenu'));
    this.classList.add('activeBurgerMenu');
}

burgerMenu.forEach((item) =>
item.addEventListener('click', DropDownMenuOn));