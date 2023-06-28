import React, { useEffect } from "react"
import PageTitle from "../components/PageTitle"
import PanelLeft from "../components/PanelLeft";
import PanelRight from "../components/PanelRight"

import Coding from '../images/coding.png'
import Information from '../images/information.png'

function Home(props){
    useEffect(() => {
        props.setNavbarShadow('rgba(0, 5, 255, 0.8)')
    }, [props])

    return(
        <div className="home-container">
            <PageTitle title={props.title}/>
            <p><i>Let's get started!</i></p>

            <PanelLeft 
                title='What is it all about?'
                description='
                The website is designed to provide information about the author
                in a more modern way. At least, that`s what has been planned ¯\_(ツ)_/¯
                I`ve always thought meeting with a person should be an expirience,
                not just another record in a database, so here we come!
                '
                textPosition='left'
                imgPath={Coding}
            />
            <PanelRight 
                title='How does it work?'
                description='
                All the provided information was divided into smaller pieces 
                and put into separate pages for the convinience.
                You can access desired info by clicking on the link in the top right corner.
                So let`s get started, shall we?)
                '
                textPosition='right'
                imgPath={Information}
            />
        </div>
    )
}

export default Home;