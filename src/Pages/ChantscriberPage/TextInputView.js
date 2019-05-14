import React from 'react'
import styled from 'styled-components'

const LyricContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #699cef;

height: 30vh;
width: 90vw;
margin-top: 100px;

`

const InputBox = styled.textarea`
width: 90%;
height: 70%;
resize: none;
`

export const TextInputView = (props) => {
  const {title, onChange, inputText} = props
    return(
      <div>
        <LyricContainer>
            <label>{title}</label>
            <InputBox onChange={onChange} placeholder={inputText} name="q" spellCheck="off" />
        </LyricContainer>
      </div>
  )}