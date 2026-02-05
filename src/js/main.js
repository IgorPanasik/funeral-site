import initContactForm from './contactForm.js';
import initCounters from './counters.js';
import initHeader from './header.js';
import initMobileMenu from './mobile-menu.js';
import initModalGallery from './modalGallery.js';
import initPortfolio from './portfolio.js';
import initPreload from './preload.js';
import initScrollAnimations from './scrollAnimations.js';
import initScrollCard from './scrollToCard.js';
import initScrollToUp from './scrollToUp.js';
import initServicesTabs from './servicesTabs.js';
import initAboutSlider from './slider-about.js';
import initSmoothScroll from './smoothScroll.js';

document.addEventListener('DOMContentLoaded', () => {
	initHeader();
	initMobileMenu();
	initAboutSlider();
	initScrollAnimations();
	initCounters();
	initSmoothScroll();
	initServicesTabs();
	initPortfolio();
	initModalGallery();
	initContactForm();
	initPreload();
	initScrollToUp();
	initScrollCard();
});
