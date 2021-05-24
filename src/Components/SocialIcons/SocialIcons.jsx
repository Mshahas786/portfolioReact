import React from "react";
import { SocialIcon } from "react-social-icons";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="SocialIcons d-flex flex-lg-column bg-warning justify-content-center">
      <SocialIcon className="m-2"  url="https://github.com/Mshahas786" />
      <SocialIcon className="m-2" url="https://www.linkedin.com/in/muhammed-shahas" />
      <SocialIcon className="m-2" network="twitter" />
    </div>
  );
};

export default SocialIcons;
