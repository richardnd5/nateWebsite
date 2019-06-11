import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import ReactPlayer from 'react-player'


const Container = styled.article`
    background-color: #1a3149;
    border-radius: 30px;
    color: #c4d3d1;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const Title = styled.h1`
    margin: 20px;

`

const SubTitle = styled.h6`
    margin: 20px;
`

const VideoContainer = styled.div`
    margin: 20px;
`

export const VideoCell = (props) => {
    const { title, subtitle, videoId, isVimeo } = props;
    return(
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>

            <VideoContainer>

            {isVimeo ? (


                <ReactPlayer 
                url={videoId} 
                width='250px' 
                height='160px'
                />

            ) : (

                <YouTube
                    videoId={videoId}
                    opts={{
                    width: '250',
                    height: '160',
                    }}
                    />
            )}
            </VideoContainer>
        </Container>



)
}