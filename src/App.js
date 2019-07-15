import React, { Component, Fragment } from 'react';
import { Routes } from './Routes'
import { UserContext } from './UserContext'
import {Nav, Navbar} from 'react-bootstrap';
import { Header } from './components/Header'
import {SocialMediaIcon} from './components/SocialMediaIcon'
import GitHubIcon from './assets/GitHub-Mark-64px.png'
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
  background: #0a1c77;

`

class App extends Component {

  render() {

    return (
      <Fragment>
        <UserContext.Provider value={this.state}>
          <Navbar variant='dark' expand="lg" fixed='top' style={{padding: 0}}>
            <Navbar.Toggle  bg='dark' aria-controls="basic-navbar-nav" style={{backgroundColor: '#073e96', margin: '10px 0 0 10px'}}/>
              <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor: '#073e96'}}>
                <Nav bg='dark' className="mr-auto" style={{backgroundColor: '#073e96'}}>
                  <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                  {/* <Nav.Item><Nav.Link href="/resumepage">Resume</Nav.Link></Nav.Item> */}
                  <Nav.Item><Nav.Link href="/apps">Apps</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/arrangements">Arrangements</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/compositions">Compositions</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/sequencerPage">Sequencer</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
             </Navbar.Collapse>
        </Navbar>

        <Header title="N. Richard" subtitle="Musician, Developer, Educator"/>

        <Routes/>

        <Footer>
          <SocialMediaIcon image={GitHubIcon} link='https://github.com/richardnd5/nateWebsite'/>
        </Footer>

            
        </UserContext.Provider>
      </Fragment>
    );
  }
}

export default App
