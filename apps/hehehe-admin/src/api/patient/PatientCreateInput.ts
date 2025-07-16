import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  gender?: "Option1" | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
