import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import {Col} from 'react-bootstrap'
import ReactPlayer from 'react-player'

/*
Usage. Import by destructuring. Provide these props
    title = string, 
    subtitle = string, 
    videoId = (Youtube Id || vimeo url), 
    isVimeo = bool, 
    color = (hex, rgba, or colorName)
*/

const Container = styled.div`
    background-color:${props => props.color || "none"};
    border-radius: 30px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        height: 400px;
    }
`

const Title = styled.h1`
padding: ${props => props.padding || "10px"};
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
color: #c4d3d1;
height: 80px;
`

const SubTitle = styled.h6`
padding: ${props => props.padding || "10px"};
font-size: 14px;
color: #c4d3d1;
`

const Padding = styled.div`
padding: ${props => props.amount || "10px"};
display: flex;
align-items: center;
justify-content: center;
`
export const VideoCell = (props) => {
    const { title, subtitle, videoId, isVimeo, color } = props;
return(
    <Col xs={12} md={6} xl={4}>
        <>
                <Container color ={color}>
                <Title padding='10px'>
                        {title}
                </Title>
                <SubTitle padding='5px'>{subtitle}</SubTitle>

                {isVimeo ? (

                    <Padding amount='25px 0 25px 0px' className='centerHorizontally'>
                    <ReactPlayer 
                    url={videoId} 
                    width='300px' 
                    height='200px'
                    />
                    </Padding>
                ) : (
                    <Padding amount='25px 0 25px 0px'>
                    <YouTube
                        videoId={videoId}
                        opts={{
                        height: '200',
                        width: '300'
                        }}
                        />
                    </Padding>

                )}
                </Container>

        </>
    </Col>


)
}