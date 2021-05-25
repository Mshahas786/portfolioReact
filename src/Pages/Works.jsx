import React, { useState } from 'react'
import { Link } from "react-router-dom";
import WorkData from "../Components/WorkData";

const Works = () => {

    const [items, setItems] = useState(WorkData);

    const filterItem = (categItem) => {
        const updatedItems = WorkData.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (

        <div className="container bg-danger h-75 overflow-auto">
            <Link to="/">Home</Link>
            <h1>hello im a work page</h1>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {
                    items.map((elem) => {
                        const { id, img } = elem;

                        return (

                            <div class="col mh-25">
                                <div class="card">
                                    <img src={img} class="card-img-top" alt={id}></img>
                                    <div class="card-footer">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

            </div>

        </div>

    );
};

export default Works;
