import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'
import jumboImage from '../assets/jumboImage.jpg'

const Styles = styled.div`
.jumbotron {
    background: url(${jumboImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 120px;
    position: relative;
    z-index: -2;
    text-align: center;

    margin: 20px;
    background-color: rgba(90,90,100,1);
    background-blend-mode: multiply;
    background-position: center;
    background-size: cover;

    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;

    font-family: 'Poor Story';

    text-transform: uppercase;
    letter-spacing: 4px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    
}
`

export const Jumbotron = () => (
<Styles>
    <Jumbo fliud="true" className="jumbo">
        <Container>
            <h1>N. Richard</h1>
        </Container>
    </Jumbo>
</Styles>
)