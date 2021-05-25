import React from "react"
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Works from "./Pages/Works";

function App() {
  return <div className="App"> 
    <Router>
    <Route path='/' exact component={Home} />
    <Route path='/Works' component={Works} />
    </Router>
    </div>
}

export default App;