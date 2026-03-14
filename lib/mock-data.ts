import { Order, Product } from "@/lib/types";

export const products: Product[] = [
  { id: 1, name: "Air Galon 19L", price: 22000, stock: 8, category: "air minum", created_at: "2026-03-01" },
  { id: 2, name: "Gas LPG 3kg", price: 21000, stock: 5, category: "gas", created_at: "2026-03-01" },
  { id: 3, name: "Gas LPG 12kg", price: 235000, stock: 2, category: "gas", created_at: "2026-03-02" },
  { id: 4, name: "Beras 5kg", price: 72000, stock: 15, category: "lainnya", created_at: "2026-03-03" },
  { id: 5, name: "Minyak Goreng 1L", price: 18000, stock: 20, category: "lainnya", created_at: "2026-03-03" }
];

export const orders: Order[] = [
  {
    id: 101,
    customer_name: "Budi Santoso",
    phone: "0812000001",
    address: "Jl. Melati 10",
    driver: "Roni",
    order_type: "delivery",
    payment_method: "transfer",
    total_price: 67000,
    order_status: "dikirim",
    created_at: "2026-03-13"
  },
  {
    id: 102,
    customer_name: "Siti Aminah",
    phone: "0812000002",
    address: "Ambil di toko",
    driver: "-",
    order_type: "store",
    payment_method: "cash",
    total_price: 44000,
    order_status: "selesai",
    created_at: "2026-03-14"
  },
  {
    id: 103,
    customer_name: "Andre",
    phone: "0812000003",
    address: "Jl. Kenanga 20",
    driver: "Asep",
    order_type: "delivery",
    payment_method: "qris",
    total_price: 282000,
    order_status: "pending",
    created_at: "2026-03-14"
  }
];

export const weeklySales = [
  { day: "Sen", revenue: 450000 },
  { day: "Sel", revenue: 520000 },
  { day: "Rab", revenue: 610000 },
  { day: "Kam", revenue: 550000 },
  { day: "Jum", revenue: 800000 },
  { day: "Sab", revenue: 920000 },
  { day: "Min", revenue: 700000 }
];
