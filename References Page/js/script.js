function togglemenu(){
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');

    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}

//menu prohibits scrolling//

//when menu closes//


// Change Background Videos
//this is not needed, why is this here? I mean sure, the js was copied, but still...

// Smooth scrolling for navigation

// Navigation Dropdown
// Select the dropdown button and dropdown content
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');

// Function to toggle the display of the dropdown content
function toggleDropdown() {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

// Function to close the dropdown content
function closeDropdown() {
    dropdownContent.style.display = 'none';
}

// Add event listener to the dropdown button
dropdownBtn.addEventListener('click', toggleDropdown);

// Add event listener to each dropdown link
dropdownLinks.forEach(link => {
    link.addEventListener('click', closeDropdown);
});

// Optional: Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
};

//share button//
//also this...
