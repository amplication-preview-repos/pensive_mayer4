import { FacilityAdminWhereInput } from "./FacilityAdminWhereInput";
import { FacilityAdminOrderByInput } from "./FacilityAdminOrderByInput";

export type FacilityAdminFindManyArgs = {
  where?: FacilityAdminWhereInput;
  orderBy?: Array<FacilityAdminOrderByInput>;
  skip?: number;
  take?: number;
};
