import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Home } from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About'
import {Apps} from './Pages/AppsPage/Apps'
import {Arrangements} from './Pages/ArrangementPage/Arrangements'
import {Compositions} from './Pages/CompositionPage/Compositions'
import { Contact } from './Pages/ContactPage/Contact'
import ChantscriberPage from './Pages/ChantscriberPage/ChantscriberPage'
import { NoMatch } from './Pages/NoMatchPage/NoMatch'

// Playground pages
import HomeTests from './Pages/PlayPage/HomeTests'
import Transcribe from './Pages/PlayPage/Transcribe'
import Playground from './Pages/PlayPage/Playground'
import SequencerPage from './Pages/PlayPage/SequencerPage'
import SheetMusicPage from './Pages/PlayPage/SheetMusicPage'


export const Routes = () => {
    return(
        <Router>
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route path="/about" component= {About} />
          <Route path="/contact" component= {Contact} />
          <Route path="/transcribe" component= {Transcribe} />
          <Route path="/playground" component= {Playground} />
          <Route path="/HomeTests" component= {HomeTests} />
          <Route path="/SequencerPage" component= {SequencerPage} />
          <Route path="/SheetMusicPage" component= {SheetMusicPage} />
          <Route path="/apps" component= {Apps} />
          <Route path="/arrangements" component= {Arrangements} />
          <Route path="/compositions" component= {Compositions} />
          <Route path="/ChantscriberPage" component= {ChantscriberPage} />
          <Route component= {NoMatch} />
        </Switch>
      </Router>
    )
}
