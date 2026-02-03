import dom from './dom.js';

export default function initAboutSlider() {
	const { slider, dots, slides, prev, next } = dom.about;
	let currentSlide = 0;
	let slideInterval;

	function createDots() {
		slides.forEach((_, index) => {
			const dot = document.createElement('button');
			dot.classList.add('about__slider-dot');
			if (index === 0) dot.classList.add('active');
			dot.setAttribute('aria-label', `Слайд ${index + 1}`);
			dot.addEventListener('click', () => goToSlide(index));
			dots.appendChild(dot);
		});
	}

	function updateDots() {
		const dotsBtns = dots.querySelectorAll('.about__slider-dot');
		dotsBtns.forEach((dot, index) => {
			dot.classList.toggle('active', index === currentSlide);
		});
	}

	function goToSlide(index) {
		slides[currentSlide].classList.remove('active');
		currentSlide = index;
		if (currentSlide >= slides.length) currentSlide = 0;
		if (currentSlide < 0) currentSlide = slides.length - 1;
		slides[currentSlide].classList.add('active');
		updateDots();
	}

	function nextSlide() {
		goToSlide(currentSlide + 1);
	}

	function prevSlide() {
		goToSlide(currentSlide - 1);
	}

	function startSlideshow() {
		slideInterval = setInterval(nextSlide, 5000);
	}

	function stopSlideshow() {
		clearInterval(slideInterval);
	}

	createDots();
	startSlideshow();

	prev.addEventListener('click', () => {
		stopSlideshow();
		prevSlide();
		startSlideshow();
	});

	next.addEventListener('click', () => {
		stopSlideshow();
		nextSlide();
		startSlideshow();
	});
}
