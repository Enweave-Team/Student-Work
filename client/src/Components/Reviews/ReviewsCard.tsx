import React from 'react';
import './ReviewsCard.scss';
import {ReviewsData} from "../ReviewsData";
import ReviewsCardItem from "./ReviewsCardItem";
import WhiteButton from "../Button/WhiteButton";


const ReviewsCard = () => {
    return (
        <div className='reviewsCard-wrapper'>
            <span className='span-sub-article'>Відгуки наших <br/>
                клієнтів</span>
            <div>
                <div className='map-wrapper'>
                    {ReviewsData.map((reviewer, index) => (
                        <ReviewsCardItem key={index + reviewer.id} id={reviewer.id} userName={reviewer.userName} images={reviewer.photo}
                                         text={reviewer.text}/>
                    ))}
                </div>
                <div className='button-wrapper'>
                    <WhiteButton text='Всі коментарі'/>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;