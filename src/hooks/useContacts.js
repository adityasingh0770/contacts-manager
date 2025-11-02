import { useState, useEffect } from "react";
import contactsData from "../public/contacts.json";

export const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const addContact = (newContact) => {
    const updated = [...contacts, { id: Date.now(), ...newContact }];
    setContacts(updated);
  };

  const deleteContact = (id) => {
    const updated = contacts.filter((contact) => contact.id !== id);
    setContacts(updated);
  };

  const editContact = (updatedContact) => {
    const updated = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updated);
    setSelectedContact(null);
  };

  return {
    contacts,
    addContact,
    deleteContact,
    editContact,
    selectedContact,
    setSelectedContact,
  };
};
