import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .center{
    text-align: center;
}
`

export const About = () => (
  <Styles>
  <div className="center">
    <h2>About Us</h2>
    <p>We are musicians and educators who fell in love with software development in 2014</p>
    <p>We mainly create iOS apps.</p>
  </div>
  </Styles>
)