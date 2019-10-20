export function toggleNav() {
    var header = document.getElementsByClassName('header')[0];
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');



    hamburger.addEventListener('click', function () {
        header.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function () {
        header.classList.remove('nav-open');
    });
}
// toggleNav();
