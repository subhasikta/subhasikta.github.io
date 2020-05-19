(function aosFunction() {
    AOS.init({
        // uncomment below for on-scroll animations to played only once
        // once: true  
    }); // initialize animate on scroll library
})();


window.onscroll = function () {
    myFunction();
};

const navBar = document.getElementById('nav-bar');

function myFunction() {
    if (window.pageYOffset > 60) {
        navBar.classList.add("header-bg");
    }
    else {
        navBar.classList.remove("header-bg");
    }
}

const mobileOpenMenu = document.getElementById('humbergerMenu');
const mobileCloseMenu = document.getElementById('closeMenu');
const mobileCloseMenuClick = document.getElementById('closeMenuClick');

mobileOpenMenu.addEventListener('click', openMenuFunction);
mobileCloseMenuClick.addEventListener('click', closeMenuFunction);

function openMenuFunction() {
    mobileCloseMenu.classList.add('mobile-navigation-menu-open');
}

function closeMenuFunction() {
    mobileCloseMenu.classList.remove('mobile-navigation-menu-open');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
        mobileCloseMenu.classList.remove('mobile-navigation-menu-open');
    });
});