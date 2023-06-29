import React from 'react';
import './OrderResult.scss';
interface OrderResultProps {
   label?:string
}

const OrderResult: React.FC<OrderResultProps> = ({label}) => {

    return (
        <div className="order-result">
            <span className="cost-label">{label}</span>
            <span className="all-cost">920 грн</span>
            <button>
                <span>Замовити роботу</span>
            </button>
        </div>
    );
};

export default OrderResult;