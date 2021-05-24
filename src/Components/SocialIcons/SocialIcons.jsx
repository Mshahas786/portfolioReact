import React from "react";
import { SocialIcon } from "react-social-icons";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="col-xl-1 SocialIcons d-flex flex-xl-column bg-warning justify-content-center align-items-center">
      <SocialIcon className="m-2"  url="https://github.com/Mshahas786" />
      <SocialIcon className="m-2" url="https://www.linkedin.com/in/muhammed-shahas" />
      <SocialIcon className="m-2" network="twitter" />
    </div>
  );
};

export default SocialIcons;
