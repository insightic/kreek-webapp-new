import { useState } from 'react';
import axios from "axios";
import {Container, Row, Col, Offcanvas, Button, Nav} from 'react-bootstrap'
import './Login.css';
import { Link } from 'react-router-dom';

function Login(props) {

    const [loginForm, setloginForm] = useState({
      email: "",
      password: ""
    })

    const [msg, setMsg] = useState("")

    function logMeIn(event) {
      axios({
        method: "POST",
        url:"/signin",
        data:{
          email: loginForm.email,
          password: loginForm.password
         }
      })
      .then((response) => {
        if (response.status == 200) {
          props.setToken(response.data.data.token)
          setMsg("Login Successful")
          localStorage.setItem('email', loginForm.email)
          localStorage.setItem('password', loginForm.password)
        } else {
          setMsg("Invalid Credentials")
        }
      }).catch((error) => {
        setMsg("Invalid Credentials")
        props.setToken("")
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })

      setloginForm(({
        email: "",
        password: ""}))

      event.preventDefault()
    }

    function handleChange(event) { 
      const {value, name} = event.target
      setloginForm(prevNote => ({
          ...prevNote, [name]: value})
      )}

    return (
      <Container className="login-container">
        <div className="login-card">
        <h1>Login</h1>
          <form className="login">
            <input onChange={handleChange} 
                  className='login-input'
                  type="email"
                  text={loginForm.email} 
                  name="email" 
                  placeholder="Email" 
                  value={loginForm.email} />
            <input onChange={handleChange}
                  className='login-input' 
                  type="password"
                  text={loginForm.password} 
                  name="password" 
                  placeholder="Password" 
                  value={loginForm.password} />
          {msg && <div style={{color:'red', fontSize:'1.2rem'}}>{msg}</div>}
          <Link to="/signup" className='toSignup'>Sign up here!</Link>
          <button className='login-button' onClick={logMeIn}>Submit</button>
        </form>
        </div>
      </Container>
    );
}

export default Login;