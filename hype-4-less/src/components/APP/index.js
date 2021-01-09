import React from "react"
import NavbarHeader from "../NAVBAR/index.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "../HOMEPAGE/index.jsx";
import AdidasProdPage from "../ADIDAS/index.jsx";
import ReebokProdPage from "../REEBOK/index.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavbarHeader/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/adidas" component={AdidasProdPage}/>
          <Route exact path="/reebok" component={ReebokProdPage}/>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
