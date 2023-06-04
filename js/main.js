var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

//Menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
});