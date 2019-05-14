import React, { Component } from 'react'
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
    words: 'hey!'
  }

  componentDidMount() {

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
