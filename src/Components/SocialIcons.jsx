import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div className="bg-danger">
      <SocialIcon url="https://github.com/Mshahas786" />
      <SocialIcon url="https://www.linkedin.com/in/muhammed-shahas" />
      <SocialIcon network="twitter" />
    </div>
  );
};

export default SocialIcons;
