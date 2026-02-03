import dom from './dom.js';

export default function initHeader() {
	let lastScroll = 0;

	function handleScroll() {
		const currentScroll = window.scrollY;

		if (currentScroll > 50) {
			dom.header.classList.add('scrolled');
		} else {
			dom.header.classList.remove('scrolled');
		}

		lastScroll = currentScroll;
	}

	window.addEventListener('scroll', handleScroll, { passive: true });
}
