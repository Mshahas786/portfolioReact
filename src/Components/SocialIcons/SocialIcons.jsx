import React, {useState} from "react";
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion"

const SocialIcons = () => {

  const [show, setShow]= useState(false);
  const [twitter, setTwitter]= useState(false);


  return (
    <div className="SocialIcons d-flex flex-lg-column justify-content-center">
     <motion.div initial={ {opacity: 0 , }} animate={{opacity: 1 , }} transition={ {delay: .2} } whileHover={{ scale: 1.4 }}> <SocialIcon  className="m-2" bgColor="#ffc107" fgColor="#000" url="https://github.com/Mshahas786"/></motion.div>
     <motion.div initial={ {opacity: 0 , y: -90 }} animate={{opacity: 1 , y: 0 }} transition={ {delay: .5} } whileHover={{ scale: 1.4 }} onMouseEnter={() => setShow(!show)} onMouseLeave={() => setShow(!show)} ><SocialIcon className="m-2" bgColor="#ffc107" fgColor={ show ?  "#2164f4" : "#000" } url="https://www.linkedin.com/in/muhammed-shahas" /></motion.div>
     <motion.div initial={ {opacity: 0 , y: -110 }} animate={{opacity: 1 , y: 0 }} transition={ {delay: 1} } whileHover={{ scale: 1.4 }} onMouseEnter={() => setTwitter(!twitter)} onMouseLeave={() => setTwitter(!twitter)} ><SocialIcon  className="m-2" bgColor="#ffc107" fgColor={ twitter ? "#1DA1F2" : "#000" } url="http://twitter.com/muhammedshah786" /></motion.div>
    </div>
  );
};



export default SocialIcons;
