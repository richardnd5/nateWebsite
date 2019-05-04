import React, { Component } from 'react'
import styled from 'styled-components'
import image1 from '../assets/image1.svg'


const Container = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    color: #eee;
    font-size: 2em;
    font-family: 'Avenir';
    background-color: #ffb619;
    /* #0618a8 */
    /* #51833a */
    /* #a9d775 */
`



export default class InfoCell extends Component {

  render() {
    const { text } = this.props

    return (
        <Container>
          <h1>{text}</h1>
          <img src={image1} height= '200' width='100' alt="image"></img>
        </Container>
    )
  }
}
