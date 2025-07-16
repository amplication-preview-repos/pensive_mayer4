import { AccountantWhereUniqueInput } from "../accountant/AccountantWhereUniqueInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { FacilityAdminWhereUniqueInput } from "../facilityAdmin/FacilityAdminWhereUniqueInput";

export type FacilityCreateInput = {
  accountant?: AccountantWhereUniqueInput | null;
  address?: string | null;
  contactNumber?: string | null;
  doctor?: DoctorWhereUniqueInput | null;
  facilityAdmin?: FacilityAdminWhereUniqueInput | null;
  name?: string | null;
  typeField?: string | null;
};
