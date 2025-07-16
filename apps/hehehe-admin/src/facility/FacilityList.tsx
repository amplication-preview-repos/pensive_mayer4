import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOUNTANT_TITLE_FIELD } from "../accountant/AccountantTitle";
import { DOCTOR_TITLE_FIELD } from "../doctor/DoctorTitle";
import { FACILITYADMIN_TITLE_FIELD } from "../facilityAdmin/FacilityAdminTitle";

export const FacilityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Facilities"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Doctor" source="doctor.id" reference="Doctor">
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
