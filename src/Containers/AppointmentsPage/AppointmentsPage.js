import React, { useState } from "react";
import { AppointmentForm } from "../../Components/AppointmentForm/AppointmentForm";
import { TileList } from "../../Components/TileList/TileList";
import PropTypes from "prop-types";

export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    //const addAppointment = (title, contact, date, time) => {
    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          contacts={contacts}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList inst="Appointment" tiles={appointments} />
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  addAppointment: PropTypes.func.isRequired,
  appointments: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired,
};
