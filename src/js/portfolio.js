import { portfolioData } from '../data/portfolioData.js';
import dom from './dom.js';
import { observer } from './scrollAnimations.js';

export default function initPortfolio() {
	const { tabs, grid, moreBtn } = dom.portfolio;

	const ITEMS_PER_LOAD = 4;
	let currentCategory = 'ГРОБЫ';
	let currentIndex = 0;

	function observeNewAnimatedElements() {
		dom.animations.animated.forEach((el) => observer.observe(el));
	}

	function renderInitial(category) {
		currentCategory = category;
		currentIndex = 0;
		grid.innerHTML = '';
		loadMore();
	}

	function loadMore() {
		const items = portfolioData[currentCategory];
		const slice = items.slice(currentIndex, currentIndex + ITEMS_PER_LOAD);

		slice.forEach((item, index) => {
			const div = document.createElement('div');
			div.className = 'portfolio__item animate-on-scroll';
			div.dataset.index = currentIndex + index;

			if (item.large) div.classList.add('portfolio__item--large');
			if (item.tall) div.classList.add('portfolio__item--tall');

			div.innerHTML = `
                <img src="${item.src}" data-index="${currentIndex + index}" alt="${item.title}">
                <div class="portfolio__overlay">
                    <h3>${item.title}</h3>
                    <p>${item.subtitle}</p>
                </div>
            `;

			grid.appendChild(div);
		});

		currentIndex += slice.length;

		if (currentIndex >= portfolioData[currentCategory].length) {
			moreBtn.style.display = 'none';
		} else {
			moreBtn.style.display = 'block';
		}

		observeNewAnimatedElements();
	}

	renderInitial('ГРОБЫ');

	tabs.forEach((btn) => {
		btn.addEventListener('click', () => {
			tabs.forEach((b) => b.classList.remove('active'));
			btn.classList.add('active');
			renderInitial(btn.textContent.trim());
		});
	});

	moreBtn.addEventListener('click', loadMore);
}
