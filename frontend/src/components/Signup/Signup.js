import { useState } from 'react';
import axios from "axios";
import {Container, Row, Col, Offcanvas, Button, Nav} from 'react-bootstrap'
import './Signup.css';
import { Link } from 'react-router-dom';

function SignUp(props) {

    const [signupForm, setsignupForm] = useState({
      email: "",
      password: "",
      confirmPassword: ""
    })

    const [msg, setMsg] = useState("")

    function signMeUp(event) {
      if (signupForm.password != signupForm.confirmPassword) {
        alert("Passwords do not match")
        return
      }
      axios({
        method: "POST",
        url:"/signup",
        data:{
          email: signupForm.email,
          password: signupForm.password
         }
      })
      .then((response) => {
        if (response.status == 200) {
          props.setToken(response.data.data.token)
          setMsg("Sign Up Successful. Proceed to Login")
        } else {
          setMsg("Sign Up Successful. Proceed to Login")
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

      setsignupForm(({
        email: "",
        password: "",
        confirmPassword: ""}))

      event.preventDefault()
    }

    function handleChange(event) { 
      const {value, name} = event.target
      setsignupForm(prevNote => ({
          ...prevNote, [name]: value})
      )}

    return (
      <Container className="signup-container">
        <div className="signup-card">
        <h1>Sign Up</h1>
          <form className="signup">
            <input onChange={handleChange} 
                  className='signup-input'
                  type="email"
                  text={signupForm.email} 
                  name="email" 
                  placeholder="Email" 
                  value={signupForm.email} />
            <input onChange={handleChange}
                  className='signup-input' 
                  type="password"
                  text={signupForm.password} 
                  name="password" 
                  placeholder="Password" 
                  value={signupForm.password} />
            <input onChange={handleChange}
                  className='signup-input' 
                  type="password"
                  text={signupForm.confirmPassword} 
                  name="confirmPassword" 
                  placeholder="Confirm Password" 
                  value={signupForm.confirmPassword} />
          {msg && <div>{msg}</div>}
          <Link to="/login" className='toLogin'>Log in here!</Link>
          <button className='signup-button' onClick={signMeUp}>Submit</button>
        </form>
        </div>
      </Container>
    );
}

export default SignUp;