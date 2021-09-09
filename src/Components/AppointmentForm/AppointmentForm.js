import React from "react";
import { ContactPicker } from "../ContactPicker/ContactPicker";
import PropTypes from "prop-types";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleContactChange = (e) => {
    setContact(e.target.value); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        name="Appointment Title"
        placeholder="Appointment Title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        name="date"
        min={getTodayString()}
        id="date"
        required
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        name="time"
        id="time"
        required
        onChange={(e) => setTime(e.target.value)}
      />
      <ContactPicker contacts={contacts} handleContactChange={handleContactChange}/>
      <input type="submit" value="Create Appointment" />
    </form>
  );
};

AppointmentForm.propTypes = {
contacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  contact: PropTypes.string,
  setContact: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
