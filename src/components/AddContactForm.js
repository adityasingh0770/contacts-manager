import React, { useState, useEffect } from "react";

const AddContactForm = ({ onAdd, onEdit, selectedContact }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (selectedContact) {
      setFormData(selectedContact);
    } else {
      setFormData({ name: "", email: "", phone: "" });
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedContact) {
      onEdit(formData);
    } else {
      onAdd(formData);
    }
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 bg-gray-50 rounded-lg shadow-sm mb-4">
      <h2 className="text-xl font-bold">
        {selectedContact ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        required
      />
      <button
        type="submit"
        className={`w-full py-2 rounded text-white ${
          selectedContact ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {selectedContact ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
};

export default AddContactForm;
