
import React, { useState } from "react";
import styled from 'styled-components'

import {TextInputView} from './TextInputView'
import {SyllableView} from './SyllableView'
import {createLyricObjects} from './LyricParser'

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
  };


    const handleLyricChange = (event) => {
        const newLyricString = event.target.value
        setLyrics(newLyricString)

    }
    const handleMelodyChange = (event) => {
      const newMelody = event.target.value
        setMelody(newMelody)
    }

    const handleNextStepButtonPressed = () => {
      const arrayOfLyricObjects = createLyricObjects(lyricString)
      setLyricObjectArray(arrayOfLyricObjects)
    }

  return (

    <Container>
      <TextInputView title='Lyrics' onChange={handleLyricChange} inputText={"howhow"}/>
      <NextStepButton onClick={handleNextStepButtonPressed}>Go to Next Step!</NextStepButton>
      <SyllableView lyricObjectArray={lyricObjectArray} incrementSyllableCount={incrementSyllableCount}/>
      <TextInputView title='Melody' onChange={handleMelodyChange} inputText={"should be melody string"}/>
    </Container>
  );
}

export default ChantscriberPage