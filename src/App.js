import React, { Component, Fragment } from 'react';
import Sidebar from "react-sidebar"
import styled from 'styled-components'

import { Routes } from './Routes'
import { UserContext } from './UserContext'
import { CustomSideBar } from './components/CustomSideBar'
import hamburgerImage from './assets/hamburgerIcon.svg'

const SidebarButton = styled.img`
  position: fixed;
  padding-left: 16px;
  padding-top: 14px;
  z-index: 100;
`

class App extends Component {

  state = {
    scrollPos: 0,
    sidebarOpen: false
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
      scrollPos: document.documentElement.scrollTop,
    })
  }

  render() {
    return (
      <Fragment>
        <UserContext.Provider value={this.state}>

            <SidebarButton onClick={() => this.onSetSidebarOpen(true)} src={hamburgerImage} alt="Menu"/>
            <Sidebar
                sidebar={ <CustomSideBar/>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { 
                  background: "#d3cf4a", 
                  position: 'fixed', 
                  zIndex: '101',
                } }}>   
            </Sidebar>

            <Routes/>

        </UserContext.Provider>
      </Fragment>
    );
  }
}

export default App
