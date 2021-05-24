import React from "react";
import "./Pages.css";

import Footer from "../Components/Footer/Footer";
import img from "../Images/05.jpg";
import MuhammedShahas from "../Images/MuhammedShahas.png";

const Home = () => {
  return (
    <div className="Home" style={{ backgroundImage: `url(${img})` }}>
      <h1 className="text-white">Muhammed Shahas</h1>

      
      

      <div class="container">
        <div class="row">
          <div class="col-3 col-xs-12 bg-success"><img src={MuhammedShahas} alt="Muhammed shahas" /></div>
          <div class="col-8 bg-danger">2 of 3 (wider)</div>
          <div class="col"><Footer /></div>
        </div>
      </div>
    </div>

  );
};

export default Home;
