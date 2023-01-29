import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button, Card, Form, Accordion, Collapse} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import { Helmet } from 'react-helmet';
import * as Icon from 'react-bootstrap-icons';
import banner from '../../assets/faqbgimg.png'

const Cards = () => {
  const [open, setOpen] = useState(false);
    return (
        <Container className="cards">
        <Helmet>
            <title>Cards | Kreek</title>
        </Helmet>
        <Container style={{ height:'80px'}}>
        </Container>
        <Container className='cards-content'>

          <Row xs={4} sm={4} md={4} lg={4}>
            <CardSlot cardImg='./new_card1.png' />
            <CardSlot cardImg='./new_card2.png' />
            <CardSlot cardImg='./new_card3.png' />
            <CardSlot cardImg='./new_card1.png' />
            <CardSlot cardImg='./new_card2.png' />
            <CardSlot cardImg='./new_card3.png' />
            <CardSlot cardImg='./new_card1.png' />
            <CardSlot cardImg='./new_card2.png' />
            <CardSlot cardImg='./new_card3.png' />

          </Row>

        </Container>
        


        </Container>
    );
}

function CardSlot(props) {
  return (
    <Container className='cardSlot'>
      <img src={props.cardImg} />
    </Container>

  )
}

export default Cards