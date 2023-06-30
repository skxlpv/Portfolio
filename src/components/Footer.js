import React from "react";
import '../styles/Footer.css'

import Telegram from '../images/icons/Telegram.png'
import Instagram from '../images/icons/Instagram.png'
import Phone from '../images/icons/Phone.png'
import Github from '../images/icons/Github.png'

export default function Footer(props){
    return(
        <div style={{"boxShadow": `0px -5px 40px 1px ${props.navbarShadow}`}} className="footer-container">
            <h1>Say Hi!👋</h1>
            <div className="column">
                <h4 className="column-item">
                    <a className="column-item-anchor" href="https://t.me/skxlpv">
                        <img src={Telegram} alt=""></img>Telegram: skxlpv
                    </a>
                </h4>
                <h4 className="column-item">
                    <a className="column-item-anchor" href="https://www.instagram.com/skxlpv/">
                        <img src={Instagram} alt=""></img>Instagram: skxlpv
                    </a>
                    
                </h4>
                <h4 className="column-item">
                    <a className="column-item-anchor" href="https://github.com/skxlpv">
                        <img src={Github} alt=""></img>Github: skxlpv
                    </a>
                </h4>
                <h4 className="column-item"><img src={Phone} alt=""></img>Phone: +380965639681</h4>
            </div>
        </div>
    )
}