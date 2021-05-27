import React from "react";
import  { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Pages.css";

// import img from "../Images/05.jpg";
import MuhammedShahas from "../Images/MuhammedShahascopy.png";
import SocialIcons from "../Components/SocialIcons/SocialIcons";
// import Works from "./Works";

const Home = () => {
  return (
    

      <div className="container shadow-lg h-75">
        <div className="row h-100">
          <motion.div 
          initial={{ x:-100, scale:0, opacity: 0 }}
          animate={{ x:0, scale:1, opacity: 1 }}
          transition={{ delay: .1 }}
          className="col-4 col-lg-3 p-0  bg-success ">
            <motion.img 
             initial={{ x:-100, opacity: 0 }}
             animate={{ x:0, opacity: 1 }}
             transition={{ delay: .5 }}
            src={MuhammedShahas} alt="Muhammed shahas" />
          </motion.div>

          <motion.div 
          initial={{ x:-200, scale:0, opacity: 0 }}
          animate={{ x:0, scale:1, opacity: 1 }}
          transition={{ delay: .2 }}
          className="col-8 col-lg-8 d-flex align-items-center bg-danger overflow-auto p-0 pl-2">
            <motion.h1
            initial={{ x:-100, opacity: 0 }}
            animate={{ x:0, opacity: 1 }}
            transition={{ delay: .5 }}
             className=" text-white  mt-5 text-uppercase ">
              I'm a<br/> frontend <br/> developer
            </motion.h1>
            <Link to="/Works">Work</Link>
          </motion.div>

          <motion.div
          initial={{ x:-100, scale:0, opacity: 0 }}
          animate={{ x:0, scale:1, opacity: 1 }}
          transition={{ delay: .3 }}
          className="col-12 col-lg-1 d-lg-flex justify-content-end bg-warning ">
            <SocialIcons />
          </motion.div>
        </div>
      </div>
  );
};

export default Home;
