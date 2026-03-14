export type Category = "air minum" | "gas" | "lainnya";
export type OrderType = "store" | "delivery";
export type PaymentMethod = "cash" | "transfer" | "qris";
export type OrderStatus = "pending" | "diproses" | "dikirim" | "selesai";

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: Category;
  created_at: string;
}

export interface Order {
  id: number;
  customer_name: string;
  phone: string;
  address: string;
  driver: string;
  order_type: OrderType;
  payment_method: PaymentMethod;
  total_price: number;
  order_status: OrderStatus;
  created_at: string;
}
