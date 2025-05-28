import Vue from 'vue/dist/vue.min.js';

const isBreakpointXL = () => window.matchMedia('(min-width: 1280px)').matches;

export default function header() {
  new Vue({
    el: '#header',
    data: {
      isMenuOpen: false,
      isSubMenuOpen: false,
      isLangOpen: false,
    },
    computed: {
      menuAriaHidden() {
        const state = !this.isMenuOpen;
        return !isBreakpointXL() && state;
      },
    },
    methods: {
      menuToggle() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      subMenuClickToggle() {
        if (!isBreakpointXL()) {
          this.isSubMenuOpen = !this.isSubMenuOpen;
        }
      },
      subMenuHoverToggle(state: boolean) {
        if (isBreakpointXL()) {
          this.isSubMenuOpen = state;
        }
      },
      langToggle() {
        this.isLangOpen = !this.isLangOpen;
      },
    },
  });
}
