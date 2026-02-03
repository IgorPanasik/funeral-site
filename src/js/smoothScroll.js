import dom from './dom.js';

export default function initSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href === '#') return;

			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				const headerHeight = dom.header.offsetHeight;
				const targetPosition =
					target.getBoundingClientRect().top + window.scrollY - headerHeight;

				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth',
				});
			}
		});
	});
}
