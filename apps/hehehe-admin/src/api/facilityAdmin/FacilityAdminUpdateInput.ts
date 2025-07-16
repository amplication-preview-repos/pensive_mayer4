import { FacilityUpdateManyWithoutFacilityAdminsInput } from "./FacilityUpdateManyWithoutFacilityAdminsInput";

export type FacilityAdminUpdateInput = {
  email?: string | null;
  employeeId?: string | null;
  facilities?: FacilityUpdateManyWithoutFacilityAdminsInput;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
