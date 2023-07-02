import React from 'react';
import './PriceCalculating.scss';
import CostCalc from "../CostCalc/CostCalc";

const PriceCalculating = () => {
    return (
        <div className='wrapper-price-calculating'>
        <span className='span-sub-article'>Розрахунок <br/>
                    вартості</span>
            <CostCalc/>
        </div>
    );
};

export default PriceCalculating;