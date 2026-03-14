import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function HeaderBar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <div>
        <h1 className="text-lg font-semibold">Dashboard Manajemen Toko</h1>
        <p className="text-sm text-muted-foreground">Pantau operasional harian Toko Lares</p>
      </div>
      <div className="flex items-center gap-3">
        <Badge className="bg-green-100 text-green-700">Online</Badge>
        <DropdownMenu trigger={<span className="rounded-md border px-3 py-2 text-sm">Admin ▾</span>}>
          <DropdownMenuItem>Profil</DropdownMenuItem>
          <DropdownMenuItem>Pengaturan</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenu>
      </div>
    </header>
  );
}
