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

    const letsMeetDescription = `
        My name is Sasha! A 20 y.o. university student, who is truly passionate about web-development, computer science, game development and programming in a whole.
        I love creating things, seeing them come to life, watching them grow, <br><font size=3>also coffee</font>.
        Glad to see you, too!`

    const skillsAndTechnologiesDescription = `
    <div style="display:flex; justify-content: flex-end">
        <ul style="
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            align-items: flex-start;
            margin:0;
        ">
            <li><b>Python: </b>Intermidiate level <small>(~3 years experience;)</small></li>
            <li><b>Django: </b>Intermidiate level <small>(~2 years experience;)</small></li>
            <li><b>Ruby: </b>Basic level <small>(1< year experience;)</small></li>
            <li><b>Ruby on Rails: </b>Basic level <small>(1< year experience;)</small></li>
            <li><b>Javascript: </b>Basic level <small>(~1 year experience;)</small></li>
            <li><b>React: </b>Basic level <small>(~1 year experience;)</small></li>
            <li><b><i>Additionally</i>:</b> Docker, Github, PostgreSQL.</li>
        </ul>
    </div>
    `

    return(
        <div className="about-container">
            <PageTitle title={props.title}/>
            <q><i>Life is beautiful not because of the things we see or do.<br></br>Life is beautiful because of the people we meet.</i></q>
            <b><p style={{'margin-top':'5px'}}>❞Simon Sinek</p></b>

            <PanelLeft
                title='Let`s meet!👋'
                description={parse(letsMeetDescription)}
                img={PersonFace}
                imgStyle={{'width':'350px', 'box-shadow':'5px 5px 8px 0.1px black'}}
                isImageHoverable={true}
            />
            <PanelRight
                title='Skills and technologies💻'
                description={parse(skillsAndTechnologiesDescription)}
            />
        </div>
    )
}

export default About;