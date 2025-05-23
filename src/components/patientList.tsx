// src/components/PatientList.tsx
import { fetchPatients } from "@/lib/actions";

export default async function PatientList() {
  const { patients, error } = await fetchPatients();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Pacientes</h2>
      {error ? (
        <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
          Error al cargar los pacientes: {error}
        </div>
      ) : patients.length === 0 ? (
        <p className="text-gray-500">No hay pacientes registrados.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Nombre
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Estado
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Creado
                </th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-t">
                  <td className="px-4 py-2 text-sm">{patient.name}</td>
                  <td className="px-4 py-2 text-sm">
                    {patient.is_active ? "Activo" : "Inactivo"}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    {new Date(patient.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
