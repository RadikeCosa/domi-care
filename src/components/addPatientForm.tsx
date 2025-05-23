// src/components/AddPatientForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  patientFormSchema,
  PatientFormData,
} from "@/schemas/patientFormSchema";
import { supabase } from "@/lib/supabase";

const AddPatientForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientFormSchema),
  });

  const onSubmit = async (data: PatientFormData) => {
    const partialData = { name: data.name }; // solo el campo que ya pedimos

    const { error } = await supabase.from("patients").insert([partialData]);

    if (error) {
      console.error("Error al guardar:", error.message);
    } else {
      console.log("Paciente guardado con éxito");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
      {/* Nombre */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium mb-1">
          Nombre del paciente
        </label>
        <input
          id="name"
          {...register("name")}
          className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <span className="text-sm text-red-500 mt-1">
            {errors.name.message}
          </span>
        )}
      </div>

      {/* Repetir este bloque para dni, birthDate, address, phone, email */}

      <button
        type="submit"
        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
      >
        Agregar paciente
      </button>
    </form>
  );
};

export default AddPatientForm;
