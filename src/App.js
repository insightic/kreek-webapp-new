import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js"
import About from "./components/About/About.js"
import FAQ from "./components/FAQ/FAQ.js"
import Login from "./components/Login/Login.js"
import Cards from "./components/Cards/Cards.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Home from "./components/Home/Home.js"


import { keepTheme } from './Theme.js';

function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [togClass, setTogClass] = useState('light');

  useEffect(() => {
    fetch('/backend/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Header togClass={togClass} setTogClass={setTogClass}></Header>
        <ScrollRestoration />
        <Switch>                
        <Route path='/home' component={Home}/>  
        <Route path='/about' component={About}/>               
        <Route path='/faq' component={FAQ}/>   
        <Route path='/login' component={Login}/>  
        <Route path='/cards' component={Cards}/>  
        <Route path='/' component={Home}/>            
      </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
