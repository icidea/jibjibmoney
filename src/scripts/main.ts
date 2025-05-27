import header from './modules/header';
import sliderWhyUs from './modules/sliderWhyUs';
import sliderPromotion from './modules/sliderPromotion';
import sliderArticle from './modules/sliderArticle';
import sliderVdo from './modules/sliderVdo';
import sliderPreservation from './modules/sliderPreservation';
import faqItem from './modules/faqItem';

document.addEventListener('DOMContentLoaded', () => {
  header();
  sliderWhyUs();
  sliderPromotion();
  sliderArticle();
  sliderVdo();
  sliderPreservation();
  faqItem();
});
