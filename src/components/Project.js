import React from "react";
import "../styles/components/Project.css"

import Image from '../components/Image'

export default function Project(props){
    let directionClass = props.directionClass? `project-div ${props.directionClass}` : null

    return(
        <div className={directionClass}>
            <div className="project-image">
                <a href={props.projectLink}>
                    <Image
                        imgSrc={props.imgSrc}
                    />
                </a>
            </div>
            <div className="project-text">
                <h1 className="project-title">
                    <a href={props.projectLink}>{props.title}</a>
                </h1>
                <p className="project-description">{props.description}</p>
            </div>
        </div>
    )
}