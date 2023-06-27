import React from "react"
import PageTitle from "../components/PageTitle"
import '../styles/Home.css'

const Home = (props) => (
    <div className="home-container">
        <PageTitle title={props.title}/>
        <div className="home-content-left">
            <h1>Where am I?</h1>
            <p className="home-paragraph">
                
            </p>
        </div>
    </div>
)

export default Home;