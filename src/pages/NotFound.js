import React from "react"
import PageTitle from "../components/PageTitle"

const NotFound = (props) => (
<>
    <PageTitle title={props.title}/>
    <p>It seems like the page you're looking for does not exist ¯\_(ツ)_/¯</p>
</>
)

export default NotFound;