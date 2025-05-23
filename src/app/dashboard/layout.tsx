// src/app/dashboard/layout.tsx
import SideNav from "../../ui/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
