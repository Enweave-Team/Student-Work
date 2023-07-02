import React, {useEffect} from 'react';
import './AboutUs.scss';
import AboutUsComponent from "../Components/AboutUs/AboutUsComponent";
import WhyWe from "../Components/WhyWe/WhyWe";
import WorkProcess from "../Components/WorkProcess/WorkProcess";
import JoinOurTeam from "../Components/JoinInOurTeam/JoinOurTeam";
import OrderAdvance from "../Components/OrderInAdvance/OrderAdvance";
import Footer from "../Components/Footer/Footer";
import {WhyWeData} from "../Components/WhyWe/WhyWeData";

interface PageProps {
    onPageChange: (page: string) => void;
}

const AboutUs = ({onPageChange}: PageProps) => {

    useEffect(() => {
        onPageChange('Про нас');
    }, [onPageChange]);

    return (
        <div className='wrapper-aboutUs'>
            <span className='span-article'>Про нас</span>
            <AboutUsComponent article='Хто ми?'/>
            <WhyWe data={WhyWeData}/>
            <WorkProcess/>
            <JoinOurTeam/>
            <OrderAdvance/>
            <Footer/>
        </div>
    );
};

export default AboutUs;