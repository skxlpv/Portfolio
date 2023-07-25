import React from "react";
import '../styles/components/Panel.css'

import Image from "./Image";

export default function PanelLeft(props){
    return(
        <div className="panel-container">
            <div className="panel-textbox">
                <h1>{props.title}</h1>
                <p>
                    {props.description}
                </p>
            </div>

            <div className="panel-image">
                <Image 
                    imgStyle={props.imgStyle}
                    imgSrc={props.img}
                    isHoverable={props.isImageHoverable}
                />
            </div>

        </div>
    )
}