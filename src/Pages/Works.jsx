import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar"
import WorkData from "../Data/WorkData";

const Works = () => {

    const [items, setItems] = useState(WorkData);

    const filterItem = (categItem) => {
        const updatedItems = WorkData.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (

        <motion.div
        initial={{ x:-100, scale:0, opacity: 0 }}
          animate={{ x:0, scale:1, opacity: 1 }}
          transition={{ delay: .1 }}
           className="container bg-secondary h-75 overflow-auto">

<Navbar link="/" name="Home" link1="/About" name1="Me" />
            

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {
                    items.map((elem) => {
                        const { id, img, website } = elem;

                        return (

                            <div class="col mh-25">
                           
                                <div class="card">
                                <a href={website}>
                                    <img src={img}class="card-img-top" alt={id}></img>
                                    {/* <div class="card-footer">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                        
                                    </div> */}
                                    </a>
                                </div>
                            </div>
                        )
                    })}

            </div>

        </motion.div>

    );
};

export default Works;
