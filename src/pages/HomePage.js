import React from "react";
import { useContacts } from "../context/ContactsContext";
import ContactCard from "../components/ContactCard";

const HomePage = () => {
  const { contacts, deleteContact } = useContacts();

  return (
    <div className="home-page">
      <h1 className="page-title">All Contacts</h1>

      {contacts.length === 0 ? (
        <p className="empty-message">No contacts available. Add a new one!</p>
      ) : (
        <div className="contacts-grid">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onDelete={deleteContact}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
