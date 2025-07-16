import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";
import { FacilityCreateNestedManyWithoutDoctorsInput } from "./FacilityCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
  email?: string | null;
  facilities?: FacilityCreateNestedManyWithoutDoctorsInput;
  firstName?: string | null;
  lastName?: string | null;
  licenseNumber?: string | null;
  phoneNumber?: string | null;
  specialty?: string | null;
};
