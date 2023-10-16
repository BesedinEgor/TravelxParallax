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

const picker = new easepick.create({
  element: document.getElementById("datePicker"),
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
  format: "HH:mm, DD/MM/YY",
  zIndex: 10,
  plugins: [TimePlugin],
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

const swiperPopular = new Swiper(".swiper-popular", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: "#sliderRight",
    prevEl: "#sliderLeft",
  },
  breakpoints: {
    425: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 4,
    },
  },
});

// конфиги для свайперов блока testimonials
const config = {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 0,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 4000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
};
const configReverse = {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 0,
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
};

const configHorizontal = {
  direction: "horizontal",
  slidesPerView: 1,
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
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
};

//реализация отключения слайдера по брейкпоинту
// устанавливаем брейкпоинт
const breakpoint = window.matchMedia("(max-width: 1023px)");

let swiperTestimonialsCol1, swiperTestimonialsCol2, swiperTestimonialsCol3, swiperHorizontal;

// функция, которая проверяет срабатывание медиазапроса breakpoint и отключает swiper
const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    const swiperHorizontal = new Swiper("#testimonials-horizontal-swiper", configHorizontal);
    if (swiperTestimonialsCol1 !== undefined) swiperTestimonialsCol1.destroy(true, true);
    if (swiperTestimonialsCol2 !== undefined) swiperTestimonialsCol2.destroy(true, true);
    if (swiperTestimonialsCol3 !== undefined) swiperTestimonialsCol3.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    const swiperTestimonialsCol1 = new Swiper("#testimonials-col-1", config);
    const swiperTestimonialsCol2 = new Swiper("#testimonials-col-2", configReverse);
    const swiperTestimonialsCol3 = new Swiper("#testimonials-col-3", config);
    if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);

    return;
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
