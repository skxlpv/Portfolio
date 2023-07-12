import React from 'react'
import '../styles/components/Navbar.css'

export default function Navbar(props){
    return(
        <div style={{"boxShadow": `0px -10px 40px 1px ${props.navbarShadow}`}} className='navbar-container'>
            <div className='navbar-list-container'>
                <ul className='navbar-list'>
                    <li><a href='/'>Let's meet</a></li>
                    <li><a href='projects'>Projects</a></li>
                    <li><a href='resume'>Resume</a></li>
                </ul>
            </div>
        </div>
    )
}