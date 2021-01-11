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
              <Route exact path="/adidas" component={() => {
                return (<GeneralProdPage prodQuery="all"/>)}}
              />
              <Route exact path = "/adidas/running" component={() => {
                return (<GeneralProdPage prodQuery="running"/>)}}
              />
              <Route exact path = "/adidas/originals" component={() => {
                return (<GeneralProdPage prodQuery="originals"/>)}}
              />
              <Route exact path = "/adidas/tiro" component={() => {
                return (<GeneralProdPage prodQuery="tiro"/>)}}
              />
            </Switch>
        </div>
      </Router>
        
    );
}

export default AdidasProdPage;

{/* <Route exact path = "/adidas/originals" component={GeneralProdPage}/>
<Route exact path = "/adidas/running" component={GeneralProdPage}/>
<Route exact path = "/adidas/tiro" component={GeneralProdPage}/> */}