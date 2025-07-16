import { AccountantWhereUniqueInput } from "../accountant/AccountantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { FacilityAdminWhereUniqueInput } from "../facilityAdmin/FacilityAdminWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FacilityWhereInput = {
  accountant?: AccountantWhereUniqueInput;
  address?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  facilityAdmin?: FacilityAdminWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
