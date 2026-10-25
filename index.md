---
layout: site
title: Stephen Ahiabah
home: true
page_key: home
description: Stephen Ahiabah is a data engineer and credit risk modeller in London, with nine years at JPMorgan Chase and NatWest. He also writes CannonIQ.
scripts:
  - /assets/js/portfolio-data.js
  - /assets/js/career-story.js
---
<section class="story-hero shell" aria-labelledby="home-name">
  <div class="story-intro">
    <p class="kicker"><span class="story-dot"></span> London · Risk modelling &amp; data engineering</p>
    <h1 id="home-name">Stephen<br><em>Ahiabah.</em></h1>
    <p class="story-lead">Nine years building risk models and the data behind them.</p>
    <p class="story-context">NatWest, then JPMorgan Chase. Outside work, I build small research apps and write about Arsenal on CannonIQ.</p>
    <div class="sim-actions"><a class="btn btn-gold" href="{{ '/experience.html' | relative_url }}">My experience <span aria-hidden="true">↗</span></a><a class="link" href="{{ '/projects.html' | relative_url }}">Explore the projects</a></div>
    <div class="story-signature"><span>Credit risk → model development → data engineering</span><a href="#after-hours" aria-label="See side projects below">Scroll to explore ↓</a></div>
  </div>
  <div class="career-instrument" id="career-instrument">
    <div class="instrument-top"><span class="kicker">01 / Experience over time</span><span class="instrument-live">2017—2026</span></div>
    <div class="curve-stage">
      <svg id="career-curve" viewBox="0 0 800 310" role="img" aria-labelledby="curve-title curve-desc">
        <title id="curve-title">An animated career timeline</title><desc id="curve-desc">An illustrative normal curve marks the selected date. Use the timeline slider to explore five roles from 2017 to 2026.</desc>
        <defs><linearGradient id="curve-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2c14e" stop-opacity=".45"/><stop offset="1" stop-color="#f2c14e" stop-opacity=".015"/></linearGradient></defs>
        <g class="curve-grid" aria-hidden="true"><path d="M45 80H755M45 155H755M45 235H755"/><path d="M160 35V252M320 35V252M480 35V252M640 35V252"/></g>
        <path id="curve-area" fill="url(#curve-fill)"/>
        <path id="curve-line" fill="none" stroke="#f2c14e" stroke-width="3" stroke-linecap="round"/>
        <line id="curve-marker" y1="40" y2="253" stroke="#f2c14e" stroke-opacity=".35" stroke-dasharray="4 5"/>
        <circle id="curve-point" r="6" fill="#f2c14e" stroke="#0d1014" stroke-width="4"/>
        <g id="curve-milestones" aria-hidden="true"></g>
        <g class="curve-axis" aria-hidden="true"><text x="160" y="287">2017</text><text x="320" y="287">2020</text><text x="480" y="287">2023</text><text x="640" y="287">2026</text></g>
      </svg>
      <div class="curve-caption"><span>Normal curve / career timeline</span><span id="role-count">05 / 05</span></div>
    </div>
    <div class="role-snapshot" id="role-snapshot" aria-live="polite" aria-atomic="true">
      <div class="snapshot-top"><span id="story-company">JPMorgan Chase</span><span id="story-period">Sep 2026—present</span></div>
      <h2 id="story-role">Data Engineer</h2>
      <p id="story-detail">Tracing critical data across Asset &amp; Wealth Management, with lineage, quality checks and preventative controls.</p>
      <span class="snapshot-tag" id="story-tag">BCBS 239 · lineage · data quality</span>
    </div>
    <div class="career-controls">
      <div class="timeline-label"><label for="career-year">Move through my career</label><output id="career-date" for="career-year">Oct 2026</output></div>
      <div class="timeline-input"><button id="career-play" class="round-control" type="button" aria-label="Play career timeline" aria-pressed="false">▶</button><input id="career-year" type="range" min="0" max="109" step="1" value="109" aria-describedby="curve-note"></div>
      <p id="curve-note">The curve is illustrative. Dates and roles are real.</p>
    </div>
    <noscript><p class="curve-fallback">Explore all five roles on the <a class="link" href="{{ '/experience.html' | relative_url }}">experience page</a>.</p></noscript>
  </div>
</section>

<section class="project-atlas section shell" id="after-hours" aria-labelledby="atlas-title">
  <div class="section-head"><div><p class="kicker">02 / Outside the day job</p><h2 id="atlas-title">The other projects.</h2></div><p>Different questions, some shared methods. Select a project to see what went into it.</p></div>
  <div class="atlas-layout">
    <div class="atlas-chart" role="group" aria-label="Side projects and their methods">
      <div class="atlas-axis"><span>Project</span><span>Data</span><span>Models</span><span>Simulation</span><span>Writing</span></div>
      <div id="atlas-rows"></div>
      <p class="atlas-legend"><span></span> A method used in the project, rather than a proficiency score.</p>
    </div>
    <div class="atlas-detail" aria-live="polite"><span class="kicker" id="atlas-category">Writing &amp; football analytics</span><h3 id="atlas-name">CannonIQ</h3><p id="atlas-description">An Arsenal newsletter combining statistical modelling, economics and long-form writing, read by more than 500 subscribers.</p><a class="link" id="atlas-link" href="{{ '/projects.html#cannoniq' | relative_url }}">Explore this project ↗</a><span class="atlas-number" id="atlas-number" aria-hidden="true">01</span></div>
  </div>
  <noscript><p><a class="link" href="{{ '/projects.html' | relative_url }}">View all projects and their methods</a></p></noscript>
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

<section class="section shell" aria-labelledby="builds-title">
  <div class="section-head"><div><p class="kicker">Recent projects</p><h2 id="builds-title">Finance research and data engineering</h2></div><p>Two Streamlit apps built around public datasets, with the methods and code available to inspect.</p></div>
  <div class="recent-builds">
    <a href="{{ '/projects.html#factorlens' | relative_url }}"><span class="kicker gold">Quantitative finance</span><h3>FactorLens</h3><p>Factor exposures, return attribution and model diagnostics using Kenneth French's research data.</p><span class="link">Explore FactorLens ↗</span></a>
    <a href="{{ '/projects.html#pipeline-watch' | relative_url }}"><span class="kicker gold">Data engineering</span><h3>Pipeline Watch</h3><p>A taxi-data pipeline you can replay, inspect and query, from source files to a tested warehouse.</p><span class="link">Explore Pipeline Watch ↗</span></a>
  </div>
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
