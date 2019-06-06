import React from 'react'
import styled from 'styled-components'
import {PhotoAndText} from './PhotoAndText'
import testImage from '../../assets/testImage.jpg'
import {BackgroundPad} from './BackgroundPad'

const Container = styled.div`
/* display: flex; */
/* justify-content: center; */


`
export const ModelPage = () => (
    <Container>
        <PhotoAndText heading='About' subheading='just a model' image={testImage}/>
        <BackgroundPad/>
    </Container>
)