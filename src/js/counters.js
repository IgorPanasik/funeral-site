import dom from './dom.js';

export default function initCounters() {
	const counters = dom.counters;

	const counterObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const target = entry.target;
					const count = parseInt(target.dataset.count);
					let current = 0;
					const increment = count / 50;
					const duration = 2000;
					const stepTime = duration / 50;

					const timer = setInterval(() => {
						current += increment;
						if (current >= count) {
							target.textContent = count.toLocaleString() + '+';
							clearInterval(timer);
						} else {
							target.textContent = Math.floor(current).toLocaleString();
						}
					}, stepTime);

					counterObserver.unobserve(target);
				}
			});
		},
		{ threshold: 0.5 },
	);

	counters.forEach((counter) => {
		counterObserver.observe(counter);
	});
}
