import React from 'react'
import styled from 'styled-components'
import {NoteCell} from './NoteCell'

const rows = 8

const Overflow = styled.div`
    /* height: 70vh; */
    /* width: 100vw; */
    /* overflow: auto; */
    /* background-color: #eef; */
    margin-top: 40px;
    margin-bottom: 40px;
`
const ScrollingContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${rows}, 1fr);
    grid-gap: 14px;
`

export const MelodyGeneratorView = ({noteObjects}) => {
    return(
        <div>
            <Overflow>
                <ScrollingContainer>
                        {noteObjects.map((cell, key) => {
                            return(
                                <NoteCell cell={cell} key={key}/>
                            )})}
                </ScrollingContainer>
            </Overflow>

    </div>
)}