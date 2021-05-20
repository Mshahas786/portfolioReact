import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  // Nav,
  // Navbar,
  // Button,
  // NavDropdown,
  // Form,
  // FormControl,
  // Card,
  // Row,
  // Jumbotron,
  Carousel,
  // Container,
  // Col
} from "react-bootstrap";

class Main extends Component {
  render() {
    return (
<Carousel style={{ height:"90vh"}} >
  <Carousel.Item interval={100}>
    <img
      className=" w-100"
      src="01.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className=" w-100"
      src="02.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="03.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    );
  }
}

export default Main;