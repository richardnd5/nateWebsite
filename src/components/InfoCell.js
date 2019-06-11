import React from 'react'
import styled from 'styled-components'

const Container = styled.a`

color: #eee;
font-family: 'Avenir';
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

background-image: ${props => `url(${props.image})`};
background-color: ${props => props.color || "#ade"};
background-blend-mode: multiply;
background-repeat: no-repeat;
background-position: 55% 40%; 


background-size: 195%;
/* font-size: 1.5em; */
text-decoration: none;
border-radius: 20px;
box-shadow: 1px 1px 1px #111;

cursor: pointer;
transition: 0.3s;

&:hover {
    background-color: rgba(12, 12, 63, 0.5);
    background-size: 205%;

  }

/* @media (min-width: 700px) {
  height: 30vh;

  &:hover {
    background-color: rgba(12, 12, 63, 0.7);
    background-size: 205%;
  }
} */
`

export const InfoCell = (props) => {

  const { text, color, image, link } = props;
  return (
          <Container href={link} color={color} image={image}>
            {text}
          </Container>
  );
}