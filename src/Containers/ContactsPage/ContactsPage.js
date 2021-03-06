import React, { useState, useEffect } from "react";
import { ContactForm } from "../../Components/ContactForm/ContactForm";
import { TileList } from "../../Components/TileList/TileList";
import PropTypes from "prop-types";

// props destructuring { contacts, addContact }

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const dupe =
      contacts.find((contact) => contact.name === name) === undefined
        ? false
        : true;
    setDuplicate(dupe);
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          duplicate={duplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList inst="Contact" tiles={contacts} />
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
