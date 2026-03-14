"use client";

import { useMemo, useState } from "react";
import { products as initialProducts } from "@/lib/mock-data";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface CartItem { product: Product; quantity: number }

export default function OrdersPage() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) return prev.map((i) => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { product, quantity: 1 }];
    });
  };

  const total = useMemo(() => cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0), [cart]);

  const checkout = () => {
    setProducts((prev) => prev.map((p) => {
      const inCart = cart.find((i) => i.product.id === p.id);
      return inCart ? { ...p, stock: Math.max(0, p.stock - inCart.quantity) } : p;
    }));
    setCart([]);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Sistem Transaksi (POS)</CardTitle>
        <Dialog>
          <DialogTrigger asChild><Button>Keranjang ({cart.length})</Button></DialogTrigger>
          <DialogContent>
            <DialogTitle>Keranjang Belanja</DialogTitle>
            <div className="space-y-2 pt-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between text-sm">
                  <span>{item.product.name} x{item.quantity}</span>
                  <span>Rp{(item.product.price * item.quantity).toLocaleString("id-ID")}</span>
                </div>
              ))}
              <div className="border-t pt-3 font-semibold">Total: Rp{total.toLocaleString("id-ID")}</div>
              <Input placeholder="Catatan / bukti transfer (opsional)" />
              <Button onClick={checkout}>Simpan Transaksi</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Produk</TableHead><TableHead>Harga</TableHead><TableHead>Stok</TableHead><TableHead>Subtotal</TableHead><TableHead>Aksi</TableHead></TableRow></TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>Rp{product.price.toLocaleString("id-ID")}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>Rp{product.price.toLocaleString("id-ID")}</TableCell>
                <TableCell><Button size="sm" onClick={() => addToCart(product)} disabled={product.stock === 0}>Tambah</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
