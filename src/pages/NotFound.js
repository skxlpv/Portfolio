import React, {useEffect} from "react"
import PageTitle from "../components/PageTitle"

function NotFound(props){
    useEffect(() => {
        props.setNavbarShadow('rgb(180, 0, 0)')
    }, [props])

    return(
    <>
        <PageTitle title={props.title}/>
        <p>It seems like the page you're looking for does not exist ¯\_(ツ)_/¯</p>
    </>
    )
}

export default NotFound;