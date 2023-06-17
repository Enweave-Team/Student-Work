import React from 'react';
import './AboutUs.scss';
import AboutUsComponent from "../Components/AboutUs/AboutUsComponent";
const AboutUs = () => {
    return (
        <div id='aboutUs' className='wrapper-aboutUs'>
            <span className='span-article'>Про нас</span>
                <AboutUsComponent article='Хто ми?'/>
        </div>
    );
};

export default AboutUs;