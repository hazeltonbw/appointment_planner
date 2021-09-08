import React from "react";

const duplicateStyle = {
  border: "2px solid red",
};

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  duplicate,
}) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2
          style={{
            display: duplicate ? "block" : "none",
            color: "red",
            marginBottom: 0,
          }}
        >
          Duplicate contact found!
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="Name"
          value={name}
          style={duplicate ? duplicateStyle : {}}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="input-error"></span>
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
