import React from 'react'
import {Nav} from 'react-bootstrap'

export const CustomSideBar = (props) => {
  return(
    <div>
        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
    </div>
  );
}