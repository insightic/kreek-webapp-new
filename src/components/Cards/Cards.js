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
  const [card, setCard] = useState('')

  const handleClick = (currCard) => {
    if (currCard == card) {
      setOpen(false)
    } else {
      setCard(currCard)
      setOpen(true)
    }
    setTimeout(()=>
    {
      if (currCard == card) {
        setCard('')
      }
    }, 1000
    )

  }

    return (
        <Container className="cards">
        <Helmet>
            <title>Cards | Kreek</title>
        </Helmet>
        <Container style={{ height:'80px'}}>
        </Container>
 
        <Container className='cards-content'>
          <Container className={open ? 'cardDetails-open' : 'cardDetails'}>
          {card== '' && <Container>Please select a card.</Container>}
            {card!= '' && <CardSlot cardImg={card} onclick = {() => setOpen(!open)} />}
            <Container style={{textAlign:'left', margin:'20px 0px', fontSize:'18px', width:'25vw'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius nisi vel volutpat facilisis. Nulla blandit, lectus sit amet pulvinar molestie, arcu est facilisis felis, id convallis ligula arcu vitae sapien. Integer blandit auctor molestie. Donec ullamcorper hendrerit velit, at sodales sem varius nec. Curabitur tempor ipsum tortor, sit amet feugiat orci feugiat a. Etiam et ultrices risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales pharetra urna, nec gravida nunc feugiat eget. Nulla facilisi.
            </Container>
          </Container>

        <Container className='cards-collection'>
        <Row xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <CardSlot cardImg='./new_card1.png' onclick = {() => handleClick('./new_card1.png')} />
            <CardSlot cardImg='./new_card2.png' onclick = {() => handleClick('./new_card2.png')}/>
            <CardSlot cardImg='./new_card3.png' onclick = {() => handleClick('./new_card3.png')}/>
            <CardSlot cardImg='./new_card1.png' onclick = {() => handleClick('./new_card1.png')}/>
            <CardSlot cardImg='./new_card2.png' onclick = {() => handleClick('./new_card2.png')}/>
            <CardSlot cardImg='./new_card3.png' onclick = {() => handleClick('./new_card3.png')}/>
            <CardSlot cardImg='./new_card1.png' onclick = {() => handleClick('./new_card1.png')}/>
            <CardSlot cardImg='./new_card2.png' onclick = {() => handleClick('./new_card2.png')}/>
            <CardSlot cardImg='./new_card3.png' onclick = {() => handleClick('./new_card3.png')}/>
            <CardSlot cardImg='./new_card1.png' onclick = {() => handleClick('./new_card1.png')}/>
            <CardSlot cardImg='./new_card2.png' onclick = {() => handleClick('./new_card2.png')}/>
            <CardSlot cardImg='./new_card3.png' onclick = {() => handleClick('./new_card3.png')}/>
        </Row>
        </Container>


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