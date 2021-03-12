import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ArtInverstigator from "./projects/ArtInvestigator";
import EverythingHappens from "./projects/EverythingHappens";
import Canvas from "./projects/Canvas";
import HstreamStore from "./projects/HstreamStore";
import AppWrapper from "./shared/AppWrapper";
import "./styles/App.scss";


function App() {
  return (
    <Router>
      <ScrollToTop>
        <AppWrapper>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/LindsayMulhollen' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Portfolio' component={Portfolio} />
            <Route path='/Resume' component={Resume} />
            <Route path='/ArtInvestigator' component={ArtInverstigator} />
            <Route path='/EverythingHappens' component={EverythingHappens} />        
            <Route path='/Canvas' component={Canvas} />                                                
            <Route path='/HstreamStore' component={HstreamStore} />                                                
          </Switch>
        </AppWrapper>
      </ScrollToTop>
    </Router>
    
  );
}

export default App;
