import React from "react"
import PageTitle from "../components/PageTitle"
import PanelLeft from "../components/PanelLeft";
import PanelRight from "../components/PanelRight"

import Coding from '../images/coding.png'
import Information from '../images/information.png'

const Home = (props) => (
    <div className="home-container">
        <PageTitle title={props.title}/>
        <p><i>Let's get started!</i></p>

        <PanelLeft 
            title='What is it all about?'
            description='
            The website is designed to provide information about the author
            in a more modern way. At least, that`s what has been planned ¯\_(ツ)_/¯
            I`ve always thought meeting with a person should be an expirience,
            not just another record in a database.
            '
            textPosition='left'
            imgPath={Coding}
        />
        <PanelRight 
            title='How does it work?'
            description='
            All the provided information was divided into smaller pieces and put into separate pages.
            You can access desired info by clicking on the link in the top right corner.
            '
            textPosition='right'
            imgPath={Information}
        />
        <h1>So let's get started, shall we?</h1>
    </div>
)

export default Home;