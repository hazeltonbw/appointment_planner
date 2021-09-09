import React, { useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import "./App.css";

import { AppointmentsPage } from "./Containers/AppointmentsPage/AppointmentsPage";
import { ContactsPage } from "./Containers/ContactsPage/ContactsPage";

function App() {
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email,
    };

    setContacts((prev) => [...prev, newContact]);
  };

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
    };

    setAppointments((prev) => [...prev, newAppointment]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
