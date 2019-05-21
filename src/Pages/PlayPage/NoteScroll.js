import React, {useState} from 'react'
import styled from 'styled-components'
import {MomentCell} from './MomentCell'

const rows = 100
const columns = 10

const Overflow = styled.div`
    height: 50vh;
    width: 100vw;
    overflow: auto;
    background-color: #eef;
`
const ScrollingContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(${rows}, 1fr);
    grid-gap: 4px;
`

export const NoteScroll = () => {

    const [noteGrid, createNoteGrid] = useState([
    ])


    const fillGrid = () => {
        const newNoteGrid = []
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
            newNoteGrid.push({
                x: j,
                y: i,
                isOn: false
            })
            }
        }
        createNoteGrid(newNoteGrid)
    }

    const turnOnGridNote = index => {
        const newNoteGrid = [...noteGrid];
        newNoteGrid[index].isOn = !newNoteGrid[index].isOn;
        createNoteGrid(newNoteGrid)
      };


    return(
        <div>
            <Overflow>
                <ScrollingContainer>
                        {noteGrid.map((cell, index) => {
                            return(
                                <MomentCell cell={cell} index={index} turnOnGridNote={turnOnGridNote}/>
                            )})}
                </ScrollingContainer>
            </Overflow>
    <button onClick={fillGrid}>Fill Grid</button>
    </div>
)}