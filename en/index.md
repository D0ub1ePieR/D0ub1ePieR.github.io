---
layout: home
title: Home
lang: en
nav_url: /en/
pub_url: /en/publications
cv_url: /en/cv
alternate_url: /
---

{% assign d = site.data.en %}

<div class="profile-section">
  <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="{{ d.profile.name }}" class="profile-avatar">
  <div class="profile-info">
    <h1>{{ d.profile.name }}</h1>
    <p class="subtitle">{{ d.profile.subtitle }}</p>
    <p class="email-links">
      <a href="mailto:dun.haski@gmail.com"><i class="fas fa-envelope"></i> dun.haski@gmail.com</a>
      <a href="mailto:zhongyj@tongji.edu.cn"><i class="fas fa-inbox"></i> zhongyj@tongji.edu.cn</a>
    </p>
    <p class="bio">{{ d.profile.bio }}</p>
    <div class="social-links">
      <a href="https://github.com/D0ub1ePieR" target="_blank" aria-label="GitHub"><i class="fab fa-github icon-github"></i></a>
      <a href="https://scholar.google.com/citations?user=14aR7_cAAAAJ&hl=en&oi=ao" target="_blank" aria-label="Google Scholar"><i class="fas fa-graduation-cap icon-scholar"></i></a>
      <a href="mailto:dun.haski@gmail.com" aria-label="Email (Personal)"><i class="fas fa-envelope icon-email-personal"></i></a>
      <a href="mailto:zhongyj@tongji.edu.cn" aria-label="Email (Tongji)"><i class="fas fa-inbox icon-email-tongji"></i></a>
      <a href="https://orcid.org/my-orcid?orcid=0000-0002-2351-8799" target="_blank" aria-label="ORCID"><i class="fab fa-orcid icon-orcid"></i></a>
      <a href="{{ '/assets/files/cv.pdf' | relative_url }}" target="_blank" aria-label="CV" class="cv-link"><i class="fas fa-file-pdf icon-cv"></i> <small>Download CV</small></a>
    </div>
  </div>
</div>

<!-- News & Education -->
<div class="section-row">
  <section class="section section-half">
    <h2 class="section-title">{{ d.news.title }}</h2>
    <div class="timeline timeline-news">
      {% for item in d.news.items %}
      <div class="timeline-item">
        <div class="timeline-date">{{ item.date }}</div>
        <div class="timeline-title">{{ item.title }}</div>
      </div>
      {% endfor %}
    </div>
  </section>

  <section class="section section-half">
    <h2 class="section-title">{{ d.education.title }}</h2>
    <div class="timeline">
      {% for item in d.education.items %}
      <div class="timeline-item">
        <div class="timeline-date">{{ item.date }}</div>
        <div class="timeline-title">{{ item.title }}</div>
        <div class="timeline-subtitle">{{ item.subtitle }}</div>
      </div>
      {% endfor %}
    </div>
  </section>
</div>

<!-- Research Interests -->
<section class="section">
  <h2 class="section-title">{{ d.research.title }}</h2>
  {% for group in d.research.groups %}
  <div class="research-group">
    <span class="research-label">{{ group.label }}:</span>
    <ul class="research-list">
      {% for item in group.items %}
      <li>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
  {% endfor %}
</section>

<!-- Publications Preview -->
<section class="section">
  <h2 class="section-title">{{ d.publications.title }}</h2>
  <p style="color: var(--text-light); margin-bottom: 1rem;">
    {{ d.publications.subtitle }} <a href="{{ '/en/publications' | relative_url }}">{{ d.publications.subtitle_link }}</a>
  </p>

  {% for pub in d.publications.items %}
  {% if pub.selected %}
  <div class="publication" data-category="{{ pub.category }}">
    {% if pub.figure %}
    <div class="pub-figure">
      <img src="{{ '/assets/img/' | append: pub.figure | relative_url }}" alt="{{ pub.title }}">
    </div>
    {% endif %}
    <div class="pub-info">
      <div class="pub-title">{{ pub.title }}</div>
      <div class="pub-authors">{{ pub.authors }}</div>
      <div class="pub-venue">{{ pub.venue }}</div>
      <div class="pub-links">
        {% for link in pub.links %}
        <a href="{{ link.url }}" class="pub-link"><i class="{{ link.icon }}"></i> {{ link.label }}</a>
        {% endfor %}
      </div>
    </div>
  </div>
  {% endif %}
  {% endfor %}
</section>

<!-- Experience -->
<section class="section">
  <h2 class="section-title">{{ d.experience.title }}</h2>
  <div class="timeline">
    {% for item in d.experience.items %}
    <div class="timeline-item">
      <div class="timeline-date">{{ item.date }}</div>
      <div class="timeline-title">{{ item.title }}</div>
      <div class="timeline-subtitle">{{ item.subtitle }}</div>
      <div class="timeline-description">{{ item.description }}</div>
    </div>
    {% endfor %}
  </div>
</section>

<!-- Talks -->
<section class="section">
  <h2 class="section-title">{{ d.talks.title }}</h2>
  <div class="timeline">
    {% for item in d.talks.items %}
    <div class="timeline-item">
      <div class="timeline-date">{{ item.date }}</div>
      <div class="timeline-title">{{ item.title }}</div>
      <div class="timeline-subtitle">{{ item.subtitle }}</div>
    </div>
    {% endfor %}
  </div>
</section>

<!-- Academic Service -->
<section class="section">
  <h2 class="section-title">{{ d.service.title }}</h2>
  <p>{{ d.service.description }}</p>
  <div class="service-tags">
    <div class="service-group">
      <strong>{{ d.service.conference }}:</strong>
      <div class="tag-list">
        {% for item in d.service.conference_items %}
        <span class="tag">{{ item }}</span>
        {% endfor %}
      </div>
    </div>
    <div class="service-group">
      <strong>{{ d.service.journal }}:</strong>
      <div class="tag-list">
        {% for item in d.service.journal_items %}
        <span class="tag">{{ item }}</span>
        {% endfor %}
      </div>
    </div>
  </div>
</section>
