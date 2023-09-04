import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setItinerariesData } from '../../store/actions';

function CityDetails() {
  const { cityName } = useParams();
  const itineraries = useSelector((state) => state.itineraries);
  const dispatch = useDispatch()

  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL_ENDPOINT

  useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    try {
        const response = await axios.get(backendURL + "itineraries/bycity/"+cityName);
        dispatch(setItinerariesData(response.data));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

return (
    <Container className='cities-sec full-width-container '>
        <h1>List of Itineraries</h1>

        <br />

        <Row  >
            <Col xs={12} md={12} lg={12}>
            </Col>
        </Row>

        <br />
        <Row xs={1} md={3} lg={3} className="justify-content-md-center">
            {itineraries.map((item) => {
                return <Col key={item.itinerary_name}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={item.itinerary_picture} />
                        <Card.Body>
                        <Card.Title>{item.itinerary_name}</Card.Title>
                            <Card.Text>€{item.price}</Card.Text>
                            <Card.Text>
                                tags: #{item.tag}
                            </Card.Text>
                            <Card.Text>
                                duration: {item.duration} days
                            </Card.Text>
                            <Card.Link href={`/city/${item.name}`} >View More</Card.Link>
                            
                        </Card.Body>
                        
                    </Card>
                </Col>
            })}

        </Row>
    </Container>
);
}

export default CityDetails;