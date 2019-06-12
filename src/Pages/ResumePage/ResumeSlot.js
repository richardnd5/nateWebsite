import React from 'react'
import styled from 'styled-components'


const Container = styled.article`

    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

    background-color: white;
    margin: 30px;
    border-radius: 20px;
    box-shadow: 1px 1px 1px #ccc;
    padding: 30px;


    /* @media (min-width: 900px) {
        flex-direction: row;
        width: 60%;
    } */


@media (min-width: 800px) {

    width: 60%;
}
@media (min-width: 1200px) {
    width: 50%;
}

`


const HeadingContainer = styled.section`

    color: #0e289b;
    padding: 10px;
    width: 70%;
    text-align: center;

`

const Heading = styled.h1`
    font-size: 1.2em;
`
const Subheading = styled.h2`
    font-size: 0.7em;
`

const List = styled.ul`
    padding-top: 20px;
`


export const ResumeSlot = ({heading, bulletPoints,dates}) => {

    return(
    <Container>
        <HeadingContainer>
            <Heading>{heading}</Heading>
            <Subheading>{`${dates}`}</Subheading>
        </HeadingContainer>
            
            <List>
                {bulletPoints.map((text,i)=> (
                    <li key={i}>{text}</li>
                ))}
            </List>
    </Container>

)}