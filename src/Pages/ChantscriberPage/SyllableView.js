import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {Syllable} from './Syllable'


const syllables = ["hel", "lo", "this", "is", "me","hel", "lo", "this", "is", "me","hel", "lo", "this", "is", "me","hel", "lo", "this", "is", "me","hel", "lo", "this", "is", "me","hel", "lo", "this", "is", "me","hel", "lo", "this", "is", "me",]

const SyllableCells = ({syllables}) => (
    <>
      { syllables.map((syllable,i) => (
          <Syllable syllable={syllable}/>
      ))}
    </>
  ); 

export const SyllableView = () => (
        <Container>
            <Row>
                <SyllableCells syllables={syllables}/> 
            </Row>
        </Container>        

)