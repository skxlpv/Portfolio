import React, {useEffect} from "react"

import {botDescription} from '../pages/contents/ProjectsContent'

import Project from "../components/Project"
import "../styles/pages/ProjectPage.css"

import BotImage from '../images/projects/bot.png'

function Projects(props){
    useEffect(() => {
        props.setNavbarShadow('rgba(0, 100, 60)')
    }, [props])

    return(
        <div>
            <div className="projects-container">
                <a href="https://t.me/KDU_scheduler_bot">
                    <Project 
                        title='Telegram chatbot'
                        img={BotImage}
                        description={botDescription}
                    />
                </a>
            </div>
        </div>
    )
}

export default Projects;