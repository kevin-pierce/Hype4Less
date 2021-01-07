import React from 'react';
import styled from "styled-components"
import NavBar from "../NAV/index"
import HomePage from "../HOMEPAGE/index"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router basename="/">
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path = "/" component = {HomePage}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
