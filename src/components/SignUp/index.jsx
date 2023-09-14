import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    picture:'https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg',
    password: '',
    country: '', 
  });
  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL_ENDPOINT 
  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log(JSON.stringify(formData))
      const response = await fetch(backendURL + "signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log('request successful')
        //dispatch(setUserLogged(true));
       // setMessage("User authentication successful");
        //navigate('/cities');
      } else {
        console.log('request failed')
        //setMessage("User or password is invalid");
      }
    } catch (error) {
        console.error('Not possible to register', error);
    }
  };



  const countries = ['Choose your country', 'Argentina', 'Brasil', 'Bolivia','Costa Rica', 'Mexico','Peru','Venezuela', 'Uruguay', ];

  return (
    <Container>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Surname:</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Country:</Form.Label>
          <Form.Control
            as="select"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account? <Link to="/home/login">Log in</Link>
      </p>
    </Container>
  );
}

export default SignUp;
