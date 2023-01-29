import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, NavDropdown, Col, Row, Container, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"
import { Link } from "react-router-dom"
import logo from "../../assets/kreek_cooltext3.png"
import Toggle from '../../Toggle.js'
import * as Icon from 'react-bootstrap-icons';


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
              <Navbar.Brand as={Link} to="/home">
                <img src={logo} className="logo"/>
              </Navbar.Brand>
            </Col>

            <Col xs={4} md={8} lg={8}>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/home"><Icon.HouseFill className="nav-icon"/></Nav.Link>
                <Nav.Link as={Link} to="/cards"><Icon.CollectionFill className="nav-icon"/></Nav.Link>
                <Nav.Link as={Link} to="/about"><Icon.MicrosoftTeams className="nav-icon"/></Nav.Link>
                <Nav.Link as={Link} to="/faq"><Icon.SendFill className="nav-icon"/></Nav.Link>
              </Nav>
            </Col>
            <Col xs={4} md={2} lg={2}>
              {/* <Toggle togClass={this.props.togClass} setTogClass={this.props.setTogClass}/> */}
              <a className='loginBtn' href='/login'>Login</a>
            </Col>
          </Row>
        </Navbar>

      </Container>
    );
  }
}
