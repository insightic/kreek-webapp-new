import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Button, OverlayTrigger, Tooltip, ToggleButton, Navbar, NavDropdown, Col, Row, Container, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidenav.css"
import { Link } from "react-router-dom"
import user from "../../assets/user.png"
import Toggle from '../../Toggle.js'
import * as Icon from 'react-bootstrap-icons';
import axios from "axios";


const Sidenav = (props) => {
  const { location } = props;
  let activeStyle = {
    textDecoration: "underline",
  };

  function logMeOut(event) {
    axios({
      method: "PUT",
      url:"/logout",
      headers:{
        "authorization": props.token
       }
    })
    .then((response) => {
      props.setToken(undefined)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }

  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip" style={{position:"fixed"}}>
      {text}
    </Tooltip>
  );

  
    return (
      <div className='sidenav-container'>
        <OverlayTrigger 
        placement="right" 
        delay={{ show: 10, hide: 10 }} 
        overlay={renderTooltip("User Profile")}>
          <img src={user} className="user"/>
        </OverlayTrigger>

        {/* <Nav.Link className="nav-icon-container" as={Link} active={location.pathname=='/home'} to="/home"><Icon.Search className="nav-icon"/> </Nav.Link> */}
        <Nav.Link className="nav-icon-container" as={Link} to="/new-project">
          <OverlayTrigger 
          placement="right" 
          delay={{ show: 10, hide: 10 }} 
          overlay={renderTooltip("Search")}>
            <Icon.Search className="nav-icon"/> 
          </OverlayTrigger>

        </Nav.Link>

        {/* <Nav activeKey={location.pathname} className="mr-auto"> */}
        <Nav className="mr-auto">
          <Nav.Link className="nav-icon-container" as={Link} to="/home">
            <OverlayTrigger placement="right" delay={{ show: 10, hide: 10 }} overlay={renderTooltip("Home")}>
              <Icon.House className="nav-icon"/>
            </OverlayTrigger>
          </Nav.Link>

          <Nav.Link className="nav-icon-container" as={Link} to="/project-list">
            <OverlayTrigger placement="right" delay={{ show: 10, hide: 10 }} overlay={renderTooltip("Notification")}>
              <Icon.Bell className="nav-icon"/>
            </OverlayTrigger>
          </Nav.Link>
          <Nav.Link className="nav-icon-container" as={Link} to="/summary">
            <OverlayTrigger placement="right" delay={{ show: 10, hide: 10 }} overlay={renderTooltip("Help")}>
              <Icon.CardText className="nav-icon"/>
            </OverlayTrigger>
          </Nav.Link>
          <Nav.Link className="nav-icon-container" as={Link} to="/home">
            <OverlayTrigger placement="right" delay={{ show: 10, hide: 10 }} overlay={renderTooltip("Setting")}>
              <Icon.Gear className="nav-icon"/>
            </OverlayTrigger>
          </Nav.Link>
        </Nav>

        <div className='nav-lower'>
        <Nav.Link className="nav-icon-container" as={Button} onClick={logMeOut}>
          <OverlayTrigger placement="right" delay={{ show: 10, hide: 10 }} overlay={renderTooltip("Log out")}>
            <Icon.DoorOpen className="nav-icon"/>
          </OverlayTrigger>
        </Nav.Link>
          {/* <Toggle togClass={props.togClass} setTogClass={props.setTogClass}/> */}
        </div>
      </div>
    );
  }
  

export default Sidenav