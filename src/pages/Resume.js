import {React, useEffect} from "react";

import '../styles/pages/ResumePage.css'

import PageTitle from "../components/PageTitle";

export default function Resume(props){
    useEffect(() => {
        props.setNavbarShadow('rgb(40, 80, 190)')
    }, [props])

    return (
        <div>
            <PageTitle title={props.title}/>

            <div className="pdf-container">
                <iframe
                title='cv'
                className="pdf-object"
                src='/cv.pdf#toolbar=0'
                type="application/pdf"
                ></iframe>
            </div>
        </div>
      );
}