import Vue from 'vue/dist/vue.min.js';

export default function faqItem() {
  const element = document.querySelector('#faq-list');

  if (!element) return;

  new Vue({
    el: element,
    components: {
      'faq-item': {
        data() {
          return {
            isOpen: false,
          };
        },
        template: `<div class="box-faq-item">
          <button
            class="box-faq-item__question"
            :aria-expanded="isOpen.toString()"
            @click.prevent="isOpen = !isOpen"
          >
            <slot name="question"></slot>
          </button>
          <div
            class="box-faq-item__answer"
            :aria-hidden="(!isOpen).toString()"
            v-show="isOpen"
          >
            <slot name="answer"></slot>
          </div>
        </div>`,
      },
    },
  });
}
