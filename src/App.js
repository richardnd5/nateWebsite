import React, { Component, Fragment } from 'react';
import { Routes } from './Routes'
import { UserContext } from './UserContext'
import {Nav, Navbar} from 'react-bootstrap';


class App extends Component {

  render() {

    return (
      <Fragment>
        <UserContext.Provider value={this.state}>
          <Navbar variant='dark' expand="lg" fixed='top' style={{background: '#0a1c25'}}>
            <Navbar.Toggle  bg='dark' aria-controls="basic-navbar-nav" style={{backgroundColor: '#073e96'}}/>
              <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor: '#073e96'}}>
                <Nav bg='dark' className="mr-auto" style={{backgroundColor: '#073e96'}}>
                  <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/apps">Apps</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/arrangements">Arrangements</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/compositions">Compositions</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/sequencerPage">Sequencer</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
             </Navbar.Collapse>
        </Navbar>
        <br/>
        <br/>
            <Routes/>
        </UserContext.Provider>
      </Fragment>
    );
  }
}

export default App
