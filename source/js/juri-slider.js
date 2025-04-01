import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initJuriSlider = () => {
  const sliderJuriEl = document.querySelector('.swiper');
  const swiperJuri = new Swiper(sliderJuriEl, {
    modules: [Navigation],
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 40,
    simulateTouch: false,
    loop: true,
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 40,
        simulateTouch: true,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        simulateTouch: true,
      },
      1366: {
        slidesPerView: 4,
      }
    },
  });
  swiperJuri.update();
};

export { initJuriSlider };
