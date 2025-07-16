import { FacilityCreateNestedManyWithoutAccountantsInput } from "./FacilityCreateNestedManyWithoutAccountantsInput";

export type AccountantCreateInput = {
  email?: string | null;
  employeeId?: string | null;
  facilities?: FacilityCreateNestedManyWithoutAccountantsInput;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
