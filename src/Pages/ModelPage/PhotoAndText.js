import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  position: relative;
`


const Image = styled.img`
  max-width: 100%;
  height: auto;
  filter:brightness(60%);

`

const Content = styled.div`
  background: black;
  font-family: 'Avenir';
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 64em) {
    background: none;

    width: 50%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 100px;
    left: 0;
    right: 0;
    z-index: 5;
    font-size: 2.4em;


}
`

const Heading = styled.h1`
  color: #fff;
  font-size: 2em;

`

const SubHeading = styled.h4`
  color: #ddd;
  font-size: 1em;
`

export const PhotoAndText = (props) => {

  const { heading, subheading, image } = props;
  return (

          <Container>
            <Image src={image}/>
            <Content>
              <Heading>{heading}</Heading>
              <SubHeading>{subheading}</SubHeading>
            </Content>
          </Container>

  );
}