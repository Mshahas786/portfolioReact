import React from 'react';
import { Link } from "react-router-dom";


const Navbar = (props) => {
    return (
        <div className="container d-flex justify-content-between">
        
        <div className=""><Link to="./"><h3 className="text-white" > MS </h3></Link></div>
       
        <div className="d-flex">
        <Link to="/About" ><h3 className="text-white  " > Me</h3></Link>
        <Link to="/Works"><h3 className="text-white ml-5" > Works</h3></Link>
        </div>

         </div>
    )
}

export default Navbar;
