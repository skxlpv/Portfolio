import React from "react";

export default function Image(props){
    let hoverClassName = props.isHoverable? "image-hover" : null

    return(
        <>
            <img className={hoverClassName} style={props.imgStyle} src={props.imgSrc} alt=""></img>
        </>
    )
}