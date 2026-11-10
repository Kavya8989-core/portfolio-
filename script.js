const menuBtn = document.querySelector(".menu-btn");
const menuPanel = document.querySelector("#menuPanel");
const siteHeader = document.querySelector(".site-header");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menuPanel.classList.toggle("active");
});
document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", (event) => {

        if (link.target === "_blank") {
            menuBtn.classList.remove("active");
            menuPanel.classList.remove("active");
            return;
        }

        event.preventDefault();

        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            const targetPosition =
                target.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }

        menuBtn.classList.remove("active");
        menuPanel.classList.remove("active");
    });
});
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener("scroll", () => {

    if (!ticking) {
        window.requestAnimationFrame(() => {

            let currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                siteHeader.classList.add("header-hidden");
            }
            else if (currentScrollY < lastScrollY) {
                siteHeader.classList.remove("header-hidden");
            }

            lastScrollY = currentScrollY;
            ticking = false;
        });

        ticking = true;
    }

}, { passive: true });
