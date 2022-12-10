import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home.js"

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


            <Route exact path="/">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                <p>The current time is {currentTime}.</p>
                
            </Route>
            <Route path="/page2">
                <p>This is page 2!</p>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
