document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
  }

  // Publication filters (category + view toggle work together)
  const filterBtns = document.querySelectorAll('.pub-filter-btn');
  const viewBtns = document.querySelectorAll('.pub-view-btn');
  const publications = document.querySelectorAll('.publication');

  let currentCategory = 'all';
  let currentView = 'full';

  function applyFilters() {
    publications.forEach(pub => {
      const matchCategory = currentCategory === 'all' || pub.dataset.category === currentCategory;
      const matchView = currentView === 'select' ? pub.dataset.selected === 'true' : true;
      pub.style.display = matchCategory && matchView ? 'flex' : 'none';
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      applyFilters();
    });
  });

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      applyFilters();
    });
  });

  // Apply initial filters on page load
  applyFilters();
});
