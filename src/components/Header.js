import React from 'react'
import styled from 'styled-components'


const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 80px;
`

const Title = styled.h1`
  color: #eee;
  font-family: 'Avenir';
  font-weight: bold;
  font-size: 2.5em;
  width: 100%;

  @media (min-width: 700px) {
    font-size: 3.0em;
  }

`
const SubTitle = styled.h2`
  color: #eee;
  font-family: 'Avenir';
  font-size: 0.9em;
  width: 100%;
  padding-top: 1vh;

  @media (min-width: 700px) {
    font-size: 1.2em;
    }

  @media (min-width: 1100px) {
    font-size: 1.6em;
  }
`

export const Header = (props) => {
  const {title, subtitle} = props
  return(
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  )
}