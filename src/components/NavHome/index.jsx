import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

export function NavHome() {
  let data = [
    { href: '/', text: 'Home' },
    { href: '/cities', text: 'Cities' }
  ]

  return (

    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MyTinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav >

            {
              data.map((link) => {

                return <Nav.Link href={link.href}>{link.text}</Nav.Link>
              })
            }

            <Button variant="primary"><Icon.Person />Login</Button>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )


}

