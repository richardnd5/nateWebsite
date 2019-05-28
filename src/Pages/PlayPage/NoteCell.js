import React from 'react'
import styled from 'styled-components'
import {MusicStaff} from '../ChantscriberPage/MusicStaff'



const Container = styled.div`
    /* background-color: ${props => props.color || "#ade"}; */
    /* background-color: ${props => props.isOn || "#ade"}; */
    background-color: #2c4670;
    color: #eee;
    /* width: 70px; */
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* justify-content: center; */
    /* height: 50px; */
`


export const NoteCell = ({ cell,index }) => {

    return(
        <Container> 
            <MusicStaff/>
                {cell.letterName}
        </Container>
    )

}