const menuToggle = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

// Hamburger-menu

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
  menuToggle.classList.toggle("hamburger-active");
});

// Saat mengclick window

var windows = function (e) {
  if (e.target !== menuToggle && e.target !== navMenu) {
    navMenu.classList.add("hidden");
    menuToggle.classList.remove("hamburger-active");
  }
};

window.addEventListener("click", windows);

// Swiper js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  loop: true,
  centerSlide: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#btnNext",
    prevEl: "#btnPrev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 4,
    },
    950: {
      slidesPerView: 4,
    },
  },
});
