import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
           className="container h-75 overflow-auto">


            

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {
                    items.map((elem) => {
                        const { id, img, website } = elem;

                        return (

                            <div className="col m-0 p-1">
                           
                                <div className="">
                                <a href={website}>
                                    <img src={img} className="card-img-top" alt={id}></img>
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