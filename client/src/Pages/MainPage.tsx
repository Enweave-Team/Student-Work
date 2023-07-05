import React, {useEffect} from 'react';
import './MainPage.scss';
import Button from "../Components/Button/Button";
import {offers} from './Offers';
import OffersItem from "../Components/OffersItem/OffersItem";
import WhyWe from "../Components/WhyWe/WhyWe";
import ReviewsCard from "../Components/Reviews/ReviewsCard";
import JoinOurTeam from "../Components/JoinInOurTeam/JoinOurTeam";
import OrderAdvance from "../Components/OrderInAdvance/OrderAdvance";
import Footer from "../Components/Footer/Footer";
import WorkProcess from "../Components/WorkProcess/WorkProcess";
import AboutUsComponent from "../Components/AboutUs/AboutUsComponent";
import PriceCalculating from "../Components/PriceCalculating/PriceCalculating";
import HeaderSample from "../Components/ArticleSample/HeaderSample";
import {WhyWeData} from "../Components/WhyWe/WhyWeData";


interface PageProps {
    onPageChange: (page: string) => void;
}

const MainPage = ({onPageChange}: PageProps) => {

    const hArticle = ['Студентські роботи на  замовлення']

    const pText = ['Виконуємо різні види студентських робіт, виконані професійними і досвічченими виконавцями.']


    useEffect(() => {
        onPageChange('Головна сторінка');
    }, [onPageChange]);


    return (
        <div className='wrapper-main'>
            <HeaderSample text={pText} article={hArticle} buttonText='Замовити роботу'/>
            <PriceCalculating/>
            <div className='offers'>
                <span className='span-sub-article'>Наші послуги</span>
                <div className='offers-item'>
                    {offers.map((offer, index) => (
                        <OffersItem key={index + offer.id} id={offer.id} price={offer.price} time={offer.time}
                                    workName={offer.workName}/>
                    ))}
                </div>
            </div>
            <Button text='Повний перелік робіт'/>
            <AboutUsComponent article='Про нас'/>
            <WhyWe data={WhyWeData}/>
            <WorkProcess/>
            <ReviewsCard/>
            <JoinOurTeam/>
            <OrderAdvance/>
            <Footer/>
        </div>
    );

};

export default MainPage;