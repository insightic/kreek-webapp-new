import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import { Helmet } from 'react-helmet';
import banner from '../../assets/aboutbgimg.jpg'
import team from '../../assets/team.png'

export default class People extends React.Component {
  render() {
    return (
        <Container className="people">
        <Helmet>
            <title>About | Kreek</title>
        </Helmet>

        <Container className='banner' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.1) 100%), url(${banner})`, backgroundSize: 'cover', backgroundPosition:'0% 10%'}}>
        <img src={team} style={{paddingTop:'100px', width:'90%'}}/>            

        </Container>

        <Container className="people-width">
          <Container style={{textAlign:'left', margin:'20px 0px', fontSize:'18px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius nisi vel volutpat facilisis. Nulla blandit, lectus sit amet pulvinar molestie, arcu est facilisis felis, id convallis ligula arcu vitae sapien. Integer blandit auctor molestie. Donec ullamcorper hendrerit velit, at sodales sem varius nec. Curabitur tempor ipsum tortor, sit amet feugiat orci feugiat a. Etiam et ultrices risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales pharetra urna, nec gravida nunc feugiat eget. Nulla facilisi.
          <br/>
          <br/>
          Sed ac velit in sem aliquam vestibulum ut id tortor. Fusce luctus felis a magna sagittis, non venenatis diam fringilla. Phasellus tristique vestibulum nisl, vestibulum rhoncus lorem laoreet a. Praesent aliquet nunc malesuada urna fringilla, in cursus augue placerat. Donec eget gravida quam. Quisque rutrum arcu sit amet neque placerat, eget pharetra mi laoreet. Praesent nisi elit, convallis id nisi et, efficitur ultrices ipsum. Phasellus tempor, velit at congue aliquam, tortor erat pulvinar risus, dictum commodo velit neque et nisl. Praesent a nunc nisi. Etiam porta, metus id viverra aliquet, justo lacus semper mauris, a lacinia enim leo vel urna. Sed neque sem, cursus vel purus id, dictum consectetur lectus.
          </Container>

            
        </Container>
        </Container>
    );
  }
}
