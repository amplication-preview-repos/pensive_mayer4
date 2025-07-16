import { Accountant } from "../accountant/Accountant";
import { Doctor } from "../doctor/Doctor";
import { FacilityAdmin } from "../facilityAdmin/FacilityAdmin";

export type Facility = {
  accountant?: Accountant | null;
  address: string | null;
  contactNumber: string | null;
  createdAt: Date;
  doctor?: Doctor | null;
  facilityAdmin?: FacilityAdmin | null;
  id: string;
  name: string | null;
  typeField: string | null;
  updatedAt: Date;
};
