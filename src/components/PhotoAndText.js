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


const Image = styled.img`
  max-width: 100%;
  height: auto;
  background: #333;

`

const Content = styled.div`
  background: black;
  font-family: 'Avenir';
  padding: 20px 0;

  @media (min-width: 64em) {
    background: none;

    position: fixed;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 0;
    z-index: 5;


}
`

const Heading = styled.h1`
  color: #888;
  font-size: 2em;
`

const SubHeading = styled.h4`
  color: #fff;
  font-size: 1em;
`


export const PhotoAndText = (props) => {

  const { text, color, image } = props;
  return (

          <Container>
            <Image src={image}/>
            <Content>
            <Heading>{text}</Heading>
            <SubHeading>Just a little about</SubHeading>
            </Content>
            
          </Container>
        // </Nav.Link></Nav.Item>




  );
}