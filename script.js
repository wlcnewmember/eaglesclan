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
