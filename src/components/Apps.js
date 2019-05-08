import React from 'react'
import styled from 'styled-components'
import { Row, Container } from 'react-bootstrap'
import {AppImage} from './AppImage'
import CSAImage from '../assets/CSA.jpg'
import sStoriesImage from '../assets/sStoriesReduced.png'




const Heading = styled.h1`
padding-top: 60px;
color: #eee;
font-family: 'Avenir';
font-weight: bold;
height: ${props => props.divHeight || 100};
display: flex;
justify-content: center;
align-items: center;

@media (min-width: 700px) {

  }

@media (min-width: 1100px) {

}
`

const SubHeading = styled.h6`
padding-top: 30px;
color: #eee;
font-family: 'Avenir';
height: ${props => props.divHeight || 100};
display: flex;
justify-content: center;
align-items: center;
text-align: center;

@media (min-width: 700px) {

  }

@media (min-width: 1100px) {

}
`

export const Apps = () => (
<>
<Heading>Published Apps</Heading>
<SubHeading>Available for free on the Apple App Store</SubHeading>
<Container style={{'backgroundColor': 'none'}}>
      <Row noGutters={false} style={{'paddingTop': 20}}>
          <AppImage height={200} text='CSA' image={CSAImage} link='/about'/>
          <AppImage height={200} text='sStories' image={sStoriesImage} link='/apps'/>
      </Row>

    </Container>
</>
)


