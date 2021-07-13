import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import "./Pages.css";

// import img from "../Images/05.jpg";
import SocialIcons from "../Components/SocialIcons/SocialIcons";
// import Works from "./Works";

const Home = () => {
  return (
    <div className="container h-75">

      <div className="row h-100">
        {/* <div className="col-1 col-lg-3 p-0 ">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            src={MuhammedShahas} alt="Muhammed shahas" />
        </div> */}

        <div className="col-12 col-lg-11 d-flex flex-column justify-content-center h-100">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className=" text-white"
            style={{ fontSize:"4rem" }}
          >
            Hello,<br /> I'm Muhammed Shahas
            <br /> A Front-end Developer.
          </motion.h1>
        </div>

        <div className="col-12 col-lg-1 d-lg-flex justify-content-end ">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Home;
