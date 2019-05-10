import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidebar from "react-sidebar"
import styled from 'styled-components'

import HomeTests from './components/HomeTests'
import { Home } from './components/HomePage/Home'
import About from './components/AboutPage/About'
import { Contact } from './components/Contact'
import { NoMatch } from './components/NoMatch'
import Transcribe from './components/Transcribe'
import Playground from './components/Playground'
import {Apps} from './components/Apps'
import {Arrangements} from './components/ArrangementPage/Arrangements'
import {Compositions} from './components/CompositionPage/Compositions'


import { UserContext } from './UserContext'
import { CustomSideBar } from './components/CustomSideBar'
import hamburgerImage from './assets/hamburgerIcon.svg'


const SidebarButton = styled.img`
  position: fixed;
  padding-left: 16px;
  padding-top: 14px;
  z-index: 100;
`
const Container = styled.div`
    height: 100%;
    width: 100%;
`

class App extends Component {

  state = {
    scrollPos: 0,
  }

  constructor(props) {

    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    this.setState({
      scrollPos: document.documentElement.scrollTop,
    })
  }

  render() {
    return (
      <React.Fragment>
        <UserContext.Provider value={this.state}>
        <Container>
        <Sidebar
        sidebar={
          <CustomSideBar/>
      }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { 
          background: "#d3cf4a", 
          position: 'fixed', 
          zIndex: '101',
        } }}
      >   
      </Sidebar>
      <SidebarButton onClick={() => this.onSetSidebarOpen(true)} src={hamburgerImage} alt="Menu"/>
          <Router>
            <Switch>
              <Route exact path="/" component= {Home} />
              <Route path="/about" component= {About} />
              <Route path="/contact" component= {Contact} />
              <Route path="/transcribe" component= {Transcribe} />
              <Route path="/playground" component= {Playground} />
              <Route path="/HomeTests" component= {HomeTests} />
              <Route path="/apps" component= {Apps} />
              <Route path="/arrangements" component= {Arrangements} />
              <Route path="/compositions" component= {Compositions} />
              <Route component= {NoMatch} />
            </Switch>
          </Router>
          </Container>
        </UserContext.Provider>
      </React.Fragment>
    );
  }
}

export default App
