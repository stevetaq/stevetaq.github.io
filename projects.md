---
layout: site
title: Projects & Writing
page_key: projects
description: Football analytics, statistical modelling, writing and independent software projects by Stephen Ahiabah.
---
<header class="page-head shell">
  <div><p class="kicker">Projects and writing</p><h1>Independent projects and writing</h1></div>
  <p class="lede">This is where I try new methods outside work. The aim isn't to make football look scientific. It's to use evidence well, be honest about uncertainty and still leave room for the game itself.</p>
</header>

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
    <figure class="project-visual on-light" data-reveal><img src="{{ '/assets/images/png_tree.png' | relative_url }}" alt="Decision tree illustration for the EURO 2024 project"><figcaption>Tournament forecasting</figcaption></figure>
    <div data-reveal>
      <p class="kicker gold">End-to-end machine learning</p>
      <h2>UEFA EURO 2024 Predictor</h2>
      <p class="summary">A tournament forecast built from historical international results and FIFA ranking data.</p>
      <p>Feature engineering, scikit-learn and XGBoost feed a Monte Carlo simulation. Instead of one bracket, repeated tournament runs show the distribution of possible outcomes.</p>
      <div class="tags"><span>XGBoost</span><span>scikit-learn</span><span>Monte Carlo</span><span>Python</span></div>
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

<section class="section shell" aria-labelledby="build-title">
  <div class="section-head"><div><p class="kicker">How I build</p><h2 id="build-title">Three rules for independent work</h2></div></div>
  <div class="principles">
    <article data-reveal><h3>Start with the question</h3><p>A technically impressive model is useless if nobody knows what decision it supports.</p></article>
    <article data-reveal><h3>Show uncertainty</h3><p>Probabilities, assumptions and model limits belong in the output, not in a footnote.</p></article>
    <article data-reveal><h3>Write for people</h3><p>The method matters, but the explanation is what lets other people check it and use it.</p></article>
  </div>
</section>
