import { SuperAdminWhereInput } from "./SuperAdminWhereInput";
import { SuperAdminOrderByInput } from "./SuperAdminOrderByInput";

export type SuperAdminFindManyArgs = {
  where?: SuperAdminWhereInput;
  orderBy?: Array<SuperAdminOrderByInput>;
  skip?: number;
  take?: number;
};
