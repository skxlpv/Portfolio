import React from 'react'
import '../styles/PageTitle.css'

export default function PageTitle(props){
    return(
        <div className='title-container'>
            <h1 className='title-title'>{props.title}</h1>
        </div>
    )
}