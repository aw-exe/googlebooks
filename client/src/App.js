import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import {
  Footer,
  Jumbotron,
  Navbar
} from "./components";

function App() {
  return (
    <React.Fragment>
      <Router>

        <Navbar /> 
        

        <Jumbotron /> 

        <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
        </Switch>


        <Footer /> 
      
      </Router>

    </React.Fragment>
  );
}

export default App;
