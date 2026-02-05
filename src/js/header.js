import dom from './dom.js';
import logoWhite from '/src/logo-slogan-white.svg';
import logoDark from '/src/logo-slogan.svg';

export default function initHeader() {
	let lastScroll = 0;

	function handleScroll() {
		const currentScroll = window.scrollY;
		const logoImg = document.querySelector('.header__logo-slogan');
		if (currentScroll > 50) {
			dom.header.classList.add('scrolled');
			logoImg.src = logoDark;
		} else {
			dom.header.classList.remove('scrolled');
			logoImg.src = logoWhite;
		}

		lastScroll = currentScroll;
	}

	window.addEventListener('scroll', handleScroll, { passive: true });
}
