import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number ex: (5559871234)"
          pattern="^[1-9][0-9]{2}[1-9][0-9]{2}[0-9]{4}$"
          maxLength="10"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" name="submit" id="submit" value="Add Contact" />
      </form>
    </div>
  );
};
