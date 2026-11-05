
// ================================
// 1. FUNGSI LOGIN
// ================================

function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const pesan = document.getElementById("pesanLogin");

    const pengguna = dataPengguna.find(user =>
        user.email === email && user.password === password
    );

    if (pengguna) {
        localStorage.setItem("penggunaLogin", JSON.stringify(pengguna));
        window.location.href = "dashboard.html";
    } else if (pesan) {
        pesan.textContent = "Email atau password tidak terdaftar!";
        pesan.style.color = "red";
    }
}


// ================================
// 2. FUNGSI LOGOUT
// ================================

function logout() {
    localStorage.removeItem("penggunaLogin");
    window.location.href = "index.html";
}


// ================================
// 3. MENAMPILKAN NAMA PENGGUNA
// ================================

function tampilkanNamaPengguna() {
    const pengguna = JSON.parse(
        localStorage.getItem("penggunaLogin")
    );

    const elemenNama = document.getElementById("namaPengguna");

    if (elemenNama && pengguna) {
        elemenNama.textContent = pengguna.nama;
    }
}


// ================================
// 4. MENAMPILKAN DATA DASHBOARD
// ================================

function tampilkanDashboard() {
    const totalBuku = dataBuku.length;

    const totalStok = dataBuku.reduce(
        (total, buku) => total + buku.stok, 0
    );

    const totalTransaksi = dataTransaksi.length;

    const totalPendapatan = dataTransaksi.reduce(
        (total, transaksi) => total + transaksi.total, 0
    );

    const elemenBuku = document.getElementById("totalBuku");
    const elemenStok = document.getElementById("totalStok");
    const elemenTransaksi = document.getElementById("totalTransaksi");
    const elemenPendapatan = document.getElementById("totalPendapatan");

    if (elemenBuku) elemenBuku.textContent = totalBuku;
    if (elemenStok) elemenStok.textContent = totalStok;
    if (elemenTransaksi) elemenTransaksi.textContent = totalTransaksi;

    if (elemenPendapatan) {
        elemenPendapatan.textContent = formatRupiah(totalPendapatan);
    }
}

function renderDashboard() {
    tampilkanDashboard();
}


// ================================
// 5. MENAMPILKAN STOK BUKU
// ================================

function renderStok(daftarBuku = dataBuku) {
    const tabel = document.getElementById("tabelStok");

    if (!tabel) return;

    if (daftarBuku.length === 0) {
        tabel.innerHTML = `
            <tr>
                <td colspan="8">Buku tidak ditemukan.</td>
            </tr>
        `;
        return;
    }

    tabel.innerHTML = daftarBuku.map((buku, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${buku.kodeBarang || "-"}</td>
            <td>
                <img
                    src="${buku.cover || ""}"
                    alt="Cover ${buku.judul}"
                    class="cover-buku"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                >
                <div class="no-cover" style="display:none;">
                    No Image
                </div>
            </td>
            <td>${buku.judul}</td>
            <td>${buku.jenisBarang || buku.kategori || "-"}</td>
            <td>${buku.edisi || "-"}</td>
            <td>${buku.stok}</td>
            <td>${formatRupiah(buku.harga)}</td>
        </tr>
    `).join("");
}

function tampilkanStok() {
    renderStok();
}


// ================================
// 6. PENCARIAN STOK BUKU
// ================================

function filterStok() {
    const input = document.getElementById("cariBuku");

    if (!input) return;

    const kataKunci = input.value.toLowerCase();

    const hasil = dataBuku.filter(buku =>
        buku.judul.toLowerCase().includes(kataKunci) ||
        String(buku.kodeBarang).toLowerCase().includes(kataKunci)
    );

    renderStok(hasil);
}


// ================================
// 7. MENAMBAHKAN BUKU
// ================================

function tambahBuku() {
    const judul = document.getElementById("judulBuku").value.trim();
    const penulis = document.getElementById("penulisBuku").value.trim();
    const kategori = document.getElementById("kategoriBuku").value;
    const harga = Number(document.getElementById("hargaBuku").value);
    const stok = Number(document.getElementById("stokBuku").value);

    if (!judul || !penulis || !kategori || harga <= 0 || stok < 0) {
        alert("Mohon isi data buku dengan benar!");
        return;
    }

    const idBaru = dataBuku.length > 0
        ? Math.max(...dataBuku.map(buku => buku.id)) + 1
        : 1;

    const kodeBaru = "BK" + String(idBaru).padStart(3, "0");

    dataBuku.push({
        id: idBaru,
        kodeBarang: kodeBaru,
        judul: judul,
        penulis: penulis,
        kategori: kategori,
        jenisBarang: kategori,
        edisi: "Edisi 1",
        harga: harga,
        stok: stok,
        cover: "img/no-image.jpg"
    });

    alert("Buku berhasil ditambahkan!");

    renderStok();

    tampilkanDashboard();
}


// ================================
// 8. MENAMPILKAN PILIHAN BUKU
// ================================

function renderPilihanBuku() {
    const pilihan = document.getElementById("pilihBuku");

    if (!pilihan) return;

    pilihan.innerHTML = `
        <option value="">-- Pilih Buku --</option>
    `;

    dataBuku.forEach(buku => {
        pilihan.innerHTML += `
            <option value="${buku.id}" ${buku.stok <= 0 ? "disabled" : ""}>
                ${buku.judul} - ${formatRupiah(buku.harga)}
                (Stok: ${buku.stok})
            </option>
        `;
    });
}


// ================================
// 9. MENGHITUNG TOTAL CHECKOUT
// ================================

function updateHargaCheckout() {
    const pilihan = document.getElementById("pilihBuku");
    const jumlahInput = document.getElementById("jumlahBeli");

    if (!pilihan || !jumlahInput) return;

    const idBuku = Number(pilihan.value);
    const jumlah = Number(jumlahInput.value);

    const buku = dataBuku.find(b => b.id === idBuku);

    const hargaInput = document.getElementById("hargaBuku");
    const totalInput = document.getElementById("totalHarga");

    if (!buku) {
        hargaInput.value = "";
        totalInput.value = "";
        return;
    }

    hargaInput.value = formatRupiah(buku.harga);

    if (jumlah > 0) {
        totalInput.value = formatRupiah(buku.harga * jumlah);
    } else {
        totalInput.value = "";
    }
}


// ================================
// 10. PROSES CHECKOUT
// ================================

function prosesCheckout(event) {
    event.preventDefault();

    const nama = document.getElementById("namaPembeli").value.trim();
    const idBuku = Number(document.getElementById("pilihBuku").value);
    const jumlah = Number(document.getElementById("jumlahBeli").value);
    const alamat = document.getElementById("alamatPembeli").value.trim();
    const ekspedisi = document.getElementById("ekspedisi").value;

    const buku = dataBuku.find(b => b.id === idBuku);
    const pesan = document.getElementById("pesanCheckout");

    if (!nama || !buku || jumlah <= 0 || !alamat || !ekspedisi) {
        if (pesan) {
            pesan.textContent = "Mohon lengkapi data pesanan!";
        }
        return;
    }

    if (jumlah > buku.stok) {
        if (pesan) {
            pesan.textContent = "Stok buku tidak mencukupi!";
        }
        return;
    }

    const total = buku.harga * jumlah;
    const nomorDO = Date.now();
    const tanggal = new Date().toLocaleDateString("id-ID");
    const tanggalKirim = new Date().toISOString().slice(0, 10);

    // Mengurangi stok buku
    buku.stok -= jumlah;

    // Membuat data transaksi
    const transaksi = {
        id: nomorDO,
        nama: nama,
        judul: buku.judul,
        jumlah: jumlah,
        total: total,
        alamat: alamat,
        ekspedisi: ekspedisi,
        status: "Diproses",
        tanggal: tanggal
    };

    dataTransaksi.push(transaksi);

    // Membuat data tracking
    dataTracking[String(nomorDO)] = {
        nomorDO: String(nomorDO),
        nama: nama,
        status: "Diproses",
        ekspedisi: ekspedisi,
        tanggalKirim: tanggalKirim,
        paket: ekspedisi + "-" + nomorDO,
        total: formatRupiah(total),
        perjalanan: [
            {
                waktu: new Date().toLocaleString("id-ID"),
                keterangan: "Pesanan diterima dan sedang diproses oleh penjual"
            }
        ]
    };

    alert("Pesanan berhasil dibuat!");

    document.getElementById("formCheckout").reset();

    document.getElementById("hargaBuku").value = "";
    document.getElementById("totalHarga").value = "";

    if (pesan) pesan.textContent = "";

    renderPilihanBuku();
    tampilkanDashboard();
}


// ================================
// 11. MENAMPILKAN TRANSAKSI
// ================================

function renderTransaksi(daftarTransaksi = dataTransaksi) {
    const tabel = document.getElementById("tabelTransaksi");

    if (!tabel) return;

    if (daftarTransaksi.length === 0) {
        tabel.innerHTML = `
            <tr>
                <td colspan="8">Belum ada transaksi.</td>
            </tr>
        `;
        return;
    }

    tabel.innerHTML = daftarTransaksi.map((transaksi, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${transaksi.id}</td>
            <td>${transaksi.nama}</td>
            <td>${transaksi.judul}</td>
            <td>${transaksi.jumlah}</td>
            <td>${formatRupiah(transaksi.total)}</td>
            <td>${transaksi.ekspedisi}</td>
            <td>${transaksi.status}</td>
        </tr>
    `).join("");
}

function tampilkanTransaksi() {
    renderTransaksi();
}


// ================================
// 12. PENCARIAN TRANSAKSI
// ================================

function filterTransaksi() {
    const input = document.getElementById("cariTransaksi");

    if (!input) return;

    const kataKunci = input.value.toLowerCase();

    const hasil = dataTransaksi.filter(transaksi =>
        String(transaksi.id).includes(kataKunci) ||
        transaksi.nama.toLowerCase().includes(kataKunci) ||
        transaksi.judul.toLowerCase().includes(kataKunci)
    );

    renderTransaksi(hasil);
}


// ================================
// 13. MENAMPILKAN LAPORAN
// ================================

function renderLaporan() {
    const totalTransaksi = dataTransaksi.length;

    const totalBukuTerjual = dataTransaksi.reduce(
        (total, transaksi) => total + transaksi.jumlah, 0
    );

    const totalPendapatan = dataTransaksi.reduce(
        (total, transaksi) => total + transaksi.total, 0
    );

    const elemenTransaksi = document.getElementById("laporanTotalTransaksi");
    const elemenBuku = document.getElementById("laporanBukuTerjual");
    const elemenPendapatan = document.getElementById("laporanPendapatan");

    if (elemenTransaksi) {
        elemenTransaksi.textContent = totalTransaksi;
    }

    if (elemenBuku) {
        elemenBuku.textContent = totalBukuTerjual;
    }

    if (elemenPendapatan) {
        elemenPendapatan.textContent = formatRupiah(totalPendapatan);
    }

    const tabel = document.getElementById("tabelLaporan");

    if (!tabel) return;

    if (dataTransaksi.length === 0) {
        tabel.innerHTML = `
            <tr>
                <td colspan="7">Belum ada data laporan.</td>
            </tr>
        `;
        return;
    }

    tabel.innerHTML = dataTransaksi.map((transaksi, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${transaksi.id}</td>
            <td>${transaksi.nama}</td>
            <td>${transaksi.judul}</td>
            <td>${transaksi.jumlah}</td>
            <td>${formatRupiah(transaksi.total)}</td>
            <td>${transaksi.tanggal}</td>
        </tr>
    `).join("");
}


// ================================
// 14. PENCARIAN TRACKING
// ================================

function cariTracking(event) {
    event.preventDefault();

    const nomorInput = document.getElementById("nomorDO");
    const pesan = document.getElementById("pesanTracking");
    const hasil = document.getElementById("hasilTracking");

    if (!nomorInput || !hasil) return;

    const nomor = nomorInput.value.trim();
    const tracking = dataTracking[nomor];

    if (!tracking) {
        if (pesan) {
            pesan.textContent = "Nomor pesanan tidak ditemukan!";
            pesan.style.color = "red";
        }

        hasil.style.display = "none";
        return;
    }

    if (pesan) pesan.textContent = "";

    hasil.style.display = "block";

    document.getElementById("hasilNomorDO").textContent = tracking.nomorDO;
    document.getElementById("hasilNama").textContent = tracking.nama;
    document.getElementById("hasilStatus").textContent = tracking.status;
    document.getElementById("hasilEkspedisi").textContent = tracking.ekspedisi;
    document.getElementById("hasilTanggal").textContent = tracking.tanggalKirim;
    document.getElementById("hasilPaket").textContent = tracking.paket;
    document.getElementById("hasilTotal").textContent = tracking.total;

    const riwayat = document.getElementById("riwayatPerjalanan");

    if (riwayat) {
        riwayat.innerHTML = tracking.perjalanan.map(item => `
            <div class="tracking-item">
                <strong>${item.keterangan}</strong>
                <p>${item.waktu}</p>
            </div>
        `).join("");
    }
}


// ================================
// 15. MENJALANKAN FUNGSI SAAT HALAMAN DIBUKA
// ================================

document.addEventListener("DOMContentLoaded", function() {
    tampilkanNamaPengguna();
    tampilkanDashboard();
    tampilkanStok();
    tampilkanTransaksi();
    renderPilihanBuku();
});

