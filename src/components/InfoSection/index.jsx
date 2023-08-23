import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './style.css'

export function InfoSection() {
    return (
        <Row className="info-sec">
            <Col xs={12} md={6}>

                <h1 >Find the perfect destination</h1>
                <p>
                    Our app will help you find the perfect path for your next trip. With an
                    easy-to-use interface and a host of itenerary options, planning your next trip
                    has never been easier.
                </p>

            </Col>

            <Col xs={12} md={6}>
                <Image src="image.jpeg" />
            </Col>
        </Row>
    )
}