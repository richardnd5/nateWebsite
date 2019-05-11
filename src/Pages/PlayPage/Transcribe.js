import React, { Component } from 'react'
import * as Music from './MusicXML.js'
import styled from 'styled-components'

const Words = styled.div`
color: #eee;
font-size: 40px;
display: flex;
align-content: center;
justify-content: center;
padding-top: 20vh;
`

export default class Transcribe extends Component {

  state = {
    words: ''
  }

  componentDidMount() {

    const word = Music.returnString()

    this.setState({
      words: word
    })
  }
  
  render() {
    const {words} = this.state
    return (
      <>
      <Words>
        {words}
      </Words>
      </>
    )
  }
}
