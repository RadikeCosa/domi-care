// src/schemas/patientFormSchema.ts
import { z } from "zod";

export const patientFormSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "Máximo 50 caracteres"),
});

export type PatientFormData = z.infer<typeof patientFormSchema>;
