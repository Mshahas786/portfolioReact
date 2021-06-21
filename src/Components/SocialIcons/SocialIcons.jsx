import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const SocialIcons = () => {
  // const [github, setGithub] = useState(false);
  const [show, setShow] = useState(false);
  const [twitter, setTwitter] = useState(false);

  return (
    <div className="SocialIcons d-flex flex-lg-column justify-content-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div whileHover={{ scale: 1.4 }}>
          <SocialIcon
            // onMouseEnter={() => setGithub(!github)}
            // onMouseLeave={() => setGithub(!github)}
            className="m-2"
            bgColor="#0000"
            fgColor="#ffff"
            url="https://github.com/Mshahas786"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div whileHover={{ scale: 1.4 }}>
          <SocialIcon
            onMouseEnter={() => setShow(!show)}
            onMouseLeave={() => setShow(!show)}
            className="m-2"
            bgColor="#0000"
            fgColor={show ? "#2164f4" : "#ffff"}
            url="https://www.linkedin.com/in/muhammed-shahas"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -110 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div whileHover={{ scale: 1.4 }}>
          <SocialIcon
            onMouseEnter={() => setTwitter(!twitter)}
            onMouseLeave={() => setTwitter(!twitter)}
            className="m-2"
            bgColor="#0000"
            fgColor={twitter ? "#1DA1F2" : "#ffff"}
            url="http://twitter.com/muhammedshah786"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SocialIcons;
