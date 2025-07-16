import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DOCTOR_TITLE_FIELD } from "./DoctorTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { ACCOUNTANT_TITLE_FIELD } from "../accountant/AccountantTitle";
import { FACILITYADMIN_TITLE_FIELD } from "../facilityAdmin/FacilityAdminTitle";

export const DoctorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="licenseNumber" source="licenseNumber" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="specialty" source="specialty" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Appointment"
          target="doctorId"
          label="Appointments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="appointmentDate" source="appointmentDate" />
            <TextField label="appointmentReason" source="appointmentReason" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Facility"
          target="doctorId"
          label="Facilities"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Accountant"
              source="accountant.id"
              reference="Accountant"
            >
              <TextField source={ACCOUNTANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="address" source="address" />
            <TextField label="contactNumber" source="contactNumber" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="FacilityAdmin"
              source="facilityadmin.id"
              reference="FacilityAdmin"
            >
              <TextField source={FACILITYADMIN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
