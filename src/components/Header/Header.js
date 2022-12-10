import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, NavDropdown, Col, Row, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"
import { Link } from "react-router-dom"
import Toggle from '../../Toggle.js'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="nav-container">

        <Navbar className="navBar" expand="lg" variant="dark">
          <Row className='nav'>
            <Col xs={4} md={2} lg={2}>
              <Navbar.Brand as={Link} to="/home">Kreek</Navbar.Brand>
            </Col>

            <Col xs={4} md={8} lg={8}>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/documentation">Documentation</Nav.Link>
                <Nav.Link as={Link} to="/community">Community</Nav.Link>
                <Nav.Link as={Link} to="/stat">Stat</Nav.Link>
              </Nav>
            </Col>
            <Col xs={4} md={2} lg={2}>
              <Toggle togClass={this.props.togClass} setTogClass={this.props.setTogClass}/>
            </Col>
          </Row>
        </Navbar>

      </Container>
    );
  }
}
