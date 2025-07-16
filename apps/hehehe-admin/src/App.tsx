import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DoctorList } from "./doctor/DoctorList";
import { DoctorCreate } from "./doctor/DoctorCreate";
import { DoctorEdit } from "./doctor/DoctorEdit";
import { DoctorShow } from "./doctor/DoctorShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { AccountantList } from "./accountant/AccountantList";
import { AccountantCreate } from "./accountant/AccountantCreate";
import { AccountantEdit } from "./accountant/AccountantEdit";
import { AccountantShow } from "./accountant/AccountantShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { FacilityAdminList } from "./facilityAdmin/FacilityAdminList";
import { FacilityAdminCreate } from "./facilityAdmin/FacilityAdminCreate";
import { FacilityAdminEdit } from "./facilityAdmin/FacilityAdminEdit";
import { FacilityAdminShow } from "./facilityAdmin/FacilityAdminShow";
import { SuperAdminList } from "./superAdmin/SuperAdminList";
import { SuperAdminCreate } from "./superAdmin/SuperAdminCreate";
import { SuperAdminEdit } from "./superAdmin/SuperAdminEdit";
import { SuperAdminShow } from "./superAdmin/SuperAdminShow";
import { FacilityList } from "./facility/FacilityList";
import { FacilityCreate } from "./facility/FacilityCreate";
import { FacilityEdit } from "./facility/FacilityEdit";
import { FacilityShow } from "./facility/FacilityShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"hehehe"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Doctor"
          list={DoctorList}
          edit={DoctorEdit}
          create={DoctorCreate}
          show={DoctorShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="Accountant"
          list={AccountantList}
          edit={AccountantEdit}
          create={AccountantCreate}
          show={AccountantShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="FacilityAdmin"
          list={FacilityAdminList}
          edit={FacilityAdminEdit}
          create={FacilityAdminCreate}
          show={FacilityAdminShow}
        />
        <Resource
          name="SuperAdmin"
          list={SuperAdminList}
          edit={SuperAdminEdit}
          create={SuperAdminCreate}
          show={SuperAdminShow}
        />
        <Resource
          name="Facility"
          list={FacilityList}
          edit={FacilityEdit}
          create={FacilityCreate}
          show={FacilityShow}
        />
      </Admin>
    </div>
  );
};

export default App;
