import React from 'react'
import styled from 'styled-components'
import {PhotoAndText} from '../../components/PhotoAndText'
import testImage from '../../assets/testImage.jpg'
import {BackgroundPad} from '../../components/BackgroundPad'

const Container = styled.div`
/* display: flex; */
/* justify-content: center; */


`
export const ModelPage = () => (
    <Container>

        <PhotoAndText text='About' color='rgba(50, 50, 50, 0.4)' image={testImage} link='/about'/>
        <BackgroundPad/>


    </Container>
)