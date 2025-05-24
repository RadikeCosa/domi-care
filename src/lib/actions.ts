// src/lib/actions.ts
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export type PatientState = {
  errors?: { name?: string[] };
  message?: string | null;
};

const createPatientSchema = z.object({
  name: z.string().min(1, "El nombre es requerido").max(50),
});

export async function createPatient(
  prevState: PatientState,
  data: { name: string }
) {
  const validatedFields = createPatientSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Campos faltantes. No se pudo crear el paciente.",
    };
  }

  const { name } = validatedFields.data;
  const { error } = await supabase
    .from("patients")
    .insert([{ name, is_active: true }]);

  if (error) {
    return { message: `Error en la base de datos: ${error.message}` };
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function fetchPatients() {
  const { data, error } = await supabase
    .from("patients")
    .select("id, name, is_active, created_at")
    .limit(10)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching patients:", error.message);
    return { patients: [], error: error.message };
  }

  return { patients: data, error: null };
}
