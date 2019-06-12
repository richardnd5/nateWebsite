import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Contact = () => (
  <Container>
    <h2>Questions?</h2>
    <p>You can email me at:</p>
    <p>nathan . d . richard at gmail dot com</p>
  </Container>
)