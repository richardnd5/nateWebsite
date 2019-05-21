import React from "react"
import styled from 'styled-components'
import {MusicStaff} from './MusicStaff'

const Container = styled.div`
    background-color: #a1c9d1;
    /* margin: 4px; */
    padding: 4px 0px 4px 0px;
    cursor: pointer;
`

export const Syllable = ({ lyricObject, index, incrementSyllableCount, decrementSyllableCount }) => {
    return (
      <Container>
          <MusicStaff/>
          <div>{lyricObject.syllable}</div>
          <div>{lyricObject.noteCount}</div>
          <button onClick={() => decrementSyllableCount(index)}>-</button>
          <button onClick={() => incrementSyllableCount(index)}>+</button>
      </Container>
    );
  }