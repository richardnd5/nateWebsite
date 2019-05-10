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
width: '100%';
height: 30vh;

background-image: ${props => `url(${props.image})`};
background-color: ${props => props.color || "#ade"};
background-blend-mode: multiply;
background-repeat: no-repeat;
background-position: 55% 40%; 
padding: 0px;

background-size: 195%;
font-size: 1.5em;

cursor: pointer;
transition: 0.3s;

&:hover {
    background-color: rgba(12, 12, 63, 0.5);
    background-size: 205%;

  }

@media (min-width: 700px) {
  height: 30vh;

  &:hover {
    background-color: rgba(12, 12, 63, 0.7);
    background-size: 205%;
  }
}
`

const Styles = styled.div`
.container{

}
`

export const InfoCell = (props) => {

  const { text, color, image, link } = props;
  return (


    <Col noGutters={true} xs={6} style={{ 'backgroundColor': '#333' }}>
      <Styles>
        <Nav.Item><Nav.Link style={{ 'color': '#eee', 'width': '100%', 'height': '100%', 'padding': 0 }} href={link}>
          <Container color={color} image={image}>
            {text}
          </Container>
        </Nav.Link></Nav.Item>
      </Styles>
    </Col>



  );
}