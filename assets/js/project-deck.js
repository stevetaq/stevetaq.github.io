(() => {
  const deck = document.getElementById('project-deck');
  const data = window.PortfolioProjects;
  if (!deck || !data) return;
  const $ = (id) => document.getElementById(id);
  const notes = $('project-notes');
  const sections = data.map((project) => document.getElementById(project.id));
  if (sections.some((section) => !section)) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const card = $('swipe-card');
  const stage = $('deck-stage');
  const details = $('deck-details');
  let index = Math.max(0, data.findIndex((project) => '#' + project.id === location.hash));
  let busy = false, pointer = null, dragX = 0, dragged = false, generation = 0;
  const buttons = [];
  sections.forEach((section) => { section.hidden = true; });
  notes.hidden = true;
  const back = document.createElement('button');
  back.type = 'button';back.className = 'notes-back link';back.textContent = '↑ Back to project cards';
  back.addEventListener('click', () => {
    notes.hidden = true;details.setAttribute('aria-expanded', 'false');details.textContent = 'Read project notes ↓';
    deck.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'start' });
    details.focus({ preventScroll: true });
  });
  notes.prepend(back);
  deck.hidden = false;
  document.body.classList.add('deck-ready');

  function render() {
    const project = data[index], section = sections[index];
    const image = section.querySelector('figure img');
    const link = section.querySelector('a.btn') || section.querySelector('a.link');
    $('swipe-title').textContent = project.name;
    $('swipe-category').textContent = section.querySelector('.kicker')?.textContent || project.category;
    $('swipe-summary').textContent = project.description;
    $('swipe-image').src = image.src;
    $('swipe-image').alt = image.alt;
    $('swipe-art-caption').textContent = project.category;
    $('swipe-art-number').textContent = String(index + 1).padStart(2, '0');
    $('swipe-tags').replaceChildren(...project.tags.map((tag) => { const span = document.createElement('span'); span.textContent = tag; return span; }));
    $('swipe-visit').href = link.href;
    $('swipe-visit').textContent = link.textContent.replace(/\s+/g, ' ').trim();
    $('deck-position').textContent = `${String(index + 1).padStart(2, '0')} / ${String(data.length).padStart(2, '0')}`;
    $('deck-position').setAttribute('aria-label', `${project.name}, project ${index + 1} of ${data.length}`);
    $('deck-next-label').textContent = 'Next: ' + data[(index + 1) % data.length].name;
    card.dataset.project = project.id;
    card.setAttribute('aria-label', `${project.name}, project ${index + 1} of ${data.length}`);
    details.setAttribute('aria-expanded', 'false');
    details.textContent = 'Read project notes ↓';
    notes.hidden = true;
    sections.forEach((s) => { s.hidden = true; });
    buttons.forEach((b, i) => { b.setAttribute('aria-pressed', String(i === index)); });
    card.style.transform = '';card.style.opacity = '';card.classList.remove('is-dragging');
  }

  function change(direction, chosen) {
    if (busy || (chosen !== undefined && chosen === index)) return;
    busy = true;
    const ticket = ++generation;
    const finish = () => {
      if (ticket !== generation) return;
      index = chosen === undefined ? (index + direction + data.length) % data.length : chosen;
      render();history.replaceState(null, '', '#' + data[index].id);
      if (!reduced.matches) card.animate([{ opacity: .2, transform: `translateX(${direction * 35}px) rotate(${direction * 2}deg)` }, { opacity: 1, transform: 'translateX(0) rotate(0)' }], { duration: 360, easing: 'cubic-bezier(.2,.7,.2,1)' });
      busy = false;
    };
    if (reduced.matches) { finish();return; }
    const animation = card.animate([{ transform: card.style.transform || 'translateX(0)', opacity: 1 }, { transform: `translateX(${-direction * 130}px) rotate(${-direction * 7}deg)`, opacity: 0 }], { duration: 200, easing: 'ease-in', fill: 'forwards' });
    animation.finished.then(() => { animation.cancel();finish(); });
  }

  data.forEach((project, i) => {
    const button = document.createElement('button');button.type = 'button';
    button.setAttribute('aria-label', `Show ${project.name}`);
    button.title = project.name;
    button.addEventListener('click', () => change(i > index ? 1 : -1, i));
    $('deck-dots').append(button);buttons.push(button);
  });
  $('deck-prev').addEventListener('click', () => change(-1));
  $('deck-next').addEventListener('click', () => change(1));
  stage.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault();change(event.key === 'ArrowRight' ? 1 : -1); }
  });
  details.addEventListener('click', () => {
    const open = details.getAttribute('aria-expanded') !== 'true';
    details.setAttribute('aria-expanded', String(open));
    details.textContent = open ? 'Close project notes ↑' : 'Read project notes ↓';
    notes.hidden = !open;sections[index].hidden = !open;
    if (open) {
      sections[index].querySelectorAll('[data-reveal]').forEach((element) => element.classList.add('is-visible'));
      notes.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'start' });
    }
  });
  card.addEventListener('pointerdown', (event) => {
    if (busy || event.button !== 0 || event.target.closest('a,button')) return;
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };dragX = 0;dragged = false;
    card.setPointerCapture(event.pointerId);
  });
  card.addEventListener('pointermove', (event) => {
    if (!pointer || event.pointerId !== pointer.id) return;
    const dx = event.clientX - pointer.x, dy = event.clientY - pointer.y;
    if (!dragged && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) { resetDrag();return; }
    if (Math.abs(dx) > 8) dragged = true;
    if (!dragged) return;
    dragX = dx;card.classList.add('is-dragging');
    card.style.transform = `translateX(${dx * .7}px) rotate(${dx / 32}deg)`;
    card.style.opacity = String(Math.max(.45, 1 - Math.abs(dx) / 700));
  });
  function resetDrag() {
    if (pointer && card.hasPointerCapture(pointer.id)) card.releasePointerCapture(pointer.id);
    pointer = null;dragged = false;dragX = 0;
    card.classList.remove('is-dragging');card.style.transform = '';card.style.opacity = '';
  }
  card.addEventListener('pointerup', () => { const dx = dragX;const commit = dragged && Math.abs(dx) > 65;resetDrag();if (commit) change(dx < 0 ? 1 : -1); });
  card.addEventListener('pointercancel', resetDrag);
  window.addEventListener('hashchange', () => { const chosen = data.findIndex((p) => '#' + p.id === location.hash);if (chosen >= 0 && chosen !== index) change(chosen > index ? 1 : -1, chosen); });
  render();
})();
