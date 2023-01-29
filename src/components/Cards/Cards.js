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

        {open && <Container className='cardDetails'>
          <Container>
            <CardSlot cardImg='./new_card1.png' onclick = {() => setOpen(!open)} />
            <Container style={{textAlign:'left', margin:'20px 0px', fontSize:'18px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius nisi vel volutpat facilisis. Nulla blandit, lectus sit amet pulvinar molestie, arcu est facilisis felis, id convallis ligula arcu vitae sapien. Integer blandit auctor molestie. Donec ullamcorper hendrerit velit, at sodales sem varius nec. Curabitur tempor ipsum tortor, sit amet feugiat orci feugiat a. Etiam et ultrices risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales pharetra urna, nec gravida nunc feugiat eget. Nulla facilisi.
              <br/>
              <br/>
              Sed ac velit in sem aliquam vestibulum ut id tortor. Fusce luctus felis a magna sagittis, non venenatis diam fringilla. Phasellus tristique vestibulum nisl, vestibulum rhoncus lorem laoreet a. Praesent aliquet nunc malesuada urna fringilla, in cursus augue placerat. Donec eget gravida quam. Quisque rutrum arcu sit amet neque placerat, eget pharetra mi laoreet. Praesent nisi elit, convallis id nisi et, efficitur ultrices ipsum. Phasellus tempor, velit at congue aliquam, tortor erat pulvinar risus, dictum commodo velit neque et nisl. Praesent a nunc nisi. Etiam porta, metus id viverra aliquet, justo lacus semper mauris, a lacinia enim leo vel urna. Sed neque sem, cursus vel purus id, dictum consectetur lectus.
            </Container>

          </Container>
        </Container>
        }

        <Row xs={4} sm={4} md={4} lg={4}>
            <CardSlot cardImg='./new_card1.png' onclick = {() => setOpen(!open)} />
            <CardSlot cardImg='./new_card2.png' onclick = {() => setOpen(!open)}/>
            <CardSlot cardImg='./new_card3.png' onclick = {() => setOpen(!open)}/>
            <CardSlot cardImg='./new_card1.png' onclick = {() => setOpen(!open)}/>
            <CardSlot cardImg='./new_card2.png' onclick = {() => setOpen(!open)}/>
            <CardSlot cardImg='./new_card3.png' onclick = {() => setOpen(!open)}/>
            <CardSlot cardImg='./new_card1.png' onclick = {() => setOpen(!open)}/>
            <CardSlot cardImg='./new_card2.png' onclick = {() => setOpen(!open)}/>
            <CardSlot cardImg='./new_card3.png' onclick = {() => setOpen(!open)}/>
          </Row>




        </Container>
        


        </Container>
    );
}

function CardSlot(props) {
  return (
    <Col className='cardSlot'>
        <img src={props.cardImg} role="button" onClick={props.onclick} />
    </Col>

  )
}

export default Cards