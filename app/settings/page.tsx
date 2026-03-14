import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <Card>
      <CardHeader><CardTitle>Settings</CardTitle></CardHeader>
      <CardContent className="text-sm text-muted-foreground">Konfigurasi Supabase URL/Key, metode pembayaran, dan preferensi notifikasi dapat ditambahkan di halaman ini.</CardContent>
    </Card>
  );
}
