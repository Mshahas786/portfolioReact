import React from 'react'
import './Pages.css';
import SocialIcons from '../Components/SocialIcons'
import img from '../Images/05.jpg';
import MuhammedShahas from '../Images/MuhammedShahas.png';


const Home = () => {
    return (
        <div className="bgImg"  style={{ backgroundImage: `url(${img})` }}>
        <h1 className="text-white">hello World</h1>
            <img src={MuhammedShahas} alt=""/>
            <SocialIcons />
        </div>
    )
}

export default Home;


