import React, {useEffect} from "react"
import parse from 'html-react-parser';

import {letsMeetDescription} from '../pages/contents/AboutContent'

import Panel from "../components/Panel"

import PersonFace from "../images/other/person_face.png"
import HTML from "../images/icons/html.png"
import CSS_image from "../images/icons/css.png"
import JS from "../images/icons/javascript.png"
import REACT from "../images/icons/react.png"
import PYTHON from "../images/icons/python.png"
import DJANGO from "../images/icons/django.png"
import POSTGRESQL from "../images/icons/postgresql.png"

function About(props){
    useEffect(() => {
        props.setNavbarShadow('rgba(0, 0, 255)')
    }, [props])

    let technologyStackStyle = {
        'width':'60px',
        'height':'100%',
        'padding':'20px'
    }

    return(
        <div className="about-container">
            <Panel
                title='Let`s meet!👋'
                description={parse(letsMeetDescription)}
                img={PersonFace}
                isImageHoverable={true}
            />

            <div className="technology-stack">
                <h2>Technology stack:</h2>
                <img style={technologyStackStyle} src={HTML} alt=""></img>
                <img style={technologyStackStyle} src={CSS_image} alt=""></img>
                <img style={technologyStackStyle} src={JS} alt=""></img>
                <img style={technologyStackStyle} src={PYTHON} alt=""></img>
                <img style={technologyStackStyle} src={REACT} alt=""></img>
                <img style={technologyStackStyle} src={DJANGO} alt=""></img>
                <img style={technologyStackStyle} src={POSTGRESQL} alt=""></img>
            </div>
        </div>
    )
}

export default About;