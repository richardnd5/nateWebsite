import React from 'react'
import { Header } from './Header'
import {InfoCell} from './InfoCell'
import { Row, Container } from 'react-bootstrap'
import AboutImage from '../../assets/AboutImage.jpg'
import AppsImage from '../../assets/AppsImage.png'
import ArrangementsImage from '../../assets/ArrangementsImage.jpg'
import CompositionsImage from '../../assets/CompositionsImage.jpg'


export const Home = () => (
  <div>
    <Header/>
    <Container noGutters={true}>
      <Row noGutters={true} style={{'paddingTop': 20}}>
          <InfoCell height={200} text='About' color='rgba(12, 12, 63, 1.0)' image={AboutImage} link='/about'/>
          <InfoCell height={200} text='Apps' color='rgba(46, 204, 113,1.0)' image={AppsImage} link='/apps'/>
      </Row>
      
      <Row noGutters={true}>
        <InfoCell height={200} text='Arrangements' color='rgba(241, 196, 15,1.0)' image={ArrangementsImage} link='/arrangements'/>
        <InfoCell height={200} text='Compositions' color='rgba(231, 76, 60,1.0)' image={CompositionsImage} link='/compositions'/>
      </Row>

    </Container>
  </div>
)