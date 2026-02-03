import dom from './dom.js';

export default function initContactForm() {
	const { form, phone, success, close } = dom.contact;

	function formatPhoneNumber(value) {
		const cleaned = value.replace(/\D/g, '');
		let formatted = '+375 ';

		if (cleaned.length > 3) {
			formatted += '(' + cleaned.substring(3, 5) + ') ';
		}
		if (cleaned.length > 5) {
			formatted += cleaned.substring(5, 8);
		}
		if (cleaned.length > 8) {
			formatted += '-' + cleaned.substring(8, 10);
		}
		if (cleaned.length > 10) {
			formatted += '-' + cleaned.substring(10, 12);
		}

		return formatted;
	}

	phone.addEventListener('input', (e) => {
		e.target.value = formatPhoneNumber(e.target.value);
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const formData = new FormData(contactForm);
		const data = Object.fromEntries(formData);

		success.classList.add('active');
		document.body.style.overflow = 'hidden';

		form.reset();
	});

	function closeModal() {
		success.classList.remove('active');
		document.body.style.overflow = '';
	}

	close.addEventListener('click', closeModal);
	success
		.querySelector('.modal__backdrop')
		.addEventListener('click', closeModal);

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && successModal.classList.contains('active')) {
			closeModal();
		}
	});
}
