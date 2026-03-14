import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, weeklySales, orders } from "@/lib/mock-data";
import { SalesChart } from "@/components/dashboard/sales-chart";

const todayRevenue = 393000;
const monthlyRevenue = 12650000;
const todayTransactions = 16;
const deliveryOrders = orders.filter((o) => o.order_type === "delivery").length;

export default function DashboardPage() {
  const topProduct = "Air Galon 19L";
  const lowStock = products.filter((p) => p.stock <= 5);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card><CardHeader><CardTitle>Pendapatan Hari Ini</CardTitle></CardHeader><CardContent className="text-2xl font-bold">Rp{todayRevenue.toLocaleString("id-ID")}</CardContent></Card>
        <Card><CardHeader><CardTitle>Pendapatan Bulan Ini</CardTitle></CardHeader><CardContent className="text-2xl font-bold">Rp{monthlyRevenue.toLocaleString("id-ID")}</CardContent></Card>
        <Card><CardHeader><CardTitle>Transaksi Hari Ini</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{todayTransactions}</CardContent></Card>
        <Card><CardHeader><CardTitle>Pesanan Delivery</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{deliveryOrders}</CardContent></Card>
      </div>

      <Tabs defaultValue="sales">
        <TabsList>
          <TabsTrigger value="sales">Grafik Penjualan</TabsTrigger>
          <TabsTrigger value="insight">Insight</TabsTrigger>
        </TabsList>
        <TabsContent value="sales">
          <Card>
            <CardHeader><CardTitle>Penjualan 7 Hari Terakhir</CardTitle></CardHeader>
            <CardContent><SalesChart data={weeklySales} /></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="insight">
          <Card>
            <CardHeader><CardTitle>Produk Terlaris & Notifikasi</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <p>Produk paling laris: <Badge className="bg-blue-100 text-blue-700">{topProduct}</Badge></p>
              <div className="space-y-2">
                <p className="font-medium">Stok hampir habis:</p>
                {lowStock.map((item) => <Badge key={item.id} className="mr-2 bg-red-100 text-red-700">{item.name} ({item.stock})</Badge>)}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
