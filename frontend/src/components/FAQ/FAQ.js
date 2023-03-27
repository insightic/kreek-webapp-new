import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button, Card, Form, Accordion} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQ.css";
import { Helmet } from 'react-helmet';
import * as Icon from 'react-bootstrap-icons';
import banner from '../../assets/faqbgimg.png'

export default class FAQ extends React.Component {
  render() {
    return (
        <Container className="join-us">
        <Helmet>
            <title>FAQ | Kreek</title>
        </Helmet>

        <Container className='banner' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1) 10%,rgba(255,255,255,0.1) 100%), url(${banner})`, backgroundSize: 'cover', backgroundPosition:'0% 0%'}}>
        
        
        <Row className="gradient-custom">
          <Col xs={2} md={3} lg={4} className="left-col">
            <Container style={{ marginTop: '50px', marginLeft: '10px'}}>
              {/* <Icon fas icon="shipping-fast text-white" size="3x" /> */}
              <h4 style={{color:'white'}}>Welcome</h4>
              <p className="white-text">You are 30 seconds away from sending your question!</p>
            </Container>
            <Container className="text-center">
              <a href='#faq' className="nav-button">View FAQ</a>
            </Container>
          </Col>
          <Col xs={10} md={9} lg={8} className="right-col">
            <Card className="card-custom">
                <Container>
                  Send a Question
                </Container>

                <Form>
                  <Row className="right-col-row">
                    <Col style={{padding:'0px'}}>
                      <input placeholder='First Name' name='firstname' type='text' style={{width:'15vw'}}/>
                    </Col>
                    <Col style={{padding:'0px'}}>
                      <input placeholder='Last Name' name='lastname' type='text' style={{width:'15vw'}}/>
                    </Col>
                  </Row>
                  <Row className="right-col-row">
                    <Col>
                      <input placeholder='Email' name='email' type='text' style={{width:'85%'}} />
                    </Col>
                  </Row>
                  <Row className="right-col-row">
                    <Col>
                      <input placeholder='Question' label='question' type='text' style={{height:'25vh', width:'85%'}}/>
                    </Col>
                  </Row>

                  <Container className="float-end">
                    <Button rounded style={{backgroundColor: '#0062CC'}}>Submit</Button>
                  </Container>
                </Form>
            </Card>
          </Col>
        </Row>
        </Container>
        
        <Container id='faq' className="faq-questions">
            Frequently Asked Quesstions
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Question #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Question #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Question #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </Container>


        </Container>
    );
  }
}