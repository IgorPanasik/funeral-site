const dom = {
	header: document.getElementById('header'),

	mobile: {
		burger: document.getElementById('burger'),
		menu: document.getElementById('mobileMenu'),
		links: document.querySelectorAll('.mobile-menu__link'),
	},

	about: {
		slider: document.getElementById('aboutSlider'),
		dots: document.getElementById('sliderDots'),
		slides: document.querySelectorAll('.about__slide'),
		prev: document.querySelector('.about__slider-btn--prev'),
		next: document.querySelector('.about__slider-btn--next'),
	},

	animations: {
		get animated() {
			return document.querySelectorAll('.animate-on-scroll');
		},
	},

	counters: document.querySelectorAll('[data-count]'),

	services: {
		tabs: document.querySelectorAll('.services__buttonWrapper .tab-button'),
		cards: document.querySelectorAll('.service-card'),
	},

	portfolio: {
		tabs: document.querySelectorAll('.portfolio__buttonWrapper .tab-button'),
		grid: document.querySelector('.portfolio__grid'),
		moreBtn: document.querySelector('.portfolio__more'),
	},

	modalGallery: {
		modal: document.getElementById('imageModal'),
		img: document.querySelector('#imageModal .gallery-modal__img'),
		close: document.querySelector('#imageModal .gallery-modal__close'),
		left: document.querySelector('#imageModal .gallery-modal__arrow--left'),
		right: document.querySelector('#imageModal .gallery-modal__arrow--right'),
	},

	contact: {
		form: document.getElementById('contactForm'),
		phone: document.getElementById('phone'),
		success: document.getElementById('successModal'),
		close: document.getElementById('modalClose'),
	},

	partners: {
		track: document.querySelector('.partners__track'),
	},

	preload: {
		heroVideo: document.querySelector('.hero__video'),
	},
};
export default dom;
