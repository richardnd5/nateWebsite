import React from 'react'
import styled from 'styled-components'
import {Nav} from 'react-bootstrap'

const Styles = styled.div`
.navLink {
    /* background-color: #111; */
    color: #000;
    font-family: 'Avenir';
    float: right;

}

`

export const CustomSideBar = (props) => {
  return(
    <div>
      <Nav>
        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
      </Nav>
    </div>
  );
}