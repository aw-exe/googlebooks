import React from 'react';

import {
  Footer,
  Jumbotron,
  Navbar
} from "./components";

function App() {
  return (
    <React.Fragment>
      <Navbar /> 
      
      <hr />

      <Jumbotron /> 

      {/* if route is saved, load saved Components. else load search. React router DOM switch case. */}

      <hr />

      <Footer /> 

    </React.Fragment>
  );
}

export default App;
