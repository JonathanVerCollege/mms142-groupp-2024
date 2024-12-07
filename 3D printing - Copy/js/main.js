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

//share button//
document.addEventListener('DOMContentLoaded', function() {
  const shareButton = document.getElementById('shareButton');

  if (navigator.share) {
    shareButton.addEventListener('click', function() {
      navigator.share({
        title: 'Check this out!',
        text: 'I found something interesting for you.',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch(console.error);
    });
  } else {
    // Fallback for browsers that do not support the Web Share API :(
    shareButton.addEventListener('click', function() {
      alert('Web Share API is not supported in your browser. Please share this page manually. :)');
    });
  }
});

