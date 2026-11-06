# BOOKSTORE MANAGEMENT SYSTEM
Nama : shafa nisrina
kelas : 312510360
Nim : 312510360

### Ujian Tengah Semester (UTS) Web 1

## 1. Deskripsi Proyek

BookStore Management System merupakan aplikasi berbasis website yang dibuat untuk membantu proses pengelolaan toko buku secara sederhana.

Website ini memiliki beberapa fitur utama, seperti login pengguna, dashboard, pengelolaan stok buku, checkout atau pemesanan buku, tracking pengiriman, data transaksi, dan laporan penjualan.

Proyek ini dibuat menggunakan HTML, CSS, dan JavaScript. Website dirancang dengan tampilan sederhana, rapi, dan mudah digunakan.

## 2. Tujuan Pembuatan

Tujuan dari pembuatan website ini adalah:

1. Menerapkan penggunaan HTML untuk membuat struktur halaman website.
2. Menggunakan CSS untuk mengatur tampilan dan desain website.
3. Menggunakan JavaScript untuk membuat fitur website menjadi interaktif.
4. Membuat sistem sederhana untuk mengelola data buku dan transaksi.
5. Memahami proses checkout, pengurangan stok, dan tracking pengiriman.

## 3. Teknologi yang Digunakan

Teknologi yang digunakan dalam pembuatan proyek ini:

- **HTML5**: Membuat struktur halaman website.
- **CSS3**: Mengatur desain, warna, tata letak, dan tampilan responsif.
- **JavaScript**: Mengatur fungsi login, pengelolaan data, pencarian, checkout, dan tracking.
- **Visual Studio Code**: Digunakan sebagai aplikasi untuk menulis dan mengedit kode program.
- **Web Browser**: Digunakan untuk menjalankan dan menguji website.

## 4. Struktur Folder

Struktur folder proyek BookStore Management System adalah sebagai berikut:

```text
tugas-uts-web1/
│
├── index.html
├── dashboard.html
├── stok.html
├── checkout.html
├── tracking.html
├── laporan.html
├── transaksi.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   └── script.js
│
└── img/
```

### Keterangan Folder dan File

| File/Folder | Keterangan |
|---|---|
| index.html | Halaman login pengguna |
| dashboard.html | Halaman utama yang menampilkan ringkasan data |
| stok.html | Halaman daftar dan pengelolaan stok buku |
| checkout.html | Halaman pemesanan atau pembelian buku |
| tracking.html | Halaman pelacakan pengiriman pesanan |
| laporan.html | Halaman laporan penjualan |
| transaksi.html | Halaman daftar transaksi pembelian |
| css/style.css | File untuk mengatur tampilan website |
| js/data.js | Menyimpan data pengguna, buku, transaksi, dan tracking |
| js/script.js | Menyimpan fungsi dan proses JavaScript |
| img/ | Menyimpan gambar cover buku |

## 5. Fitur Website

### A. Login

Halaman login digunakan untuk masuk ke dalam sistem menggunakan email dan password yang telah tersedia pada data pengguna.

Fungsi:
- Memeriksa email dan password pengguna.
- Menampilkan pesan apabila login gagal.
- Menyimpan informasi pengguna yang berhasil login.
- Mengarahkan pengguna ke halaman dashboard.

### B. Dashboard

Dashboard merupakan halaman utama setelah pengguna berhasil login.

Informasi yang ditampilkan:
- Total buku.
- Total stok buku.
- Total transaksi.
- Total pendapatan.

Data dashboard dihitung berdasarkan data buku dan transaksi yang tersedia.

### C. Data Stok Buku

Halaman stok digunakan untuk menampilkan informasi buku yang tersedia.

Informasi yang ditampilkan:
- Kode barang.
- Cover buku.
- Judul buku.
- Jenis atau kategori buku.
- Edisi buku.
- Jumlah stok.
- Harga buku.

Fitur:
- Menampilkan daftar buku.
- Mencari buku berdasarkan judul atau kode barang.
- Menambahkan data buku baru.
- Menampilkan cover buku.

### D. Checkout

Halaman checkout digunakan untuk melakukan pemesanan buku.

Informasi yang diisi:
- Nama pembeli.
- Pilihan buku.
- Jumlah pembelian.
- Harga buku.
- Total harga.
- Alamat pembeli.
- Ekspedisi pengiriman.

Fitur:
- Memilih buku yang tersedia.
- Menghitung total harga secara otomatis.
- Memeriksa ketersediaan stok.
- Mengurangi stok setelah transaksi berhasil.
- Membuat nomor transaksi secara otomatis.
- Menambahkan transaksi ke daftar transaksi.
- Membuat data tracking pesanan.

### E. Tracking Pengiriman

Halaman tracking digunakan untuk mengetahui status pesanan berdasarkan nomor transaksi.

Informasi yang ditampilkan:
- Nomor transaksi atau nomor DO.
- Nama pembeli.
- Status pesanan.
- Ekspedisi.
- Tanggal pengiriman.
- Nomor paket.
- Total pembayaran.
- Riwayat perjalanan pesanan.

Status pengiriman yang digunakan:
- Diproses.
- Dalam Pengiriman.
- Selesai.

### F. Data Transaksi

Halaman transaksi digunakan untuk menampilkan daftar pembelian yang telah dilakukan.

Informasi yang ditampilkan:
- Nomor transaksi.
- Nama pembeli.
- Nama buku.
- Jumlah pembelian.
- Total harga.
- Ekspedisi.
- Status transaksi.

Fitur:
- Menampilkan seluruh data transaksi.
- Mencari transaksi berdasarkan nomor transaksi, nama pembeli, atau judul buku.

### G. Laporan Penjualan

Halaman laporan digunakan untuk melihat ringkasan hasil penjualan.

Informasi yang ditampilkan:
- Total transaksi.
- Total buku terjual.
- Total pendapatan.
- Tabel riwayat transaksi.

Fitur:
- Menghitung jumlah transaksi.
- Menghitung jumlah buku yang terjual.
- Menghitung total pendapatan.
- Menampilkan data penjualan.
- Mencetak laporan menggunakan fitur print pada browser.

## 6. Cara Menjalankan Website

Berikut langkah-langkah untuk menjalankan proyek:

1. Pastikan Visual Studio Code sudah terpasang pada komputer.
2. Buka aplikasi Visual Studio Code.
3. Pilih menu **File → Open Folder**.
4. Pilih folder `tugas-uts-web1`.
5. Pastikan seluruh file HTML, CSS, JavaScript, dan folder gambar berada pada struktur yang benar.
6. Pastikan setiap halaman HTML sudah memanggil file CSS dan JavaScript yang sesuai.
7. Buka file `index.html`.
8. Jalankan menggunakan ekstensi Live Server atau buka file HTML melalui browser.
9. Website akan menampilkan halaman login.
10. Masukkan email dan password yang tersedia untuk masuk ke dashboard.

### Urutan Pemanggilan JavaScript

Pastikan file JavaScript dipanggil dengan urutan berikut pada halaman yang menggunakan data dan fungsi website:

```html
<script src="js/data.js"></script>
<script src="js/script.js"></script>
```

Urutan tersebut diperlukan agar data pada `data.js` tersedia sebelum fungsi pada `script.js` dijalankan.

## 7. Akun Login Pengujian

Berikut akun pengguna yang tersedia pada data awal proyek:

| Nama Pengguna | Email | Password | Role |
|---|---|---|---|
| Rina Wulandari | rina@gmail.com | rina123 | User |
| Agus Pranoto | agus@gmail.com | agus123 | User |
| Shafa Nisrina | siti@gmail.com | siti123 | Admin |

**Catatan:** Akun tersebut merupakan data pengujian yang ditulis langsung di dalam file JavaScript, bukan akun dari database.

## 8. Data Buku Awal

Website memiliki lima data buku awal, yaitu:

| Kode Barang | Judul Buku | Penulis | Harga | Stok |
|---|---|---|---:|---:|
| BK001 | Kepemimpinan | Andi | Rp75.000 | 20 |
| BK002 | Manajemen Keuangan | Budi | Rp65.000 | 15 |
| BK003 | Mikrobiologi | Citra | Rp55.000 | 10 |
| BK004 | PAUD Perkembangan | Dina | Rp80.000 | 12 |
| BK005 | Pengantar Komunikasi | Eko | Rp60.000 | 18 |

## 9. Pengujian Fitur

Pengujian dilakukan untuk memastikan fitur website berjalan sesuai dengan fungsi yang dibuat.

| No. | Fitur | Pengujian |
|---|---|---|
| 1 | Login | Memasukkan email dan password yang benar |
| 2 | Login | Memasukkan email atau password yang salah |
| 3 | Dashboard | Memeriksa jumlah buku, stok, transaksi, dan pendapatan |
| 4 | Stok Buku | Melihat daftar buku yang tersedia |
| 5 | Pencarian Stok | Mencari buku berdasarkan judul atau kode |
| 6 | Tambah Buku | Menambahkan data buku baru |
| 7 | Checkout | Melakukan pemesanan buku |
| 8 | Validasi Stok | Memeriksa pembelian yang melebihi jumlah stok |
| 9 | Transaksi | Memeriksa apakah pesanan masuk ke daftar transaksi |
| 10 | Tracking | Mencari pesanan menggunakan nomor transaksi |
| 11 | Laporan | Memeriksa ringkasan penjualan |
| 12 | Cetak Laporan | Menggunakan fitur cetak pada browser |
| 13 | Logout | Keluar dari akun dan kembali ke halaman login |

## 10. Catatan Pengembangan

Website ini merupakan proyek pembelajaran berbasis frontend yang menggunakan HTML, CSS, dan JavaScript.

Beberapa hal yang perlu diperhatikan:

1. Data pengguna, buku, transaksi, dan tracking disimpan sementara dalam variabel JavaScript.
2. Informasi login disimpan menggunakan localStorage pada browser.
3. Data buku, transaksi, dan tracking belum menggunakan database.
4. Data transaksi dan perubahan stok akan kembali ke data awal setelah halaman dimuat ulang karena belum menggunakan penyimpanan permanen.
5. Gambar cover buku harus disimpan di dalam folder `img/` dengan nama file yang sesuai dengan alamat gambar pada data buku.

## 11. Kesimpulan

BookStore Management System merupakan aplikasi website sederhana yang dibuat untuk membantu pengelolaan toko buku, mulai dari melihat stok buku, melakukan pemesanan, mengelola transaksi, melacak pengiriman, hingga melihat laporan penjualan.

Melalui pembuatan proyek ini, dapat dipelajari penerapan HTML, CSS, dan JavaScript dalam membangun sebuah website yang memiliki beberapa halaman dan fitur interaktif.

Proyek ini diharapkan dapat menjadi penerapan pembelajaran mata kuliah Web 1 dalam bentuk aplikasi pengelolaan toko buku sederhana.

---

**BookStore Management System**  
**UTS Web 1 – 2026**
