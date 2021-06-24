import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const About = () => {


    return (

        <motion.div
        initial={{ x:-100, scale:0, opacity: 0 }}
          animate={{ x:0, scale:1, opacity: 1 }}
          transition={{ delay: .1 }}
           className="container bg-danger h-75 overflow-auto">          
        </motion.div>

    );
};

export default About;
