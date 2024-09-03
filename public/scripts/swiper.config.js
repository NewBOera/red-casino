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

const swiperHero = new Swiper('#review-swiper', swiperHeroParams);
