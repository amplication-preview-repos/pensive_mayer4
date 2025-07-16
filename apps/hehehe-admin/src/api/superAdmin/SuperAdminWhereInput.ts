import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SuperAdminWhereInput = {
  email?: StringNullableFilter;
  employeeId?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
