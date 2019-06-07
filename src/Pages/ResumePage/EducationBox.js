import React from 'react'
import styled from 'styled-components'
import {Col} from 'react-bootstrap'

const Container = styled.div`
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

const SchoolTitle = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  /* text-align: center; */


`
const Degree = styled.div`


`
const Year = styled.div`

`
const  GPA = styled.div`

`

const Crest = styled.img`

    background-image: ${props => `url(${props.icon})`};
    width: 50px;
    height: 50px;
    object-fit: contain;
    background-repeat: no-repeat;

    /* position: absolute; */
    /* top: 110px; */
    /* left: 40px; */

`

export const EducationBox = ({school, degree, year, schoolColor1, schoolColor2, gpa, icon }) => (
    <Col md= 'auto' style={{padding: 20}}>
    <Container style={{background: `linear-gradient(${schoolColor1} 0, ${schoolColor2} 100%)`}}>
        <SchoolTitle>{school}</SchoolTitle>
        <Degree>{degree}</Degree>
        <Year>{year}</Year>
        <GPA>{gpa} GPA</GPA>
        <Crest src={icon}/>
    </Container>
    </Col>
)