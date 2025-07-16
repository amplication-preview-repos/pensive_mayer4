import { Accountant as TAccountant } from "../api/accountant/Accountant";

export const ACCOUNTANT_TITLE_FIELD = "firstName";

export const AccountantTitle = (record: TAccountant): string => {
  return record.firstName?.toString() || String(record.id);
};
