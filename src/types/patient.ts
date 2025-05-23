// src/types/patient.ts

export interface Patient {
  id: string;
  name: string;
  dni: string;
  birthDate: string;
  address: string;
  phone?: string;
  email?: string;
  createdAt: string;
}
