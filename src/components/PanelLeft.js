import React from "react";
import '../styles/Panel.css'

export default function PanelLeft(props){
    let hasImage = props.imgPath? true : false
    return(
        <div className="home-content-panel">
            <div className="home-content-left">
                <h1>{props.title}</h1>
                <p className="home-paragraph-left">
                    {props.description}
                </p>
            </div>

            <div className="home-content-right">
                {hasImage? <img src={props.imgPath} alt=""></img> : null}
            </div>
        </div>
    )
}