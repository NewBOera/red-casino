import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiperGlobals = {
  sticky: false,
  loop: true,
  navigation: false,
  grabCursor: true,
};

const swiperHeroParams = {
  ...swiperGlobals,
  spaceBetween: 0,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
};

const casinoCardsParams = {
  ...swiperGlobals,
  spaceBetween: 5,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
};

const faQParams = {
  sticky: false,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 5,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
};
const casinoSwiper = new Swiper('#casino-swiper', casinoCardsParams);
const faqSwiper = new Swiper('#faq-swiper', faQParams);
const howSwiper = new Swiper('#how-swiper', faQParams);

console.log(faqSwiper);
