import React from "react";
import '../styles/components/Image.css'

export default function Image(props){
    let hover = props.isHoverable? "image-hover" : null

    return(
        <img className={hover} src={props.imgSrc} alt=""></img>
    )
}