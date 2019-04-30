import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//========================================

//import Amplify from "./aws-amplify";
import Amplify from '@aws-amplify/core';
import aws_exports from "./aws-exports";
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);

//=========================================


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/google-books/" component={Search} />
          <Route exact path="/google-books/search" component={Search} />
          <Route exact path="/google-books/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthenticator(App,true); 
