var inputBox = document.querySelector('.search-icon');

inputBox.addEventListener("click", function() {
    document.querySelector('.search-input__form').classList.add("active");
    document.querySelector('.search-option').classList.add("active");
    document.querySelector('.nav-list').classList.remove("active");
    document.querySelector('.hamburger-option').classList.remove("active");
});

var searchClose = document.querySelector('.close-img');

searchClose.addEventListener("click", function() {
    document.querySelector('.search-input__form').classList.remove("active");
    document.querySelector('.search-option').classList.remove("active");  
});

var hamburgerIcon = document.querySelector('.hamburger-icon');

hamburgerIcon.addEventListener("click", function() {
    document.querySelector('.nav-list').classList.add("active");
    document.querySelector('.hamburger-option').classList.add("active");
    document.querySelector('.search-input__form').classList.remove("active");
    document.querySelector('.search-option').classList.remove("active");
});

var hamburgerClose = document.querySelector('.hamburger-close_img');

hamburgerClose.addEventListener("click", function() {
    document.querySelector('.nav-list').classList.remove("active");
    document.querySelector('.hamburger-option').classList.remove("active");
});





