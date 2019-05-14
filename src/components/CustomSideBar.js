import React from 'react'
import {Nav} from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`

`

export const CustomSideBar = (props) => {
  return(

    <Container>
        <Nav.Item><Nav.Link className='link' href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link className='link' href="/about">About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link className='link' href="/apps">Apps</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link className='link' href="/arrangements">Arrangements</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link className='link' href="/compositions">Compositions</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link className='link' href="/sequencerPage">Sequencer</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link className='link' href="/contact">Contact</Nav.Link></Nav.Item>
    </Container>

  );
}