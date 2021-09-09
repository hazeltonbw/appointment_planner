import React from "react";
import PropTypes from "prop-types";

export const ContactPicker = ({contacts, handleContactChange}) => {
  return (
    <select name="contact-list" onChange={handleContactChange} required>
      <option value="">Choose contact...</option>
      {
        contacts.map((contact, index) => {
          return <option key={contact.name} value={contact.name}>{contact.name}</option>
        })
      }
    </select>
  );
};

ContactPicker.propTypes = {
  handleContactChange: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
}
