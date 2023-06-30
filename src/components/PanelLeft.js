import React from "react";
import '../styles/Panel.css'

export default function PanelLeft(props){
    let hasImage = props.img? true : false
    let hoverClassName = props.isImageHoverable? "image-hover" : null

    return(
        <div className="home-content-panel">
            <div className="home-content-left">
                <h1>{props.title}</h1>
                <p className="home-paragraph-left">
                    {props.description}
                </p>
            </div>

            <div className="home-content-right">
                {hasImage? <img className={hoverClassName} style={props.imgStyle} src={props.img} alt=""></img> : null}
            </div>
        </div>
    )
}