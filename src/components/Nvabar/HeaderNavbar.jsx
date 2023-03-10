import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./HeaderNavbar.css";

function HeaderNavbar({ handleShow }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>

        <button onClick={handleShow} href="" className="button">
          <span className="button__line button__line--top"></span>
          <span className="button__line button__line--right"></span>
          <span className="button__line button__line--bottom"></span>
          <span
            onClick={handleShow}
            className="button__line button__line--left"
          ></span>
          add contact
        </button>

        {/* <Button variant="outline-success" onClick={handleShow}>
          Add Contact
        </Button> */}
      </Navbar>
    </div>
  );
}

export default HeaderNavbar;
