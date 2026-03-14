import Link from "next/link";
import { Home, Package, ShoppingCart, Bike, Users, FileBarChart2, Settings } from "lucide-react";

const menus = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/products", label: "Products", icon: Package },
  { href: "/orders", label: "Orders", icon: ShoppingCart },
  { href: "/delivery", label: "Delivery", icon: Bike },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/reports", label: "Reports", icon: FileBarChart2 },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function Sidebar() {
  return (
    <aside className="w-full border-r bg-white md:w-64">
      <div className="p-6 text-xl font-bold">Toko Lares</div>
      <nav className="space-y-1 px-3 pb-6">
        {menus.map((menu) => (
          <Link key={menu.href} href={menu.href} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted">
            <menu.icon size={16} />
            {menu.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
