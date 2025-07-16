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

import { ACCOUNTANT_TITLE_FIELD } from "./AccountantTitle";
import { DOCTOR_TITLE_FIELD } from "../doctor/DoctorTitle";
import { FACILITYADMIN_TITLE_FIELD } from "../facilityAdmin/FacilityAdminTitle";

export const AccountantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="employeeId" source="employeeId" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Facility"
          target="accountantId"
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
