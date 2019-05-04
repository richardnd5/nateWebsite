import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './/components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { NoMatch } from './components/NoMatch'
import Transcribe from './components/Transcribe'
import { UserContext } from './UserContext'
import NavigationBar from './components/NavigationBar'
import Sidebar from "react-sidebar"
import { CustomSideBar } from './components/CustomSideBar'


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
        <Sidebar
        sidebar={
          <CustomSideBar/>
      }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", position: 'fixed' } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)} style={{'position': 'fixed'}}/>
      </Sidebar>
          <Router>
            <Switch>
              <Route exact path="/" component= {Home} />
              <Route path="/about" component= {About} />
              <Route path="/contact" component= {Contact} />
              <Route path="/transcribe" component= {Transcribe} />
              <Route component= {NoMatch} />
            </Switch>
          </Router>
        </UserContext.Provider>
      </React.Fragment>
    );
  }
}

export default App
