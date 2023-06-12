import React from 'react';
import './MainPage.scss';
import Navbar from "../Components/UI/Navbar";
import Button from "../Components/Button/Button";
import CostCalc from "../Components/CostCalc/CostCalc";
import {offers} from './Offers';
import OffersItem from "../Components/OffersItem/OffersItem";
import AboutUs from "../Components/AboutUs/AboutUs";
import WhyWe from "../Components/WhyWe/WhyWe";
import ReviewsCard from "../Components/Reviews/ReviewsCard";
import JoinOurTeam from "../Components/JoinInOurTeam/JoinOurTeam";
import OrderAdvance from "../Components/OrderInAdvance/OrderAdvance";


const MainPage = () => {
    return (
        <div className='wrapper-main'>
            <Navbar/>
            <div className='main-text'>
                <h1>Студентські роботи на <br/>
                    замовлення</h1>
                <p>Виконуємо різні види студентських робіт, виконані <br/>
                    професійними і досвічченими виконавцями.</p>
                <Button text="Замовити роботу"/>
            </div>
            <div className='price-calculating'>
                <span className='span-article'>Розрахунок <br/>
                    вартості</span>
                <CostCalc/>
            </div>
            <span className='span-article'>Наші послуги</span>
            <div className='offers'>
                {offers.map((offer) => (
                    <OffersItem id={offer.id} price={offer.price} time={offer.time} workName={offer.workName}/>
                ))}
            </div>
            <Button text='Повний перелік робіт'/>
            <AboutUs/>
            <WhyWe/>
            <ReviewsCard />
            <JoinOurTeam/>
            <OrderAdvance />
        </div>
    );
};

export default MainPage;