
//Hamburger

let menu = document.querySelector('.hamburger');
let nav = document.querySelector('.header__menu');
let mobileNav = nav.cloneNode(true);
mobileNav.classList.remove('header__menu');
mobileNav.classList.add('header__menu-moblie');
document.body.appendChild(mobileNav);

menu.addEventListener('click', function() {
    this.classList.toggle('hamburger--active');
    mobileNav.classList.toggle('header__mobile-nav-show')
});

// Slider

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let agencyMember = document.querySelectorAll('.agency-team__member');
let index = 1;
let array =[];
let centerBox = document.querySelector('.center-box');


for (let i = 0; i<agencyMember.length; i++){
    array.push(agencyMember[i]);
}

array[1].classList.add('main-photo');

arrowLeft.addEventListener('click', function () {
    console.log('klika lewy');
    array[index].classList.remove('main-photo');
    index--;
    if (index < 0) {
        index = array.length-1
    }


});

arrowRight.addEventListener('click', function () {
    console.log('klika prawy');
    array[index].classList.remove('main-photo');
    index++;
    if (index > array.length-1) {
        index = 0
    }
    array[index].classList.add('main-photo');

});

//Quote

const mainImage = document.querySelector('.agency-clients__main-photo img');
const smallImages = document.querySelectorAll('.agency-clients__photo');
const clientOpinion = document.querySelector('.agency-clients__opinion');
const clientName = document.querySelector('.agency-clients__name');


smallImages.forEach(el => {
    el.addEventListener('click', function () {
        let src = el.firstElementChild.getAttribute('src');
        mainImage.setAttribute('src', src);
        let quote = el.dataset.quote;
        let name = el.dataset.name;

        clientOpinion.innerHTML = quote;
        clientName.innerHTML = name;
    })
});
