import React from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="contact-card animated-card">
      <div className="contact-info">
        <div className="contact-header">
          <FaUser className="contact-icon user" />
          <h3>{contact.name}</h3>
        </div>
        <p><FaEnvelope className="contact-icon" /> {contact.email}</p>
        <p><FaPhoneAlt className="contact-icon" /> {contact.phone}</p>
      </div>

      <div className="contact-actions">
        <Link to={`/edit/${contact.id}`} className="btn-edit">
          <FaEdit /> Edit
        </Link>
        <button onClick={() => onDelete(contact.id)} className="btn-delete">
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
