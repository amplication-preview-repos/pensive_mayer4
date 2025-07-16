import { FacilityUpdateManyWithoutAccountantsInput } from "./FacilityUpdateManyWithoutAccountantsInput";

export type AccountantUpdateInput = {
  email?: string | null;
  employeeId?: string | null;
  facilities?: FacilityUpdateManyWithoutAccountantsInput;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
