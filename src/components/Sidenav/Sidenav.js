import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, ToggleButton, Navbar, NavDropdown, Col, Row, Container, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidenav.css"
import { Link } from "react-router-dom"
import user from "../../assets/user.png"
import Toggle from '../../Toggle.js'
import * as Icon from 'react-bootstrap-icons';

const Sidenav = (props) => {
  const { location } = props;
  let activeStyle = {
    textDecoration: "underline",
  };
  
    return (
      <div className='sidenav-container'>
        <img src={user} className="user"/>

        {/* <Nav.Link className="nav-icon-container" as={Link} active={location.pathname=='/home'} to="/home"><Icon.Search className="nav-icon"/> </Nav.Link> */}
        <Nav.Link className="nav-icon-container" as={Link} to="/home"><Icon.Search className="nav-icon"/> </Nav.Link>

        {/* <Nav activeKey={location.pathname} className="mr-auto"> */}
        <Nav className="mr-auto">
          <Nav.Link className="nav-icon-container" as={Link} to="/home"><Icon.House className="nav-icon"/></Nav.Link>
          <Nav.Link className="nav-icon-container" as={Link} to="/home"><Icon.FileBarGraph className="nav-icon"/></Nav.Link>
          <Nav.Link className="nav-icon-container" as={Link} to="/home"><Icon.Bell className="nav-icon"/></Nav.Link>
          <Nav.Link className="nav-icon-container" as={Link} to="/home"><Icon.PieChart className="nav-icon"/></Nav.Link>
          <Nav.Link className="nav-icon-container" as={Link} to="/home"><Icon.CardText className="nav-icon"/></Nav.Link>
        </Nav>

        <div className='nav-lower'>
        <Nav.Link className="nav-icon-container" as={Link} to="/home"><Icon.DoorOpen className="nav-icon"/></Nav.Link>
          <Toggle togClass={props.togClass} setTogClass={props.setTogClass}/>
        </div>
      </div>
    );
  }

export default Sidenav