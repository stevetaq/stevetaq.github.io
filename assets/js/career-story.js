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
  if (!rows || !projects.length) return;
  const paths = $('atlas-paths');
  const methodNodes = document.querySelectorAll('.atlas-method');
  const ns = 'http://www.w3.org/2000/svg';
  const colors = ['#f2c14e', '#b7b2ed', '#8abdb8', '#df9c7e', '#9fc795', '#c7b18d'];
  // Small editorial illustrations, rather than charts claiming measured results.
  const artworks = [
    { label: 'Match probabilities', caption: 'Poisson · Bayesian updating · Monte Carlo', svg: `<g fill="currentColor" opacity=".65">${[18,55,104,139,121,82,47,22,9].map((h,i)=>`<rect x="${46+i*39}" y="${175-h}" width="23" height="${h}" rx="3"/>`).join('')}</g><path class="art-line" d="M35 169 C70 167 105 90 151 53 S229 46 263 92 S334 159 404 174"/><path d="M30 179H410" class="art-grid"/><g class="art-dot"><circle cx="187" cy="40" r="5"/><circle cx="265" cy="94" r="4"/></g>` },
    { label: 'Factor exposures', caption: 'Market · size · value · momentum', svg: `<g class="art-grid"><path d="M30 40H410M30 85H410M30 130H410M30 175H410M100 20V185M220 20V185M340 20V185"/></g><path d="M30 160L65 151 95 160 129 123 161 138 193 104 226 117 260 76 292 93 323 51 355 69 384 35 410 42" class="art-line"/><path d="M30 166L65 162 95 149 129 153 161 124 193 137 226 110 260 120 292 83 323 99 355 66 384 79 410 52" class="art-line art-secondary"/><circle cx="410" cy="42" r="5" fill="currentColor"/>` },
    { label: 'Source to warehouse', caption: 'Ingest → validate → transform → query', svg: `<path class="art-line pipeline-line" d="M67 80H374M169 80V150H272"/><g fill="var(--bg-2)" stroke="currentColor" stroke-width="1.5"><rect x="29" y="53" width="76" height="54" rx="8"/><rect x="132" y="53" width="76" height="54" rx="8"/><rect x="235" y="53" width="76" height="54" rx="8"/><rect x="338" y="53" width="76" height="54" rx="8"/></g><g class="art-text"><text x="67" y="85">RAW</text><text x="170" y="85">CHECK</text><text x="273" y="85">DBT</text><text x="376" y="85">SQL</text><text x="215" y="174">REJECTED ROWS</text></g><g fill="currentColor"><circle cx="119" cy="80" r="4"/><circle cx="222" cy="80" r="4"/><circle cx="324" cy="80" r="4"/><circle cx="272" cy="150" r="4"/></g>` },
    { label: 'A tournament, many outcomes', caption: 'Goal models · match forecasts · tournament paths', svg: `<g class="art-line" opacity=".65"><path d="M35 27H98V60H158M35 93H98V60M35 123H98V156H158M35 189H98V156M158 60H205V108H258M158 156H205V108M405 27H343V60H282M405 93H343V60M405 123H343V156H282M405 189H343V156M282 60H258V108M282 156H258V108"/></g><circle cx="232" cy="108" r="23" fill="var(--bg-2)" stroke="currentColor"/><path class="art-line" d="M222 108l7 7 13-16"/>` },
    { label: 'Finding a listening pattern', caption: 'Listening history · audio features · similarity', svg: `<g fill="currentColor">${Array.from({length:31},(_,i)=>{const h=18+Math.sin(i*.73)**2*75+Math.cos(i*.31)**2*30;return `<rect x="${36+i*12}" y="${103-h/2}" width="5" height="${h}" rx="2.5" opacity="${.25+.75*Math.sin(i/31*Math.PI)}"/>`;}).join('')}</g><circle cx="220" cy="103" r="78" class="art-grid"/><circle cx="220" cy="103" r="96" class="art-grid"/>` },
    { label: 'Players with similar roles', caption: 'Player data · clustering · scouting notes', svg: `<g class="art-grid"><path d="M35 180H405M35 180V20"/></g>${[[108,120],[125,141],[94,145],[143,113],[116,100],[155,137],[242,65],[270,56],[253,88],[280,79],[222,86],[292,49],[315,145],[341,132],[356,155],[329,168],[371,139],[348,112]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="${i%4===0?6:4}" fill="currentColor" opacity="${i<6?.9:i<12?.5:.3}"/>`).join('')}<ellipse cx="124" cy="124" rx="55" ry="45" class="art-line art-secondary"/><path class="art-line" d="M165 101Q204 55 230 65"/>` },
  ];
  projects.forEach((project, index) => {
    project.methods.forEach((used, method) => {
      if (!used) return;
      const path = document.createElementNS(ns, 'path');
      const y = 44 + index * 70;
      const end = 72 + method * 98;
      path.setAttribute('d', `M270 ${y} C385 ${y} 410 ${end} 528 ${end}`);
      path.dataset.project = String(index);
      paths.append(path);
    });
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'atlas-project';
    button.style.setProperty('--project-color', colors[index]);
    button.setAttribute('aria-label', `${project.name}: ${labels.filter((_, i) => project.methods[i]).join(', ')}`);
    const number = document.createElement('span');
    number.className = 'atlas-project-number';
    number.textContent = String(index + 1).padStart(2, '0');
    const name = document.createElement('span');
    name.textContent = project.name;
    button.append(number, name);
    button.addEventListener('click', () => selectProject(index));
    button.addEventListener('keydown', (event) => {
      const step = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? -1 : 0;
      if (!step) return;
      event.preventDefault();
      const next = (index + step + projects.length) % projects.length;
      rows.children[next].focus();
      selectProject(next);
    });
    rows.append(button);
  });
  function selectProject(index) {
    const project = projects[index];
    const art = artworks[index];
    document.querySelector('.atlas-layout').style.setProperty('--atlas-accent', colors[index]);
    rows.querySelectorAll('button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    paths.querySelectorAll('path').forEach((path) => path.classList.toggle('is-active', Number(path.dataset.project) === index));
    // Paint the selected paths last so intersections stay clear.
    paths.querySelectorAll('.is-active').forEach((path) => paths.append(path));
    methodNodes.forEach((node, i) => node.classList.toggle('is-active', project.methods[i]));
    $('atlas-category').textContent = project.category;
    $('atlas-name').textContent = project.name;
    $('atlas-description').textContent = project.description;
    $('atlas-link').href = `projects.html#${project.id}`;
    $('atlas-link').textContent = `Explore ${project.name} ↗`;
    $('atlas-number').textContent = `${String(index + 1).padStart(2, '0')} / 06`;
    $('atlas-art-label').textContent = art.label;
    $('atlas-art-caption').textContent = art.caption;
    $('atlas-artwork').innerHTML = art.svg;
    $('atlas-tags').replaceChildren(...project.tags.map((tag) => {
      const span = document.createElement('span'); span.textContent = tag; return span;
    }));
    $('atlas-method-summary').textContent = `${project.name} · ${labels.filter((_, i) => project.methods[i]).join(' / ')}`;
    if (!reduced.matches) $('atlas-artwork').animate([{opacity: 0, transform: 'translateY(8px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 400, easing: 'ease-out'});
  }
  selectProject(0);
})();
