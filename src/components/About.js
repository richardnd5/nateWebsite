import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .center{
    text-align: center;
    color: #eee;
    font-family: 'Avenir';
}
`

export const About = () => (
  <Styles>
  <div className="center">
    <h2>About</h2>
    <p>I am Nathan!</p>

  </div>
  </Styles>
)