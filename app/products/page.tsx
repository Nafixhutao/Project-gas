"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/types";
import { products as seed } from "@/lib/mock-data";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(seed);
  const [form, setForm] = useState({ name: "", price: "", stock: "", category: "lainnya" as Product["category"] });

  const addProduct = () => {
    const next: Product = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
      category: form.category,
      created_at: new Date().toISOString()
    };
    setProducts((prev) => [next, ...prev]);
    setForm({ name: "", price: "", stock: "", category: "lainnya" });
  };

  const removeProduct = (id: number) => setProducts((prev) => prev.filter((p) => p.id !== id));

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Manajemen Produk</CardTitle>
        <Dialog>
          <DialogTrigger asChild><Button>Tambah Produk</Button></DialogTrigger>
          <DialogContent>
            <DialogTitle>Tambah Produk Baru</DialogTitle>
            <div className="space-y-3 pt-4">
              <Input placeholder="Nama produk" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input type="number" placeholder="Harga" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
              <Input type="number" placeholder="Stok" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} />
              <Input placeholder="Kategori: air minum | gas | lainnya" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as Product["category"] })} />
              <Button onClick={addProduct}>Simpan</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead><TableHead>Kategori</TableHead><TableHead>Harga</TableHead><TableHead>Stok</TableHead><TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>Rp{product.price.toLocaleString("id-ID")}</TableCell>
                <TableCell>
                  {product.stock <= 5 ? <Badge className="bg-red-100 text-red-700">Hampir Habis ({product.stock})</Badge> : product.stock}
                </TableCell>
                <TableCell className="space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm" onClick={() => removeProduct(product.id)}>Hapus</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
