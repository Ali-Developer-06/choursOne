
//* ======= Navbar Section Script =======

let lastScrollTop = 0;
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("headerTopPlusBottom");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
const dropdownContents = document.querySelectorAll(".dropdown-content");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop > window.innerHeight * 0.1 && scrollTop > lastScrollTop) {
        navbar.style.transform = "translateY(-180px)";
        navbar.style.transition = "transform 0.3s ease";
    } else if (scrollTop < lastScrollTop) {
        navbar.style.backgroundColor = "white";
        navbar.style.transform = "translateY(0)";
        navbar.style.transition = "transform 0.3s ease";
    }
    lastScrollTop = scrollTop;
});

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = hamburger.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

dropdownToggles.forEach((toggle, index) => {
    const content = dropdownContents[index];
    toggle.addEventListener("click", (event) => {
        event.preventDefault();
        content.classList.toggle("active");
    });
    document.addEventListener("click", (event) => {
        if (!toggle.contains(event.target) && !content.contains(event.target)) {
            content.classList.remove("active");
        }
    });
});


//* ======= Image Carousel Section Script =======

const track = document.getElementById('carouselTrack');
const clonedImages = track.cloneNode(true);
track.appendChild(clonedImages);
let scrollPosition = 0;
const scrollSpeed = 0.5;
function moveCarousel() {
    scrollPosition -= scrollSpeed;
    track.style.transform = `translateX(${scrollPosition}px)`;
    const totalWidth = track.scrollWidth / 2;
    if (scrollPosition <= -totalWidth) {
        scrollPosition = 0;
    }
    requestAnimationFrame(moveCarousel);
}
moveCarousel();