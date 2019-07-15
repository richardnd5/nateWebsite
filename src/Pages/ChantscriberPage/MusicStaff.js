import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
`

const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${props => props.line ? 'black' : 'clear'};
    margin-top: 3px;
    display: flex;
    align-content: center;
    justify-content: center;
`

const Dot = styled.div`
    border-radius: 100%;
    background-color: black;
    height: 8px;
    width: 10px;
    margin-top: -4px;
`

export const MusicStaff = () => (
    <Container>
        <Line/>
        <Line line={true}/>
        <Line/>
        <Line line={true}>
            <Dot/>
        </Line>
        <Line>
        </Line>
        <Line line={true}/>
        <Line/>
        <Line line={true}/>
        <Line/>
        <Line line={true}/>
        <Line/>
        <Line/>
        <Line/>
        <Line/>
        <Line/>
    </Container>
)