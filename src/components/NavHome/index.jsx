import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
import { useSelector } from 'react-redux'


export function NavHome() {
  let data = [
    { href: '/', text: 'Home' },
    { href: '/cities', text: 'Cities' },

  ]
  const userLogged = useSelector(state => state.userLogged);

  const printLogingButtons = () => {
    if (userLogged) {
      return <Button variant="danger" href={'/home/login'}><Icon.Person />Exit</Button>
     
    } else {
      return <Button variant="primary" href={'/home/login'}><Icon.Person />Login</Button>
    }
  };

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
            {printLogingButtons()}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )


}

