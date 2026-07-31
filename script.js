// ===== KONFIGURASI =====
const BOT_TOKEN = "8522490884:AAHM_R45nqpI1p-d7ifrzyPI9p_qYt2A9b8";
const CHAT_ID = "7509845641";
const LINK_GRUP_WA = "https://chat.whatsapp.com/Buwkd7S2Pxm6xDgTuQGtNi";

let tiktokUsername = "";

// ===== NAVIGASI =====
function showPage(pageId) {
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  var target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
  }
}

// ===== VERIFIKASI =====
function updateVerifikasiBtn() {
  var tiktok = document.getElementById('tiktokUsername').value.trim();
  var cekNama = document.getElementById('checkNama').checked;
  var cekPosting = document.getElementById('checkPosting').checked;
  var btn = document.getElementById('verifikasiBtn');
  btn.disabled = !(tiktok && cekNama && cekPosting);
}

document.getElementById('tiktokUsername').addEventListener('input', updateVerifikasiBtn);
document.getElementById('checkNama').addEventListener('change', updateVerifikasiBtn);
document.getElementById('checkPosting').addEventListener('change', updateVerifikasiBtn);

function verifikasi() {
  tiktokUsername = document.getElementById('tiktokUsername').value.trim();
  if (!tiktokUsername) {
    alert("Masukkan username TikTok!");
    return;
  }
  document.getElementById('tiktokFinal').value = tiktokUsername;
  alert("Verifikasi berhasil! Silakan lanjutkan pendaftaran.");
  showPage('selectionPage');
}

// ===== AUDIO =====
var bgAudio = document.getElementById('bgAudio');
var musicStarted = false;

function startMusic() {
  if (!musicStarted && bgAudio) {
    bgAudio.volume = 0.2;
    bgAudio.play().then(function() {
      musicStarted = true;
    }).catch(function() {});
  }
}

document.addEventListener('click', function() {
  startMusic();
}, { once: true });

// ===== LOADING =====
function showLoading() {
  document.getElementById('loadingOverlay').classList.add('show');
}

function hideLoading() {
  document.getElementById('loadingOverlay').classList.remove('show');
}

// ===== KIRIM TELEGRAM =====
async function sendToTelegram(data) {
  var msg = 'XNR SELECTION\n\n';
  msg += 'Nama: ' + data.nama + '\n';
  msg += 'Umur: ' + data.umur + '\n';
  msg += 'Marga Sebelum XNR: ' + data.margaAsal + '\n';
  msg += 'Double Marga: ' + data.doubleStatus + '\n';
  msg += 'Asal: ' + data.asal + '\n';
  msg += 'Alasan: ' + data.alasan + '\n';
  msg += 'TikTok: ' + data.tiktok;

  var url = 'https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage';
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: msg })
    });
  } catch (e) {
    console.log(e);
  }
}

// ===== SUBMIT =====
async function executeSeleksi() {
  var nama = document.getElementById('nama').value.trim();
  var umur = document.getElementById('umur').value.trim();
  var alasan = document.getElementById('alasan').value.trim();
  var asal = document.getElementById('asal').value.trim();
  var margaAsal = document.getElementById('margaAsal').value.trim();
  var doubleRadio = document.querySelector('input[name="doubleMarga"]:checked');
  var isDouble = doubleRadio ? doubleRadio.value === 'yes' : false;

  if (!nama) { alert("Isi NAMA!"); return; }
  if (!umur) { alert("Masukkan umur!"); return; }
  if (!margaAsal) { alert("Isi Marga Sebelum XNR!"); return; }

  var doubleStatus = isDouble ? "Ya (Double Marga)" : "Tidak";
  var finalAlasan = alasan || "Ingin membuktikan diri di XNR";
  var finalAsal = asal || "Jawa Timur";

  showLoading();

  await sendToTelegram({
    nama: nama,
    umur: umur,
    margaAsal: margaAsal,
    doubleStatus: doubleStatus,
    asal: finalAsal,
    alasan: finalAlasan,
    tiktok: tiktokUsername
  });

  setTimeout(function() {
    hideLoading();
    window.open(LINK_GRUP_WA, '_blank');
  }, 2500);
}

document.getElementById('btnSeleksi').addEventListener('click', executeSeleksi);

// ===== BUKA HALAMAN TENTANG ADMIN =====
function bukaTentangAdmin(adminId) {
  var adminData = {
    kayeye: {
      nama: "KAYEYE",
      role: "Owner",
      asal: "Jabar",
      waktu: "Sejak XNR berdiri",
      tugas: "Bertanggung jawab penuh atas arah dan visi XNR. Memimpin seluruh divisi dan mengambil keputusan strategis."
    },
    xion: {
      nama: "XION",
      role: "Admin",
      asal: "Jatim",
      waktu: "2 bulan di XNR",
      tugas: "Mengelola konten dan dokumentasi XNR. Bertanggung jawab atas media sosial dan publikasi."
    },
    reyiz: {
      nama: "REYIZ",
      role: "Admin",
      asal: "Jabar",
      waktu: "4 bulan di XNR",
      tugas: "Mengatur jadwal dan pelaksanaan event XNR. Memastikan setiap acara berjalan lancar."
    },
    voltar: {
      nama: "VOLTAR",
      role: "Admin",
      asal: "Jateng",
      waktu: "5 bulan di XNR",
      tugas: "Melatih anggota dalam pertarungan & strategi. Mengembangkan kemampuan tempur anggota."
    },
    rasyid: {
      nama: "RASYID",
      role: "Admin",
      asal: "Kalimantan",
      waktu: "Sejak XNR berdiri",
      tugas: "Menyaring dan menerima anggota baru. Menjaga kualitas dan kuantitas anggota XNR."
    },
    marvel: {
      nama: "MARVEL",
      role: "Admin",
      asal: "Jabar",
      waktu: "2 bulan di XNR",
      tugas: "Mendesain visual dan konsep XNR. Membuat identitas visual yang kuat untuk marga."
    },
    raul: {
      nama: "RAUL",
      role: "Handler Web & Admin",
      asal: "Jabar",
      waktu: "1 bulan di XNR",
      tugas: "Mengelola website dan sistem seleksi XNR. Memastikan sistem berjalan dengan baik."
    }
  };

  var data = adminData[adminId];
  if (!data) {
    alert("Admin tidak ditemukan!");
    return;
  }

  var container = document.getElementById('adminDetailContainer');
  container.innerHTML = `
    <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
      <div style="flex-shrink: 0;">
        <div style="width: 80px; height: 80px; border-radius: 50%; overflow: hidden; border: 2px solid #0ea5e9; box-shadow: 0 0 20px rgba(14, 165, 233, 0.2);">
          <img src="${adminId}.jpg" alt="mata anime" onerror="this.src='https://placehold.co/80x80/0a2a4a/38bdf8?text=${data.nama.charAt(0)}'">
        </div>
      </div>
      <div style="flex: 1; text-align: left;">
        <div style="font-size: 1.5rem; font-weight: 700; color: #7dd3fc; letter-spacing: 2px;">${data.nama}</div>
        <div style="font-size: 0.9rem; color: #8ab4d6;"><i class="fas fa-user-tag"></i> ${data.role}</div>
        <div style="font-size: 0.8rem; color: #6a8aaa;"><i class="fas fa-map-marker-alt"></i> ${data.asal} • ${data.waktu}</div>
      </div>
    </div>

    <div style="width: 100%; margin: 20px 0; border-radius: 16px; overflow: hidden; border: 2px solid #0ea5e9; box-shadow: 0 0 30px rgba(14, 165, 233, 0.25); aspect-ratio: 16 / 9; background: #0a1a2e;">
      <img src="${adminId}.jpg" alt="mata anime" onerror="this.src='https://placehold.co/800x450/0a2a4a/38bdf8?text=${data.nama.charAt(0)}'" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <hr style="margin: 20px 0; border-color: rgba(56, 189, 248, 0.1);">
    
    <div style="text-align: left;">
      <div style="font-size: 0.8rem; color: #6a8aaa; margin-bottom: 8px;"><i class="fas fa-tasks"></i> Tugas & Tanggung Jawab:</div>
      <div style="font-size: 1rem; color: #b8d4e6; line-height: 1.6; background: rgba(0, 20, 50, 0.3); padding: 16px; border-radius: 16px; border-left: 3px solid #0ea5e9;">
        ${data.tugas}
      </div>
    </div>
  `;

  var logoAbout = document.getElementById('logoAbout');
  logoAbout.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
  logoAbout.style.transform = 'scale(1.2)';
  setTimeout(function() {
    logoAbout.style.transform = 'scale(1)';
  }, 300);

  showPage('tentangAdminPage');
}

// ===== MENU HAMBURGER =====
function toggleMenu() {
  var menu = document.getElementById('sideMenu');
  var overlay = document.getElementById('menuOverlay');
  if (!menu || !overlay) {
    console.error("Menu atau overlay tidak ditemukan!");
    return;
  }
  menu.classList.toggle('open');
  overlay.classList.toggle('show');
}

function closeMenu() {
  var menu = document.getElementById('sideMenu');
  var overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
}

// ===== MENU ITEMS =====
function claimAmPrem() {
  closeMenu();
  window.location.href = 'iklan-claim.html';
}

function penciptaWeb() {
  closeMenu();
  alert("Pencipta Web\n\nNama: Raul\nRole: Handler Web & Admin XNR\n\nWeb ini dibuat untuk XNR Selection.");
}

function tentangXnr() {
  closeMenu();
  alert("Tentang XNR\n\nXNR (Xionara) adalah marga yang berdiri sejak 2024. Kami bergerak di bidang kolaborasi, kreativitas, dan pertarungan. Bergabunglah dan raih prestasi bersama kami!");
}

// ===== ANIMASI SCROLL ADMIN CARD =====
function animasiCardAdmin() {
  var cards = document.querySelectorAll('.admin-card');
  var windowHeight = window.innerHeight;
  var triggerPoint = 150;

  cards.forEach(function(card, index) {
    var cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - triggerPoint) {
      setTimeout(function() {
        card.classList.add('animasi');
        card.classList.add('show');
      }, index * 150);
    }
  });
}

// ===== FALLBACK: PASTIKAN CARD MUNCUL =====
function fallbackShowCards() {
  var cards = document.querySelectorAll('.admin-card');
  if (cards.length > 0) {
    cards.forEach(function(card) {
      card.classList.add('animasi');
      card.classList.add('show');
    });
  }
}

// Jalankan animasi saat load & scroll
window.addEventListener('load', function() {
  setTimeout(animasiCardAdmin, 500);
});

window.addEventListener('scroll', animasiCardAdmin);
window.addEventListener('resize', animasiCardAdmin);

// Fallback: tampilkan semua card setelah 2 detik
setTimeout(fallbackShowCards, 2500);

// ===== INISIALISASI =====
updateVerifikasiBtn();
console.log("XNR SELECTION V2 SIAP - ANIMASI SCROLL AKTIF!");
