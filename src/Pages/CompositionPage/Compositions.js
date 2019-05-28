import React from 'react'
import styled from 'styled-components'
import { VideoCell } from '../../components/VideoCell'
import { Container, Row, Col } from 'react-bootstrap'
import { compositionList } from './compositionList'
import Sticky from 'react-stickynode';


const Styles = styled.div`
    background: linear-gradient(#0a1c25 0, #0a1c77 100%);
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

height: ${props => props.divHeight || 100};

display: flex;
justify-content: center;
align-items: center;
font-size: 2.2em;
`

const Padding = styled.div`
padding-top: 100px;
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
                key={i}
                />
  
      ))}
    </>
  ); 

export const Compositions = () => (
    <Styles>
        <Container className='textAlign' style={{"zIndex": 4}}>
        <Padding/>
            <Sticky enabled={false} top={3}>
                <Text divHeight={100}>Compositions</Text>
            </Sticky>
            <Row className="paddingTop">
                <CompositionCells arrangements={compositionList}/>
                <Col/>
                <Col/>      
            </Row>
        </Container>        
    </Styles>
)