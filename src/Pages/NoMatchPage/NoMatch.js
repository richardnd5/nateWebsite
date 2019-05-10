import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .center{
    text-align: center;
    color: #eee;
    font-family: 'Avenir';
    padding-top: 120px;
}
`

export const NoMatch = () => (
  <Styles>
  <div className="center">
    <h2>Oh No! This page doesn't exist!</h2>
    <p>Click on the button!</p>
  </div>
  </Styles>
)