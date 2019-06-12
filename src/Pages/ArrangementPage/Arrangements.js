import React from 'react'
import styled from 'styled-components'

import { VideoCell } from '../../components/VideoCell'
import { arrangements } from './arrangementList'


const Text = styled.h1`
    padding: 30px 0 30px 0;
    color: #eee;
    font-family: 'Avenir';

    font-size: 1.8em;

    height: ${props => props.divHeight || 100};

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
`

const Container = styled.main`

      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: linear-gradient(#0a1c25 0, #0a1c77 100%);


`

const Grid = styled.section`

  display: grid;

  grid-template-columns: repeat(1, 1fr);

  > * {
    margin: 10px;
  }

  @media (min-width: 500px) {

    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);

    /* height: 600px;
    width: 600px; */


  }

  @media (min-width: 1000px) {
    /* height: 700px;
    width: 700px; */
    grid-template-columns: repeat(4, 1fr);



  }
`



const ArrangementCells = ({arrangements}) => (
    <Grid>
      { arrangements.map((arrangement,i) => (
                <VideoCell 
                title = {arrangement.title}
                subtitle= {arrangement.subtitle}
                videoId= {arrangement.videoId}
                isVimeo= {arrangement.isView}
                color= {arrangement.color}
                key={i}
                />
      ))}
    </Grid>
  ); 

export const Arrangements = () => (
    <Container>
        <Text>Arrangements</Text>
        <ArrangementCells arrangements={arrangements}/>
    </Container>
)