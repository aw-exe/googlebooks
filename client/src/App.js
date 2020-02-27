import React from 'react';
import SearchBooks from '../src/pages/Search'

import {
  Footer,
  Jumbotron,
  Navbar
} from "./components";

function App() {
  return (
    <React.Fragment>
      <Navbar /> 
      

      <Jumbotron /> 

      {/* if route is saved, load saved Components. else load search. React router DOM switch case. */}

      <SearchBooks />


      <Footer /> 

    </React.Fragment>
  );
}

export default App;
