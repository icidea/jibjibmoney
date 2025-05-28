import Vue from 'vue/dist/vue.min.js';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function sliderWhyUs() {
  const element = document.querySelector('#slider-why-us');

  if (!element) return;

  new Vue({
    el: element,
    mounted() {
      const refEl = this.$refs.sliderWhyUs as HTMLElement;
      new Swiper(refEl, {
        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
          delay: 5000,
        },
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 32,
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
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
