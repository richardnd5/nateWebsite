import React, {Component} from 'react'
import styled from 'styled-components'
import {StickyText} from '../../components/StickyText'
import {storyLine} from './storyLine'

const divHeight = 60

const Container = styled.div`
text-align: center;
overflow: 'hidden';
`

const Padding = styled.div`
height: ${props => `${props.height}` || '100vh'};
`

const ArrayOfWords = ({words}) => (
  <>
    { words.map((phrase,i) => (
      <div key={i}>
        <StickyText text={phrase} stickyTop={divHeight*i} divHeight={divHeight}/>
        <Padding height='100vh'/>
      </div>
    ))}
  </>
); 

export default class About extends Component {

  render() {
    return (
      <Container>
        <Padding height='30vh'/>
        <ArrayOfWords words={storyLine} />
    </Container>    
    )
  }  
}  





