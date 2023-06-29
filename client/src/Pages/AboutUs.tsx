import React, {useEffect} from 'react';
import './AboutUs.scss';
import AboutUsComponent from "../Components/AboutUs/AboutUsComponent";
import WhyWe from "../Components/WhyWe/WhyWe";
import WorkProcess from "../Components/WorkProcess/WorkProcess";
import JoinOurTeam from "../Components/JoinInOurTeam/JoinOurTeam";
import OrderAdvance from "../Components/OrderInAdvance/OrderAdvance";
import Footer from "../Components/Footer/Footer";

interface Page2Props {
    onPageChange: (page: string) => void;
}

const AboutUs = ({onPageChange}: Page2Props) => {

    useEffect(() => {
        onPageChange('Про нас');
    }, [onPageChange]);

    return (
        <div id='aboutUs' className='wrapper-aboutUs'>
            <span className='span-article-aboutUs'>Про нас</span>
            <AboutUsComponent article='Хто ми?'/>
            <WhyWe/>
            <WorkProcess/>
            <JoinOurTeam/>
            <OrderAdvance/>
            <Footer/>
        </div>
    );
};

export default AboutUs;