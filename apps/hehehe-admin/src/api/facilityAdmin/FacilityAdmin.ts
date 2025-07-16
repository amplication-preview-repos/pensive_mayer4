import { Facility } from "../facility/Facility";

export type FacilityAdmin = {
  createdAt: Date;
  email: string | null;
  employeeId: string | null;
  facilities?: Array<Facility>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
