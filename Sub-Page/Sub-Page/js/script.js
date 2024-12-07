// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

//smooth scrolling for navigation//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//menu toggle//
function togglemenu(){
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');

    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}

//close menu//
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

// Navigation Dropdown
//Navigation Dropdown opens and closes
document.addEventListener('DOMContentLoaded', function () {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownItems = document.querySelectorAll('.dropdown-content a');

    dropbtn.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    dropdownItems.forEach(function (item) { 
        item.addEventListener('click', function () { 
            dropdownContent.style.display = 'none'; 
        }); 
    }); 

    document.addEventListener('click', function(event) {
        if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});

