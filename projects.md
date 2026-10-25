---
layout: site
title: Projects & Writing
page_key: projects
description: FactorLens, Pipeline Watch, football analytics and independent software projects by Stephen Ahiabah.
scripts:
  - /assets/js/portfolio-data.js
  - /assets/js/project-deck.js
---
<header class="deck-heading shell"><div><p class="kicker">Selected projects / Independent work</p><h1>Projects &amp; <em>writing.</em></h1></div><p>Football, finance, data and the occasional music recommendation. Pick a card and take a look.</p></header>
<section class="project-deck shell" id="project-deck" aria-label="Browse projects" hidden>
  <div class="deck-topline"><span id="deck-position" aria-live="polite">01 / 06</span><span>Drag a card, or use the arrows</span><span class="deck-next-label" id="deck-next-label">Next: FactorLens</span></div>
  <div class="deck-stage" id="deck-stage" tabindex="0" role="group" aria-roledescription="carousel" aria-label="Project cards. Use left and right arrow keys.">
    <div class="deck-back deck-back-two" aria-hidden="true"></div><div class="deck-back deck-back-one" aria-hidden="true"></div>
    <article class="swipe-card" id="swipe-card" aria-roledescription="slide" aria-label="CannonIQ, project 1 of 6">
      <div class="swipe-art" id="swipe-art"><span class="swipe-art-number" id="swipe-art-number" aria-hidden="true">01</span><img id="swipe-image" alt="CannonIQ artwork" draggable="false"><span class="swipe-art-caption" id="swipe-art-caption">Writing &amp; football analytics</span></div>
      <div class="swipe-copy"><p class="kicker" id="swipe-category">Publication · 500+ subscribers</p><h2 id="swipe-title">CannonIQ</h2><p class="swipe-summary" id="swipe-summary"></p><div class="swipe-tags" id="swipe-tags"></div><div class="swipe-links"><a id="swipe-visit" class="btn btn-gold" target="_blank" rel="noopener noreferrer">Visit the project ↗</a><button type="button" class="link" id="deck-details" aria-expanded="false" aria-controls="project-notes">Read project notes ↓</button></div></div>
    </article>
  </div>
  <div class="deck-controls"><button class="deck-arrow" id="deck-prev" type="button" aria-label="Previous project">←</button><div id="deck-dots" class="deck-dots" role="group" aria-label="Choose a project"></div><button class="deck-arrow" id="deck-next" type="button" aria-label="Next project">→</button></div>
  <p class="deck-hint">Swipe left for the next project. Swipe right to go back.</p>
</section>
<div id="project-notes">
<section class="project" id="cannoniq">
  <div class="shell">
    <div class="project-grid">
      <figure class="project-visual" data-reveal><img src="{{ '/assets/images/Cannon IQ Main.png' | relative_url }}" alt="CannonIQ artwork" style="filter:invert(1)"><figcaption>Arsenal · data · economics · opinion</figcaption></figure>
      <div data-reveal>
        <p class="kicker gold">Publication · 500+ subscribers</p>
        <h2>CannonIQ</h2>
        <p class="summary">An Arsenal publication that started with data-led player analysis and grew into modelling, economics, tactics and long-form writing.</p>
        <p>The analysis uses football-data.org, FBREF and reproducible Python workflows. Recent expected points work combines weighted rolling form, Poisson goal models, a Bayesian layer and 10,000-season Monte Carlo simulations. Recruitment pieces use K-means similarity and Random Forest regression, and always spell out the limitations.</p>
        <dl class="facts">
          <div><dt>Methods</dt><dd>Poisson · Bayesian modelling · Monte Carlo · K-means · Random Forest</dd></div>
          <div><dt>Subjects</dt><dd>Expected points · recruitment · tactics · football finance · fan culture</dd></div>
          <div><dt>Approach</dt><dd>Explain the maths in plain English, and never present a probability as a certainty.</dd></div>
        </dl>
        <a class="btn btn-gold" href="https://cannoniq.substack.com/" target="_blank" rel="noopener noreferrer">Read CannonIQ ↗</a>
      </div>
    </div>
    <div class="shelf">
      <a href="https://cannoniq.substack.com/p/goals-are-rare-part-two-on-expected" target="_blank" rel="noopener noreferrer" data-reveal><span>Model notes · 2026</span><h3>Goals Are Rare</h3><p>Poisson, weighted rolling averages, Bayesian updating and Monte Carlo, explained for football people.</p><i>↗</i></a>
      <a href="https://cannoniq.substack.com/p/the-table-lies-to-you-a-bit-part" target="_blank" rel="noopener noreferrer" data-reveal><span>Expected points · 2026</span><h3>The Table Lies to You (A Bit)</h3><p>Why a probabilistic view of team strength tells us something the league table can't.</p><i>↗</i></a>
      <a href="https://cannoniq.substack.com/p/ml-dof-finding-arsenals-win-now-forward" target="_blank" rel="noopener noreferrer" data-reveal><span>Recruitment · 2025</span><h3>Finding Arsenal's "Win Now" Forward</h3><p>A Random Forest model for projecting goal contributions and testing shortlists.</p><i>↗</i></a>
      <a href="https://cannoniq.substack.com/p/same-old-arsenal-same-old-lie" target="_blank" rel="noopener noreferrer" data-reveal><span>Long-form · 2026</span><h3>Same Old Arsenal. Same Old Lie.</h3><p>A personal essay on fandom, narratives and what statistics can't settle.</p><i>↗</i></a>
    </div>
  </div>
</section>

<section class="project" id="factorlens">
  <div class="shell project-grid">
    <figure class="project-visual app-preview" data-reveal><img src="{{ '/assets/images/factorlens.png' | relative_url }}" alt="FactorLens model diagnostics with residual and regression charts" loading="lazy" width="1280" height="720"><figcaption>FactorLens · application screenshot</figcaption></figure>
    <div data-reveal>
      <p class="kicker gold">Quantitative finance · Streamlit</p>
      <h2>FactorLens</h2>
      <p class="summary">A research app for understanding which market factors explain an industry portfolio’s returns.</p>
      <p>I used Kenneth French’s monthly factor and industry data to compare exposures, break down returns and check how stable the relationships are over time. Six pages cover risk, regression diagnostics and validation, including chronological holdouts and walk-forward estimates.</p>
      <dl class="facts"><div><dt>Methods</dt><dd>OLS with HAC confidence intervals · rolling exposures · historical VaR and expected shortfall</dd></div><div><dt>Scope</dt><dd>This studies return attribution using realised factors; it does not forecast trades.</dd></div><div><dt>Built with</dt><dd>Python · pandas · statsmodels · SciPy · Plotly</dd></div></dl>
      <a class="btn btn-gold" href="https://c2umdutfhvj2uw9gyb9x8c.streamlit.app/" target="_blank" rel="noopener noreferrer">Open app ↗</a>
      <a class="link" style="margin-left:1rem" href="https://github.com/steveaq/FactorLens" target="_blank" rel="noopener noreferrer">View code and setup ↗</a>
    </div>
  </div>
</section>

<section class="project" id="pipeline-watch">
  <div class="shell project-grid">
    <figure class="project-visual app-preview" data-reveal><img src="{{ '/assets/images/pipeline-watch.png' | relative_url }}" alt="Pipeline Watch data-quality checks and rejected-record analytics" loading="lazy" width="1280" height="720"><figcaption>Pipeline Watch · application screenshot</figcaption></figure>
    <div data-reveal>
      <p class="kicker gold">Data engineering · Streamlit</p>
      <h2>Pipeline Watch</h2>
      <p class="summary">A small data warehouse with enough visibility to explain what happened to every batch.</p>
      <p>NYC taxi records move through source snapshots, validation, quarantine and deduplication into DuckDB and dbt models. Six pages let you replay a batch, inspect failed checks, trace dependencies, explore the warehouse and run read-only SQL.</p>
      <dl class="facts"><div><dt>Methods</dt><dd>Parquet · SHA-256 source hashes · atomic partition replacement · dbt tests</dd></div><div><dt>Scope</dt><dd>The bundled demo uses the first 5,000 rows from each of three months; full monthly files can be downloaded in the app.</dd></div><div><dt>Built with</dt><dd>Python · DuckDB · dbt · Parquet · Plotly</dd></div></dl>
      <a class="btn btn-gold" href="https://lemsbpfcnjbj5d9agytv6h.streamlit.app/" target="_blank" rel="noopener noreferrer">Open app ↗</a>
      <a class="link" style="margin-left:1rem" href="https://github.com/steveaq/Pipeline-Watch" target="_blank" rel="noopener noreferrer">View code and setup ↗</a>
    </div>
  </div>
</section>

<section class="project" id="pitchiq">
  <div class="shell">
    <div class="project-grid">
      <figure class="project-visual" data-reveal><img src="{{ '/assets/images/piqmain.png' | relative_url }}" alt="Pitch IQ mark"><figcaption>Learning in public since 2022</figcaption></figure>
      <div data-reveal>
        <p class="kicker gold">Football analytics blog</p>
        <h2>Pitch IQ</h2>
        <p class="summary">A long-running football data science blog on how data can reveal player roles, performance and positional fit.</p>
        <p>It started with one question: can machine learning find a better position for a player? That turned into a practical curriculum in sourcing data, scraping FBREF, working with StatsBomb event data, building repeatable visualisations, clustering player roles and measuring similarity.</p>
        <dl class="facts">
          <div><dt>Data</dt><dd>FBREF · StatsBomb open data · football-data.org</dd></div>
          <div><dt>Techniques</dt><dd>Web scraping · K-means clustering · player similarity · radar charts · event maps</dd></div>
          <div><dt>Purpose</dt><dd>Make football analytics approachable without pretending the data is complete.</dd></div>
        </dl>
        <a class="btn" href="https://steveaq.github.io/" target="_blank" rel="noopener noreferrer">Visit Pitch IQ ↗</a>
      </div>
    </div>
    <div class="shelf three">
      <a href="https://steveaq.github.io/Player-Similarity-Models/" target="_blank" rel="noopener noreferrer" data-reveal><span>Modelling · 2024</span><h3>Player Similarity Models</h3><p>K-means and player profiles applied to scouting, squad building and performance evaluation.</p><i>↗</i></a>
      <a href="https://steveaq.github.io/K-Means-Player-Cluster-Analysis/" target="_blank" rel="noopener noreferrer" data-reveal><span>Clustering · 2024</span><h3>K-Means Player Clusters</h3><p>Grouping players by how they actually play rather than their listed position.</p><i>↗</i></a>
      <a href="https://steveaq.github.io/FBREF-Data-Scraping-Walk-Through-pt4/" target="_blank" rel="noopener noreferrer" data-reveal><span>Data engineering · 2024</span><h3>FBREF Data Scraping</h3><p>A practical pipeline from public football data to analysis-ready datasets and charts.</p><i>↗</i></a>
    </div>
  </div>
</section>

<section class="project" id="euro-model">
  <div class="shell project-grid">
    <figure class="project-visual app-preview" data-reveal><img src="{{ '/assets/images/euro-model.png' | relative_url }}" alt="EURO 2024 Streamlit app showing the research overview, training data and opening-match goal probabilities"><figcaption>EURO 2024 · interactive model notes</figcaption></figure>
    <div data-reveal>
      <p class="kicker gold">End-to-end machine learning</p>
      <h2>EURO 2024 model notes</h2>
      <p class="summary">An eight-page Streamlit app following the original EURO 2024 analysis from source data to a shareable research report.</p>
      <p>Separate goal regressors feed Poisson match probabilities and a seeded tournament simulation. Explore the data, rank-weighted features, model comparisons and chronological validation, then review the actual group games or export the findings.</p>
      <div class="tags"><span>Random Forest</span><span>scikit-learn</span><span>Poisson</span><span>Streamlit</span></div>
      <a class="btn btn-gold" href="https://ml-2024-euros-modelgit-6zvabpiedx2gdyu8rihm4t.streamlit.app/" target="_blank" rel="noopener noreferrer">Open app ↗</a>
      <p style="margin-top:1.6rem"><a class="link" href="https://github.com/steveaq/ML-2024-Euros-Model" target="_blank" rel="noopener noreferrer">View the repository ↗</a></p>
    </div>
  </div>
</section>

<section class="project" id="spotify">
  <div class="shell project-grid">
    <figure class="project-visual on-light" data-reveal><img src="{{ '/assets/images/spotipy.png' | relative_url }}" alt="Spotify recommendation project interface"><figcaption>Recommendation systems</figcaption></figure>
    <div data-reveal>
      <p class="kicker gold">Earlier experiment</p>
      <h2>Spotify Recommendation Engine</h2>
      <p class="summary">A music discovery app that uses Spotify's API and machine learning to turn listening history and audio features into recommendations.</p>
      <p>An early end-to-end project in API integration, data preparation, similarity logic and lightweight delivery through Streamlit.</p>
      <div class="tags"><span>Spotify API</span><span>Python</span><span>Machine learning</span><span>Streamlit</span></div>
      <p style="margin-top:1.6rem"><a class="link" href="https://saq-spotfify-app.streamlit.app/" target="_blank" rel="noopener noreferrer">Open the app ↗</a></p>
    </div>
  </div>
</section>

</div>
