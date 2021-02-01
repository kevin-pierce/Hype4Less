import React from "react";
import styled from "styled-components";
import GeneralProdPage from "./general";
import NikeProdNav from "./nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const NikeProdPage = () => {
    return (
      <Router>
        <div>
            <NikeProdNav/>
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
              <Route exact path = "/nike/jordan" component={() => {
                return (<GeneralProdPage prodQuery="jordan"/>)}}
              />
            </Switch>
        </div>
      </Router>
        
    );
}

export default NikeProdPage;