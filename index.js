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
    navContainer.classList.toggle("active");
}
