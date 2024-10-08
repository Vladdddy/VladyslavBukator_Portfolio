const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const sideMenu = document.getElementById("sideMenu");
const sideNavbar = document.getElementById("sideNavbar");
const sideContent = document.getElementById("sideContent");
const logo = document.getElementById("logo");

menu.onclick = function () {
    navbar.style.display = "none";
    sideMenu.style.display = "flex";
    sideNavbar.style.display = "flex";
    logo.style.display = "flex";
};

sideMenu.onclick = function () {
    navbar.style.display = "flex";
    sideMenu.style.display = "none";
    sideNavbar.style.display = "none";
    logo.style.display = "none";
};





window.addEventListener('scroll', function () {
    var ids = ['cont1', 'cont2', 'cont3', 'cont4', 'cont5', 'cont6', 'cont7'];
    var delay = 150;

    function toggleVisibility(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            var position = element.getBoundingClientRect();
            console.log('Element:', elementId, 'Position:', position);
            if (position.top < window.innerHeight && position.bottom > 0) {
                setTimeout(function () {
                    element.classList.add('show');
                    console.log('Element shown:', elementId);
                }, delay);
            } else {
                setTimeout(function () {
                    element.classList.remove('show');
                    console.log('Element hidden:', elementId);
                }, delay);
            }
        } else {
            console.warn('Element not found:', elementId);
        }
    }

    ids.forEach(toggleVisibility);
});

window.dispatchEvent(new Event('scroll'));






document.addEventListener('DOMContentLoaded', function () {
    const goUpButton = document.getElementById('goUp');
    const homeSection = document.getElementById('home');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            goUpButton.style.display = 'block';
        } else {
            goUpButton.style.display = 'none';
        }
    });

    goUpButton.addEventListener('click', function () {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    });
});