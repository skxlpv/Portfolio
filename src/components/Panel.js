import React from "react";
import '../styles/components/Panel.css'

import Image from "./Image";

export default function Panel(props){
    return(
        <div className="home-content-panel">
            <div className="home-content-left">
                <h1>{props.title}</h1>
                <p className="home-paragraph-left">
                    {props.description}
                </p>
            </div>

            <div className="home-content-right">
                <Image 
                    imgStyle={props.imgStyle}
                    imgSrc={props.img}
                    isHoverable={props.isImageHoverable}
                />
            </div>
        </div>
    )
}