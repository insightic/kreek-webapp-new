import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, ListGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.css";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom"

export default class Footer extends React.Component {
  render() {
    return (
        <Container fluid className="footer">
        <Col>
            <Row className="footer-top">
                <Col xs={5} md={6} lg={7} className="footer-brand">KREEK</Col>
                <Col xs={7} md={6} lg={5} className='footer-logoGroup'>
                    <Icon.Discord className="footer-icon"/>
                    <Icon.Github className="footer-icon"/>
                    <Icon.FiletypeDoc className="footer-icon"/>
                </Col>
            {/* <Col xs={3} md={2} lg={1.25} className="footer-width">
                <Icon.Discord className="footer-icon"/> Discord
            </Col>

            <Col xs={3} md={2} lg={1.25} className="footer-width">
                <Icon.Github className="footer-icon"/> Github
            </Col>

            <Col xs={3} md={2} lg={1.25} className="footer-width">
                <Icon.FiletypeDoc className="footer-icon"/> Docs
            </Col> */}

            </Row>

            <Row className="footer-bottom" xs={12} md={10} lg={8}>
                <span>©2023 KREEK: ALL RIGHT RESERVED.</span>
            </Row>
        </Col>
        </Container>
    );
  }
}

