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
  } else {
    console.error("Halaman tidak ditemukan:", pageId);
  }
}

// ===== VERIFIKASI =====
function updateVerifikasiBtn() {
  var tiktok = document.getElementById('tiktokUsername').value.trim();
  var cekNama = document.getElementById('checkNama').checked;
  var cekPosting = document.getElementById('checkPosting').checked;
  var btn = document.getElementById('verifikasiBtn');
  if (tiktok !== "" && cekNama && cekPosting) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

document.getElementById('tiktokUsername').addEventListener('input', updateVerifikasiBtn);
document.getElementById('checkNama').addEventListener('change', updateVerifikasiBtn);
document.getElementById('checkPosting').addEventListener('change', updateVerifikasiBtn);

function verifikasi() {
  tiktokUsername = document.getElementById('tiktokUsername').value.trim();
  if (tiktokUsername === "") {
    alert("Masukkan username TikTok!");
    return;
  }
  document.getElementById('tiktokFinal').value = tiktokUsername;
  alert("✅ Verifikasi berhasil! Silakan lanjutkan pendaftaran.");
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
  var overlay = document.getElementById('loadingOverlay');
  overlay.classList.add('show');
}

function hideLoading() {
  var overlay = document.getElementById('loadingOverlay');
  overlay.classList.remove('show');
}

// ===== KIRIM TELEGRAM =====
async function sendToTelegram(data) {
  var msg = '🌊 XNR SELECTION 🌊\n\n';
  msg += '👤 Nama: ' + data.nama + '\n';
  msg += '🎂 Umur: ' + data.umur + '\n';
  msg += '🏯 Marga Sebelum XNR: ' + data.margaAsal + '\n';
  msg += '🔗 Double Marga: ' + data.doubleStatus + '\n';
  msg += '🌍 Asal: ' + data.asal + '\n';
  msg += '📜 Alasan: ' + data.alasan + '\n';
  msg += '📱 TikTok: ' + data.tiktok;

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

// Inisialisasi
updateVerifikasiBtn();
console.log("✅ XNR SELECTION V2 SIAP!");
