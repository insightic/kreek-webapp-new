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
            {/* <Row className="footer-top">
            <Col className="footer-width">
                <Icon.Discord className="footer-icon"/> 
                <span>Discord</span>
            </Col>

            <Col className="footer-width">
                <Icon.Medium className="footer-icon"/> 
                <span>Medium</span>
            </Col>

            <Col className="footer-width">
                <Icon.Twitter className="footer-icon"/> 
                <span>Twitter</span>
            </Col>

            <Col className="footer-width">
                <Icon.Github className="footer-icon"/> 
                <span>Github</span>
            </Col>

            <Col className="footer-width">
                <Icon.FiletypeDoc className="footer-icon"/> 
                <span>Docs</span>
            </Col>

            </Row> */}

            <Row className="footer-bottom" xs={12} md={10} lg={8}>
                <span>©2023 Kreek: All Riight Reserved.</span>
            </Row>
        </Col>
        </Container>
    );
  }
}

