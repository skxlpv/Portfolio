import React from "react"
import PageTitle from "../components/PageTitle"
import PanelLeft from "../components/PanelLeft";
import PanelRight from "../components/PanelRight"

const Home = (props) => (
    <div className="home-container">
        {/* Title */}
        <PageTitle title={props.title}/>
        <p><i>Let's get started!</i></p>

        {/* Main content */}
        <PanelLeft 
            title='Where am I?'
            description='
            Why bother writing boring CV documents to introduce yourself, 
            when you can create a product, which will take care of it?'
            textPosition='left'
            imgPath={null}
        />
        <PanelRight 
            title='Why the website?'
            description='
            Let me ask a counter question: why bother writing boring CV documents to introduce yourself, 
            when you can create a product, which will fully take care of it? :^)
            I`ve always thought about storing all my career information in one single place 
            due to it`s convinience.
            '
            textPosition='right'
            imgPath={null}
        />
    </div>
)

export default Home;