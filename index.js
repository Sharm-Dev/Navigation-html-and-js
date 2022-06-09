const hamburger = document.getElementById("hamburger");
const navContainer = document.getElementById("nav-container");
console.log(navContainer);

hamburger.addEventListener("click", mobileNav);
console.log(window.innerWidth);
if (window.innerWidth < 700) {
    navContainer.classList.toggle("active");
}

function mobileNav() {
    console.log("I work");
    //hamburger.classList.toggle("active")
    navContainer.classList.toggle("active");
}

const navList = document.querySelectorAll(".nav-list");

navList, forEach(item => item.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navContainer.classList.remove("active");
}