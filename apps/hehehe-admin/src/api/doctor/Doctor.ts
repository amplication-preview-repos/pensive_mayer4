import { Appointment } from "../appointment/Appointment";
import { Facility } from "../facility/Facility";

export type Doctor = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  facilities?: Array<Facility>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  licenseNumber: string | null;
  phoneNumber: string | null;
  specialty: string | null;
  updatedAt: Date;
};
