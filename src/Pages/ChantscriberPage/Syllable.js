import React from "react"
import styled from 'styled-components'

const Container = styled.div`
    background-color: #a1c9d1;
    margin: 4px;
    padding: 4px 15px 4px 15px;
    cursor: pointer;
`

export const Syllable = ({ lyricObject, index, incrementSyllableCount, decrementSyllableCount }) => {
    return (
      <Container>
          <div>{lyricObject.syllable}</div>
          <div>{lyricObject.noteCount}</div>
          <button onClick={() => decrementSyllableCount(index)}>-</button>
          <button onClick={() => incrementSyllableCount(index)}>+</button>
      </Container>
    );
  }