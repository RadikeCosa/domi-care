// src/app/dashboard/loading.tsx
export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Lista de Pacientes</h2>
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
      </div>
    </div>
  );
}
