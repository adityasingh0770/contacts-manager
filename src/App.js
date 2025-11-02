import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddContactPage from "./pages/AddContactPage";
import EditContactPage from "./pages/EditContactPage";
import SearchPage from "./pages/SearchPage";
import DeletedContactsPage from "./pages/DeletedContactsPage"; 
import { ContactsProvider } from "./context/ContactsContext";
import "./App.css"; 

const App = () => {
  return (
    <ContactsProvider>
      <Router>
        <header className="header-nav">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add Contact</Link>
            <Link to="/search">Search</Link>
            <Link to="/deleted">Deleted Contacts</Link> 
          </nav>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddContactPage />} />
            <Route path="/edit/:id" element={<EditContactPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/deleted" element={<DeletedContactsPage />} /> 
          </Routes>
        </main>
      </Router>
    </ContactsProvider>
  );
};

export default App;
