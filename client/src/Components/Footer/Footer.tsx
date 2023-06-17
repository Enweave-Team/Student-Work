import React from 'react';
import {ReactComponent as LogoFooter} from "../../assets/logoFooter.svg";
import {ReactComponent as TelegramLogo} from "../../assets/telegram.svg";
import {ReactComponent as InstagramLogo} from "../../assets/instagram.svg";
import './Footer.scss';

const Footer = () => {
    return (
        <div className='wrapper-footer'>
            <div className='footer-item'>
                <LogoFooter/>
                <div className='footer-icon'>
                    <div className='logo-circle'><TelegramLogo className='logo'/></div>
                    <div className='logo-circle'><InstagramLogo className='logo'/></div>
                </div>
            </div>
            <span className='span-footer'>Student Helper</span>
            <p>example@gmail.com</p>
            <p>+(380)-97-711-1111</p>
            <div className='copyright-block'>
                <nav className='nav-footer'>
                    <p>Головна сторінка</p>
                    <p>Про нас</p>
                    <p>Послуги</p>
                    <p>Відгуки</p>
                    <p>Пошук</p>
                </nav>
                <span>Copyright 2023. All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;