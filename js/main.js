let menu = document.querySelector('.hamburger');
let nav = document.querySelector('.header__menu');
console.log(nav);
let mobileNav = nav.cloneNode(true);
console.log(mobileNav);
mobileNav.classList.remove('header__menu');
mobileNav.classList.add('header__menu-moblie');
document.body.appendChild(mobileNav);



menu.addEventListener('click', function() {
    this.classList.toggle('hamburger--active');
    mobileNav.classList.toggle('header__mobile-nav-show')
});