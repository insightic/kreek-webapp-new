import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button, Card, Form, Accordion} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Helmet } from 'react-helmet';
import * as Icon from 'react-bootstrap-icons';
import banner from '../../assets/faqbgimg.png'

export default class Login extends React.Component {
  render() {
    return (
        <Container className="login">
        <Helmet>
            <title>Login | Kreek</title>
        </Helmet>

        <Container className='login-banner' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1) 10%,rgba(255,255,255,0.1) 100%), url(${banner})`, backgroundSize: 'cover', backgroundPosition:'0% 0%'}}>
          <h2>Login</h2>
          <p>Login and Start Your Investment Joruney</p>
          <Button>Login with Kreek Wallet</Button>
          <Button>Login with MetaMask</Button>
        </Container>
        


        </Container>
    );
  }
}