function togglemenu(){
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');

    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}

// Change Background Videos//
function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video')
    const videoContainer = document.querySelectorAll('.video-container')

    bgVideoList.forEach(video =>{
        video.classList.remove('active')
        if(video.classList.contains(name)){
            video.classList.add('active')
        }
    });

    videoContainer.forEach(video =>{
        video.classList.remove('active')
        if(video.classList.contains(name)){
            video.classList.add('active')
        }
    });
}

// Autoscrolling for the navigation - for smooth scrolling - remove this if you want a more snappy transition aka just jumping to that section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation Dropdown
// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('.dropbtn').addEventListener('click', function () {
//         var dropdownContent = this.nextElementSibling;
//         dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on button click
    dropbtn.addEventListener('click', function (event) {
        // Prevent the click event from propagating to the document
        event.stopPropagation();
        // Toggle the display of the dropdown content
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it - not really necessary, but still looks good
    document.addEventListener('click', function(event) {
        if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});
