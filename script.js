const menuBtn = document.querySelector(".menu-btn");
const menuPanel = document.querySelector("#menuPanel");
const siteHeader = document.querySelector(".site-header");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menuPanel.classList.toggle("active");
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    let currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        siteHeader.classList.add("header-hidden");
    } 
    else if (currentScrollY < lastScrollY) {
        siteHeader.classList.remove("header-hidden");
    }

    lastScrollY = currentScrollY;
});