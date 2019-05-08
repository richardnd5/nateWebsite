import React, {Component} from 'react'
import styled from 'styled-components'
// import Sticky from 'react-stickynode'
import {StickyText} from './StickyText'

const divHeight = 50
// const divHeightPixel = `${divHeight}px`

const Container = styled.div`
text-align: center;
overflow: 'hidden';
`

const Padding = styled.div`

height: ${props => `${props.height}px` || '100px'};
`



export default class About extends Component {

  render() {
    return (
      <Container>

        <Padding height={300}/>

        <StickyText text="Hello!" stickyTop={divHeight} divHeight={divHeight}/>
        <Padding height={300}/>
        <StickyText text="My name is Nathan" stickyTop={divHeight*2} divHeight={divHeight}/>
        <Padding height={300}/>
        <Padding height={300}/>
        <Padding height={300}/>
        <Padding height={300}/>
        {/* <Sticky enabled={true} top={divHeight*0} className='text1'>
          <Text>Hello!</Text>
        </Sticky> */}


        <Padding/>
        <Padding/>
        <Padding/>

    </Container>    
    )
  }  
}  





