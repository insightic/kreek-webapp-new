import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, NavDropdown, Col, Row, Container, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"
import { Link } from "react-router-dom"
import logo from "../../assets/new-brand.png"
import Toggle from '../../Toggle.js'
import * as Icon from 'react-bootstrap-icons';



const Header = (props) => {
  const { location } = props;

  
    return (
      <Container className="nav-container">
          {/* <div className='sidenav-padding'>
          </div> */}
        Smart Contract Compliance Validation
        {/* <Navbar className="d-xs-none navBar" expand="lg" variant="dark">
          <Row className='nav'>
            <Col xs={4} md={8} lg={8}>
                <a className='title' href='/'>Smart Contract Compliance Validation</a>
            </Col>
            <Col xs={4} md={1} lg={2}>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <Navbar.Brand as={Link} className="logo" to="/home">
                <img src={logo} className="logo"/>
              </Navbar.Brand>
            </Col>
          </Row>
          <Toggle togClass={props.togClass} setTogClass={props.setTogClass}/>

        </Navbar> */}

      </Container>
    );
  }

export default Header