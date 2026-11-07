const menuBtn = document.querySelector(".menu-btn");
const menuPanel = document.querySelector("#menuPanel");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menuPanel.classList.toggle("active");
});