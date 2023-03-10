import { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ContactBookAdd({ show, handleAddContact, handleClose }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  function handleAdd() {
    if (!name || !surname || !number || !email || !image) {
      prompt("Заполните поля");
      return;
    }
    let newObj = {
      image,
      name,
      surname,
      number,
      email,

      id: Date.now(),
    };
    console.log(newObj);
    handleAddContact(newObj);
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              onChange={(e) => setImage(e.target.value)}
              className="my-3"
              placeholder="image"
            />
            <FormControl
              onChange={(e) => setName(e.target.value)}
              className="my-3"
              placeholder="Name"
            />
            <FormControl
              onChange={(e) => setSurname(e.target.value)}
              className="my-3"
              placeholder="Surname"
            />
            <FormControl
              onChange={(e) => setNumber(e.target.value)}
              className="my-3"
              placeholder="Number"
            />
            <FormControl
              onChange={(e) => setEmail(e.target.value)}
              className="my-3"
              placeholder="Email"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactBookAdd;
