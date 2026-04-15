# Sistem Puskeswan (Pusat Kesehatan Hewan)

Sistem Puskeswan adalah platform berbasis web untuk layanan kesehatan hewan yang memungkinkan pengguna melakukan konsultasi dengan admin/dokter hewan secara daring. Project ini dibangun menggunakan Node.js dengan framework Express.js dan PostgreSQL sebagai basis datanya.

## 🚀 Fitur Utama
- **Autentikasi Pengguna & Admin**: Registrasi dan Login menggunakan JWT (JSON Web Token).
- **Manajemen Konsultasi**: Pengguna dapat membuat konsultasi, dan admin dapat mengelola status (Approve/Reject).
- **Manajemen Profil**: Pengguna dapat melihat dan memperbarui informasi profil mereka.
- **Admin Dashboard**: Dashboard khusus untuk mengelola akun admin dan layanan konsultasi.

## 🛠️ Stack Teknologi
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL dengan Sequelize ORM
- **View Engine**: EJS (Embedded JavaScript)
- **Authentikasi**: JWT (jsonwebtoken), bcryptjs
- **Middleware**: Morgan, Cookie Parser, Dotenv

## 📋 Prasyarat
Sebelum memulai, pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (v14 atau lebih baru)
- [PostgreSQL](https://www.postgresql.org/) (v12 atau lebih baru)
- npm (biasanya terinstal bersama Node.js)

## ⚙️ Instalasi & Persiapan

### 1. Clone Repositori
```bash
git clone <repository-url>
cd sistemPuskeswan
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment (.env)
Buat file baru bernama `.env` di direktori utama project (copy dari `.env.example`):
```bash
cp .env.example .env
```
Isi variabel berikut di dalam `.env`:
```env
PORT=3000
NODE_ENV=development

# Database Configuration
PGHOST=localhost
PGUSER=your_postgres_user
PGPASSWORD=your_postgres_password
PGDATABASE=puskeswan_db
PGPORT=5432

# Authentication
JWT_SECRET=rahasia_anda
BCRYPT_SALT_ROUNDS=10
```

### 4. Setup Database
Pastikan PostgreSQL sedang berjalan di komputer Anda, lalu buat database sesuai dengan nama di `.env` (contoh: `puskeswan_db`).

Jalankan migrasi database menggunakan Sequelize CLI:
```bash
npx sequelize-cli db:migrate
```

*(Opsional)* Jika ada data awal (seeder), jalankan:
```bash
npx sequelize-cli db:seed:all
```

## 🚀 Menjalankan Aplikasi

### Mode Pengembangan (Development)
Menggunakan nodemon untuk restart otomatis:
```bash
npm run dev
```

### Mode Produksi
```bash
npm start
```
Aplikasi akan berjalan di `http://localhost:3000`.

## 📂 Struktur Folder
- `config/`: Konfigurasi database.
- `controllers/`: Logika bisnis aplikasi.
- `middlewares/`: Middleware (Autentikasi, Logging, dll).
- `migrations/`: File migrasi database Sequelize.
- `models/`: Definisi skema tabel database.
- `public/`: File statis (CSS, JS, Gambar).
- `routes/`: Definisi endpoint API dan routing.
- `views/`: Template tampilan (EJS).

## 🛣️ API Endpoints (Ringkasan)

### Auth
- `POST /api/auth/register` - Registrasi user baru
- `POST /api/auth/login` - Login user/admin

### Konsultasi
- `POST /api/consultation` - Membuat konsultasi baru (Butuh Token)
- `GET /api/consultations/:id` - Mendapatkan detail konsultasi
- `PUT /api/consultations/:id/status` - Update status (Admin)

### Admin
- `POST /api/admin/createAdmin` - Membuat admin baru (Super Admin)
- `GET /api/admin/consultations` - Melihat daftar konsultasi tertunda

## 👨‍💻 Kontributor
- **Reza Herdiansyah**
- **Riska Nurhayan**

---
© 2025 Sistem Puskeswan. All rights reserved.
