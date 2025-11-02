import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../context/ContactsContext";

const AddContactPage = () => {
  const { addContact } = useContacts();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return alert("All fields are required!");
    addContact(form);
    navigate("/");
  };

  return (
    <div className="form-card">
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-primary">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContactPage;
