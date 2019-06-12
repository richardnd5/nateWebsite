import React from 'react'
import styled from 'styled-components'

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
    text-align: center;


@media (min-width: 1281px) {
  font-size: 1.6em;
}
@media (min-width: 1025px) and (max-width: 1280px) {
  font-size: 1.5em;
}
@media (min-width: 768px) and (max-width: 1024px) {
  font-size: 1.4em;
}
@media (min-width: 481px) and (max-width: 767px) {
  font-size: 1.3em;
}
@media (min-width: 320px) and (max-width: 480px) {
  font-size: 1.2em;
}

`

const SubTitle = styled.h6`
    font-size: 0.6em;
    text-align: center;
    padding: 5px;

@media (min-width: 1281px) {
  font-size: 0.8em;
}
@media (min-width: 1025px) and (max-width: 1280px) {
  font-size: 0.7em;
}
@media (min-width: 768px) and (max-width: 1024px) {
  font-size: 0.6em;
}
@media (min-width: 481px) and (max-width: 767px) {
  font-size: 0.5em;
}
@media (min-width: 320px) and (max-width: 480px) {
  font-size: 0.4em;
}
`

const IFrame = styled.iframe`

  margin: 30px;
  width: 70%;
  border: none;
`

export const VideoCell = (props) => {
    const { title, subtitle, videoId} = props;
    return(
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>

            <IFrame 
              frameborder="0" 
              allowfullscreen="1" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              title="YouTube video player" 
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1" id="widget2`}
             />
        </Container>



)
}