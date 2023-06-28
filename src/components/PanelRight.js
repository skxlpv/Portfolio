import React from "react";
import '../styles/Panel.css'

export default function PanelRight(props){

    let hasImage = props.imgPath? true : false
    return(
        <div className="home-content-panel">
            <div className="home-content-left">
                {hasImage? <img src={props.imgPath}></img> : null}
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