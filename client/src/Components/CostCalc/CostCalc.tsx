import React from 'react';
import './CostCalc.scss';
import Dropdown from "../Dropdown/Dropdown";

const CostCalc = () => {
    return (
        <div className='wrapper-costCalc'>
            <div>
                <p>Дисципліна</p>
                <Dropdown text='Виберіть предмет'/>
            </div>
            <div>
                <p>Тип роботи</p>
                <Dropdown text='Виберіть тип роботи'/>
            </div>
        </div>
    );
};

export default CostCalc;