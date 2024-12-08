function togglemenu(){
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');

    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}
//menu close//
function togglemenu(){
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');

    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}

document.querySelectorAll('.nav-mobile li a').forEach(item => {
    item.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        const navMobile = document.querySelector('.nav-mobile');

        if (navMobile.classList.contains('active')) {
            menu.classList.remove('active');
            navMobile.classList.remove('active');
        }
    });
});

//menu prohibits scrolling//
function togglemenu() {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    const body = document.body;

    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
    body.classList.toggle('no-scroll');
}

//when menu closes//
document.querySelectorAll('.nav-mobile li a').forEach(item => {
    item.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        const navMobile = document.querySelector('.nav-mobile');
        const body = document.body;

        menu.classList.remove('active');
        navMobile.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

// Change Background Videos
//this is not needed, why is this here? I mean sure, the js was copied, but still...

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation Dropdown
document.addEventListener('DOMContentLoaded', function () {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});

//share button//
//also this...
