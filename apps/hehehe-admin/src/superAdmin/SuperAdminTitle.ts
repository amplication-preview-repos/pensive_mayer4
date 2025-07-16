import { SuperAdmin as TSuperAdmin } from "../api/superAdmin/SuperAdmin";

export const SUPERADMIN_TITLE_FIELD = "firstName";

export const SuperAdminTitle = (record: TSuperAdmin): string => {
  return record.firstName?.toString() || String(record.id);
};
