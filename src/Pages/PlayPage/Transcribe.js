import React, { Component } from 'react'
import * as Music from './MusicXML.js'

export default class Transcribe extends Component {

  componentDidMount() {

    const word = Music.returnString()
    console.log(word)
  }
  
  render() {
    return (
      <div>
        Hey!
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"> 
        <path d="M150 40 L75 10 L225 200 Z" />
        </svg>
      </div>
    )
  }
}
