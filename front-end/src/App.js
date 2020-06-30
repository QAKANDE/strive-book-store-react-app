import React from "react";
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import NavBar from "./components/NavBar";


import Home from "./components/Home";
import Details from "./components/Details"

function App() {
  return (

      <Router>
      <NavBar/>
      <Route path= '/' exact component={Home}/>
      <Route path='/details/:id' component={Details}/>
      </Router>
  );
}

export default App;