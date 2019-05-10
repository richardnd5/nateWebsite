import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .center{
    text-align: center;
    color: #eee;
    font-family: 'Avenir';
    padding-top: 60px;
}
`

export const Contact = () => (
  <Styles>
  <div className="center">
    <h2>Questions?</h2>
    <p>You can email me at:</p>
    <p>nathan . d . richard at gmail dot com</p>
  </div>
  </Styles>
)