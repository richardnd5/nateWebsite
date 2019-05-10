import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { VideoCell } from '../../components/VideoCell'
import { arrangements } from './arrangementList'
import Sticky from 'react-stickynode';


const Styles = styled.div`
.textAlign{
    text-align: center;
}

.paddingTop{
    padding-top: 50px;
}

`
const Text = styled.div`
color: #eee;
font-family: 'Avenir';
font-weight: bold;
font-size: 2.2em;

height: ${props => props.divHeight || 100};

display: flex;
justify-content: center;
align-items: center;
z-index: 500;
`

const Padding = styled.div`
padding-top: 100px;
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
        <Padding/>
            <Sticky enabled={false} top={3}>
                <Text divHeight={100}>Arrangements</Text>
            </Sticky>
        <Container className='textAlign' >
            <Row className="paddingTop" >
                <ArrangementCells arrangements={arrangements}/>
                <Col/>
                <Col/>      
            </Row>
        </Container>        
    </Styles>
)