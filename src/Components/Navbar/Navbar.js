import React from 'react';
import { Link } from "react-router-dom";


const Navbar = (props) => {
    return (
        <div className=" d-flex justify-content-end">

        <Link to={props.link}><h3 className="text-white d-inline" style={{ fontFamily: 'Pattaya', fontSize: '3vh' }}> {props.name}</h3></Link>
         <Link to={props.link1}><h3 className="text-white d-inline ml-5" style={{ fontFamily: 'Pattaya', fontSize: '3vh' }}> {props.name1}</h3></Link>
         </div>
    )
}

export default Navbar;
