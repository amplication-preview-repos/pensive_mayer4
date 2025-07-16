import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  gender?: "Option1" | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
