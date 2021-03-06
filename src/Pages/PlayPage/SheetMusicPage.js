import React from 'react'
import OpenSheetMusicDisplay from '../../lib/OpenSheetMusicDisplay'
import styled from 'styled-components'


const Container = styled.section`
  background-color: #eee;
`

export const SheetMusicPage = ({xml}) => {
  return (
    <Container>
    <OpenSheetMusicDisplay file={xml} />
  </Container>
  )
}