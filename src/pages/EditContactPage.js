import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContacts } from "../context/ContactsContext";

const EditContactPage = () => {
  const { id } = useParams();
  const { contacts, editContact } = useContacts();
  const navigate = useNavigate();

  const contactToEdit = contacts.find((c) => c.id === Number(id));

  const [form, setForm] = useState(contactToEdit || { name: "", email: "", phone: "" });

  useEffect(() => {
    if (!contactToEdit) navigate("/");
  }, [contactToEdit, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editContact(form);
    navigate("/");
  };

  return (
    <div className="form-card">
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <button type="submit" className="btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditContactPage;
