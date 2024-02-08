(() => {
  const burgerBtn = document.querySelector('[data-burger-btn]');
  const menu = document.querySelector('[data-menu]');

  burgerBtn.addEventListener('click', () => {
    const expanded =
      burgerBtn.getAttribute('aria-expanded') === 'true' || false;

    burgerBtn.classList.toggle('active');
    burgerBtn.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('is-open');
  });
})();
