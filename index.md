---
layout: site
title: Stephen Ahiabah
home: true
page_key: home
description: Stephen Ahiabah is a data engineer and credit risk modeller in London, with nine years at JPMorgan Chase and NatWest. He also writes CannonIQ.
scripts:
  - /assets/js/loss-sim.js
---
<div class="status-bar"><div class="shell"><span><span class="dot"></span>London</span><span>Now: <b>Data Engineer</b>, JPMorgan Chase</span><span>9 years in risk and data</span></div></div>

<header class="intro shell">
  <div class="intro-copy">
    <p class="kicker">Data engineering · Credit risk · Statistics</p>
    <h1>Stephen Ahiabah</h1>
    <p class="intro-big">I build the models banks use to forecast credit losses, and the data those models depend on.</p>
    <p class="lede">Nine years at NatWest and JPMorgan Chase, across stress testing, IFRS 9 and CECL model development and, now, data engineering. Outside work I write CannonIQ, an Arsenal analytics newsletter read by 500+ people.</p>
    <div class="sim-actions"><a class="btn btn-gold" href="{{ '/experience.html' | relative_url }}">See my experience</a><a class="link" href="{{ '/about.html' | relative_url }}">More about me ↗</a></div>
  </div>
  <figure class="intro-portrait"><img src="{{ '/assets/images/new_pic.png' | relative_url }}" alt="Portrait of Stephen Ahiabah" width="1170" height="1092"><figcaption><span>Data Engineer, JPMorgan Chase</span><span>London</span></figcaption></figure>
</header>

<section class="loss-model shell" aria-labelledby="model-title">
  <form class="model-card" id="simForm" aria-label="Model inputs">
    <p class="kicker gold">Fig. 1 · Live model</p>
    <h2 id="model-title">How much could a loan book lose?</h2>
    <p>A simplified version of the credit loss models I've built for IFRS 9 and stress testing. 1,000 loans, £10m lent. Each run simulates one year of the economy and counts the defaults.</p>
    <div class="slider"><label for="inPd">Default rate</label><output id="outPd" for="inPd">3%</output><input id="inPd" type="range" min="0.5" max="10" step="0.5" value="3"></div>
    <div class="slider"><label for="inLgd">Loss when a loan defaults</label><output id="outLgd" for="inLgd">45%</output><input id="inLgd" type="range" min="10" max="80" step="5" value="45"></div>
    <div class="slider"><label for="inRho">Sensitivity to the economy</label><output id="outRho" for="inRho">15%</output><input id="inRho" type="range" min="1" max="30" step="1" value="15"></div>
  </form>
  <div class="model-out">
    <div class="sim-plot" aria-hidden="true"><canvas id="sim"></canvas></div>
    <div class="sim-readout" aria-live="polite">
      <div>Simulated years<b id="simN">0</b></div>
      <div>Expected loss<b id="simMean">–</b></div>
      <div class="risk">1 in 100 year loss<b id="simTail">–</b></div>
      <div>Buffer above expected<b id="simBuffer">–</b></div>
      <button class="btn" id="simAgain" type="button">Run again</button>
    </div>
    <p class="sim-note">Illustrative one-factor (Vasicek) portfolio model. Losses in £k over one year. Each dot is one simulated year. Red bars are the worst 1% of years, the tail that stress testing and capital planning are built around.</p>
  </div>
</section>

<section class="section shell" aria-labelledby="areas-title">
  <div class="section-head">
    <div><p class="kicker">What I work on</p><h2 id="areas-title">Three areas I keep coming back to</h2></div>
    <p>Most of my work sits where a model, a dataset and a business decision have to agree.</p>
  </div>
  <div class="services">
    <article data-reveal><span class="num">01</span><h3>Credit risk modelling</h3><p>Loss forecasting, IFRS 9 and CECL provisioning, PD models and stress testing, from development through governance and senior review.</p><ul><li>NatWest UK Retail</li><li>JPMorgan Chase ICB Risk</li></ul></article>
    <article data-reveal><span class="num">02</span><h3>Data engineering</h3><p>Pipelines, lineage and data quality controls that make critical data traceable and ready for analytics and AI.</p><ul><li>PySpark, SQL, Python</li><li>BCBS 239 lineage</li></ul></article>
    <article data-reveal><span class="num">03</span><h3>Statistics in public</h3><p>Independent projects and writing where I test new methods, from Bayesian updating to Monte Carlo, and explain them in plain English.</p><ul><li>CannonIQ</li><li>Pitch IQ</li></ul></article>
  </div>
</section>

<section class="section shell" aria-labelledby="record-title">
  <div class="section-head">
    <div><p class="kicker">Track record</p><h2 id="record-title">Selected results from nine years in banking</h2></div>
    <p>Numbers from my work at NatWest and JPMorgan Chase. The details are on the <a class="link" href="{{ '/experience.html' | relative_url }}">experience page</a>.</p>
  </div>
  <table class="ledger">
    <tr data-reveal><td>£200bn</td><td>UK retail portfolio covered by the stress testing and loss forecasting I co-led</td><td>NatWest</td></tr>
    <tr data-reveal><td>60 → 10 min</td><td>IFRS 9 staging runtime after I directed its rebuild from SAS to Python</td><td>NatWest</td></tr>
    <tr data-reveal><td>2 FTE</td><td>Recurring manual work removed by a roll-rate model and automated forecasting</td><td>JPMorgan Chase</td></tr>
    <tr data-reveal><td>7+</td><td>Inherited model risk issues cleared in my first year as lead model developer</td><td>JPMorgan Chase</td></tr>
    <tr data-reveal><td>100+</td><td>Colleagues moved onto SageMaker, CI/CD and GitHub across ICB Risk</td><td>JPMorgan Chase</td></tr>
  </table>
</section>

<section class="section shell" aria-labelledby="writing-title">
  <div class="section-head">
    <div><p class="kicker">Writing · CannonIQ</p><h2 id="writing-title">Statistics in public, for 500+ readers</h2></div>
    <p>CannonIQ is my Arsenal publication on Substack. It's where I test new methods and explain them in plain English.</p>
  </div>
  <div class="shelf">
    <a href="https://cannoniq.substack.com/p/goals-are-rare-part-two-on-expected" target="_blank" rel="noopener noreferrer" data-reveal><span>Model notes · 2026</span><h3>Goals Are Rare</h3><p>Poisson, weighted rolling averages, Bayesian updating and Monte Carlo, explained for football people.</p><i>↗</i></a>
    <a href="https://cannoniq.substack.com/p/the-table-lies-to-you-a-bit-part" target="_blank" rel="noopener noreferrer" data-reveal><span>Expected points · 2026</span><h3>The Table Lies to You (A Bit)</h3><p>Why a probabilistic view of team strength tells us something the league table can't.</p><i>↗</i></a>
    <a href="https://cannoniq.substack.com/p/ml-dof-finding-arsenals-win-now-forward" target="_blank" rel="noopener noreferrer" data-reveal><span>Recruitment · 2025</span><h3>Finding Arsenal's "Win Now" Forward</h3><p>A Random Forest model for projecting goal contributions and testing shortlists.</p><i>↗</i></a>
    <a href="https://cannoniq.substack.com/p/same-old-arsenal-same-old-lie" target="_blank" rel="noopener noreferrer" data-reveal><span>Long-form · 2026</span><h3>Same Old Arsenal. Same Old Lie.</h3><p>A personal essay on fandom, narratives and what statistics can't settle.</p><i>↗</i></a>
  </div>
</section>
