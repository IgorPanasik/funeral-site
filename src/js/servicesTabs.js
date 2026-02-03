import dom from './dom.js';

export default function initServicesTabs() {
	const cremationData = {
		econom: [
			'Траурный венок с лентой.',
			'Транспорт для перевозки: по кол-ву свободных мест в катафалке.',
			'Доставка товаров в Минске: ритуальные принадлежности по выбору.',
			'Процесс сжигания.',
			'Ведущий церемонии.',
			'Оформление заказа на кремацию.',
			'Туалет покойного на дому.',
		],
		standart: [
			'Поминальный набор.',
			'Траурный венок с лентой.',
			'Транспорт для перевозки: катафалк на 8 мест.',
			'Процесс сжигания.',
			'Предоставление ритуального зала.',
			'Туалет покойного на дому.',
		],
		premium: [
			'Памятная табличка с надписью.',
			'Поминальный набор.',
			'Траурный венок с лентой.',
			'Транспорт для перевозки: большой выбор автомобилей.',
			'Доставка товаров в Минске: катафалк.',
			'Процесс сжигания.',
			'Предоставление ритуального зала.',
			'Ведущий церемони.',
			'Оформление заказа на кремацию.',
			'Туалет покойного на дому.',
		],
	};

	const { tabs, cards } = dom.services;

	const burialData = [...cards].map((card) => {
		const items = [...card.querySelectorAll('.service-card__features li')];
		return items.map((li) => li.innerHTML);
	});

	function updateCardList(card, items) {
		const ul = card.querySelector('.service-card__features');
		ul.textContent = '';
		items.forEach((text) => {
			const li = document.createElement('li');
			li.innerHTML = ` <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M20 6L9 17l-5-5" /> </svg> ${text} `;
			ul.appendChild(li);
		});
	}

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.forEach((t) => t.classList.remove('active'));
			tab.classList.add('active');
			if (tab.textContent.trim() === 'КРЕМАЦИЯ') {
				updateCardList(cards[0], cremationData.econom);
				updateCardList(cards[1], cremationData.standart);
				updateCardList(cards[2], cremationData.premium);
				const price = cards[2].querySelector('.service-card__price-value');
				price.textContent = 'ОТ 2900 BYN';
				const priceH3Title = cards[2].querySelector('.service-card__title');
				priceH3Title.textContent = 'ОТ 2900 BYN';
			} else {
				updateCardList(cards[0], burialData[0]);
				updateCardList(cards[1], burialData[1]);
				updateCardList(cards[2], burialData[2]);
				const price = cards[2].querySelector('.service-card__price-value');
				price.textContent = 'ОТ 3000 BYN';
				const priceH3Title = cards[2].querySelector('.service-card__title');
				priceH3Title.textContent = 'ОТ 3000 BYN';
			}
		});
	});
}
