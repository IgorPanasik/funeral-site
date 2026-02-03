import { portfolioData } from '../data/portfolioData.js';
import dom from './dom.js';

export default function initModalGallery() {
	const { modal, img, close, left, right } = dom.modalGallery;

	let currentIndex = 0;
	let currentCategory =
		document
			.querySelector('.portfolio__buttonWrapper .tab-button.active')
			?.textContent.trim() || 'ГРОБЫ';

	function openModal(index) {
		currentIndex = index;

		const items = portfolioData[currentCategory];
		if (!items) {
			console.error('Нет такой категории в portfolioData:', currentCategory);
			return;
		}

		const item = items[currentIndex];
		if (!item) {
			console.error(
				'Нет элемента с таким индексом в категории:',
				currentCategory,
				'index:',
				currentIndex,
			);
			return;
		}

		img.src = item.src;
		modal.classList.add('open');
	}

	function closeModal() {
		modal.classList.remove('open');
	}

	function showNext() {
		const items = portfolioData[currentCategory];
		currentIndex = (currentIndex + 1) % items.length;
		openModal(currentIndex);
	}

	function showPrev() {
		const items = portfolioData[currentCategory];
		currentIndex = (currentIndex - 1 + items.length) % items.length;
		openModal(currentIndex);
	}

	dom.portfolio.grid.addEventListener('click', (e) => {
		const item = e.target.closest('.portfolio__item');
		if (!item) return;

		const activeBtn = document.querySelector(
			'.portfolio__buttonWrapper .tab-button.active',
		);
		if (!activeBtn) return;

		currentCategory = activeBtn.textContent.trim();
		openModal(Number(item.dataset.index));
	});

	close.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal) closeModal();
	});

	left.addEventListener('click', showPrev);
	right.addEventListener('click', showNext);

	document.addEventListener('keydown', (e) => {
		if (!modal.classList.contains('open')) return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowRight') showNext();
		if (e.key === 'ArrowLeft') showPrev();
	});

	let touchStartX = 0;
	let touchEndX = 0;

	function handleTouchStart(e) {
		touchStartX = e.changedTouches[0].clientX;
	}

	function handleTouchMove(e) {
		touchEndX = e.changedTouches[0].clientX;
	}

	function handleTouchEnd() {
		const diff = touchEndX - touchStartX;
		if (Math.abs(diff) < 50) return;
		if (diff > 0) {
			showPrev();
		} else {
			showNext();
		}
	}

	img.addEventListener('touchstart', handleTouchStart);
	img.addEventListener('touchmove', handleTouchMove);
	img.addEventListener('touchend', handleTouchEnd);
}
