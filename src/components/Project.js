import React from "react";
import "../styles/components/Project.css"

import Image from '../components/Image'

export default function Project(props){
    return(
        <div className="project-box">
            <Image 
                imgStyle={props.imgStyle}
                imgSrc={props.img}
                isHoverable={props.isImageHoverable}
            />
            <div className="box-title">
                <h3>{props.title}</h3>
            </div>
            
            <div className="box-description">
                <p>{props.description}</p>
            </div>
        </div>
    )
}