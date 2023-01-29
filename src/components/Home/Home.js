import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, CardDeck, Jumbotron, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Helmet } from 'react-helmet';
import banner from '../../assets/banner.jpg'
import logo from "../../assets/kreek_cooltext.png"
import card1 from "../../assets/screen1.png"
import card2 from "../../assets/screen2.png"
import card3 from "../../assets/screen3.png"
import card4 from "../../assets/screen3.png"
import banner1 from '../../assets/aboutbgimg.jpg'
import team from '../../assets/team.png'


export default class Home extends React.Component {
  render() {
    return (
        <Container className="home">
        <Helmet>
            <title>Home | Kreek</title>
            <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " />
        </Helmet>

        <Container className='banner' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1) 10%,rgba(255,255,255,0.05) 100%), url(${banner})`, backgroundSize: 'cover', backgroundPosition:'0% -30%'}}>
        <Row style={{width:'90vw'}}>
        <Col className='home-left-col'>

            <h2>
                Dollar Cost Averaging 
                <br />
                with 
                <br />
                Automatic Investment Plan
            </h2>
            <p>
             for NFT and Crpyto Currency
            </p>
            <img src={logo} style={{width:'150px', marginBottom:'2rem'}}/>
            <Button style={{width:'20rem'}}>Join Discord to Beta Test NOW!!</Button>

        </Col>

        <Col className='home-right-col'>
        
        </Col>
        </Row>
        </Container>

        <Container className='home-content1'>
            <h2>Experience <span style={{'WebkitBackgroundClip':'text'}}>Kreek</span></h2>
            <Row style={{width:'unset'}}>
                <Col className='home-content1-col'>
                    <h3>Invest</h3>
                    <img src={card1} style={{width:'200px', alignSelf:'center', objectFit:'cover'}}/>
                </Col>
                <Col className='home-content1-col'>
                    <h3>Explore</h3>
                    <img src={card2} style={{width:'200px', alignSelf:'center'}}/>
                </Col>
                <Col className='home-content1-col'>
                    <h3>Read</h3>
                    <img src={card3} style={{width:'200px', alignSelf:'center'}}/>
                </Col>
                <Col className='home-content1-col'>
                    <h3>Earn</h3>
                    <img src={card4} style={{width:'200px', alignSelf:'center'}}/>
                </Col>
            </Row>
        </Container>

        <Container className='banner' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.1) 100%), url(${banner1})`, backgroundSize: 'cover', backgroundPosition:'0% 10%'}}>
        <img src={team} style={{paddingTop:'100px', width:'90%'}}/>            

        </Container>


        </Container>
    );
  }
}