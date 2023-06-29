import React, {useEffect} from 'react';
import './MainPage.scss';
import Button from "../Components/Button/Button";
import CostCalc from "../Components/CostCalc/CostCalc";
import {offers} from './Offers';
import OffersItem from "../Components/OffersItem/OffersItem";
import WhyWe from "../Components/WhyWe/WhyWe";
import ReviewsCard from "../Components/Reviews/ReviewsCard";
import JoinOurTeam from "../Components/JoinInOurTeam/JoinOurTeam";
import OrderAdvance from "../Components/OrderInAdvance/OrderAdvance";
import Footer from "../Components/Footer/Footer";
import WorkProcess from "../Components/WorkProcess/WorkProcess";
import AboutUsComponent from "../Components/AboutUs/AboutUsComponent";


interface Page1Props {
    onPageChange: (page: string) => void;
}

const MainPage = ({onPageChange}: Page1Props) => {

    useEffect(() => {
        // Вызовите обратный вызов onPageChange и передайте текущую страницу
        onPageChange('Головна сторінка');
    }, [onPageChange]);


    return (
        <div className='wrapper-main'>
            <div className='main-text'>
                <h1>Студентські роботи на <br/>
                    замовлення</h1>
                <p>Виконуємо різні види студентських робіт, виконані
                    професійними і досвічченими виконавцями.</p>
                <Button text="Замовити роботу"/>
            </div>
            <div className='price-calculating'>
                <span className='span-article-main'>Розрахунок <br/>
                    вартості</span>
                <CostCalc/>
            </div>
            <span className='span-article-main'>Наші послуги</span>
            <div className='offers'>
                {offers.map((offer, index) => (
                    <OffersItem key={index + offer.id} id={offer.id} price={offer.price} time={offer.time}
                                workName={offer.workName}/>
                ))}
            </div>
            <Button text='Повний перелік робіт'/>
            <AboutUsComponent article='Про нас'/>
            <WhyWe/>
            <WorkProcess/>
            <ReviewsCard/>
            <JoinOurTeam/>
            <OrderAdvance/>
            <Footer/>
        </div>
    );

};

export default MainPage;