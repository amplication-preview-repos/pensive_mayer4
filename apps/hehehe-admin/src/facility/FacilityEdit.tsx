import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AccountantTitle } from "../accountant/AccountantTitle";
import { DoctorTitle } from "../doctor/DoctorTitle";
import { FacilityAdminTitle } from "../facilityAdmin/FacilityAdminTitle";

export const FacilityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accountant.id"
          reference="Accountant"
          label="Accountant"
        >
          <SelectInput optionText={AccountantTitle} />
        </ReferenceInput>
        <TextInput label="address" source="address" />
        <TextInput label="contactNumber" source="contactNumber" />
        <ReferenceInput source="doctor.id" reference="Doctor" label="Doctor">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="facilityAdmin.id"
          reference="FacilityAdmin"
          label="FacilityAdmin"
        >
          <SelectInput optionText={FacilityAdminTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
