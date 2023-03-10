import React from "react";
import { Accordion } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./ContactList.css";
import Card from "react-bootstrap/Card";
const ContactList = ({ contactBook, deleteContact, handleEdit }) => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Contact Book</Accordion.Header>
          <Accordion.Body className="acordion-body-contact">
            {contactBook.map((item) => (
              <Card className="container-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="img-contactlist"
                  variant="top"
                  src={item.image}
                />
                <Card.Body className="text-center">
                  <Card.Title className="title-contact-list">
                    {item.name}
                  </Card.Title>
                  <Card.Title className="title-contact-list">
                    {item.surname}
                  </Card.Title>
                  <Card.Title className="title-contact-list">
                    {item.number}
                  </Card.Title>
                  <Card.Title className="title-contact-list">
                    {item.email}
                  </Card.Title>
                  <Button
                    className="w-50 btn-contact-list-edit"
                    variant="primary"
                    onClick={() => deleteContact(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="w-50 btn-contact-list-edit"
                    variant="dark"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ContactList;
