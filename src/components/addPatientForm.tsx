// src/components/AddPatientForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { createPatient, PatientState } from "@/lib/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTransition } from "react";

interface FormData {
  name: string;
}

const toastOptions = {
  position: "top-right" as const,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export default function AddPatientForm() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { name: "" },
  });

  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      const result: PatientState = await createPatient({ message: null }, data);
      if (result.errors || result.message) {
        toast.error(
          result.message || "Error al guardar el paciente",
          toastOptions
        );
      } else {
        toast.success("Paciente guardado con éxito", toastOptions);
        reset();
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Nombre del paciente
          </label>
          <input
            id="name"
            {...register("name", { required: "El nombre es requerido" })}
            className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isPending}
          />
          {errors.name && (
            <span className="text-sm text-red-500 mt-1">
              {errors.name.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? "Guardando..." : "Agregar paciente"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
