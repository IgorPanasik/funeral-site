import dom from './dom.js';

export default function initPreload() {
	const { heroVideo } = dom.preload;

	heroVideo.addEventListener('loadeddata', () => {
		document.body.classList.add('loaded');
	});

	// Fallback if video doesn't load
	setTimeout(() => {
		document.body.classList.add('loaded');
	}, 3000);
}
