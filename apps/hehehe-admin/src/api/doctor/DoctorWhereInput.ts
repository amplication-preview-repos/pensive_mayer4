import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FacilityListRelationFilter } from "../facility/FacilityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DoctorWhereInput = {
  appointments?: AppointmentListRelationFilter;
  email?: StringNullableFilter;
  facilities?: FacilityListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  licenseNumber?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  specialty?: StringNullableFilter;
};
