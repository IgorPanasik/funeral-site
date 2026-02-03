import dom from './dom.js';

export const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	},
	{
		root: null,
		rootMargin: '0px',
		threshold: 0.1,
	},
);

export default function initScrollAnimations() {
	const { animated } = dom.animations;

	animated.forEach((element) => {
		observer.observe(element);
	});
}
