import React from 'react'
import { motion } from "framer-motion";
import '../App.css';



const About = () => {


    return (

        <motion.div
        initial={{ x:-100, scale:0, opacity: 0 }}
          animate={{ x:0, scale:1, opacity: 1 }}
          transition={{ delay: .1 }}
           className="container h-75 overflow-auto  d-flex flex-column justify-content-center ">   

           <h2 className="text-white aboutPara">My enthusiasm towards understanding and widening my skills in the field of web
                development has helped me to become a full-stack developer. Passionate towards
                learning and adapting new changes according to market requirements. Confident
                in front-end development, UX design, also well used with Javascript, React and love
                to create unique and professional styles.</h2>       
        </motion.div>

    );
};

export default About;
