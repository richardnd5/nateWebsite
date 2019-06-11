import React from 'react'
import styled from 'styled-components'

const Container = styled.a`

color: #eee;
font-family: 'Avenir';

display: flex;
justify-content: center;
align-items: center;

border-radius: 30px;

background-image: ${props => `url(${props.image})`};
background-color: ${props => props.color || "#ade"};
background-blend-mode: multiply;
background-repeat: no-repeat;
background-position: 55% 40%; 

background-size: 100%;

cursor: pointer;
transition: 0.5s;

&:hover {
    background-size: 105%;
  }
`

export const AppImage = (props) => {
  const { text, image, link } = props;
  return (
    <Container href={link} className='App' image={image}>
      {text}
    </Container>
  );
}