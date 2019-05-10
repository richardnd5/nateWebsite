import React from 'react'
import styled from 'styled-components'
import { VideoCell } from '../../components/VideoCell'
import { Container, Row, Col } from 'react-bootstrap'
import { compositionList } from './compositionList'

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

const CompositionCells = ({arrangements}) => (
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

export const Compositions = () => (
    <Styles>
        <Heading>Compositions</Heading>
        <Container className='textAlign'>
            <Row className="paddingTop">
                <CompositionCells arrangements={compositionList}/>
                <Col/>
                <Col/>      
            </Row>
        </Container>        
    </Styles>
)