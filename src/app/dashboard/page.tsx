// src/app/dashboard/page.tsx

import AddPatientForm from "../../components/addPatientForm";
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <AddPatientForm />
    </div>
  );
}
