import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div className="SocialIcons d-flex flex-lg-column justify-content-center">
      <SocialIcon className="m-2" bgColor="#ffc107" fgColor="#000" url="https://github.com/Mshahas786" />
      <SocialIcon className="m-2" bgColor="#ffc107" fgColor="#000" url="https://www.linkedin.com/in/muhammed-shahas" />
      <SocialIcon className="m-2" bgColor="#ffc107" fgColor="#000" url="http://twitter.com/muhammedshah786" />
    </div>
  );
};

export default SocialIcons;
