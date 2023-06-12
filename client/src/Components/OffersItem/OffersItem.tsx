import React, {FC} from 'react';
import './OffersItem.scss';
import {ReactComponent as Arrow} from "../../assets/arrow-button.svg";

type Props = {
    id: number;
    price: number;
    time: string;
    workName: string;
}
const OffersItem: FC<Props> = ({id, price, time, workName}) => {
    return (
        <div className='offers-wrapper' key={id}>
            <div className='offers-items'>
                <div className='name-price'>
                    <div><span className='work-span'>{workName}</span></div>
                    <div className='price-div'>вiд {price} грн</div>
                </div>
                <div className='time-arrow'>
                    <span className='time-span'>{time}</span>
                    <Arrow/>
                </div>
            </div>
        </div>
    );
};

export default OffersItem;