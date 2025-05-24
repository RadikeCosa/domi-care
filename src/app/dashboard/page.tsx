// src/app/dashboard/page.tsx
import Link from "next/link";
import PatientList from "@/components/patientList"; // Assuming this is the location of your patient list component
import AddPatientForm from "@/components/addPatientForm"; // Assuming this is the location of your form

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            DomiCare Dashboard
          </h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <AddPatientForm />
        </div>
        <PatientList />
      </main>
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500">© 2025 DomiCare</p>
        </div>
      </footer>
    </div>
  );
}
