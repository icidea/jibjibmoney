import Vue from 'vue/dist/vue.js';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function sliderPromotion() {
  const element = document.querySelector('#slider-promotion');

  if (!element) return;

  new Vue({
    el: element,
    mounted() {
      const refEl = this.$refs.sliderPromotion as HTMLElement;
      new Swiper(refEl, {
        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
          delay: 5000,
        },
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 40,
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
