import React from "react";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css'

export function Slider() {

  let carrouselItems = [
    [{ src: "tokyo.jpeg", city: 'Tokyo', country: 'Japan' },
    { src: "hong-kong.jpeg", city: 'Hong Kong', country: 'China' },
    { src: "madrid.jpeg", city: 'Madrid', country: 'Spain' },
    { src: "london.jpeg", city: 'London', country: 'UK' }],
    [{ src: "seoul.jpeg", city: 'Seoul', country: 'South Korea' },
    { src: "venice.jpeg", city: 'Venice', country: 'Italy' },
    { src: "montevideo.jpeg", city: 'Montevideo', country: 'Uruguay' },
    { src: "lima.webp", city: 'Lima', country: 'Peru' }],
    [{ src: "bsas.jpeg", city: 'Buenos Aires', country: 'Argentina' },
    { src: "medellin.jpeg", city: 'Medellin', country: 'Colombia' },
    { src: "amsterdam.avif", city: 'Amsterdam', country: 'The Netherlands' },
    { src: "paris.jpeg", city: 'Paris', country: 'France' }]
  ]
  return (
    <Container>
      <Carousel data-bs-theme="dark" className="carrousel-custom">
        {
          carrouselItems.map((items) => {
            return <Carousel.Item >
              <Row xs={1} md={2} lg={2}>
                {items.map((item) => {
                  return <Col key={item.city}>
                    <Card style={{ width: '25rem' }}>
                      <Card.Img variant="top" src={item.src} />
                      <Card.Body>
                        <Card.Title>{item.city}</Card.Title>
                        <Card.Text>
                          {item.country}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                })}

              </Row>
            </Carousel.Item>
          }
          )}
      </Carousel>
    </Container>
  )
}