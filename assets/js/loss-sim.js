// Homepage Monte Carlo: one-year credit losses on a 1,000-loan book (Vasicek one-factor model).
// Each simulated year draws one economy-wide shock; every loan's default chance moves with it.
(function () {
  const canvas = document.getElementById('sim');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const form = document.getElementById('simForm');
  const $ = (id) => document.getElementById(id);
  const inputs = { pd: $('inPd'), lgd: $('inLgd'), rho: $('inRho') };
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const LOANS = 1000, EXPOSURE = 10, RUNS = 4000, BINS = 44; // exposure in £k per loan
  const COLORS = { body: 'rgba(236,232,223,.78)', tail: '#e0664a', gold: '#f2c14e', axis: 'rgba(236,232,223,.28)', label: 'rgba(236,232,223,.5)' };

  let dpr = 1, frame = null, state = null;

  function gauss() {
    let u = 0, v = 0;
    while (!u) u = Math.random();
    while (!v) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }

  // Standard normal CDF (Abramowitz and Stegun 7.1.26).
  function cdf(x) {
    const t = 1 / (1 + .3275911 * Math.abs(x) / Math.SQRT2);
    const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - .284496736) * t + .254829592) * t * Math.exp(-x * x / 2);
    return .5 * (1 + Math.sign(x) * y);
  }

  // Inverse normal CDF (Acklam's approximation).
  function invCdf(p) {
    const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
    const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
    const c = [-.007784894002430293, -.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
    const d = [.007784695709041462, .3224671290700398, 2.445134137142996, 3.754408661907416];
    const lo = .02425;
    if (p < lo) { const q = Math.sqrt(-2 * Math.log(p)); return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1); }
    if (p > 1 - lo) { const q = Math.sqrt(-2 * Math.log(1 - p)); return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1); }
    const q = p - .5, r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  }

  // One simulated year: total loss in £k.
  function simulate(p) {
    const z = gauss();
    const pd = cdf((p.threshold - Math.sqrt(p.rho) * z) / Math.sqrt(1 - p.rho));
    let defaults = 0;
    for (let i = 0; i < LOANS; i++) if (Math.random() < pd) defaults++;
    const lgd = Math.min(1, Math.max(0, p.lgd * (1 + .12 * gauss())));
    return defaults * EXPOSURE * lgd;
  }

  function params() {
    const pd = +inputs.pd.value / 100;
    return { pd, threshold: invCdf(pd), lgd: +inputs.lgd.value / 100, rho: +inputs.rho.value / 100 };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    if (state && !frame) draw();
  }

  function fmtK(v) {
    return v >= 1000 ? '£' + (v / 1000).toFixed(2) + 'm' : '£' + Math.round(v) + 'k';
  }

  function start() {
    const p = params();
    $('outPd').textContent = inputs.pd.value + '%';
    $('outLgd').textContent = inputs.lgd.value + '%';
    $('outRho').textContent = inputs.rho.value + '%';

    // Pre-pass fixes the axis and the 1-in-100 threshold so colours don't shift mid-run.
    const probe = Array.from({ length: 2000 }, () => simulate(p)).sort((a, b) => a - b);
    const hi = Math.max(20, probe[Math.floor(probe.length * .995)] * 1.08);
    const tail = probe[Math.floor(probe.length * .99)];

    state = { p, hi, tail, width: hi / BINS, bins: new Array(BINS).fill(0), samples: [], falling: [], spawned: 0 };
    if (frame) cancelAnimationFrame(frame);
    frame = null;

    if (reduceMotion) {
      for (let i = 0; i < RUNS; i++) land(simulate(p));
      state.spawned = RUNS;
      draw();
      return;
    }
    tick();
  }

  function binOf(v) {
    return Math.max(0, Math.min(BINS - 1, Math.floor(v / state.width)));
  }

  function land(v) {
    state.bins[binOf(v)]++;
    state.samples.push(v);
  }

  function geometry() {
    const W = canvas.width, H = canvas.height;
    const left = 4 * dpr, right = W - 4 * dpr, base = H - 26 * dpr, top = 10 * dpr;
    const bw = (right - left) / BINS;
    const peak = Math.max(20, ...state.bins);
    return { W, H, left, right, base, top, bw, scale: (base - top - 24 * dpr) / peak, peak };
  }

  function tick() {
    const g = geometry();
    const rate = state.spawned < 250 ? 4 : 22;
    for (let k = 0; k < rate && state.spawned < RUNS; k++, state.spawned++) {
      const v = simulate(state.p);
      const b = binOf(v);
      state.falling.push({ v, b, x: g.left + (b + .5) * g.bw + (Math.random() - .5) * g.bw * .5, y: g.top + Math.random() * 30 * dpr, vy: Math.random() * 2 * dpr });
    }
    const still = [];
    for (const f of state.falling) {
      f.vy += .55 * dpr;
      f.y += f.vy;
      if (f.y >= g.base - state.bins[f.b] * g.scale) land(f.v);
      else still.push(f);
    }
    state.falling = still;
    draw();
    frame = (state.falling.length || state.spawned < RUNS) ? requestAnimationFrame(tick) : null;
  }

  function marker(g, value, color, label, dashed, row) {
    const x = g.left + (value / state.width) * g.bw;
    const y = g.base - g.peak * g.scale - 6 * dpr + row * 14 * dpr;
    ctx.strokeStyle = color;
    ctx.lineWidth = dpr;
    ctx.setLineDash(dashed ? [4 * dpr, 4 * dpr] : []);
    ctx.beginPath();
    ctx.moveTo(x, g.base);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = color;
    const flip = x > g.right - 160 * dpr;
    ctx.textAlign = flip ? 'right' : 'left';
    ctx.fillText(label, x + (flip ? -6 : 6) * dpr, y + 4 * dpr);
  }

  function draw() {
    const g = geometry();
    ctx.clearRect(0, 0, g.W, g.H);

    for (let i = 0; i < BINS; i++) {
      const h = state.bins[i] * g.scale;
      if (!h) continue;
      ctx.fillStyle = (i * state.width) >= state.tail ? COLORS.tail : COLORS.body;
      ctx.fillRect(g.left + i * g.bw + dpr, g.base - h, g.bw - 2 * dpr, h);
    }
    for (const f of state.falling) {
      ctx.fillStyle = f.v >= state.tail ? COLORS.tail : '#ece8df';
      ctx.beginPath();
      ctx.arc(f.x, f.y, 2 * dpr, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = COLORS.axis;
    ctx.fillRect(g.left, g.base + 3 * dpr, g.right - g.left, dpr);
    ctx.font = `${11 * dpr}px "JetBrains Mono", monospace`;
    ctx.fillStyle = COLORS.label;
    ctx.textAlign = 'left';
    ctx.fillText('£0', g.left, g.base + 20 * dpr);
    ctx.textAlign = 'right';
    ctx.fillText(fmtK(state.hi) + '+ loss', g.right, g.base + 20 * dpr);

    const n = state.samples.length;
    if (!n) return;
    const sorted = [...state.samples].sort((a, b) => a - b);
    const mean = state.samples.reduce((a, b) => a + b, 0) / n;
    const tail = sorted[Math.min(n - 1, Math.floor(n * .99))];
    marker(g, mean, COLORS.gold, 'expected ' + fmtK(mean), true, 0);
    if (n > 400) marker(g, tail, COLORS.tail, '1 in 100 ' + fmtK(tail), true, 1);

    $('simN').textContent = n.toLocaleString('en-GB');
    $('simMean').textContent = fmtK(mean);
    $('simTail').textContent = n > 400 ? fmtK(tail) : '–';
    $('simBuffer').textContent = n > 400 ? fmtK(tail - mean) : '–';
  }

  let debounce;
  form.addEventListener('input', () => { clearTimeout(debounce); debounce = setTimeout(start, 120); });
  form.addEventListener('submit', (e) => e.preventDefault());
  $('simAgain').addEventListener('click', start);
  window.addEventListener('resize', resize);

  resize();
  // Start when the plot is on screen, so the animation isn't missed.
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); start(); }
    }, { threshold: .3 });
    io.observe(canvas);
  } else start();
})();
