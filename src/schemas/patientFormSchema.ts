// src/schemas/patientFormSchema.ts

import { z } from "zod";

export const patientFormSchema = z.object({
  name: z.string().min(1, "El nombre es requerido").max(50),
  dni: z.string().min(7).max(10).optional(),
  birthDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato YYYY-MM-DD")
    .optional(),
  address: z.string().max(100).optional(),
  phone: z.string().max(20).optional(),
  email: z.string().email("Email inválido").optional(),
  isActive: z.boolean().default(true), // nuevo campo booleano
});

export type PatientFormData = z.infer<typeof patientFormSchema>;
