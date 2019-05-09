import React from 'react'
import {Nav} from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`
  color: #333;

`
const Styles = styled.div`
.link{
  color: #333;
  font-size: 2.5em;
}
`

export const CustomSideBar = (props) => {
  return(
    <Styles>
    <Container>
        <Nav.Item><Nav.Link className='link' href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link className='link' href="/about">About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link className='link' href="/apps">Apps</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link className='link' href="/arrangements">Arrangements</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link className='link' href="/compositions">Compositions</Nav.Link></Nav.Item>
    </Container>
    </Styles>
  );
}