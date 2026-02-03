import dom from './dom.js';

export default function initPartnersSlider() {
	const { track } = dom.partners;

	track.addEventListener('mouseenter', () => {
		track.style.animationPlayState = 'paused';
	});

	track.addEventListener('mouseleave', () => {
		track.style.animationPlayState = 'running';
	});
}
