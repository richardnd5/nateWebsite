
import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import {ReactDomServer} from "react-dom/server"


import {TextInputView} from './TextInputView'
import {SyllableView} from './SyllableView'
import {createLyricObjects} from './LyricParser'
import {createSyllableObjectArray} from './createSyllableObjects'
import {createXML} from './syllableObjectToXML'

import { Modes, Key } from '../../backendJS/MusicConstants'
import { createNoteObjectArray } from '../../backendJS/StringToNoteObjectTypes'

import {SheetMusicPage} from '../../Pages/PlayPage/SheetMusicPage'




import { makeNewXML } from "../../backendJS/MusicXMLTypes";


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

  const [syllableObject, setSyllableObjects] = useState([])
  const [xml, setXML] = useState([])


  useEffect(() => {
    // console.log(syllableObject)


    

  }, [syllableObject, xml]); // Only re-run the effect if open changes

  const downloadXML = () => {
    const element = document.createElement("a");
    const file = new Blob([xml], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${lyricString}.xml`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }


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

    // console.log(arrayOfLyricObjects)


  }
  
  const processMelody = () => {
    const melodyObjectArray = createNoteObjectArray(melodyString, Key.C, Modes.ionian)
    setMelodyObjects(melodyObjectArray)

    const syllableArray = createSyllableObjectArray(melodyObjectArray, lyricObjectArray)
    setSyllableObjects(syllableArray)

    const xml = makeNewXML(syllableArray)
    // console.log(xml)
    setXML(xml)

  }

  return (

    <div>
      <p>This page is still under construction. It's a playground more than anything.</p>

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
      <SheetMusicPage xml={xml} style={{
        'height': '2000px'
      }}/>
      <button onClick={downloadXML}>Download XML</button>
    </div>
  );
}

export default ChantscriberPage