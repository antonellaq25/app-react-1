import React from "react";
import { Slider } from "../Slider";
import { InfoSection } from '../InfoSection'
import Container from 'react-bootstrap/Container';


export function Home() {
    return (
        <Container>
            <InfoSection />
            <Slider />
        </Container>
    )

}