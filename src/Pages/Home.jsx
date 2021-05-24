import React from "react";
import "./Pages.css";

import Footer from "../Components/Footer/Footer";
import img from "../Images/05.jpg";
import MuhammedShahas from "../Images/MuhammedShahascopy.png";
import SocialIcons from "../Components/SocialIcons/SocialIcons";

const Home = () => {
  return (
    <div className="Home bg-dark bg-gradient" 
    // style={{ backgroundImage: `url(${img})` }}
    >
      {/* <h1 className="text-white">Muhammed Shahas</h1> */}

      <div class="container bg-primary">

        <div class="row">

          <div class="col-5 col-lg-4 p-0 bg-dark">
            <img src={MuhammedShahas} alt="Muhammed shahas" />
          </div>

          <div class="col-7 col-lg-7 p-0 text-end">
          <p className="text-white fst-italic ">Im a frontend developer</p>
          </div>

          <div class="col-12 col-lg-1 d-lg-flex justify-content-end p-0">
            <SocialIcons/>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
