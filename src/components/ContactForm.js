import React, { useState } from "react";

const ContactForm = ({ onUpdate }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
    onUpdate({ ...contact, [name]: value }); // Update parent component
  };

  return (
    <form>
      <h2>Contact Information</h2>
      <label>
        Name:
        <input type="text" name="name" value={contact.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={contact.email} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={contact.phone} onChange={handleChange} />
      </label>
      <label>
        Address:
        <textarea name="address" value={contact.address} onChange={handleChange} />
      </label>
    </form>
  );
};

export default ContactForm;
