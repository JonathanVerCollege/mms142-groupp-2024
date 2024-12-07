function togglemenu(){
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');

    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}

document.querySelectorAll('.nav a').forEach(item => {
    item.addEventListener('click', function () {
        const menu = document.querySelector('.menu');
        const navMobile = document.querySelector('.nav-mobile');
        menu.classList.remove('active');
        navMobile.classList.remove('active');
    });
});

// Change Background Videos
function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video');
    const videoContainer = document.querySelectorAll('.video-container');

    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });

    videoContainer.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });
}

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
