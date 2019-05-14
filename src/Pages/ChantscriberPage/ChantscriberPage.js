import React, { Component } from 'react'
import styled from 'styled-components'
import {TextInputView} from './TextInputView'
import {SyllableView} from './SyllableView'

const Container = styled.div`

  color: black;
  font-family: 'Avenir';
  display: flex;
  flex-direction: column;
  align-items: center;

`

const NextStepButton = styled.button`
  background-color: #4a9b45;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 50px;

`

export default class ChantscriberPage extends Component {

    state = {
        lyrics: "",
        noteObjectArray: {},
        melodyString: "Type Melody Here!",
        lyricString: "Type Lyrics Here!"
    }

    handleLyricChange = (event) => {
        this.setState({ lyricString: event.target.value });
    }
    handleMelodyChange = (event) => {
        this.setState({ melodyString: event.target.value });
    }
    

    handleSubmit = (event) => {
        if (event.which === 13 /* Enter */) {
            event.preventDefault();
        }
    }

    handleNextStepButtonPressed = () => {
      this.setState({
        lyricString: 'pressed it!'
      })
    }

  render() {
    return (
      <Container>
        <TextInputView title='Lyrics' onChange={this.handleLyricChange} onSubmit={this.handleSubmit} inputText={this.state.lyricString}/>

        <TextInputView title='Melody' onChange={this.handleMelodyChange} onSubmit={this.handleSubmit} inputText={this.state.melodyString}/>

        <NextStepButton onClick={this.handleNextStepButtonPressed}>Go to Next Step!</NextStepButton>

        <SyllableView/>
      </Container>
    )
  }
}

