// src/components/AddPatientForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "Máximo 50 caracteres"),
});

type FormData = z.infer<typeof schema>;

const AddPatientForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Nuevo paciente:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
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
