import React from 'react'
import '../styles/Navbar.css'

export default function Navbar(props){
    return(
        <div style={{"box-shadow": `0px -10px 30px 1px ${props.navbarShadowColor}`}} className='navbar-container'>
            <div className='navbar-list-container'>
                <ul className='navbar-list'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='about'>About</a></li>
                    <li><a href='projects'>Projects</a></li>
                </ul>
            </div>
        </div>
    )
}