import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { weeklySales, orders } from "@/lib/mock-data";
import { ReportChart } from "@/components/reports/report-chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ReportsPage() {
  const total = orders.reduce((acc, order) => acc + order.total_price, 0);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Laporan Penjualan Harian/Bulanan</CardTitle></CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          <Input type="date" />
          <Input type="date" />
          <div className="rounded-md border bg-muted p-2 text-sm font-semibold">Total Pendapatan: Rp{total.toLocaleString("id-ID")}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Grafik Penjualan</CardTitle></CardHeader>
        <CardContent><ReportChart data={weeklySales} /></CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Riwayat Transaksi</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>ID</TableHead><TableHead>Tanggal</TableHead><TableHead>Jenis</TableHead><TableHead>Pembayaran</TableHead><TableHead>Total</TableHead></TableRow></TableHeader>
            <TableBody>{orders.map((order) => <TableRow key={order.id}><TableCell>#{order.id}</TableCell><TableCell>{order.created_at}</TableCell><TableCell>{order.order_type}</TableCell><TableCell>{order.payment_method}</TableCell><TableCell>Rp{order.total_price.toLocaleString("id-ID")}</TableCell></TableRow>)}</TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
