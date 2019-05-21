import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    /* background-color: ${props => props.color || "#ade"}; */
    /* background-color: ${props => props.isOn || "#ade"}; */
    color: #333;
    width: 70px;
    cursor: pointer;
`


export const MomentCell = ({ cell,index, turnOnGridNote }) => {

    return(
        <Container key={index} index={index} isOn={cell.isOn} 
        style={{ backgroundColor: cell.isOn ? "black" : "white" }}
        onClick={() => turnOnGridNote(index)}
        > 
                {/* {cell.x}, {cell.y} */}
        </Container>
    )

}