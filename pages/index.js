import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from '../components/Layout'
import Animals from '../components/Animals'
import NotFound from '../components/NotFound'

export default function App() {
  return(
    // <Layout>
    //   <Animals animalType="animals"/>
    // </Layout>
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <Animals animalType="animals"/>
          </Route>
          <Route path="/dogs">
            <Animals animalType="animals?type=Dog"/>
          </Route>
          <Route path="/cats">
            <Animals animalType="animals?type=Cat"/>
          </Route>
          <Route path="/rabbits">
            <Animals animalType="animals?type=Rabbit"/>
          </Route>
          <Route path="/birds">
            <Animals animalType="animals?type=Bird"/>
          </Route>
          <Route path="/horses">
            <Animals animalType="animals?type=Horse"/>
          </Route>
          <Route path="/pigs">
            <Animals animalType="animals?type=Barnyard"/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}