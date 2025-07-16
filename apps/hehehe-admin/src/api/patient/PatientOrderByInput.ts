import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
