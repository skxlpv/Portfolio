import React, {useEffect} from "react"
import PageTitle from "../components/PageTitle"
import PanelLeft from "../components/PanelLeft"

function About(props){
    useEffect(() => {
        props.setNavbarShadow('rgba(86, 0, 120, 0.8)')
    }, [props])

    return(
        <div className="about-container">
            <PageTitle title={props.title}/>
            <q><i>Life is beautiful not because of the things we see or do.<br></br>Life is beautiful because of the people we meet.</i></q>
            <b><p style={{'margin-top':'5px'}}>❞Simon Sinek</p></b>

            <PanelLeft
                title='Let`s meet!👋'
                description='
                I am a university student, who is truly passionate about web-development, computer science, game development and programming in a whole.
                I love creating things, seeing them come to life, watching them grow, also coffee.
                Glad to see you, too!
                '
            />
        </div>
    )
}

export default About;