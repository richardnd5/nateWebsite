import React from 'react'
import styled from 'styled-components'
import { Row, Container } from 'react-bootstrap'
import {AppImage} from '../../components/AppImage'
import CSAImage from '../../assets/CSA.jpg'
import sStoriesImage from '../../assets/sStoriesReduced.png'

const Heading = styled.h1`
padding-top: 60px;
color: #eee;
font-family: 'Avenir';
font-weight: bold;
height: ${props => props.divHeight || 100};
display: flex;
justify-content: center;
align-items: center;
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
`

const Styles = styled.div`
.AppContainer{
  display: flex;
  justify-content: center; 
  padding-top: 20px;
}
`

export const Apps = () => (
<>
  <Heading>Published Apps</Heading>
  <SubHeading>Available for free on the Apple App Store</SubHeading>
  <Styles>
  <Container className='AppContainer'>
        <Row noGutters={false}>
            <AppImage text='sStories' image={sStoriesImage} link='https://itunes.apple.com/us/app/sstories/id1455299421?mt=8&ign-mpt=uo%3D2' color='#31d'/>
            <AppImage text='CSA' image={CSAImage} link='https://itunes.apple.com/au/app/carls-sporting-adventure/id1265668085?mt=8' color='#345'/>
        </Row>
  </Container>
  </Styles>
</>
)

