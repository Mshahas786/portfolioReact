import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar"
import "./Pages.css";

// import img from "../Images/05.jpg";
import MuhammedShahas from "../Images/MuhammedShahascopy.png";
import SocialIcons from "../Components/SocialIcons/SocialIcons";
// import Works from "./Works";

const Home = () => {
  return (


    <div className="container h-75">
    <Navbar link="/About" name="Me" link1="/Works" name1="Project" />


      <div className="row  h-100">


        <div className="col-1 col-lg-3 p-0 ">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            src={MuhammedShahas} alt="Muhammed shahas" />
        </div>

        <div className="col-11 col-lg-8 d-flex flex-column justify-content-center overflow-auto p-0 pl-5">


          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: .3 }}
            className=" text-white  mt-5  " style={{ fontFamily: 'Pattaya', fontSize: '6vh' }}>
            Hello, I'm Muhammed<br /> The Front-end Developer.
          </motion.h1>


          <div className=" d-flex justify-content-end">

        

         </div>
          
        </div>

        <div className="col-12 col-lg-1 d-lg-flex justify-content-end ">
          <SocialIcons />
        </div>


        
      </div>
    </div>
  );
};

export default Home;
