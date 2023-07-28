window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav-menu'),
    menuItem = document.querySelectorAll('.header__nav-menu--item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__nav-menu_active');
        })
    })
})