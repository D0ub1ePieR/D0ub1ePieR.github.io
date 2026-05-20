---
layout: default
title: CV
lang: en
nav_url: /en/
pub_url: /en/publications
cv_url: /en/cv
alternate_url: /cv
---

{% assign d = site.data.en %}

<h1 class="section-title">{{ d.nav.cv }}</h1>

<p style="margin-bottom: 2rem;">
  <a href="#" class="pub-link"><i class="fas fa-file-pdf"></i> Download PDF</a>
</p>

<!-- Education -->
<section class="section">
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

<!-- Research Interests -->
<section class="section">
  <h2 class="section-title">{{ d.research.title }}</h2>
  <p>{{ d.research.description }}</p>
</section>

<!-- Publications -->
<section class="section">
  <h2 class="section-title">{{ d.publications.title }}</h2>
  <p style="color: var(--text-light); margin-bottom: 1rem;">
    {{ d.publications.subtitle }} <a href="{{ '/en/publications' | relative_url }}">{{ d.publications.subtitle_link }}</a>
  </p>

  {% for pub in d.publications.items %}
  {% if pub.selected %}
  <div class="publication">
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
        <a href="#" class="pub-link"><i class="{{ link.icon }}"></i> {{ link.label }}</a>
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
