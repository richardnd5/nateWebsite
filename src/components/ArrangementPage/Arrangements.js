import React from 'react'
import styled from 'styled-components'
import { VideoCell } from '../VideoCell'
import { Container, Row, Col } from 'react-bootstrap'
import { arrangements } from './arrangementList'

const Styles = styled.div`
.textAlign{
    text-align: center;
}

.paddingTop{
    padding-top: 50px;
}
`

const Heading = styled.h1`
    color: #ddd;
    text-align: center;
    padding-top: 80px;
`

const ArrangementCells = ({arrangements}) => (
    <>
      { arrangements.map((arrangement,i) => (
                <VideoCell 
                title = {arrangement.title}
                subtitle= {arrangement.subtitle}
                videoId= {arrangement.videoId}
                isVimeo= {arrangement.isView}
                color= {arrangement.color}
                />
  
      ))}
    </>
  ); 

export const Arrangements = () => (
    <Styles>
        <Heading>Arrangements</Heading>
        <Container className='textAlign'>
            <Row className="paddingTop">
                <ArrangementCells arrangements={arrangements}/>
                <Col/>
                <Col/>      
            </Row>
        </Container>        
    </Styles>
)