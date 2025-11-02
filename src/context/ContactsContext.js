import React, { createContext, useContext, useEffect, useState, useRef } from "react";

const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [deletedContacts, setDeletedContacts] = useState([]);
  const hasLoaded = useRef(false); 
  
  useEffect(() => {
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    try {
      const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
      const storedDeleted = JSON.parse(localStorage.getItem("deletedContacts")) || [];

      if (Array.isArray(storedContacts)) setContacts(storedContacts);
      if (Array.isArray(storedDeleted)) setDeletedContacts(storedDeleted);

      console.log(" Loaded from localStorage:", storedContacts);
    } catch (err) {
      console.error(" Error reading localStorage:", err);
    }
  }, []);

  
  useEffect(() => {
    if (!hasLoaded.current) return; 
    localStorage.setItem("contacts", JSON.stringify(contacts));
    localStorage.setItem("deletedContacts", JSON.stringify(deletedContacts));
  }, [contacts, deletedContacts]);

  
  const addContact = (contact) => {
    const newContact = { id: Date.now(), ...contact };
    setContacts((prev) => [...prev, newContact]);
  };

  
  const deleteContact = (id) => {
    setContacts((prev) => {
      const contactToDelete = prev.find((c) => c.id === id);
      if (contactToDelete) {
        setDeletedContacts((deletedPrev) => [...deletedPrev, contactToDelete]);
      }
      return prev.filter((c) => c.id !== id);
    });
  };

  
  const restoreContact = (id) => {
    setDeletedContacts((prev) => {
      const contactToRestore = prev.find((c) => c.id === id);
      if (contactToRestore) {
        setContacts((contactsPrev) => [...contactsPrev, contactToRestore]);
      }
      return prev.filter((c) => c.id !== id);
    });
  };

  
  const permanentlyDelete = (id) => {
    setDeletedContacts((prev) => prev.filter((c) => c.id !== id));
  };

  
  const editContact = (updated) => {
    setContacts((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        deletedContacts,
        addContact,
        deleteContact,
        restoreContact,
        permanentlyDelete,
        editContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);
