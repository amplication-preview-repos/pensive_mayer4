import { FacilityAdmin as TFacilityAdmin } from "../api/facilityAdmin/FacilityAdmin";

export const FACILITYADMIN_TITLE_FIELD = "firstName";

export const FacilityAdminTitle = (record: TFacilityAdmin): string => {
  return record.firstName?.toString() || String(record.id);
};
