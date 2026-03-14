"use client";

import { useState } from "react";
import { orders as seed } from "@/lib/mock-data";
import { OrderStatus } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const statusColor: Record<OrderStatus, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  diproses: "bg-blue-100 text-blue-700",
  dikirim: "bg-purple-100 text-purple-700",
  selesai: "bg-green-100 text-green-700"
};

export default function DeliveryPage() {
  const [orders, setOrders] = useState(seed.filter((o) => o.order_type === "delivery"));

  const advanceStatus = (id: number) => {
    const sequence: OrderStatus[] = ["pending", "diproses", "dikirim", "selesai"];
    setOrders((prev) => prev.map((order) => {
      if (order.id !== id) return order;
      const idx = sequence.indexOf(order.order_status);
      return { ...order, order_status: sequence[Math.min(idx + 1, sequence.length - 1)] };
    }));
  };

  return (
    <Card>
      <CardHeader><CardTitle>Monitoring Order Delivery</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Customer</TableHead><TableHead>Phone</TableHead><TableHead>Alamat</TableHead><TableHead>Driver</TableHead><TableHead>Status</TableHead><TableHead>Aksi</TableHead></TableRow></TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.customer_name}</TableCell>
                <TableCell>{order.phone}</TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell>{order.driver}</TableCell>
                <TableCell><Badge className={statusColor[order.order_status]}>{order.order_status}</Badge></TableCell>
                <TableCell><Button size="sm" variant="outline" onClick={() => advanceStatus(order.id)}>Ubah Status</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
