import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Appointment = {
  appointmentDate: Date | null;
  appointmentReason: string | null;
  createdAt: Date;
  doctor?: Doctor | null;
  id: string;
  patient?: Patient | null;
  updatedAt: Date;
};
