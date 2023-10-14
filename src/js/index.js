// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import { easepick, TimePlugin } from "@easepick/bundle";
import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./countrys/countryList.js";
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

const autoCompleteJS = new autoComplete({
  selector: "#autoCompleteCountry",
  placeHolder: "e.g Bali, Indonesia",
  data: {
    src: countryList,
    cache: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
  searchEngine: "strict",
});

const swiperHeader = new Swiper(".swiper-header", {
  loop: true,
  parallax: true,
  speed: 1000,

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".slider-controls__count",
    type: "fraction",
  },

  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const picker = new easepick.create({
  element: document.getElementById("datePicker"),
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
  format: "HH:mm, DD/MM/YY",
  zIndex: 10,
  plugins: [TimePlugin],
});

const swiperPopular = new Swiper(".swiper-popular", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: "#sliderRight",
    prevEl: "#sliderLeft",
  },
});

const swiperTestimonialsCol1 = new Swiper("#testimonials-col-1", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 32,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 4000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

const swiperTestimonialsCol2 = new Swiper("#testimonials-col-2", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 32,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 4000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
});

const swiperTestimonialsCol3 = new Swiper("#testimonials-col-3", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 32,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 4000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
