import React from "react";
import styled from "styled-components";
import GeneralProdPage from "./general";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const NikeProdPage = () => {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path="/nike" component={() => {
                return (<GeneralProdPage prodQuery="all"/>)}}
              />
              <Route exact path = "/nike/running" component={() => {
                return (<GeneralProdPage prodQuery="running"/>)}}
              />
              <Route exact path = "/nike/lifestyle" component={() => {
                return (<GeneralProdPage prodQuery="lifestyle"/>)}}
              />
            </Switch>
        </div>
      </Router>
        
    );
}

export default NikeProdPage;

{/* <Route exact path = "/adidas/originals" component={GeneralProdPage}/>
<Route exact path = "/adidas/running" component={GeneralProdPage}/>
<Route exact path = "/adidas/tiro" component={GeneralProdPage}/> */}