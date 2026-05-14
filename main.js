// Scroll fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Publication tab switcher (only on publications page)
function showTab(id) {
  document.querySelectorAll('.pub-list').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.pub-tab').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  event.target.classList.add('active');
}
