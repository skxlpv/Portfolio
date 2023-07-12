import React from 'react'
import '../styles/components/PageTitle.css'

export default function PageTitle(props){
    return(
        <div className='title-container'>
            <u><h1 className='title-title'>{props.title}</h1></u>
        </div>
    )
}