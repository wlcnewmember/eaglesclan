// ===== NAVIGASI =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const map = { homePage: 0, aboutPage: 1, adminPage: 2, seleksiPage: 3 };
  if (map[id] !== undefined) document.querySelectorAll('.nav-links a')[map[id]].classList.add('active');
}

// ===== CAROUSEL ADMIN =====
let currentIndex = 0;
const adminCards = document.querySelectorAll('.admin-card');
const track = document.getElementById('adminTrack');
let visibleCount = 3;

function updateCarousel() {
  const cardWidth = adminCards[0].offsetWidth + 20;
  const maxIndex = Math.max(0, adminCards.length - visibleCount);
  if (currentIndex > maxIndex) currentIndex = maxIndex;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function moveCarousel(direction) {
  const maxIndex = Math.max(0, adminCards.length - visibleCount);
  currentIndex = Math.max(0, Math.min(maxIndex, currentIndex + direction));
  updateCarousel();
}

// ===== RESIZE =====
function updateVisibleCount() {
  if (window.innerWidth <= 480) visibleCount = 1;
  else if (window.innerWidth <= 768) visibleCount = 2;
  else visibleCount = 3;
  const maxIndex = Math.max(0, adminCards.length - visibleCount);
  if (currentIndex > maxIndex) currentIndex = maxIndex;
  updateCarousel();
}

window.addEventListener('resize', () => {
  updateVisibleCount();
  updateCarousel();
});

// ===== INISIALISASI =====
setTimeout(() => {
  updateVisibleCount();
  updateCarousel();
}, 100);

// ===== DAFTAR SELEKSI =====
document.getElementById('btnDaftar').addEventListener('click', function() {
  const nama = document.getElementById('nama').value.trim();
  const umur = document.getElementById('umur').value.trim();
  const skill = document.getElementById('skill').value.trim();
  if (!nama || !umur || !skill) return alert('Isi semua data!');
  alert('Terima kasih, ' + nama + '!\nPendaftaran Anda telah diterima.\nTim Eagle`s Clan akan menghubungi Anda.');
  document.getElementById('nama').value = '';
  document.getElementById('umur').value = '';
  document.getElementById('skill').value = '';
});

console.log('🦅 Eagle`s Clan siap!');
