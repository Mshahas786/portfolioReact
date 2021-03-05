import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="bitcoin.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Muhammed Shahas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#link">Contact</Nav.Link>
              <NavDropdown title="Works" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Websites</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Graphic designs
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
