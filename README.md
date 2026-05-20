# Personal Academic Homepage

A clean, modern academic homepage built with Jekyll, designed for researchers and academics.

## Features

- **Personal Profile**: Avatar, bio, and social links
- **Publications**: Filter by research area, toggle between selected/full view
- **Education & Experience**: Timeline-based layout
- **Talks & Presentations**: Academic talk history
- **Academic Service**: Reviewer roles
- **Responsive Design**: Works on desktop and mobile

## Quick Start

### 1. Customize Your Information

Edit the following files to add your personal information:

- `_config.yml` - Site title, author info
- `index.md` - Home page content
- `publications.md` - Publications list
- `cv.md` - Full CV

### 2. Add Your Avatar

Replace `assets/img/avatar.jpg` with your photo.

### 3. Deploy to GitHub Pages

```bash
git add .
git commit -m "Initial setup"
git push origin main
```

Your site will be available at `https://yourusername.github.io`

## Customization

### Adding Publications

Add publications in `publications.md` with the following format:

```markdown
<div class="publication" data-category="deep-learning">
  <div class="pub-title">Paper Title</div>
  <div class="pub-authors"><strong>Your Name</strong>, Co-Author</div>
  <div class="pub-venue">Conference/Journal Name Year</div>
  <div class="pub-links">
    <a href="#" class="pub-link"><i class="fas fa-file-pdf"></i> Paper</a>
    <a href="#" class="pub-link"><i class="fab fa-github"></i> Code</a>
  </div>
  <div class="pub-summary">Brief summary of the paper...</div>
  <div class="pub-tags">
    <span class="pub-tag">Tag1</span>
    <span class="pub-tag">Tag2</span>
  </div>
</div>
```

### Research Areas

To add new research areas for filtering, update the filter buttons in `publications.md`:

```markdown
<div class="pub-filters">
  <button class="pub-filter-btn active" data-filter="all">All</button>
  <button class="pub-filter-btn" data-filter="your-area">Your Area</button>
</div>
```

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`

## License

MIT
