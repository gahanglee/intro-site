// 導覽列選單切換（手機版）
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelectorAll('.nav-links a');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// 滾動時導覽列微微隱藏/顯示（可選）
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 120) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  lastScroll = current;
}, { passive: true });
