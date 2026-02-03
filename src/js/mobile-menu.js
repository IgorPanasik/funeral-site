import dom from './dom.js';
const { burger, menu, links } = dom.mobile;

export default function initMobileMenu() {
	function toggle() {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		document.body.style.overflow = menu.classList.contains('active')
			? 'hidden'
			: '';
	}

	burger.addEventListener('click', toggle);

	links.forEach((link) => {
		link.addEventListener('click', toggle);
	});
}
