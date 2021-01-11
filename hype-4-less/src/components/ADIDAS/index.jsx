import React from "react";
import styled from "styled-components";
import AdidasProdNav from  "./nav";
import GeneralProdPage from "./general";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const AdidasProdPage = () => {
    return (
      <Router>
        <div>
            <AdidasProdNav />
            <Switch>
              <Route exact path = "/adidas" component={GeneralProdPage}/>
              <Route exact path = "/adidas/originals" component={GeneralProdPage}/>
              <Route exact path = "/adidas/running" component={GeneralProdPage}/>
              <Route exact path = "/adidas/tiro" component={GeneralProdPage}/>
            </Switch>
        </div>
      </Router>
        
    );
}

export default AdidasProdPage;

                