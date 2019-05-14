import React, { Component, Fragment } from 'react';
import { Routes } from './Routes'
import { UserContext } from './UserContext'
import {Nav, Navbar} from 'react-bootstrap';


class App extends Component {

  state = {
    scrollPos: 0,
    sidebarOpen: false,
    page: "Arrangements",
    scrollTop: 0
  }

  constructor(props){
    super(props)
    this.myRef = React.createRef()

  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }
  
  listenToScroll = () => {
    this.setState({
      scrollPos: window.pageYOffset,
    })
  }

  render() {

    return (
      <Fragment>
        <UserContext.Provider value={this.state}>

        <Navbar expand="lg" fixed='top' >
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: '#bbd2e8'}}/>
          <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor: '#bbd2e8'}}>
            <Nav className="mr-auto" style={{backgroundColor: '#bbd2e8'}}>
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
