import React from "react";
import '../styles/Footer.css'

import Telegram from '../images/Telegram.png'
import Instagram from '../images/Instagram.png'
import Phone from '../images/Phone.png'
import Github from '../images/Github.png'

export default function Footer(props){
    return(
        <div style={{"boxShadow": `0px -5px 40px 1px ${props.navbarShadow}`}} className="footer-container">
            <h1>Say Hi!👋</h1>
            <div className="column">
                <h4 className="column-item">
                    <a className="column-item-anchor" href="https://t.me/skxlpv"><img src={Telegram} alt=""></img></a>
                    Telegram: <a className="column-item-anchor" href="https://t.me/skxlpv">skxlpv</a>
                </h4>
                <h4 className="column-item">
                    <a className="column-item-anchor" href="https://www.instagram.com/skxlpv/"><img src={Instagram} alt=""></img></a>
                    Instagram: <a className="column-item-anchor" href="https://www.instagram.com/skxlpv/">skxlpv</a>
                </h4>
                <h4 className="column-item">
                    <a className="column-item-anchor" href="https://github.com/skxlpv"><img src={Github} alt=""></img></a>
                    Github: <a className="column-item-anchor" href="https://github.com/skxlpv">skxlpv</a>
                </h4>
                <h4 className="column-item"><img src={Phone} alt=""></img>Phone: +380965639681</h4>
            </div>
        </div>
    )
}