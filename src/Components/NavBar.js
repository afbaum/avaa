import React from 'react'
import { Nav, NavDropdown, Container, Button, Col, Row } from 'react-bootstrap'
import NavBar from 'react-bootstrap/NavBar'

const MyNavbar = () => {
  return (
    <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Col md={6}>
          <NavBar.Brand href='#'>AVAA</NavBar.Brand>
          <NavBar.Toggle aria-controls="responsive-navbar-nav" />
          <NavBar.Collapse id="responsive-navbar-nav">
            <Nav className="me.auto">
              <Nav.Link href="#Audiologists">Audiologists</Nav.Link>
              <Nav.Link href="#Students">Students</Nav.Link>
              <Nav.Link href="AboutAVAA">About AVAA</Nav.Link>
            </Nav>
          </NavBar.Collapse>
        </Col>
        <Col md={{ span: 3, offset: 4 }}>
          <Button className="me-2" variant="primary">Join Now</Button>
          <Button variant="primary">Log In</Button>
        </Col>
      </Container>
    </NavBar>
  );
};

<Row>
  <Col md={4}>md=4</Col>
  <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
</Row>


export default MyNavbar
