import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//import User from "./components/Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//========================================
import { Auth } from 'aws-amplify';
//import Amplify from "./aws-amplify";
import Amplify from '@aws-amplify/core';
import aws_exports from "./aws-exports";
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);

//=========================================

function App() {

  let username = null
  Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
}).then(user => {
  console.log(user)
  
  username = user.username
  
  console.log(username)

})
.catch(err => console.log(err));
// session detail =======

  
  Auth.currentSession()
    .then(data => 
      
      console.log(data)
    
    )
    .catch(err => console.log(err));
  
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

//export default withAuthenticator(App,true); 
export default withAuthenticator(App, {
  // Render a sign out button once logged in
  includeGreetings: true, 
  // Show only certain components
  });