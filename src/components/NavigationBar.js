import React, { Component } from 'react'
import {Nav, Navbar, DropdownButton, Dropdown} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.navbar {
    /* background-color: #111; */
    color: #000;
    font-family: 'Avenir';

}

.navbar-brand, .navbar-nav .nav-link {
    color: #eee;
    &:hover {
        color: white;
        font-family: 'Avenir';
    }
}

`

export default class NavigationBar extends Component {
    static defaultProps = {
      className: ""
    };
    render() {
      const { scrollPos } = this.props;
      return (
        <Styles style= {{marginBottom: 55}}>
            <Navbar bg="navbar" variant="dark" expand="lg" className="navbar fixed-top" pullLeft>
              <Navbar.Brand href="/"></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse className="mr-auto" id="basic-navbar-nav">
                  <Nav>
                      <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                  </Nav>
              </Navbar.Collapse>
            </Navbar>
{/* <DropdownButton>
  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
</DropdownButton> */}
        </Styles>
      )
    }
  }