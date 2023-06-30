import React from "react";
import '../styles/Panel.css'

export default function PanelRight(props){
    let hasImage = props.img? true : false
    let hoverClassName = props.isImageHoverable? "image-hover" : null

    return(
        <div className="home-content-panel">
            <div className="home-content-left">
                {hasImage? <img className={hoverClassName} src={props.img} alt=""></img> : null}
            </div>
    
            <div className="home-content-right">
                <h1>{props.title}</h1>
                <p className="home-paragraph-right">
                    {props.description}
                </p>
            </div>
        </div>
    )
}