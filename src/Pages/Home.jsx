import React from "react";
import  { Link } from "react-router-dom";
import "./Pages.css";

// import img from "../Images/05.jpg";
import MuhammedShahas from "../Images/MuhammedShahascopy.png";
import SocialIcons from "../Components/SocialIcons/SocialIcons";
// import Works from "./Works";

const Home = () => {
  return (
    <div
      className="vw-100 vh-100 d-flex align-items-center"
      style={{ backgroundColor: "black" }}
      // style={{ backgroundImage: `url(${img})` }}
    >
      

      {/* <h1 className="text-white">Muhammed Shahas</h1> */}

      <div className="container shadow-lg ">
        <div className="row ">
          <div className="col-4 col-lg-3 p-0  bg-success ">
            <img src={MuhammedShahas} alt="Muhammed shahas" />
          </div>

          <div className="col-8 col-lg-8 d-flex align-items-center bg-danger overflow-auto p-0 pl-2">
            <h1 className=" text-white  mt-5 text-uppercase ">
              I'm a<br></br> frontend <br></br> developer
            </h1>
            <Link to="/Works">Works</Link>
          </div>

          <div className="col-12 col-lg-1 d-lg-flex justify-content-end bg-warning ">
            <SocialIcons />
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default Home;
