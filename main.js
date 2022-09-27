const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly`)
};


const menuToggleIcon = selectElement('#menu-icon');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);


// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-icon');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    body.classList.toggle('light-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});


//update last modified p tag

var lastModifiedDate = document.lastModified;

var dateModified = new Date(lastModifiedDate);

var lastModified = dateModified.toDateString();
var lastModifiedObj = document.getElementById('last-modified');
lastModifiedObj.textContent = 'Last Updated: ' + lastModified;
