const burgerMenu = document.querySelectorAll('.header');

function DropDownMenuOn(){
    burgerMenu.forEach((item) =>
    item.classList.remove('activeBurgerMenu'));
    this.classList.add('activeBurgerMenu');
}

// TODO: Finish the script, make a function that deletes the class when you click on it.

burgerMenu.forEach((item) =>
item.addEventListener('click', DropDownMenuOn));