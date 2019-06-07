import React from 'react'
import { Nav } from 'react-bootstrap'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    padding: 30px;
    padding-bottom: 20px;

    background-color: white;
    margin: 30px;
    border-radius: 20px;
    box-shadow: 1px 1px 1px #ccc;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
    }


    @media (min-width: 800px) {
        width: 60%;
    }
    @media (min-width: 1200px) {
        width: 50%;
    }
`

const List = styled.ul`
width: 100%;
padding-top: 20px;

@media (min-width: 500px) {
    width: 80%;
}
`


const Heading = styled.div`
    font-size: 1.3em;
    color: #0e289b;
    text-align: center;
    padding-bottom: 10px;

`

const Subheading = styled.div`
    font-size: 0.8em;
    color: #0e289b;
    text-align: center;
    padding-bottom: 20px;
`

export const InternshipPage = ({name, about, image, link, bulletPoints}) => {

    return(
        <>
            <Heading>{name}</Heading>
            <Subheading>{about}</Subheading>
    <Container>
            <AppImagee text={name} image={image} link={link}/>
            <List>
                {bulletPoints.map((text,i)=> (
                    <li key={i}>{text}</li>
                ))}
            </List>
    </Container>
    </>

)}

const AppContainer = styled.div`

color: #eee;
font-family: 'Avenir';
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
width: 130px;
height: 130px;

border-radius: 30px;
box-shadow: 1px 1px 1px #ccc;

background-image: ${props => `url(${props.image})`};

background-blend-mode: multiply;
background-repeat: no-repeat;
background-position: 55% 40%; 

background-size: 100%;
font-size: 1.5em;
text-align: center;

cursor: pointer;
transition: 0.5s;

&:hover {
    background-size: 105%;
  }

`

export const AppImagee = (props) => {
  const { image, link } = props;
  return (

          <Nav.Item><Nav.Link href={link}>
              <AppContainer className='App' image={image}>
              </AppContainer>
          </Nav.Link></Nav.Item>

  );
}