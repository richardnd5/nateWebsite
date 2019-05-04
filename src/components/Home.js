import React, {Component} from 'react'
import styled from 'styled-components'
import Sticky from 'react-stickynode';
import { StickyText } from './StickyText'

const Container = styled.div`
text-align: center;
`

const Padding = styled.div`
height: 30vh;
`

export default class Home extends Component {

  render() {
    return (
      <Container>
      <Padding/>
        <Sticky enabled={true} top={150} className='navbarSpace'/>
        <StickyText name='text1' text='Hello!' whatToStickTo='navbarSpace'/>

        <Padding/>
        <Padding/>
        <Padding/>

        <StickyText name='text2' text='My name is Nathan' whatToStickTo='text1'/>
        <Padding/>
        <Padding/>
        <Padding/>
        <Padding/>

    </Container>
    )
  }
}





