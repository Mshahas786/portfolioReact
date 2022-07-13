import React, { useState } from 'react'
import ProjectsDatas from '../Data/ProjectDatas.js';
import Projectcat from '../Components/Project/ProjectCat';
import ProjectItems from '../Components/Project/ProjectItems';

const allCategories = ['All', ...new Set(ProjectsDatas.map(item => item.category))];

console.log(allCategories);


const Projects = () => {

    const [projects, setProjects] = useState(ProjectsDatas);
    const [buttons, setButtons] = useState(allCategories);

    //Filter Function
    const filter = (catBtn) => {

        if (catBtn === 'All') {
            setProjects(ProjectsDatas);
            return;
        }

        const filteredData = ProjectsDatas.filter(item => item.category === catBtn);
        setProjects(filteredData)
    }

    return (
        <>
            <Projectcat buttons={buttons} filter={filter} />
            <ProjectItems items={projects} />
        </>

    )
}

export default Projects;