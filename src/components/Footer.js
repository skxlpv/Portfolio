import React from "react";
import '../styles/components/Footer.css'

import Telegram from '../images/icons/Telegram.png'
import Instagram from '../images/icons/Instagram.png'
import Github from '../images/icons/Github.png'
import Email from '../images/icons/email.png'
import Phone from '../images/icons/Phone.png'

export default function Footer(props){

    function copyNumber(){
        navigator.clipboard.writeText("+380965639681")
        alert('Phone number has been coppied!')
    }

    function copyEmail(){
        navigator.clipboard.writeText("skxlpv@gmail.com")
        alert('Email has been coppied!')
    }

    let buttonStyle = {
        'border':'none',
        'backgroundColor':'rgba(0,0,0,0)',
        'padding':'0',
        'cursor': 'pointer'
    }

    return(
        <div style={{"boxShadow": `0px -5px 40px 1px ${props.navbarShadow}`}} className="footer-container">
            <h1>Say Hi!👋</h1>
            <div className="column">
                <h4 className="column-item">
                    <a className="column-item-anchor" href="https://t.me/skxlpv">
                        <img src={Telegram} alt=""></img>
                    </a>
                </h4>
                <h4 className="column-item">
                    <a className="column-item-anchor" href="https://www.instagram.com/skxlpv/">
                        <img src={Instagram} alt=""></img>
                    </a>
                    
                </h4>
                <h4 className="column-item">
                    <a className="column-item-anchor" href="https://github.com/skxlpv">
                        <img src={Github} alt=""></img>
                    </a>
                </h4>
                <h4 className="column-item">
                    <button style={buttonStyle} onClick={copyEmail}>
                        <img src={Email} alt=""></img>
                    </button>
                </h4>
                <h4 className="column-item">
                    <button style={buttonStyle} onClick={copyNumber}>
                        <img src={Phone} alt=""></img>
                    </button>
                </h4>
            </div>
        </div>
    )
}