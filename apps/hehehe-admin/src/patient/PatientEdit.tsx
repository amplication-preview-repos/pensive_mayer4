import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const PatientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="appointments" reference="Appointment">
          <SelectArrayInput
            optionText={AppointmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <SelectInput
          source="gender"
          label="gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
