import { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditList({ handleEditClose, editShow, handleSave, editContact }) {
  const [editedContact, setEditedContact] = useState(editContact);
  function editImage(e) {
    let newObj = {
      ...editedContact,
      image: e.target.value,
    };
    setEditedContact(newObj);
  }
  function editName(e) {
    let newObj = {
      ...editedContact,
      name: e.target.value,
    };
    setEditedContact(newObj);
  }
  function editSurname(e) {
    let newObj = {
      ...editedContact,
      surname: e.target.value,
    };
    setEditedContact(newObj);
  }
  function editNumber(e) {
    let newObj = {
      ...editedContact,
      number: e.target.value,
    };
    setEditedContact(newObj);
  }
  function editEmail(e) {
    let newObj = {
      ...editedContact,
      email: e.target.value,
    };
    setEditedContact(newObj);
  }
  console.log(editedContact);

  return (
    <>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={editedContact.image}
              onChange={editImage}
              className="my-3"
              placeholder="Image"
            />
            <FormControl
              value={editedContact.name}
              onChange={editName}
              className="my-3"
              placeholder="Title"
            />
            <FormControl
              value={editedContact.surname}
              onChange={editSurname}
              className="my-3"
              placeholder="Description"
            />
            <FormControl
              value={editedContact.number}
              onChange={editNumber}
              className="my-3"
              placeholder="Price"
            />
            <FormControl
              value={editedContact.email}
              onChange={editEmail}
              className="my-3"
              placeholder="Image"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button onClick={() => handleSave(editedContact)} variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditList;
