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
width: 30vw;
height: 30vw;
border-radius: 20px;

background-image: ${props => `url(${props.image})`};
background-color: ${props => props.color || "#ade"};
background-blend-mode: multiply;
background-repeat: no-repeat;

background-size: 100%;
font-size: 1.5em;

cursor: pointer;
transition: 0.5s;

&:hover {
    background-size: 105%;
  }

`

const Styles = styled.div`
.container{

}
`

export const AppImage = (props) => {

  const { text, color, image, link } = props;
  return (


    <Col noGutters={true} xs={6}>
      <Styles>
        <Nav.Item><Nav.Link href={link}>
          <Container color={color} image={image}>
            {text}
          </Container>
        </Nav.Link></Nav.Item>
      </Styles>
    </Col>



  );
}