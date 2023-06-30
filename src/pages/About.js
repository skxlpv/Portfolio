import React, {useEffect} from "react"
import parse from 'html-react-parser';
import PageTitle from "../components/PageTitle"
import PanelLeft from "../components/PanelLeft"
import PanelRight from "../components/PanelRight"

import PersonSit from "../images/person_sit.jpg"
import PersonFace from "../images/person_face.jpg"

function About(props){
    useEffect(() => {
        props.setNavbarShadow('rgba(0, 5, 255, 0.8)')
    }, [props])

    return(
        <div className="about-container">
            <PageTitle title={props.title}/>
            <q><i>Life is beautiful not because of the things we see or do.<br></br>Life is beautiful because of the people we meet.</i></q>
            <b><p style={{'margin-top':'5px'}}>❞Simon Sinek</p></b>

            <PanelLeft
                title='Let`s meet!👋'
                description='
                My name is Sasha! A 20 y.o. university student, who is truly passionate about web-development, computer science, game development and programming in a whole.
                I love creating things, seeing them come to life, watching them grow, also coffee.
                Glad to see you, too!'
                img={PersonFace}
                imgStyle={{'width':'350px', 'box-shadow':'5px 5px 8px 0.1px black'}}
                isImageHoverable={true}
            />
            <PanelRight
                title='Skills and technologies'
                description=''
            />
        </div>
    )
}

export default About;