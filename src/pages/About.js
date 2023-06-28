import React, {useEffect} from "react"
import PageTitle from "../components/PageTitle"

function About(props){
    useEffect(() => {
        props.setNavbarShadow('rgba(86, 0, 120, 0.8)')
    }, [props])

    return(
        <PageTitle title={props.title}/>
    )
}

export default About;