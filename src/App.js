import React from 'react';
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Recepty from './recepty.js'
import Contact from './Contact.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"



function App() {
  return (
<div className="App">
<Router>
    <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Recepty" component={Recepty} />
        <Route path="/Kontakt" component={Contact} />
      </Switch>
</Router>
</div>
  );
}

export default App;
