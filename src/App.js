import React from 'react';
import './App.css';
import Home from './Home';
import About from './About.js';
import Projects from './Projects';
import Contact from './Contact';
import { Route, Link } from "react-router-dom";
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
