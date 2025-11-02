import React from "react";
import { useContacts } from "../context/ContactsContext";
import { FaTrashRestore, FaTrashAlt, FaUserAlt } from "react-icons/fa";

const DeletedContactsPage = () => {
  const { deletedContacts, restoreContact, permanentlyDelete } = useContacts();

  return (
    <div className="deleted-page">
      <h1 className="page-title">Deleted Contacts</h1>

      {deletedContacts.length === 0 ? (
        <p className="empty-message">Your recycle bin is empty 🗑️</p>
      ) : (
        <div className="contacts-grid">
          {deletedContacts.map((contact) => (
            <div key={contact.id} className="deleted-card animated-card">
              <div className="contact-info">
                <div className="contact-header">
                  <FaUserAlt className="contact-icon user deleted" />
                  <h3>{contact.name}</h3>
                </div>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>

              <div className="contact-actions">
                <button
                  onClick={() => restoreContact(contact.id)}
                  className="btn-restore"
                >
                  <FaTrashRestore /> Restore
                </button>

                <button
                  onClick={() => permanentlyDelete(contact.id)}
                  className="btn-delete"
                >
                  <FaTrashAlt /> Delete Permanently
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeletedContactsPage;
