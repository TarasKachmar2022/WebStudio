const refs = {
  burgerBtn: document.querySelector('[data-burger-btn]'),
};

refs.burgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  refs.burgerBtn.classList.toggle('active');
}
