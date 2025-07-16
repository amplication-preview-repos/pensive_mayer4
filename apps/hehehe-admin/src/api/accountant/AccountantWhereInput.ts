import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FacilityListRelationFilter } from "../facility/FacilityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountantWhereInput = {
  email?: StringNullableFilter;
  employeeId?: StringNullableFilter;
  facilities?: FacilityListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
