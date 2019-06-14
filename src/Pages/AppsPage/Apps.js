import React from 'react'
import styled from 'styled-components'

import {AppImage} from '../../components/AppImage'
import CSAImage from '../../assets/CSA.jpg'
import sStoriesImage from '../../assets/sStoriesReduced.jpg'


const Container = styled.main`
  background: linear-gradient(#0a1c25 0, #0a1c77 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Avenir';
  color: #eee;
  text-align: center;

`

const Heading = styled.h1`
  padding: 60px 0 20px 0;
  font-size: 1.5em;

`

const SubHeading = styled.h6`
  font-size: 0.8em;
  padding-bottom: 20px;



text-align: center;

`

const GridSection = styled.section`

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



export const Apps = () => (
<Container>
  <Heading>Published Apps</Heading>
  <SubHeading>Available for free on the Apple App Store</SubHeading>

  <GridSection>
    <AppImage text='sStories' image={sStoriesImage} link='https://itunes.apple.com/us/app/sstories/id1455299421?mt=8&ign-mpt=uo%3D2' color='#31d'/>
    <AppImage text='CSA' image={CSAImage} link='https://apps.apple.com/ph/app/carls-sporting-adventure/id1467429782' color='#345'/>
  </GridSection>

</Container>
)


