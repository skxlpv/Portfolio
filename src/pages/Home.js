import React, { useEffect } from "react"
import parse from 'html-react-parser';

import PageTitle from "../components/PageTitle"
import PanelLeft from "../components/PanelLeft";
import PanelRight from "../components/PanelRight"

import Coding from '../images/icons/coding.png'
import Information from '../images/icons/information.png'

function Home(props){
    useEffect(() => {
        props.setNavbarShadow('rgba(0, 200, 0, 0.8)')
    }, [props])

    const whatIsItAllAboutDescription = `
    I've always thought meeting with a person should be an experience,
    not just another record in a database.
    The website is designed to present detailed information about the author
    and his work more creatively.
    <font size=2> Or at least, that's what has been planned ¯\\_(ツ)_/¯</font><br>
    Anyway, here we come!`

    const howDoesItWorkDescription = `
    All the information was divided into small pieces 
    and put on separate pages for convinience.
    <strong>To save your time, a page with a short resume 
    has been included to sum it all up.</strong><br>
    You can access the desired info by clicking on the link in the top-right corner.
    So let's get started, shall we?)
    `

    return(
        <div className="home-container">
            <PageTitle title={props.title}/>
            <p><i>Let's get started!</i></p>

            <PanelLeft 
                title='What is this all about?🤔'
                description={parse(whatIsItAllAboutDescription)}
                img={Coding}
            />
            <PanelRight 
                title='⚙️How does it work?'
                description={parse(howDoesItWorkDescription)}
                img={Information}
            />
        </div>
    )
}

export default Home;