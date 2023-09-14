import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormText from 'react-bootstrap/FormText';
import { setUserLogged } from '../../store/actions';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 
  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL_ENDPOINT 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(backendURL + "signin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        dispatch(setUserLogged(true));
        setMessage("User authentication successful");
        navigate('/cities');
      } else {

        setMessage("User or password is invalid");
      }
    } catch (error) {
      console.error('Error in the request:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <FormLabel>Email address</FormLabel>
        <FormControl
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup className="mb-3" controlId="formBasicPassword">
        <FormLabel>Password</FormLabel>
        <FormControl
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormGroup>

      <FormGroup className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </FormGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br/>
      <FormText className="text-muted">{message}</FormText>

      <FormGroup>
        <FormText className="text-muted">
          Don't have an account? <Link to="/signup">Register here</Link>
        </FormText>
      </FormGroup>
    </Form>
  );
}
