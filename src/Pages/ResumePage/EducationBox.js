import React from 'react'
import styled from 'styled-components'

const Container = styled.article`
    color: white;

    border-radius: 20px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;

    box-shadow: 1px 1px 1px #ccc;
`

const SchoolTitle = styled.h1`
  font-weight: bold;
  font-size: 1.2em;
`
const Degree = styled.h2`
  font-size: 0.8em;
`
const Year = styled.h3`
    font-size: 0.8em;
`
const  GPA = styled.h4`
    font-size: 0.8em;
`

const Crest = styled.img`

    background-image: ${props => `url(${props.icon})`};
    width: 70px;
    height: 70px;
    object-fit: contain;
    background-repeat: no-repeat;
`

export const EducationBox = ({school, degree, year, schoolColor1, schoolColor2, gpa, icon }) => (
    <Container style={{background: `linear-gradient(${schoolColor1} 0, ${schoolColor2} 100%)`}}>
        <SchoolTitle>{school}</SchoolTitle>
        <Degree>{degree}</Degree>
        <Year>{year}</Year>
        <GPA>{gpa} GPA</GPA>
        <Crest src={icon}/>
    </Container>

)