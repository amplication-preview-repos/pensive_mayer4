import { Appointment } from "../appointment/Appointment";

export type Patient = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  gender?: "Option1" | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
