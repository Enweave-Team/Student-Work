import React from 'react';
import WhiteButton from "../Button/WhiteButton";
import './OrderAdvence.scss';

const OrderAdvance = () => {
    return (
        <div className='OrderAdvance-wrapper'>
            <span className='span-article'>Замов роботу <br/>  заздалегідь</span>
            <div className='order-items'>
                <span className='order-item-span'>
                <p>Наша компанія пропонує свої послуги за доступними цінами, що дозволяє студентам отримати високоякісну допомогу з написання робіт без перевищення бюджету. Крім того, клієнти можуть скористатися послугою безкоштовних правок та редагувань, щоб переконатися в якості написаної роботи.</p>
                    </span>
                <WhiteButton text='Замовити роботу'/>
            </div>
        </div>
    );
};

export default OrderAdvance;