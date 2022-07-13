import React from 'react'

const ProjectCat = ({ buttons, filter }) => {
    return (
        <div className="container overflow-auto py-2">
            {
                buttons.map((cat, i) => {
                    return <div key={i} type="button" onClick={() => filter(cat)} className="btn btn-light btn-sm active mr-2"><h5>{cat}</h5></div>
                })
            }
        </div>
    )
}

export default ProjectCat;