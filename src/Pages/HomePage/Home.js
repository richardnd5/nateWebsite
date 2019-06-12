import React from 'react'
import {InfoCell} from './InfoCell'
import AboutImage from '../../assets/AboutImage.jpg'
import AppsImage from '../../assets/AppsImage.png'
import ArrangementsImage from '../../assets/ArrangementsImage.jpg'
import CompositionsImage from '../../assets/CompositionsImage.jpg'
// import GitHubIcon from '../../assets/GitHub-Mark-64px.png'
// import {SocialMediaIcon} from '../../components/SocialMediaIcon'
import styled from 'styled-components'

const Background = styled.main`

      margin-top: 50px;
      height: 80vh;
      display: flex;
      justify-content: center;
      background: linear-gradient(#0a1c25 0, #0a1c77 100%);

`

const Container = styled.section`

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;


  > * {
    margin: 10px;
  }

  height: 300px;
  width: 300px;

  @media (min-width: 500px) {
    height: 450px;
    width: 450px;
  }

  @media (min-width: 800px) {
    height: 600px;
    width: 600px;
  }

  @media (min-width: 1000px) {
    height: 600px;
    width: 600px;
  }
`

export const Home = () => (
  <Background>
    <Container>
      <InfoCell text='About' color='rgba(12, 12, 63, 1.0)' image={AboutImage} link='/about'/>
      <InfoCell text='Apps' color='rgba(46, 204, 113,1.0)' image={AppsImage} link='/apps'/>
      <InfoCell text='Arrangements' color='rgba(241, 196, 15,1.0)' image={ArrangementsImage} link='/arrangements'/>
      <InfoCell text='Compositions' color='rgba(231, 76, 60,1.0)' image={CompositionsImage} link='/compositions'/>
    </Container>
  </Background>
)