import React, { useState } from "react";
import ContactBookAdd from "./components/ContactBookAdd/ContactBookAdd";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNavbar from "./components/Nvabar/HeaderNavbar";
import ContactList from "./components/ContactList/ContactList";
import EditList from "./components/EditList/EditList";

const App = () => {
  // !modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // !modal

  // !creat
  const [contactBook, setcontactBook] = useState([]);
  function handleAddContact(newObj) {
    let newContact = [...contactBook];
    newContact.push(newObj);
    setcontactBook(newContact);
  }
  // !creat

  // !delete
  function deleteContact(id) {
    let newObj = contactBook.filter((item) => item.id !== id);
    setcontactBook(newObj);
  }
  // !delete

  // !edit
  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const [editContact, setEditContact] = useState({});

  function handleEdit(id) {
    let obj = contactBook.filter((item) => item.id == id);
    setEditContact(obj[0]);
    handleEditShow();
  }

  function handleSave(editedObj) {
    let newProducts = contactBook.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      }
      return item;
    });

    setcontactBook(newProducts);
    setEditShow(false);
  }

  return (
    <div className="bc-red">
      <HeaderNavbar handleShow={handleShow} />

      <ContactBookAdd
        handleClose={handleClose}
        handleAddContact={handleAddContact}
        show={show}
        handleEditShow={handleEditShow}
      />
      <ContactList
        deleteContact={deleteContact}
        contactBook={contactBook}
        handleEdit={handleEdit}
      />
      {editShow && (
        <EditList
          editShow={editShow}
          handleSave={handleSave}
          handleEditClose={handleEditClose}
          editContact={editContact}
        />
      )}
    </div>
  );
};

export default App;
