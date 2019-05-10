import React from 'react'
import styled from 'styled-components'
import { Col, Nav } from 'react-bootstrap'

const Container = styled.div`

color: #eee;
font-family: 'Avenir';
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
width: 20vh;
height: 20vh;

border-radius: 30px;

background-image: ${props => `url(${props.image})`};
background-color: ${props => props.color || "#ade"};
background-blend-mode: multiply;
background-repeat: no-repeat;
background-position: 55% 40%; 

background-size: 100%;
font-size: 1.5em;

cursor: pointer;
transition: 0.5s;

&:hover {
    background-size: 105%;
  }

`

export const AppImage = (props) => {
  const { text, image, link } = props;
  return (
      <Col className='AppContainer'>
          <Nav.Item><Nav.Link href={link}>
              <Container className='App' image={image}>
                {text}
              </Container>
          </Nav.Link></Nav.Item>
      </Col>
  );
}