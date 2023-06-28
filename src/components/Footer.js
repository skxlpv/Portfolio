import React from "react";
import '../styles/Footer.css'

import Telegram from '../images/Telegram.png'
import Instagram from '../images/Instagram.png'
import Phone from '../images/Phone.png'

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="column">
                <h3 className="column-title">Contacts</h3>
                <h4 className="column-item"><img src={Telegram} alt=""></img>Telegram: @skxlpv</h4>
                <h4 className="column-item"><img src={Instagram} alt=""></img> Instagram: @skxlpv</h4>
                <h4 className="column-item"><img src={Phone} alt=""></img>Phone: +380965639681</h4>
            </div>
        </div>
    )
}