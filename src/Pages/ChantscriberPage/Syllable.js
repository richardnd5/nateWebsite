import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #a1c9d1;
    margin: 4px;
    padding: 4px 15px 4px 15px;
`
export const Syllable = (props) => {
    const {syllable} = props
    return(  
    <Container>
        <div>{syllable}</div>
        <div>1</div>
    </Container>
)}