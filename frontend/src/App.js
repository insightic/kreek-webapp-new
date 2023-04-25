import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Col, Row, Container, Image} from "react-bootstrap";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Sidenav from "./components/Sidenav/Sidenav.js";
import Home from "./components/Home/Home.js"
import About from "./components/About/About.js"
import FAQ from "./components/FAQ/FAQ.js"
import Login from "./components/Login/Login.js"
import Signup from "./components/Signup/Signup.js"
import Cards from "./components/Cards/Cards.js"
import NewProject from './components/NewProject/NewProject';
import ProjectList from './components/ProjectList/ProjectList';
import Summary from './components/Summary/Summary';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Home from "./components/Home/Home.js"
import { withRouter } from "react-router";
import useToken from './components/useToken';
import Overview from './components/Overview/Overview';

// https://kreek-webapp-new-backend.vercel.app
import { keepTheme } from './Theme.js';

function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const { token, removeToken, setToken } = useToken();
  const [currentTime, setCurrentTime] = useState(0);
  const [togClass, setTogClass] = useState('light');

  const HeaderWithRouter = withRouter(Header);
  const SidenavWithRouter = withRouter(Sidenav);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        {console.log(token)}
        {/* {!token || token== undefined || token == ""?  
          <Switch>        
          <Route path='/login' render={(props) => <Login setToken={setToken} />} />  
          <Route path='/signup' component={Signup}/> 
          <Route path='/' render={(props) => <Login setToken={setToken} />}/>            
        </Switch>
        :( */}
          <>
          <Header togClass={togClass} setTogClass={setTogClass}></Header>
        {/* <HeaderWithRouter togClass={togClass} setTogClass={setTogClass}/> */}
        <ScrollRestoration />
        <Container className='main'>
          <div className='sidenav'>
            <Sidenav token={token} setToken={setToken} togClass={togClass} setTogClass={setTogClass}/>
          </div>
          <div className='content'>
            <Switch>                
              <Route path='/home' component={Home}/> 
              <Route path='/new-project' component={NewProject}/>   
              <Route path='/project-list' component={ProjectList}/> 
              <Route path='/summary' component={Summary}/>                           
              <Route path='/overview' component={Overview}/>   
              <Route path='/' component={Home}/>            
            </Switch>
          </div>
        </Container>
          <Footer></Footer>
          </>
        {/* )} */}
        </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
