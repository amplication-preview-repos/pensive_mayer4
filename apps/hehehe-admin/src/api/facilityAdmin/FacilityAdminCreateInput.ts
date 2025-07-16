import { FacilityCreateNestedManyWithoutFacilityAdminsInput } from "./FacilityCreateNestedManyWithoutFacilityAdminsInput";

export type FacilityAdminCreateInput = {
  email?: string | null;
  employeeId?: string | null;
  facilities?: FacilityCreateNestedManyWithoutFacilityAdminsInput;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
