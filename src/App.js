import React from "react"
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Works from "./Pages/Works";

function App() {
  return <div className=" App vw-100 vh-100 d-flex align-items-center position-fixed"
      style={{ backgroundColor: "black" }}> 
    <Router>
    {/* <h1 className="">Hello</h1> */}
    <Route path='/' exact component={Home} />
    <Route path='/Works' component={Works} />
    </Router>
    </div>
}

export default App;