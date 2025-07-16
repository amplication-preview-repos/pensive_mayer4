import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  licenseNumber?: SortOrder;
  phoneNumber?: SortOrder;
  specialty?: SortOrder;
  updatedAt?: SortOrder;
};
