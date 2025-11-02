import React, { useState } from "react";
import { useContacts } from "../context/ContactsContext";
import { FaSearch, FaUserAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const SearchPage = () => {
  const { contacts } = useContacts();
  const [query, setQuery] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase()) ||
      contact.email.toLowerCase().includes(query.toLowerCase()) ||
      contact.phone.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <h1 className="page-title">Search Contacts</h1>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by name, email, or phone..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="contacts-grid">
        {query && filteredContacts.length === 0 && (
          <p className="empty-message">No contacts found </p>
        )}

        {filteredContacts.map((contact) => (
          <div key={contact.id} className="contact-card animated-card">
            <div className="contact-info">
              <div className="contact-header">
                <FaUserAlt className="contact-icon user" />
                <h3>{contact.name}</h3>
              </div>
              <p>
                <FaEnvelope className="inline-icon" /> {contact.email}
              </p>
              <p>
                <FaPhoneAlt className="inline-icon" /> {contact.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
