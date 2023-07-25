import React, {useEffect} from "react"
import {botDescription} from '../pages/contents/ProjectsContent'

import Project from "../components/Project"
import "../styles/pages/ProjectsPage.css"

import TelegramBotImage from '../images/projects/bot.png'

function Projects(props){
    useEffect(() => {
        props.setNavbarShadow('#0080FF')
    }, [props])

    return(
        <div className="projects-div">
            <p><i>Progress requires effort and patience. <br></br>More cool stuff coming soon!</i></p>
            <Project
                imgSrc={TelegramBotImage}
                title='University Telegram bot'
                description={botDescription}
                projectLink="https://t.me/KDU_scheduler_bot"
                directionClass='flex-row'
            />
        </div>
    )
}

export default Projects;