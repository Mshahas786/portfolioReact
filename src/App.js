import React from "react"
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Home from './Pages/Home';
import Works from "./Pages/Works";
import About from "./Pages/About";

function App() {
  return <div className=" App vw-100 vh-100 d-flex flex-column  justify-content-center position-fixed"
      style={{ backgroundColor: "black" }}> 
    <Router>
    {/* <h1 className="">Hello</h1> */}
    <Navbar link="/About" name="Me" link1="/Works" name1="Works" />
    <Route path='/' exact component={Home} />
    <Route path='/Works' component={Works} />
    <Route path='/About' component={About} />
    </Router>
    </div>
}

export default App;