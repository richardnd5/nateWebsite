import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    position: relative; 
    padding-bottom: 56.25%; 
    height: 0;
    overflow: hidden; 
    max-width: 100%; 
    height: auto; 
`

const IFrame = styled.iframe`
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%;
        border: 0px;
        margin: 0px;
        padding: 0px;
`

export const VimeoView = ({vimeoID}) => (
    <Wrapper>
    <IFrame 
    data-domain-dependent="https://player.vimeo.com/api/player.js" 
    data-src={`https://player.vimeo.com/video/${vimeoID}?autoplay=1&loop=1&autopause=0&background=1`}
    width='640'
    height='348'
    frameborder="0" 
    webkitallowfullscreen="" 
    mozallowfullscreen="" 
    allowfullscreen="" 
    allow= 'autoplay'
    src={`https://player.vimeo.com/video/${vimeoID}?autoplay=1&loop=1&autopause=0&background=1`}
    >     
    </IFrame>
</Wrapper>
)