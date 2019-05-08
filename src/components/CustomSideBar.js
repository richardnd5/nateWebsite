import React from 'react'
import {Nav} from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`

`

export const CustomSideBar = (props) => {
  return(
    <Container>
        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/contact">Apps</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/contact">Arrangements</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/contact">Compositions</Nav.Link></Nav.Item>
    </Container>
  );
}