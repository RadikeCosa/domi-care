// src/ui/sidenav.tsx

export default function SideNav() {
  return (
    <aside className="w-64 p-6 border-r border-gray-300 min-h-screen">
      <h3 className="text-lg font-semibold mb-4">Menú</h3>
      <ul className="space-y-2">
        <li className="text-sm">Admin</li>
        <li className="text-sm">Pacientes</li>
        <li className="text-sm">Profesionales</li>
        <li className="text-sm">Visitas</li>
      </ul>
    </aside>
  );
}
