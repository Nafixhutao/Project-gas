# Toko Lares Dashboard

Dashboard web manajemen toko menggunakan **Next.js App Router + TypeScript + TailwindCSS + shadcn/ui style components + Supabase + Recharts**.

## Fitur
- Dashboard KPI: pendapatan harian/bulanan, transaksi hari ini, order delivery, produk terlaris, grafik 7 hari.
- Manajemen produk: tambah/hapus, indikator stok hampir habis.
- POS transaksi: pilih produk, subtotal, total otomatis, checkout (stok berkurang di state lokal).
- Delivery management: monitoring order delivery dan update status.
- Reports: filter tanggal, total pendapatan, tabel riwayat, chart.
- Layout modern: sidebar + header, responsive.

## Menjalankan
```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Supabase
- Salin `.env.example` ke `.env.local`
- Jalankan SQL schema di `sql/schema.sql`
