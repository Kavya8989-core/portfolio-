const bannerSection = document.querySelector(".banner");
const bannerText = document.querySelector(".banner-text");

const bannerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            bannerText.classList.add("show");
            bannerObserver.unobserve(bannerSection);
        }
    });
}, {
    threshold: 0.15
});
const rushLogo = document.querySelector(".banner .rush-logo");

const rushObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            rushLogo.classList.add("show");
            rushObserver.unobserve(rushLogo);
        }
    });
}, {
    threshold: 0.3
});


rushObserver.observe(rushLogo);
const docsLogo = document.querySelector(".banner .docs-logo");

const docsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            docsLogo.classList.add("show");
            docsObserver.unobserve(docsLogo);
        }
    });
}, {
    threshold: 0.3
});

docsObserver.observe(docsLogo);
const upcomingLogo = document.querySelector(".banner .upcoming-logo");

const upcomingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            upcomingLogo.classList.add("show");
            upcomingObserver.unobserve(upcomingLogo);
        }
    });
}, {
    threshold: 0
});

upcomingObserver.observe(upcomingLogo);
const teamHeading = document.querySelector(".team-heading");

const teamHeadingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            teamHeading.classList.add("show");
            teamHeadingObserver.unobserve(teamHeading);
        }
    });
}, { threshold: 0 });

teamHeadingObserver.observe(teamHeading);
const gamesHeading = document.querySelector(".games-heading");

const gamesHeadingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gamesHeading.classList.add("show");
            gamesHeadingObserver.unobserve(gamesHeading);
        }
    });
}, { threshold: 0 });

gamesHeadingObserver.observe(gamesHeading);
const gamesDescription = document.querySelector(".games-description");

const gamesDescriptionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gamesDescription.classList.add("show");
            gamesDescriptionObserver.unobserve(gamesDescription);
        }
    });
}, { threshold: 0 });

gamesDescriptionObserver.observe(gamesDescription);

bannerObserver.observe(bannerSection);
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
const learnMore = document.querySelector(".learn-more-container");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            learnMore.classList.add("show");
            observer.unobserve(learnMore);
        }
    });
});

observer.observe(learnMore);
