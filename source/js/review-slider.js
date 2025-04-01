import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


const initReviewSlider = () => {
  const sliderReviewEl = document.querySelector('.reviews__swiper');

  const swiperReview = new Swiper(sliderReviewEl, {
    modules: [Navigation],
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 250,
    simulateTouch: true,
    breakpoints: {
      1366: {
        simulateTouch: false
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperReview.update();
};

export { initReviewSlider };
