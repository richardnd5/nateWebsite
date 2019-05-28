import React from 'react'
import styled from 'styled-components'


const Container = styled.div`

/* background-image: ${props => `url(${props.image})`};
background-repeat: no-repeat;
background-size: cover;

background-color: ${props => props.color || "#222"};
background-blend-mode: multiply; */

/* 
height: 50vw;
width: 100vw;

@media (min-width: 700px) {
  height: 70vh;


} */




`


const Content = styled.div`

`

const Heading = styled.h1`
    color: #e0332d;
    font-family: "HeroicCondensedBold", sans-serif;
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 3px;

`

const SubHeading = styled.h4`

`


export const BackgroundPad = (props) => {

  const { heading, subheading, text } = props;
  return (

          <Container>

            <Content>
            <Heading>Background</Heading>
            <SubHeading>Just a little about</SubHeading>
            </Content>
            
          </Container>
        // </Nav.Link></Nav.Item>




  );
}