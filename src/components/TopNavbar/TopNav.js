import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNav() {
  return (
    <Navbar collapseOnSelect expand="md" style={{ backgroundColor: '#aeaeae91'}}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/designs">Designs</Nav.Link>
            <Nav.Link href="/sets">Sets</Nav.Link>
            <Nav.Link href="/accessories">Accessories</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{ backgroundColor: 'transparent',  border: '1px solid black',  color: "#000000"}}>submit</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;