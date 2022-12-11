/* Adding a class to the header element when the header element is clicked. */
const burgerMenu = document.querySelector('.header');


burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('activeBurgerMenu');
})