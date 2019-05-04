import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .center{
    text-align: center;
}
`

export const Contact = () => (
  <Styles>
  <div className="center">
    <h2>Questions?</h2>
    <p>Want to give us an idea for our next app?</p>
    <p>You can email us at:</p>
    <p>byeahwecan at gmail dot com</p>

  </div>
  </Styles>
)