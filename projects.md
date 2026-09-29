---
layout: site
title: Projects & Writing
page_key: projects
description: Football analytics, statistical modelling, writing and independent software projects by Stephen Ahiabah.
---
<header class="page-hero project-hero section-shell">
  <div><p class="kicker">03 / Projects &amp; writing</p><h1>Independent projects<br><em>and writing.</em></h1></div>
  <p class="page-lede">My independent work is where statistics, code and curiosity meet. The goal is not to make football look scientific; it is to use evidence well, explain uncertainty honestly and still leave room for the game itself.</p>
</header>

<section class="project-case dark-section" id="cannoniq">
  <div class="project-case-grid section-shell">
    <div class="case-visual cannon" data-reveal><img src="{{ '/assets/images/Cannon IQ Main.png' | relative_url }}" alt="CannonIQ artwork"><p>Arsenal · data · economics · opinion</p></div>
    <div class="case-copy" data-reveal><p class="kicker">01 / Flagship publication · 500+ subscribers</p><h2>CannonIQ</h2><p class="case-lede">An Arsenal publication that began with data-led player analysis and grew into something broader: modelling, economics, tactics and long-form writing with an unmistakably personal voice.</p><p>The analytical work uses football-data.org, FBREF and reproducible Python workflows. Recent expected-points work combines weighted rolling form, Poisson goal models, a Bayesian layer and 10,000-season Monte Carlo simulations. Recruitment pieces use K-means similarity and Random Forest regression—but always make the limitations and the value of the eye test explicit.</p><div class="case-facts"><p><strong>Methods</strong><span>Poisson · Bayesian modelling · Monte Carlo · K-means · Random Forest</span></p><p><strong>Subjects</strong><span>Expected points · player recruitment · tactics · football finance · fan culture</span></p><p><strong>Approach</strong><span>Explain the maths in plain English; never confuse probability with certainty.</span></p></div><a class="button light-button" href="https://cannoniq.substack.com/" target="_blank" rel="noopener noreferrer">Read CannonIQ ↗</a></div>
  </div>
  <div class="article-shelf section-shell">
    <a href="https://cannoniq.substack.com/p/goals-are-rare-part-two-on-expected" target="_blank" rel="noopener noreferrer" data-reveal><span>Model notes · 2026</span><h3>Goals Are Rare</h3><p>Poisson, weighted rolling averages, Bayesian updating and Monte Carlo—explained for football people.</p><i>↗</i></a>
    <a href="https://cannoniq.substack.com/p/the-table-lies-to-you-a-bit-part" target="_blank" rel="noopener noreferrer" data-reveal><span>Expected points · 2026</span><h3>The Table Lies to You (A Bit)</h3><p>Why a probabilistic description of team strength can tell us something the league table cannot.</p><i>↗</i></a>
    <a href="https://cannoniq.substack.com/p/ml-dof-finding-arsenals-win-now-forward" target="_blank" rel="noopener noreferrer" data-reveal><span>Recruitment · 2025</span><h3>Finding Arsenal’s “Win Now” Forward</h3><p>A Random Forest model for projecting goal contributions and testing recruitment shortlists.</p><i>↗</i></a>
    <a href="https://cannoniq.substack.com/p/same-old-arsenal-same-old-lie" target="_blank" rel="noopener noreferrer" data-reveal><span>Long-form · 2026</span><h3>Same Old Arsenal. Same Old Lie.</h3><p>A more personal essay on fandom, football’s narratives and what statistics cannot settle.</p><i>↗</i></a>
  </div>
</section>

<section class="project-case" id="pitchiq">
  <div class="project-case-grid section-shell">
    <div class="case-visual pitch" data-reveal><img src="{{ '/assets/images/piqmain.png' | relative_url }}" alt="Pitch IQ mark"><p>Learning in public since 2022</p></div>
    <div class="case-copy" data-reveal><p class="kicker">02 / Football analytics platform</p><h2>Pitch IQ</h2><p class="case-lede">A long-running educational football data-science blog and analytics platform—built to investigate how data can reveal player roles, performance and positional fit.</p><p>The project started with a simple question: can machine learning identify a better on-field position for a player? That opened into a practical curriculum in acquiring good data, scraping FBREF, working with StatsBomb event data, building repeatable visualisations, clustering player roles and measuring player similarity.</p><div class="case-facts"><p><strong>Data</strong><span>FBREF · StatsBomb open data · football-data.org</span></p><p><strong>Techniques</strong><span>Web scraping · K-means clustering · player similarity · radar charts · event maps</span></p><p><strong>Purpose</strong><span>Learn in public and make football analytics approachable without pretending the data is complete.</span></p></div><a class="button" href="https://steveaq.github.io/" target="_blank" rel="noopener noreferrer">Visit Pitch IQ ↗</a></div>
  </div>
  <div class="article-shelf light-shelf section-shell">
    <a href="https://steveaq.github.io/Player-Similarity-Models/" target="_blank" rel="noopener noreferrer" data-reveal><span>Modelling · 2024</span><h3>Player Similarity Models</h3><p>K-means and player profiles applied to scouting, squad building and performance evaluation.</p><i>↗</i></a>
    <a href="https://steveaq.github.io/K-Means-Player-Cluster-Analysis/" target="_blank" rel="noopener noreferrer" data-reveal><span>Clustering · 2024</span><h3>K-Means Player Clusters</h3><p>Finding patterns in how players perform rather than relying only on nominal positions.</p><i>↗</i></a>
    <a href="https://steveaq.github.io/FBREF-Data-Scraping-Walk-Through-pt4/" target="_blank" rel="noopener noreferrer" data-reveal><span>Data engineering · 2024</span><h3>FBREF Data Scraping</h3><p>A practical pipeline from publicly available football data to analysis-ready datasets and charts.</p><i>↗</i></a>
  </div>
</section>

<section class="project-case compact-case alt-section" id="euro-model">
  <div class="project-case-grid section-shell">
    <div class="case-visual tree" data-reveal><img src="{{ '/assets/images/png_tree.png' | relative_url }}" alt="Decision tree illustration for the EURO 2024 project"><p>Tournament forecasting</p></div>
    <div class="case-copy" data-reveal><p class="kicker">03 / End-to-end machine learning</p><h2>UEFA EURO 2024 predictor</h2><p class="case-lede">A tournament forecast built from historical international results and FIFA ranking data.</p><p>The project combines feature engineering, scikit-learn and XGBoost with Monte Carlo simulation. Rather than outputting one definitive bracket, it models the uncertainty around match results and lets repeated tournament runs reveal the distribution of possible outcomes.</p><div class="tag-row"><span>XGBoost</span><span>scikit-learn</span><span>Monte Carlo</span><span>Python</span></div><a class="arrow-link" href="https://github.com/steveaq/ML-2024-Euros-Model" target="_blank" rel="noopener noreferrer">View the repository <span aria-hidden="true">↗</span></a></div>
  </div>
</section>

<section class="project-case compact-case" id="spotify">
  <div class="project-case-grid section-shell">
    <div class="case-visual spotify" data-reveal><img src="{{ '/assets/images/spotipy.png' | relative_url }}" alt="Spotify recommendation project interface"><p>Recommendation systems</p></div>
    <div class="case-copy" data-reveal><p class="kicker">04 / Earlier experiment</p><h2>Spotify recommendation engine</h2><p class="case-lede">A music discovery application using Spotify’s API and machine-learning techniques to move from listening history and audio features to personalised recommendations.</p><p>An early end-to-end project in API integration, data preparation, similarity logic and lightweight product delivery through Streamlit.</p><div class="tag-row"><span>Spotify API</span><span>Python</span><span>Machine learning</span><span>Streamlit</span></div><a class="arrow-link" href="https://saq-spotfify-app.streamlit.app/" target="_blank" rel="noopener noreferrer">Open the application <span aria-hidden="true">↗</span></a></div>
  </div>
</section>

<section class="project-principles section-shell ruled-top">
  <div class="section-label"><p class="kicker">How I build</p><span>05</span></div>
  <div class="principle-grid"><article data-reveal><strong>01</strong><h3>Start with the question</h3><p>A technically impressive model is useless if nobody knows what decision it supports.</p></article><article data-reveal><strong>02</strong><h3>Show uncertainty</h3><p>Probabilities, assumptions and model limits belong in the output—not hidden in a footnote.</p></article><article data-reveal><strong>03</strong><h3>Write for humans</h3><p>The method matters, but the explanation is what lets other people inspect and use it.</p></article></div>
</section>
