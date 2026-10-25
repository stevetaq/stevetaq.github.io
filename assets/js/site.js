const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

const closeMenu = () => {
  if (!menuButton || !nav) return;
  nav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = 'Menu';
};

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('span').textContent = open ? 'Close' : 'Menu';
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
}

const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  revealItems.forEach((item, index) => {
    item.style.setProperty('--delay', `${Math.min(index % 4, 3) * 70}ms`);
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

// The team takes its positions once, from the goalkeeper to the forwards.
const pitch = document.querySelector('.pitch');
if (pitch && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const players = [...pitch.querySelectorAll('.player')].sort((a, b) => parseFloat(b.style.top) - parseFloat(a.style.top));
  players.forEach((player, index) => player.style.setProperty('--player-delay', `${index * 65}ms`));
  pitch.classList.add('lineup-ready');
  const lineupObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      pitch.classList.add('lineup-in');
      lineupObserver.disconnect();
    }
  }, { threshold: 0.15 });
  lineupObserver.observe(pitch);
}
