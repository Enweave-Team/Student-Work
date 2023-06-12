import React from 'react';
import './ReviewsCard.scss';
import {ReviewsData} from "../ReviewsData";
import ReviewsCardItem from "./ReviewsCardItem";
import WhiteButton from "../Button/WhiteButton";


const ReviewsCard = () => {
    return (
        <div className='reviewsCard-wrapper'>
            <span className='span-article'>Відгуки наших <br/>
                клієнтів</span>
            <div className='map-wrapper'>
            {ReviewsData.map((reviewer) => (
                <ReviewsCardItem id={reviewer.id} userName={reviewer.userName} images={reviewer.photo}
                                 text={reviewer.text}/>
            ))}
            </div>
            <WhiteButton text='Всі коментарі'/>
        </div>
    );
};

export default ReviewsCard;