import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentDate?: SortOrder;
  appointmentReason?: SortOrder;
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
