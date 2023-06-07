import React from 'react';
import './MainPage.scss';
import Navbar from "../Components/UI/Navbar";
import Button from "../Components/Button/Button";
import CostCalc from "../Components/CostCalc/CostCalc";

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
                <h1>Розрахунок <br/>
                    вартості</h1>
                <CostCalc/>
            </div>
        </div>
    );
};

export default MainPage;