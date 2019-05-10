import React from 'react'
import { Header } from '../../components/Header'
import {InfoCell} from '../../components/InfoCell'
import { Row, Container } from 'react-bootstrap'
import AboutImage from '../../assets/AboutImage.jpg'
import AppsImage from '../../assets/AppsImage.png'
import ArrangementsImage from '../../assets/ArrangementsImage.jpg'
import CompositionsImage from '../../assets/CompositionsImage.jpg'
import GitHubIcon from '../../assets/GitHub-Mark-64px.png'
import {SocialMediaIcon} from '../../components/SocialMediaIcon'


export const Home = () => (
  <div>
    <Header title='N. Richard' subtitle="Musician, Developer, Educator"/>
    <Container noGutters={true}>
      <Row noGutters={true} style={{'paddingTop': 20}}>
          <InfoCell height={200} text='About' color='rgba(12, 12, 63, 1.0)' image={AboutImage} link='/about'/>
          <InfoCell height={200} text='Apps' color='rgba(46, 204, 113,1.0)' image={AppsImage} link='/apps'/>
      </Row>
      
      <Row noGutters={true}>
        <InfoCell height={200} text='Arrangements' color='rgba(241, 196, 15,1.0)' image={ArrangementsImage} link='/arrangements'/>
        <InfoCell height={200} text='Compositions' color='rgba(231, 76, 60,1.0)' image={CompositionsImage} link='/compositions'/>
      </Row>

      <div style={{
              display:'flex',
              justifyContent: 'center',
              alignContent: 'flex-bottom'
            }}>
            <SocialMediaIcon image={GitHubIcon} link='https://github.com/richardnd5'/>
            </div>

    </Container>
  </div>
)