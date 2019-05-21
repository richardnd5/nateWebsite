
import React, { useState } from "react";
import styled from 'styled-components'

import {TextInputView} from './TextInputView'
import {SyllableView} from './SyllableView'
import {createLyricObjects} from './LyricParser'

import { Modes, Key } from '../../backendJS/MusicConstants'
import { createNoteObjectArray } from '../../backendJS/StringToNoteObject'

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

function ChantscriberPage() {

  const [lyricString, setLyrics] = useState("")
  const [melodyString, setMelody] = useState("")

  const [lyricObjectArray, setLyricObjectArray] = useState([])

  const [melodyObjectArray, setMelodyObjects] = useState([])


  const incrementSyllableCount = index => {
    const newLyricObjectArray = [...lyricObjectArray]
    newLyricObjectArray[index].noteCount ++
    setLyricObjectArray(newLyricObjectArray);
  }

  const decrementSyllableCount = index => {
    const newLyricObjectArray = [...lyricObjectArray]
    let noteCount = newLyricObjectArray[index].noteCount

    noteCount > 1 ? newLyricObjectArray[index].noteCount-- : newLyricObjectArray[index].noteCount = 1
    setLyricObjectArray(newLyricObjectArray);
  }

  const handleLyricChange = (event) => {
      const newLyricString = event.target.value
      setLyrics(newLyricString)
  }
  const handleMelodyChange = (event) => {
    const newMelody = event.target.value
      setMelody(newMelody)
  }

  const processLyrics = () => {
    const arrayOfLyricObjects = createLyricObjects(lyricString)
    setLyricObjectArray(arrayOfLyricObjects)
  }
  
  const processMelody = () => {
    const melodyObjectArray = createNoteObjectArray(melodyString, Key.D, Modes.ionian)
    setMelodyObjects(melodyObjectArray)
    console.log(melodyObjectArray)
  }

  return (

    <Container>
      <TextInputView title='Lyrics' onChange={handleLyricChange} inputText={"howhow"}/>
      <NextStepButton onClick={processLyrics}>Process Lyrics</NextStepButton>
      <SyllableView 
        lyricObjectArray={lyricObjectArray} 
        incrementSyllableCount={incrementSyllableCount}
        decrementSyllableCount={decrementSyllableCount}
      />
      <TextInputView title='Melody' onChange={handleMelodyChange} inputText={"should be melody string"}/>
      <NextStepButton onClick={processMelody}>Process Melody</NextStepButton>
    </Container>
  );
}

export default ChantscriberPage