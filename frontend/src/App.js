import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, useLocation, Routes} from 'react-router-dom';
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
import useToken from './components/useToken';
import Overview from './components/Overview/Overview';
import OverviewEuler from './components/Overview/Overview-euler';
import SummaryEuler from './components/Summary/Summary-euler';
import Homenew from './components/Homenew/Homenew';
import axios from "axios";
import request from './utils/axios.tsx';


// https://kreek-webapp-new-backend.vercel.app
import { keepTheme } from './Theme.js';

function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// scp -r -i C:/Users/ASUS/Documents/kreek-ec2.pem 'C:\Users\ASUS\Documents\Work New\web3\kreek-webapp-new\frontend\build' ubuntu@43.206.182.42:~/kreek-webapp-new/frontend

function App() {
  const { token, removeToken, setToken } = useToken();
  const [currentTime, setCurrentTime] = useState(0);
  const [togClass, setTogClass] = useState('light');

  
  const [projectIndex, setProjectIndex] = useState(0);
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    // const p = axios({
    //     method: 'POST',
    //     url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getAllProjects',
    //     headers: {}, 
    //     data: {}
    //   }).then(function (response) {
    //     console.log("debugApp")
    //     console.log(response['data']['project_list'])
    //     setAllProjects(response['data']['project_list'])
    //     return response['data']
    //   })

    const p = request.post('/getAllProjects', {}).then(function (response) {
      setAllProjects(response['data']['project_list'])
      return response['data']
    })
    }, [])

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
          {/* <Header togClass={togClass} setTogClass={setTogClass}></Header> */}
        {/* <HeaderWithRouter togClass={togClass} setTogClass={setTogClass}/> */}
        <ScrollRestoration />
        <Container className='main'>
          
            <Sidenav token={token} setProject={setProjectIndex} setToken={setToken} togClass={togClass} setTogClass={setTogClass}/>
            {/* <div className='sidenav'>
          </div> */}
          <div className='content lg:pl-60'>
            <Routes>   
            <Route path='/project-list' element={<ProjectList allProjects={allProjects} project={projectIndex} setProject={setProjectIndex}/>}/>     
              <Route path='/home' element={<Home project={projectIndex} allProjects={allProjects} setProject={setProjectIndex} />}/>        
              <Route path='/new-project' element={<NewProject allProjects={allProjects}/>} />   
              <Route path='/summary' element={<Summary allProjects={allProjects} project={projectIndex}/>}/>                           
              <Route path='/summary-euler' element={<SummaryEuler allProjects={allProjects} project={projectIndex}/>}/>                           
              <Route path='/overview' element={<Overview allProjects={allProjects} project={projectIndex}/>}/>   
              <Route path='/overview-euler' element={<OverviewEuler allProjects={allProjects} project={projectIndex}/>}/>    
              <Route path='/' element={<ProjectList allProjects={allProjects} project={projectIndex} setProject={setProjectIndex}/>}/>            
              <Route path='/homenew' element={<Homenew project={projectIndex} allProjects={allProjects} setProject={setProjectIndex} />} />            

            </Routes>
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
