import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentDate?: Date | null;
  appointmentReason?: string | null;
  doctor?: DoctorWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
};
