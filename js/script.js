// Simple interactions: year, mobile nav toggle, smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
if(navToggle){
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      if(nav.classList && nav.classList.contains('show')) nav.classList.remove('show');
    }
  })
});