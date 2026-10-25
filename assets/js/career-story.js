(() => {
  const range = document.getElementById('career-year');
  if (!range) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const roles = [
    { start: 0, company: 'NatWest Group', period: 'Sep 2017—Sep 2019', title: 'Graduate Analytics Analyst', detail: 'Rotations through data innovation, private banking and fraud, before specialising in quantitative risk.', tag: 'Python · SQL · customer analytics' },
    { start: 24, company: 'NatWest Group', period: 'Sep 2019—Jan 2023', title: 'Senior Quantitative Analyst', detail: 'Challenging stress-test outcomes and building automated portfolio analysis for NatWest Markets and Ulster Bank.', tag: 'Stress testing · Python · Tableau' },
    { start: 64, company: 'NatWest Group', period: 'Jan 2023—Sep 2024', title: 'Franchise Lead', detail: 'Co-led stress testing for a £200bn retail portfolio and directed the Python rebuild of IFRS 9 staging.', tag: '£200bn portfolio · staging: 60 → 10 minutes' },
    { start: 84, company: 'JPMorgan Chase', period: 'Sep 2024—Sep 2026', title: 'Lead Model Developer', detail: 'Built loss forecasts for a new business, owned model governance and automated recurring forecasting work.', tag: 'IFRS 9 · CECL · 2 FTE of manual work removed' },
    { start: 108, company: 'JPMorgan Chase', period: 'Sep 2026—present', title: 'Data Engineer', detail: 'Tracing critical data across Asset & Wealth Management, with lineage, quality checks and preventative controls.', tag: 'BCBS 239 · lineage · data quality' },
  ];
  const $ = (id) => document.getElementById(id);
  const play = $('career-play');
  const snapshot = $('role-snapshot');
  const months = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
  let position = 109, target = 109, frame = null, playing = false, previousTime = null, active = -1, lastMonth = -1;

  roles.forEach((role, index) => {
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', String(160 + role.start / 109 * 480));
    dot.setAttribute('cy', '253');
    dot.setAttribute('r', '4');
    dot.setAttribute('class', 'milestone-dot');
    dot.dataset.role = String(index);
    $('curve-milestones').appendChild(dot);
  });

  function setPlaying(value) {
    playing = value;
    play.setAttribute('aria-pressed', String(value));
    play.setAttribute('aria-label', value ? 'Pause career timeline' : 'Play career timeline');
    play.textContent = value ? 'Ⅱ' : '▶';
    previousTime = null;
  }

  function draw() {
    const sigma = 14;
    const mu = 160 + position / 109 * 480;
    const scale = sigma * 480 / 109;
    const amplitude = 128 * 14 / sigma;
    const y = (x) => 235 - amplitude * Math.exp(-0.5 * ((x - mu) / scale) ** 2);
    const points = [];
    for (let x = 30; x <= 770; x += 3) points.push(`${x},${y(x).toFixed(2)}`);
    const path = 'M' + points.join(' L');
    $('curve-line').setAttribute('d', path);
    $('curve-area').setAttribute('d', path + ' L770,235 L30,235 Z');
    $('curve-marker').setAttribute('x1', String(mu));
    $('curve-marker').setAttribute('x2', String(mu));
    $('curve-point').setAttribute('cx', String(mu));
    $('curve-point').setAttribute('cy', String(y(mu)));
    const month = Math.round(target);
    if (month !== lastMonth) {
      const date = new Date(Date.UTC(2017, 8 + month, 1));
      $('career-date').textContent = months.format(date);
      if (playing) range.value = String(month);
      range.setAttribute('aria-valuetext', months.format(date));
      lastMonth = month;
    }
    const roleIndex = roles.reduce((current, role, i) => target >= role.start ? i : current, 0);
    if (roleIndex !== active) {
      const role = roles[roleIndex];
      $('story-company').textContent = role.company;
      $('story-period').textContent = role.period;
      $('story-role').textContent = role.title;
      $('story-detail').textContent = role.detail;
      $('story-tag').textContent = role.tag;
      $('role-count').textContent = `0${roleIndex + 1} / 05`;
      $('curve-milestones').querySelectorAll('circle').forEach((dot, i) => dot.classList.toggle('is-current', i === roleIndex));
      if (active !== -1 && !reduced.matches) snapshot.animate([{ opacity: .25, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 380, easing: 'cubic-bezier(.2,.7,.2,1)' });
      active = roleIndex;
    }
  }

  function tick(time) {
    frame = null;
    if (playing) {
      if (previousTime !== null) target = Math.min(109, target + Math.min(time - previousTime, 80) * 109 / 18000);
      previousTime = time;
    }
    position = reduced.matches ? target : position + (target - position) * .16;
    if (Math.abs(target - position) < .015) position = target;
    draw();
    if (playing && position >= 109) setPlaying(false);
    if (playing || position !== target) requestTick();
  }
  function requestTick() { if (frame === null) frame = requestAnimationFrame(tick); }
  range.addEventListener('input', () => { setPlaying(false); target = Number(range.value); requestTick(); });
  play.addEventListener('click', () => {
    if (!playing && target >= 108.9) { target = 0; position = 0; }
    setPlaying(!playing);
    requestTick();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) setPlaying(false); });
  reduced.addEventListener('change', () => { if (reduced.matches) setPlaying(false); });
  draw();

  const projects = window.PortfolioProjects || [];
  const labels = ['Data', 'Models', 'Simulation', 'Writing'];
  const rows = $('atlas-rows');
  if (!rows) return;
  projects.forEach((project, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'atlas-row';
    button.setAttribute('aria-pressed', String(index === 0));
    button.setAttribute('aria-label', `${project.name}: ${labels.filter((_, i) => project.methods[i]).join(', ')}`);
    const label = document.createElement('span');
    label.className = 'atlas-row-name';
    label.textContent = project.name;
    button.append(label);
    project.methods.forEach((used) => {
      const cell = document.createElement('span');
      cell.className = 'atlas-cell';
      cell.setAttribute('aria-hidden', 'true');
      const dot = document.createElement('i');
      dot.className = used ? 'atlas-dot is-used' : 'atlas-dot';
      cell.append(dot);button.append(cell);
    });
    button.addEventListener('click', () => {
      rows.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      $('atlas-category').textContent = project.category;
      $('atlas-name').textContent = project.name;
      $('atlas-description').textContent = project.description;
      $('atlas-link').href = `projects.html#${project.id}`;
      $('atlas-number').textContent = String(index + 1).padStart(2, '0');
    });
    rows.append(button);
  });
})();
