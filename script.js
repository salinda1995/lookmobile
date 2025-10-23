
// Simple slider + theme toggle + small helpers
let slides, current=0, timer;
function showSlide(i){
  slides.forEach((s,idx)=> s.classList.toggle('active', idx===i));
}
function nextSlide(){
  current = (current+1) % slides.length;
  showSlide(current);
}
function initSlider(){
  slides = Array.from(document.querySelectorAll('.slide'));
  showSlide(0);
  timer = setInterval(nextSlide, 4000);
}
function toggleTheme(){
  const root = document.documentElement;
  const cur = root.getAttribute('data-theme');
  root.setAttribute('data-theme', cur==='dark' ? 'light' : 'dark');
  localStorage.setItem('lm-theme', root.getAttribute('data-theme'));
}
window.addEventListener('load', ()=>{
  const saved = localStorage.getItem('lm-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  initSlider();
  document.getElementById('modeToggle').addEventListener('click', toggleTheme);
});
