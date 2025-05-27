import Vue from 'vue/dist/vue.js';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function sliderVdo() {
  const element = document.querySelector('#slider-vdo');

  if (!element) return;

  new Vue({
    el: element,
    mounted() {
      const refEl = this.$refs.sliderVdo as HTMLElement;
      new Swiper(refEl, {
        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
          delay: 5000,
        },
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
          1024: {
            slidesPerView: 2,
          },
        },
        navigation: {
          nextEl: refEl.querySelector('.swiper-button-next') as HTMLElement,
          prevEl: refEl.querySelector('.swiper-button-prev') as HTMLElement,
        },
        pagination: {
          el: refEl.querySelector('.swiper-pagination') as HTMLElement,
          clickable: true,
        },
      });
    },
  });
}
