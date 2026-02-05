export default function initScrollCard() {
	const card = document.getElementById('scrollCard');
	const toggle = document.getElementById('phoneToggle');
	const container = document.querySelector('.scroll-card-container');
	const about = document.querySelector('#about');
	const btn = document.querySelector('.btn-close-card');
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				container.classList.add('isOpen');
			}
		},
		{ threshold: 0.2 },
	);
	observer.observe(about);

	toggle.addEventListener('click', () => {
		card.classList.toggle('collapsed');
	});

	card.addEventListener('click', () => {
		card.classList.toggle('collapsed');
	});

	btn.addEventListener('click', (e) => {
		e.stopPropagation();
		card.classList.toggle('collapsed');
	});
}
