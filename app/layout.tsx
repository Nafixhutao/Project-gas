import "./globals.css";
import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { HeaderBar } from "@/components/layout/header";

export const metadata = {
  title: "Toko Lares Dashboard",
  description: "Dashboard manajemen toko dan delivery"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <div className="min-h-screen md:flex">
          <Sidebar />
          <main className="flex-1">
            <HeaderBar />
            <div className="p-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
