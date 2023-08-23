import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import './style.css'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';




export function Cities() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const  backendURL=  import.meta.env.VITE_REACT_APP_BACKEND_CITIES_ENDPOINT


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(backendURL);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    console.log(data);
    const filteredCities = data.filter(city => {
        const regex = new RegExp(`\\b${filter}`, 'i');
        return regex.test(city.name);
    });

    return (
        <Container className='cities-sec full-width-container '>
            <h1>List of cities</h1>

            <br />
            <Row  >
                <Col xs={12} md={12} lg={12}>
                    <InputGroup size="lg">

                        <InputGroup.Text id="inputGroup-sizing-lg">City name</InputGroup.Text>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            type="text"
                            placeholder="Search by city name"
                            value={filter}
                            onChange={e => setFilter(e.target.value)}
                        />
                    </InputGroup>
                </Col>
            </Row>

            <br />
            <Row xs={1} md={3} lg={3} className="justify-content-md-center">
                {filteredCities.map((item) => {
                    return <Col key={item.city}>
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={item.photo} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.country}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                })}

            </Row>
        </Container>
    );
}