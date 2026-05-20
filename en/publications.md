---
layout: default
title: Publications
lang: en
nav_url: /en/
pub_url: /en/publications
cv_url: /en/cv
alternate_url: /publications
---

{% assign d = site.data.en %}

<h1 class="section-title">{{ d.publications.title }}</h1>

<div class="pub-filters">
  {% for filter in d.publications.filters %}
  <button class="pub-filter-btn {% if filter.value == 'all' %}active{% endif %}" data-filter="{{ filter.value }}">{{ filter.label }}</button>
  {% endfor %}
</div>

<div class="pub-view-toggle">
  <button class="pub-view-btn active" data-view="select">{{ d.publications.view_toggle.select }}</button>
  <button class="pub-view-btn" data-view="full">{{ d.publications.view_toggle.full }}</button>
</div>

<div class="publications-list">
  {% for pub in d.publications.items %}
  <div class="publication" data-category="{{ pub.category }}" data-selected="{{ pub.selected }}">
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
        <a href="{{ link.url | default: '#' }}" class="pub-link" {% if link.url %}target="_blank" rel="noopener"{% endif %}><i class="{{ link.icon }}"></i> {{ link.label }}</a>
        {% endfor %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
