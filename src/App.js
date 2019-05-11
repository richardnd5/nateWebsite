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

const SidebarContainer = styled.div`
width: 100%;
position: fixed;
height: 60px;
background-color: ${props => props.color || 'rgba(3, 3, 10, 1.0)'};

display:flex;
align-items: center;
justify-content: flex-end;
z-index: 1;
padding-right: 20px;

`

const SidebarText = styled.div`

color: #eee;
font-family: 'Avenir';
font-weight: bold;
font-size: 1.0em;
opacity: ${props => props.opacity || 0.0};
`

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

    const { scrollPos } = this.state

    return (
      <Fragment>
        <UserContext.Provider value={this.state}>
            <SidebarButton onClick={() => this.onSetSidebarOpen(true)} src={hamburgerImage} alt="Menu"/>
            <SidebarContainer color={`rgba(3, 3, 10, ${scrollPos/200})`} >
              <SidebarText opacity={scrollPos/200}>N. Richard</SidebarText>
            </SidebarContainer>
            <Sidebar
                children=''
                sidebar={ <CustomSideBar/>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { 
                  background: "#d3cf4a", 
                  position: 'fixed', 
                  zIndex: '1000',
                } }}>   
            </Sidebar>

            <Routes/>




        </UserContext.Provider>
      </Fragment>
    );
  }
}

export default App
