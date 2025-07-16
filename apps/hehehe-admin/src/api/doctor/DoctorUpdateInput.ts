import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";
import { FacilityUpdateManyWithoutDoctorsInput } from "./FacilityUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
  email?: string | null;
  facilities?: FacilityUpdateManyWithoutDoctorsInput;
  firstName?: string | null;
  lastName?: string | null;
  licenseNumber?: string | null;
  phoneNumber?: string | null;
  specialty?: string | null;
};
