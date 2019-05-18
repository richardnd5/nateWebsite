import React from "react"
import {Syllable} from './Syllable'
import { Container, Row } from 'react-bootstrap'


export const  SyllableView = ({ lyricObjectArray, incrementSyllableCount }) =>{
    return (
        <Container>
          <Row>
            {lyricObjectArray.map((lyricObject, index) => (
                <Syllable
                  key={index}
                  index={index}
                  lyricObject={lyricObject}
                  incrementSyllableCount={incrementSyllableCount}
                />
              ))}
            </Row>
      </Container>
    );
  }