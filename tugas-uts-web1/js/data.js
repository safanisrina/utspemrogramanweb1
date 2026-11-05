
// ================================
// 1. DATA PENGGUNA
// ================================

const dataPengguna = [
    {
        id: 1,
        nama: "Rina Wulandari",
        email: "rina@gmail.com",
        password: "rina123",
        role: "User"
    },
    {
        id: 2,
        nama: "Agus Pranoto",
        email: "agus@gmail.com",
        password: "agus123",
        role: "User"
    },
    {
        id: 3,
        nama: "Shafa Nisrina",
        email: "siti@gmail.com",
        password: "siti123",
        role: "Admin"
    }
];


// ================================
// 2. DATA BUKU
// ================================

const dataBuku = [
    {
        id: 1,
        kodeBarang: "BK001",
        judul: "Kepemimpinan",
        penulis: "Andi",
        kategori: "Pendidikan",
        jenisBarang: "Pendidikan",
        edisi: "Edisi 1",
        harga: 75000,
        stok: 20,
        cover: "img/kepemimpinan.jpg"
    },
    {
        id: 2,
        kodeBarang: "BK002",
        judul: "Manajemen Keuangan",
        penulis: "Budi",
        kategori: "Pendidikan",
        jenisBarang: "Pendidikan",
        edisi: "Edisi 1",
        harga: 65000,
        stok: 15,
        cover: "img/manajemen_keuangan.jpg"
    },
    {
        id: 3,
        kodeBarang: "BK003",
        judul: "Mikrobiologi",
        penulis: "Citra",
        kategori: "Pendidikan",
        jenisBarang: "Pendidikan",
        edisi: "Edisi 1",
        harga: 55000,
        stok: 10,
        cover: "img/mikrobiologi.jpg"
    },
    {
        id: 4,
        kodeBarang: "BK004",
        judul: "PAUD Perkembangan",
        penulis: "Dina",
        kategori: "Pendidikan",
        jenisBarang: "Pendidikan",
        edisi: "Edisi 1",
        harga: 80000,
        stok: 12,
        cover: "img/paud_perkembangan.jpg"
    },
    {
        id: 5,
        kodeBarang: "BK005",
        judul: "Pengantar Komunikasi",
        penulis: "Eko",
        kategori: "Pendidikan",
        jenisBarang: "Pendidikan",
        edisi: "Edisi 1",
        harga: 60000,
        stok: 18,
        cover: "img/pengantar_komunikasi.jpg"
    }
];


// ================================
// 3. DATA TRANSAKSI
// ================================

let dataTransaksi = [
    {
        id: 2026001,
        nama: "Rina Wulandari",
        judul: "Kepemimpinan",
        jumlah: 2,
        total: 150000,
        alamat: "Cikarang, Bekasi",
        ekspedisi: "JNE",
        status: "Selesai",
        tanggal: "05/11/2026"
    },
    {
        id: 2026002,
        nama: "Agus Pranoto",
        judul: "Manajemen Keuangan",
        jumlah: 1,
        total: 65000,
        alamat: "Jakarta",
        ekspedisi: "Pos Indonesia",
        status: "Dalam Pengiriman",
        tanggal: "05/11/2026"
    },
    {
        id: 2026003,
        nama: "Dina Amelia",
        judul: "PAUD Perkembangan",
        jumlah: 1,
        total: 80000,
        alamat: "Bandung",
        ekspedisi: "JNE",
        status: "Diproses",
        tanggal: "05/11/2026"
    }
];


// ================================
// 4. DATA TRACKING PENGIRIMAN
// ================================

const dataTracking = {
    "2026001": {
        nomorDO: "2026001",
        nama: "Rina Wulandari",
        status: "Selesai",
        ekspedisi: "JNE",
        tanggalKirim: "2026-11-05",
        paket: "JNE-001",
        total: "Rp150.000",
        perjalanan: [
            {
                waktu: "2026-11-05 08:00:00",
                keterangan: "Pesanan diterima oleh penjual"
            },
            {
                waktu: "2026-11-05 10:00:00",
                keterangan: "Paket sedang dikirim"
            },
            {
                waktu: "2026-11-05 14:00:00",
                keterangan: "Paket telah diterima oleh pembeli"
            }
        ]
    },

    "2026002": {
        nomorDO: "2026002",
        nama: "Agus Pranoto",
        status: "Dalam Pengiriman",
        ekspedisi: "Pos Indonesia",
        tanggalKirim: "2026-11-05",
        paket: "POS-002",
        total: "Rp65.000",
        perjalanan: [
            {
                waktu: "2026-11-05 09:00:00",
                keterangan: "Pesanan diterima oleh penjual"
            },
            {
                waktu: "2026-11-05 12:00:00",
                keterangan: "Paket sedang dalam perjalanan"
            }
        ]
    },

    "2026003": {
        nomorDO: "2026003",
        nama: "Dina Amelia",
        status: "Diproses",
        ekspedisi: "JNE",
        tanggalKirim: "2026-11-05",
        paket: "JNE-003",
        total: "Rp80.000",
        perjalanan: [
            {
                waktu: "2026-11-05 13:00:00",
                keterangan: "Pesanan sedang diproses oleh penjual"
            }
        ]
    }
};


// ================================
// 5. KERANJANG BELANJA
// ================================

let keranjang = [];


// ================================
// 6. FORMAT RUPIAH
// ================================

function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}
