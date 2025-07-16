import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DoctorList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Doctors"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="licenseNumber" source="licenseNumber" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="specialty" source="specialty" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
