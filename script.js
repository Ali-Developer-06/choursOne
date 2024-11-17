
//* ======= Navbar Section Script =======

let lastScrollTop = 0;
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("headerTopPlusBottom");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContent = document.querySelector(".dropdown-content");

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

dropdownToggle.addEventListener("click", (event) => {
    event.preventDefault();
    dropdownContent.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove("active");
    }
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